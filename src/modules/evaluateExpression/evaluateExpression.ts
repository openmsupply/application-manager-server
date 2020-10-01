import { Client } from 'pg'

interface IParameters {
  [key: string]: any
  pgConnection?: Client
  graphQLConnection?: IGraphQLConnection
}

interface IQueryNode {
  value?: string | number | boolean | object
  type?: NodeType
  operator?: Operator
  children?: Array<IQueryNode>
}

interface IGraphQLConnection {
  fetch: any // Don't know type of fetch object
  endpoint: string
}

type BasicObject = {
  [key: string]: any
}

type NodeType = 'string' | 'number' | 'boolean' | 'array' | 'object'

type Operator =
  | 'AND'
  | 'OR'
  | 'CONCAT'
  | '='
  | '!= '
  | '+'
  | 'REGEX'
  | 'objectProperties'
  | 'pgSQL'
  | 'graphQL'

const defaultParameters: IParameters = {}

export default async function evaluateExpression(
  inputQuery: IQueryNode | string,
  params = defaultParameters
): Promise<string | number | boolean | any[] | BasicObject> {
  // If input is JSON string, convert to Object
  const query = typeof inputQuery === 'string' ? JSON.parse(inputQuery) : inputQuery

  // Base case
  if (!query.children) {
    return query.value
  }

  // Recursive case
  else {
    const childrenResolved: any[] = await Promise.all(
      query.children.map((child: IQueryNode) => evaluateExpression(child, params))
    )

    switch (query.operator) {
      case 'AND':
        return childrenResolved.reduce((acc: boolean, child: boolean) => {
          return acc && child
        }, true)

      case 'OR':
        return childrenResolved.reduce((acc: boolean, child: boolean) => {
          return acc || child
        }, false)

      case 'CONCAT':
        if (query.type === 'array') {
          return childrenResolved.reduce((acc: any, child: any) => {
            return acc.concat(child) // .flat(1) doesn't work for some reason
          })
        } else if (query.type === 'string' || !query.type) {
          return childrenResolved.join('')
        }
        break

      case 'REGEX':
        const str: string = childrenResolved[0]
        const re: RegExp = new RegExp(childrenResolved[1])
        return re.test(str)

      case '=':
        return childrenResolved.every((child) => child === childrenResolved[0])

      case '!=':
        return childrenResolved[0] !== childrenResolved[1]

      case '+':
        return childrenResolved.reduce((acc: number, child: number) => {
          return acc + child
        }, 0)

      case 'objectProperties':
        try {
          return params[childrenResolved[0].object][childrenResolved[0].property]
        } catch {
          return "Can't resolve object"
        }

      case 'pgSQL':
        if (!params.pgConnection) return 'No database connection provided'
        return processPgSQL(childrenResolved, query.type, params.pgConnection)

      case 'graphQL':
        if (!params.graphQLConnection) return 'No database connection provided'
        return processGraphQL(childrenResolved, params.graphQLConnection)

      // etc. for as many other operators as we want/need.
    }
  }
  return 'No matching operators'
}

async function processPgSQL(queryArray: any[], queryType: string, connection: Client) {
  const query = {
    text: queryArray[0],
    values: queryArray.slice(1),
    rowMode: queryType ? 'array' : '',
  }
  try {
    const res = await connection.query(query)
    switch (queryType) {
      case 'array':
        return res.rows.flat()
      case 'string':
        return res.rows.flat().join(' ')
      case 'number':
        return Number(res.rows.flat())
      default:
        return res.rows
    }
  } catch (err) {
    return err.stack
  }
}

async function processGraphQL(queryArray: any[], connection: IGraphQLConnection) {
  const query = queryArray[0]
  const variableNames = queryArray[1]
  const variableNodes = queryArray.slice(2, queryArray.length - 1)
  const returnNode = queryArray[queryArray.length - 1]

  const variables = zipArraysToObject(variableNames, variableNodes)

  const data = await graphQLquery(query, variables, connection)

  const selectedNode = extractNode(data, returnNode)

  return Array.isArray(selectedNode)
    ? selectedNode.map((item) => simplifyObject(item))
    : simplifyObject(selectedNode)
}

// Build an object from an array of field names and an array of values
const zipArraysToObject = (variableNames: string[], variableValues: any[]) => {
  const createdObject: BasicObject = {}
  variableNames.map((name, index) => {
    createdObject[name] = variableValues[index]
  })
  return createdObject
}

// Return a specific node (e.g. application.name) from a nested Object
const extractNode = (
  data: BasicObject,
  node: string
): BasicObject | string | number | boolean | BasicObject[] => {
  const returnNodeArray = node.split('.')
  return extractNodeWithArray(data, returnNodeArray)

  function extractNodeWithArray(
    data: BasicObject,
    nodeArray: string[]
  ): BasicObject | string | number | boolean | BasicObject[] {
    if (nodeArray.length === 1) return data[nodeArray[0]]
    else return extractNodeWithArray(data[nodeArray[0]], nodeArray.slice(1))
  }
}

// If Object has only 1 field, return just the value of that field,
// else return the whole object.
const simplifyObject = (item: number | string | boolean | BasicObject) => {
  return typeof item === 'object' && Object.keys(item).length === 1 ? Object.values(item)[0] : item
}

// Abstraction for GraphQL database query using Fetch
const graphQLquery = async (query: string, variables: object, connection: IGraphQLConnection) => {
  const queryResult = await connection.fetch(connection.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  })
  const data = await queryResult.json()
  return data.data
}
