import { BasicObject } from '@openmsupply/expression-evaluator/lib/types'
import { ApplicationStatus, Trigger } from './generated/graphql'

export interface ActionInTemplate {
  code: string
  path: string
  name: string
  trigger: string
  sequence: number | null
  condition: { [key: string]: any }
  parameter_queries: { [key: string]: any }
  parameters_evaluated: { [key: string]: any }
}

export interface ActionSequential extends ActionInTemplate {
  sequence: number
}

export interface ActionInTemplateGetPayload {
  record_id: number
  trigger: TriggerStatus
}

export interface ActionLibrary {
  [key: string]: Function
}

export interface ActionQueue {
  id: number
  status?: ActionQueueStatus
  action_code: string
  application_data: ActionApplicationData
  parameter_queries: { [key: string]: any }
  parameters_evaluated: { [key: string]: any }
  time_completed: string
}

// TODO: Ideally this would be coming from postgraphile types, to be consistent with the types
type ActionQueueStatus = 'Scheduled' | 'Processing' | 'Queued' | 'Success' | 'Fail'

export interface ActionQueuePayload {
  trigger_event: number
  template_id: number
  action_code: string
  application_data: TriggerPayload
  sequence: number | null
  parameter_queries: { [key: string]: any }
  parameters_evaluated: { [key: string]: any }
  status: ActionQueueStatus
}

export interface ActionQueueGetPayload {
  status: ActionQueueStatus
}

export interface ActionQueueExecutePayload {
  id: number
  error_log: string
  parameters_evaluated: { [key: string]: any } | null
  status: ActionQueueStatus
  output: BasicObject | null
}

export interface ActionApplicationData {
  trigger_id: number
  trigger: Trigger
  table: string
  record_id: number
  applicationId: number
  templateId: number
  stageId: number
  stageNumber: number
  stage: string
  stageHistoryId: number
  stageHistoryTimeCreated: Date
  statusHistoryId: number
  status: ApplicationStatus
  statusHistoryTimeCreated: Date
  userId: number
  firstName: string
  lastName: string
  username: string
  dateOfBirth: Date
  email: string
  responses: BasicObject
}

export interface ActionPayload {
  id: number
  code: string
  application_data: ActionApplicationData
  parameter_queries: { [key: string]: any }
}

export interface ActionPlugin {
  code: string
  name: string
  description: string
  path: string
  function_name: string
  required_parameters: string[]
  output_properties?: string[]
}

export interface ActionPluginPayload {
  code: string
  name: string
  description: string
  path: string
  function_name: string
  required_parameters: { [key: string]: any }
}

export interface FileDownloadInfo {
  original_filename: string
  file_path?: string
  thumbnail_path?: string
}

export interface FilePayload {
  user_id: number
  unique_id: string
  original_filename: string
  application_serial: string
  application_response_id: number
  file_path: string
  thumbnail_path: string
  mimetype: string
  submitted?: boolean
  timestamp?: string
}

export interface FileGetPayload {
  id: number
}

export type QueryParams = string[] | { [key: string]: any }

// TODO: Ideally this would be coming from postgraphile types, to be consistent with the types
type TriggerStatus = 'Triggered' | 'Actions Dispatched' | 'Error'

export interface TriggerPayload {
  trigger_id: number
  trigger: Trigger
  table: string
  record_id: number
}

export interface TriggerQueueUpdatePayload {
  id: number
  status: TriggerStatus
}

export interface User {
  userId: number
  firstName: string
  lastName?: string | null
  username: string
  email: string
  dateOfBirth?: Date | null
  organisation?: Organisation
  passwordHash?: string
}

export interface Organisation {
  orgId: number
  userRole?: string | null
  orgName: string
  licenceNumber?: string
  address?: string
}

export interface UserOrg extends User, Organisation {}
