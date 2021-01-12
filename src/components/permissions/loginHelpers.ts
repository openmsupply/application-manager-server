import databaseConnect from '../databaseConnect'
import config from '../../config.json'
import { verify, sign } from 'jsonwebtoken'
import { promisify } from 'util'
import { PermissionRow, TemplatePermissions, UserInfo } from './types'
import { compileJWT } from './rowLevelPolicyHelpers'

const verifyPromise: any = promisify(verify)
const signPromise: any = promisify(sign)

const getUsername = async (jwtToken: string) => {
  let username = 'nonRegistered'
  if (jwtToken) {
    try {
      username = (await verifyPromise(jwtToken, config.jwtSecret)).user.username
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
    templatePermissions: buildTemplatePermissions(templatePermissionRows),
    JWT: await getSignedJWT(userInfo, templatePermissionRows),
    user: userInfo,
  }
}

const buildTemplatePermissions = (templatePermissionRows: Array<PermissionRow>) => {
  const templatePermissions: TemplatePermissions = {} // TODO add type

  templatePermissionRows.forEach(({ permissionType, templateCode }: PermissionRow) => {
    if (!templateCode || !permissionType) return
    if (!templatePermissions[templateCode]) templatePermissions[templateCode] = []
    templatePermissions[templateCode].push(permissionType)
  })

  return templatePermissions
}

const getSignedJWT = async (userInfo: UserInfo, templatePermissionRows: Array<PermissionRow>) => {
  return await signPromise(compileJWT(userInfo, templatePermissionRows), config.jwtSecret)
}

export { getUsername, getUserInfo }