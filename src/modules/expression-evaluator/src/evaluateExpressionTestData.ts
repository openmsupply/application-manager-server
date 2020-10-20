interface ITestData {
  [key: string]: any
}

export const testData: ITestData = {}

// Basic (single level literals)
testData.basicStringLiteral = {
  type: 'string',
  value: 'First Name',
}

testData.stringifiedBasicStringLiteral = `{
    "type": "string",
    "value": "First Name"
}`

testData.basicStringLiteralNoType = {
  value: 'First Name',
}

testData.basicBoolean = {
  value: true,
}

testData.stringifiedBasicBoolean = `{"value":true}`

testData.basicArray = {
  type: 'array',
  value: ['Pharmaceutical', 'Natural Product', 'Other'],
}

testData.stringifiedBasicArray = '{"value":["Pharmaceutical","Natural Product","Other"]}'

// AND
testData.operatorAND_2values = {
  type: 'boolean',
  operator: 'AND',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
  ],
}

testData.operatorAND_2values_false = {
  type: 'boolean',
  operator: 'AND',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: false,
    },
  ],
}

testData.operatorAND_4values = {
  type: 'boolean',
  operator: 'AND',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
  ],
}

testData.operatorAND_4values_false = {
  type: 'boolean',
  operator: 'AND',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: false,
    },
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
  ],
}

// OR

testData.operatorOR_2values = {
  type: 'boolean',
  operator: 'OR',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
  ],
}

testData.operatorOR_2values_1false = {
  type: 'boolean',
  operator: 'OR',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: false,
    },
  ],
}

testData.operatorOR_4values = {
  type: 'boolean',
  operator: 'OR',
  children: [
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
  ],
}

testData.operatorOR_4values_1false = {
  type: 'boolean',
  operator: 'OR',
  children: [
    {
      type: 'boolean',
      value: false,
    },
    {
      type: 'boolean',
      value: false,
    },
    {
      type: 'boolean',
      value: true,
    },
    {
      type: 'boolean',
      value: true,
    },
  ],
}

testData.operatorOR_4values_false = {
  type: 'boolean',
  operator: 'OR',
  children: [
    {
      type: 'boolean',
      value: false,
    },
    {
      type: 'boolean',
      value: false,
    },
    {
      type: 'boolean',
      value: false,
    },
    {
      type: 'boolean',
      value: false,
    },
  ],
}

// CONCAT

testData.CONCAT_2_Arrays = {
  type: 'array',
  operator: 'CONCAT',
  children: [
    {
      type: 'array',
      value: [1, 2, 3],
    },
    {
      value: ['Four', 'Five', 'Six'],
    },
  ],
}

testData.CONCAT_4_Arrays = {
  type: 'array',
  operator: 'CONCAT',
  children: [
    {
      type: 'array',
      value: [1, 2, 3],
    },
    {
      value: ['Four', 'Five', 'Six'],
    },
    {
      value: [7, 8, 'Nine'],
    },
    {
      value: [['Four', 'Five', 'Six'], 'The', 'End'],
    },
  ],
}

testData.CONCAT_3_Strings = {
  type: 'string',
  operator: 'CONCAT',
  children: [
    {
      type: 'string',
      value: 'Carl',
    },
    {
      type: 'string',
      value: ' ',
    },
    {
      value: 'Smith',
    },
  ],
}

testData.CONCAT_4_Unspecified = {
  operator: 'CONCAT',
  children: [
    {
      value: 'Carl',
    },
    {
      type: 'string',
      value: ' ',
    },
    {
      value: 'Smith',
    },
    {
      value: '--XXX',
    },
  ],
}

// Equal

testData.EQUAL_Numbers = {
  operator: '=',
  children: [
    {
      value: 6,
    },
    {
      value: 6,
    },
  ],
}

testData.EQUAL_Numbers_false = {
  operator: '=',
  children: [
    {
      value: 6,
    },
    {
      value: 0,
    },
  ],
}

testData.EQUAL_String = {
  operator: '=',
  children: [
    {
      value: 'Monday 1st January',
    },
    {
      value: 'Monday 1st January',
    },
  ],
}

testData.EQUAL_String_false = {
  operator: '=',
  children: [
    {
      value: 'War and Peace',
    },
    {
      value: 'War and Peas',
    },
  ],
}

testData.EQUAL_Numbers_many = {
  operator: '=',
  children: [
    {
      value: 6,
    },
    {
      value: 6,
    },
    {
      value: 6,
    },
    {
      value: 6,
    },
  ],
}

testData.EQUAL_String_single = {
  operator: '=',
  children: [
    {
      value: 'All by myself',
    },
  ],
}

// Inequality

testData.NOT_EQUAL_Numbers = {
  operator: '!=',
  children: [
    {
      value: 8.7,
    },
    {
      value: 6,
    },
  ],
}

testData.NOT_EQUAL_Numbers_false = {
  operator: '!=',
  children: [
    {
      value: 6,
    },
    {
      value: 6,
    },
  ],
}

testData.NOT_EQUAL_String = {
  operator: '!=',
  children: [
    {
      value: 'Monday 1st January',
    },
    {
      value: 'Tuesday 1st January',
    },
  ],
}

testData.NOT_EQUAL_String_false = {
  operator: '!=',
  children: [
    {
      value: 'The Brothers Karamazov',
    },
    {
      value: 'The Brothers Karamazov',
    },
  ],
}

// PLUS

testData.PLUS_2Nums = {
  operator: '+',
  children: [
    {
      value: 6,
    },
    {
      value: 6,
    },
  ],
}

testData.PLUS_4Nums = {
  operator: '+',
  children: [
    {
      value: 7.5,
    },
    {
      value: 25,
    },
    {
      value: 0.1,
    },
    {
      value: 6,
    },
  ],
}

// REGEX

testData.REGEX_check_email = {
  operator: 'REGEX',
  children: [
    {
      value: 'carl@sussol.net',
    },
    {
      value: '^[A-Za-z0-9.]+@[A-Za-z0-9]+\\.[A-Za-z0-9.]+$',
    },
  ],
}

testData.REGEX_check_email_false = {
  operator: 'REGEX',
  children: [
    {
      value: 'carl@sussol$net',
    },
    {
      value: '^[A-Za-z0-9.]+@[A-Za-z0-9]+\\.[A-Za-z0-9.]+$',
    },
  ],
}

// Return User or Form values

testData.user = {
  id: 2,
  firstName: 'Carl',
  lastName: 'Smith',
  title: 'Import Manager',
}

testData.organisation = {
  id: 1,
  name: 'XYZ Pharmaceuticals',
  category: 'Manufacturers',
}

testData.form = {
  q1: 'Drug Registration',
  q2: 'A',
  q3: undefined,
  q4: 'Panadol',
}

testData.form2 = {
  q1: 'Company Registration',
  q2: 'XYZ Chemicals',
}

testData.application = {
  id: 3,
  name: 'Company Registration',
  status: 'Submitted',
  stage: 1,
  questions: { q1: 'What is the answer?', q2: 'Enter your name' },
}

// Object Properties (simple)

testData.singleUserProperty = {
  operator: 'objectProperties',
  children: [
    {
      value: { objectIndex: 0, property: 'firstName' },
    },
  ],
}

testData.singleApplicationProperty_noIndex_depth2 = {
  operator: 'objectProperties',
  children: [
    {
      value: { property: 'questions.q2' },
    },
  ],
}

// SQL operator

testData.getApplicationName = {
  type: 'string',
  operator: 'pgSQL',
  children: [
    {
      value: 'SELECT name FROM application WHERE template_id = $1',
    },
    {
      value: 2,
    },
  ],
}

testData.getListOfTemplates = {
  type: 'array',
  operator: 'pgSQL',
  children: [
    {
      value: 'SELECT name FROM template',
    },
  ],
}

testData.countTemplates = {
  type: 'number',
  operator: 'pgSQL',
  children: [
    {
      value: 'SELECT count(*) FROM template',
    },
  ],
}

testData.getListOfTemplates_noType = {
  operator: 'pgSQL',
  children: [
    {
      value: 'SELECT name FROM template',
    },
  ],
}

testData.getListOfApplications_withId = {
  operator: 'pgSQL',
  children: [
    {
      value: 'SELECT id, name FROM application',
    },
  ],
}

// GraphQL operator

testData.simpleGraphQL = {
  operator: 'graphQL',
  children: [
    {
      value: `query App($appId:Int!) {
        application(id: $appId) {
          name
        }
      }`,
    },
    { value: ['appId'] },
    { value: 1 },
    { value: 'application.name' },
  ],
}

testData.GraphQL_listOfApplications = {
  operator: 'graphQL',
  children: [
    {
      value: `query Apps {
      applications {
        nodes {
          name
        }
      }
    }`,
    },
    { value: [] },
    { value: 'applications.nodes' },
  ],
}

testData.GraphQL_listOfApplicationsWithId = {
  operator: 'graphQL',
  children: [
    {
      value: `query Apps {
        applications {
          nodes {
            name
            id
          }
        }
      }`,
    },
    { value: [] },
    { value: 'applications.nodes' },
  ],
}

testData.GraphQL_CountApplicationSections = {
  operator: 'graphQL',
  children: [
    {
      value: `query SectionCount($appId:Int!) {
        application(id: $appId) {
          id
          template {
            name
          }
          applicationSections {
            totalCount
          }
        }
      }`,
    },
    { value: ['appId'] },
    {
      operator: 'objectProperties',
      children: [{ value: { property: 'id' } }],
    },
    { value: 'application.applicationSections.totalCount' },
  ],
}

// More complex combinations

testData.concatFirstAndLastNames = {
  type: 'string',
  operator: 'CONCAT',
  children: [
    {
      operator: 'objectProperties',
      children: [{ value: { property: 'firstName' } }],
    },
    {
      value: ' ',
    },
    {
      operator: 'objectProperties',
      children: [{ value: { property: 'lastName' } }],
    },
  ],
}

testData.complex1 = {
  operator: 'AND',
  children: [
    {
      operator: '=',
      children: [
        {
          operator: 'objectProperties',
          children: [
            {
              value: { objectIndex: 0, property: 'q1' },
            },
          ],
        },
        {
          value: 'Drug Registration',
        },
      ],
    },
    {
      operator: '!=',
      children: [
        {
          type: 'number',
          operator: 'pgSQL',
          children: [
            { value: 'SELECT COUNT(*) FROM user_organisation WHERE user_id = $1' },
            {
              operator: 'objectProperties',
              children: [{ value: { objectIndex: 1, property: 'id' } }],
            },
          ],
        },
        {
          type: 'number',
          value: 0,
        },
      ],
    },
  ],
}

testData.complex2 = {
  operator: 'AND',
  children: [
    {
      operator: '=',
      children: [
        {
          operator: 'objectProperties',
          children: [{ value: { object: 'application', property: 'stage' } }],
        },
        {
          value: 1,
        },
      ],
    },
    {
      operator: '=',
      children: [
        {
          operator: 'graphQL',
          children: [
            {
              value:
                'Graph QL to return COUNT of questions for current application that are NOT Approved',
            },
            { value: { object: 'application', property: 'id' } },
          ],
        },
        {
          value: 0,
        },
      ],
    },
  ],
}

testData.complex2_asString = `{
    "operator": "AND",
    "children": [
      {
        "operator": "=",
        "children": [
          {
            "operator": "objectProperties",
            "children": [
              {
                "value": {
                  "object": "application",
                  "property": "stage"
                }
              }
            ]
          },
          {
            "value": 1
          }
        ]
      },
      {
        "operator": "=",
        "children": [
          {
            "operator": "graphQL",
            "children": [
              {
                "value": "Graph QL to return COUNT of questions for current application that are NOT Approved"
              },
              {
                "value": {
                  "object": "user",
                  "property": "id"
                }
              },
              {
                "value": {
                  "object": "application",
                  "property": "id"
                }
              }
            ]
          },
          {
            "value": 0
          }
        ]
      }
    ]
  }`

testData.complexValidation = {
  operator: '=',
  children: [
    {
      operator: 'graphQL',
      children: [
        {
          value: `query Orgs($orgName: String) {
            organisations(condition: {name: $orgName}) {
              totalCount
              nodes {
                name
                id
              }
            }
          }`,
        },
        { value: ['orgName'] },
        {
          operator: 'objectProperties',
          children: [{ value: { property: 'q2' } }],
        },
        { value: 'organisations.totalCount' },
      ],
    },
    { value: 0 },
  ],
}