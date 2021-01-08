import databaseConnect from './databaseConnect'
import config from '../config.json'
import { verify, sign } from 'jsonwebtoken'
import { promisify } from 'util'
import { PermissionPolicyType } from '../generated/graphql'

type PermissionTypes = keyof typeof PermissionPolicyType

interface PermissionRow {
  permissionType: PermissionTypes
  templateCode: string
}

interface TemplatePermissions {
  [index: string]: Array<PermissionTypes>
}

const verifyPromise: any = promisify(verify)
const signPromise: any = promisify(sign)

const routeUserPermissions = async (request: any, reply: any) => {
  const token = (request?.headers?.authorization || '').replace('Bearer ', '')
  const username = await getUsername(token)
  return reply.send(await getUserInfo(username))
}

const routeLogin = async (request: any, reply: any) => {
  const { username, passwordHash } = request.body || { username: '', passwordHash: '' }

  if (!(await databaseConnect.verifyUser(username, passwordHash)))
    return reply.send({ success: false })

  return reply.send({
    success: true,
    ...(await getUserInfo(username)),
  })
}

const getUsername = async (jwtToken: string) => {
  let username = 'nonRegistered'
  if (jwtToken) {
    try {
      username = (await verifyPromise(jwtToken, config.jwtSecret)).username
    } catch (e) {
      console.log('cannot verify JWT in authorisation header')
    }
  }

  return username
}

const getUserInfo = async (username: string) => {
  const templatePermissionRows = await databaseConnect.getUserTemplatePermissions(username)
  const userInfo = await databaseConnect.getUserDataByUsername(username)

  return {
    username,
    templatePermissions: buildTemplatePermissions(templatePermissionRows),
    JWT: await getJWT(username, templatePermissionRows),
    user: userInfo,
  }
}

const buildTemplatePermissions = (templatePermissionRows: Array<PermissionRow>) => {
  const templatePermissions: TemplatePermissions = {} // TODO add type

  templatePermissionRows.forEach(({ permissionType, templateCode }: PermissionRow) => {
    if (!templatePermissions[templateCode]) templatePermissions[templateCode] = []
    templatePermissions[templateCode].push(permissionType)
  })

  return templatePermissions
}

const getJWT = async (username: string, templatePermissionRows: Array<PermissionRow>) => {
  return await signPromise({ username }, config.jwtSecret) // TODO gaphile/pg row lvl, and token
}

export { routeUserPermissions, routeLogin }
