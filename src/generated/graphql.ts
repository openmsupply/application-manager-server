import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The day, does not include a time. */
  Date: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
  /** A signed eight-byte integer. The upper big integer values are greater than the max value for a JavaScript number. Therefore all big integers will be output as strings and not numbers. */
  BigInt: any;
};

export type AllPermission = {
  __typename?: 'AllPermission';
  permissionType?: Maybe<PermissionPolicyType>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyRules?: Maybe<Scalars['JSON']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templatePermissionId?: Maybe<Scalars['Int']>;
  templatePermissionRestrictions?: Maybe<Scalars['JSON']>;
  templateId?: Maybe<Scalars['Int']>;
  templateCode?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `AllPermission` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AllPermissionCondition = {
  /** Checks for equality with the object’s `permissionType` field. */
  permissionType?: Maybe<PermissionPolicyType>;
  /** Checks for equality with the object’s `permissionPolicyId` field. */
  permissionPolicyId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `permissionPolicyRules` field. */
  permissionPolicyRules?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `permissionNameId` field. */
  permissionNameId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templatePermissionId` field. */
  templatePermissionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templatePermissionRestrictions` field. */
  templatePermissionRestrictions?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `templateId` field. */
  templateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateCode` field. */
  templateCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>;
};

/** A filter to be used against `AllPermission` object types. All fields are combined with a logical ‘and.’ */
export type AllPermissionFilter = {
  /** Filter by the object’s `permissionType` field. */
  permissionType?: Maybe<PermissionPolicyTypeFilter>;
  /** Filter by the object’s `permissionPolicyId` field. */
  permissionPolicyId?: Maybe<IntFilter>;
  /** Filter by the object’s `permissionPolicyRules` field. */
  permissionPolicyRules?: Maybe<JsonFilter>;
  /** Filter by the object’s `permissionNameId` field. */
  permissionNameId?: Maybe<IntFilter>;
  /** Filter by the object’s `templatePermissionId` field. */
  templatePermissionId?: Maybe<IntFilter>;
  /** Filter by the object’s `templatePermissionRestrictions` field. */
  templatePermissionRestrictions?: Maybe<JsonFilter>;
  /** Filter by the object’s `templateId` field. */
  templateId?: Maybe<IntFilter>;
  /** Filter by the object’s `templateCode` field. */
  templateCode?: Maybe<StringFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AllPermissionFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AllPermissionFilter>>;
  /** Negates the expression. */
  not?: Maybe<AllPermissionFilter>;
};

/** A connection to a list of `AllPermission` values. */
export type AllPermissionsConnection = {
  __typename?: 'AllPermissionsConnection';
  /** A list of `AllPermission` objects. */
  nodes: Array<Maybe<AllPermission>>;
  /** A list of edges which contains the `AllPermission` and cursor to aid in pagination. */
  edges: Array<AllPermissionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AllPermission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `AllPermission` edge in the connection. */
export type AllPermissionsEdge = {
  __typename?: 'AllPermissionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AllPermission` at the end of the edge. */
  node?: Maybe<AllPermission>;
};

/** Methods to use when ordering `AllPermission`. */
export enum AllPermissionsOrderBy {
  Natural = 'NATURAL',
  PermissionTypeAsc = 'PERMISSION_TYPE_ASC',
  PermissionTypeDesc = 'PERMISSION_TYPE_DESC',
  PermissionPolicyIdAsc = 'PERMISSION_POLICY_ID_ASC',
  PermissionPolicyIdDesc = 'PERMISSION_POLICY_ID_DESC',
  PermissionPolicyRulesAsc = 'PERMISSION_POLICY_RULES_ASC',
  PermissionPolicyRulesDesc = 'PERMISSION_POLICY_RULES_DESC',
  PermissionNameIdAsc = 'PERMISSION_NAME_ID_ASC',
  PermissionNameIdDesc = 'PERMISSION_NAME_ID_DESC',
  TemplatePermissionIdAsc = 'TEMPLATE_PERMISSION_ID_ASC',
  TemplatePermissionIdDesc = 'TEMPLATE_PERMISSION_ID_DESC',
  TemplatePermissionRestrictionsAsc = 'TEMPLATE_PERMISSION_RESTRICTIONS_ASC',
  TemplatePermissionRestrictionsDesc = 'TEMPLATE_PERMISSION_RESTRICTIONS_DESC',
  TemplateIdAsc = 'TEMPLATE_ID_ASC',
  TemplateIdDesc = 'TEMPLATE_ID_DESC',
  TemplateCodeAsc = 'TEMPLATE_CODE_ASC',
  TemplateCodeDesc = 'TEMPLATE_CODE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

export type Application = Node & {
  __typename?: 'Application';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  /** Reads a single `Template` that is related to this `Application`. */
  template?: Maybe<Template>;
  /** Reads a single `User` that is related to this `Application`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `Application`. */
  org?: Maybe<Organisation>;
  /** Reads and enables pagination through a set of `ApplicationSection`. */
  applicationSections: ApplicationSectionsConnection;
  /** Reads and enables pagination through a set of `ApplicationStageHistory`. */
  applicationStageHistories: ApplicationStageHistoriesConnection;
  stage?: Maybe<Scalars['String']>;
  stageNumber?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
};


export type ApplicationApplicationSectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationSectionsOrderBy>>;
  condition?: Maybe<ApplicationSectionCondition>;
  filter?: Maybe<ApplicationSectionFilter>;
};


export type ApplicationApplicationStageHistoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationStageHistoriesOrderBy>>;
  condition?: Maybe<ApplicationStageHistoryCondition>;
  filter?: Maybe<ApplicationStageHistoryFilter>;
};

/** The fields on `application` to look up the row to connect. */
export type ApplicationApplicationPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to delete. */
export type ApplicationApplicationPkeyDelete = {
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to connect. */
export type ApplicationApplicationSerialKeyConnect = {
  serial: Scalars['String'];
};

/** The fields on `application` to look up the row to delete. */
export type ApplicationApplicationSerialKeyDelete = {
  serial: Scalars['String'];
};

/**
 * A condition to be used against `Application` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ApplicationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateId` field. */
  templateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `orgId` field. */
  orgId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `serial` field. */
  serial?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `outcome` field. */
  outcome?: Maybe<ApplicationOutcome>;
  /** Checks for equality with the object’s `isActive` field. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `trigger` field. */
  trigger?: Maybe<Trigger>;
};

/** A filter to be used against `Application` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `templateId` field. */
  templateId?: Maybe<IntFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
  /** Filter by the object’s `orgId` field. */
  orgId?: Maybe<IntFilter>;
  /** Filter by the object’s `serial` field. */
  serial?: Maybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `outcome` field. */
  outcome?: Maybe<ApplicationOutcomeFilter>;
  /** Filter by the object’s `isActive` field. */
  isActive?: Maybe<BooleanFilter>;
  /** Filter by the object’s `trigger` field. */
  trigger?: Maybe<TriggerFilter>;
  /** Filter by the object’s `stage` field. */
  stage?: Maybe<StringFilter>;
  /** Filter by the object’s `stageNumber` field. */
  stageNumber?: Maybe<IntFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<ApplicationStatusFilter>;
  /** Filter by the object’s `applicationSections` relation. */
  applicationSections?: Maybe<ApplicationToManyApplicationSectionFilter>;
  /** Some related `applicationSections` exist. */
  applicationSectionsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `applicationStageHistories` relation. */
  applicationStageHistories?: Maybe<ApplicationToManyApplicationStageHistoryFilter>;
  /** Some related `applicationStageHistories` exist. */
  applicationStageHistoriesExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `template` relation. */
  template?: Maybe<TemplateFilter>;
  /** A related `template` exists. */
  templateExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `user` relation. */
  user?: Maybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `org` relation. */
  org?: Maybe<OrganisationFilter>;
  /** A related `org` exists. */
  orgExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ApplicationFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ApplicationFilter>>;
  /** Negates the expression. */
  not?: Maybe<ApplicationFilter>;
};

/** An input for mutations affecting `Application` */
export type ApplicationInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ApplicationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `application` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ApplicationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `application` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `organisation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `organisation` being updated. */
  patch: OrganisationPatch;
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationForApplicationOrgIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationSerialKeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationForApplicationOrgIdFkeyPatch;
  serial: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `template` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: TemplatePatch;
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationForApplicationTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationSerialKeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationForApplicationTemplateIdFkeyPatch;
  serial: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationOnApplicationForApplicationUserIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UserPatch;
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationForApplicationUserIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationSerialKeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationForApplicationUserIdFkeyPatch;
  serial: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `applicationSection` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `applicationSection` being updated. */
  patch: ApplicationSectionPatch;
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSerialKeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  serial: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `applicationStageHistory` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
  patch: ApplicationStageHistoryPatch;
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `application` to look up the row to update. */
export type ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationSerialKeyUpdate = {
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: UpdateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  serial: Scalars['String'];
};

/** The `application` to be created by this mutation. */
export type ApplicationOrgIdFkeyApplicationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** Input for the nested mutation of `organisation` in the `ApplicationInput` mutation. */
export type ApplicationOrgIdFkeyInput = {
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  connectById?: Maybe<OrganisationOrganisationPkeyConnect>;
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  connectByNodeId?: Maybe<OrganisationNodeIdConnect>;
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  deleteById?: Maybe<OrganisationOrganisationPkeyDelete>;
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<OrganisationNodeIdDelete>;
  /** The primary key(s) and patch data for `organisation` for the far side of the relationship. */
  updateById?: Maybe<OrganisationOnApplicationForApplicationOrgIdFkeyUsingOrganisationPkeyUpdate>;
  /** The primary key(s) and patch data for `organisation` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate>;
  /** A `OrganisationInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationOrgIdFkeyOrganisationCreateInput>;
};

/** Input for the nested mutation of `application` in the `OrganisationInput` mutation. */
export type ApplicationOrgIdFkeyInverseInput = {
  /** Flag indicating whether all other `application` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationApplicationPkeyConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectBySerial?: Maybe<Array<ApplicationApplicationSerialKeyConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationNodeIdConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationApplicationPkeyDelete>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteBySerial?: Maybe<Array<ApplicationApplicationSerialKeyDelete>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationNodeIdDelete>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationPkeyUpdate>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateBySerial?: Maybe<Array<ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationSerialKeyUpdate>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<OrganisationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate>>;
  /** A `ApplicationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationOrgIdFkeyApplicationCreateInput>>;
};

/** The `organisation` to be created by this mutation. */
export type ApplicationOrgIdFkeyOrganisationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationOrganisationIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationOrgIdFkeyInverseInput>;
};

export enum ApplicationOutcome {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

/** A filter to be used against ApplicationOutcome fields. All fields are combined with a logical ‘and.’ */
export type ApplicationOutcomeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ApplicationOutcome>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ApplicationOutcome>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ApplicationOutcome>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ApplicationOutcome>;
  /** Included in the specified list. */
  in?: Maybe<Array<ApplicationOutcome>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ApplicationOutcome>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ApplicationOutcome>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ApplicationOutcome>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ApplicationOutcome>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ApplicationOutcome>;
};

/** Represents an update to a `Application`. Fields that are set will be updated. */
export type ApplicationPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** A connection to a list of `Application` values. */
export type ApplicationsConnection = {
  __typename?: 'ApplicationsConnection';
  /** A list of `Application` objects. */
  nodes: Array<Maybe<Application>>;
  /** A list of edges which contains the `Application` and cursor to aid in pagination. */
  edges: Array<ApplicationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Application` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type ApplicationSection = Node & {
  __typename?: 'ApplicationSection';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  applicationId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  /** Reads a single `Application` that is related to this `ApplicationSection`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateSection` that is related to this `ApplicationSection`. */
  templateSection?: Maybe<TemplateSection>;
};

/** The `application` to be created by this mutation. */
export type ApplicationSectionApplicationIdFkeyApplicationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** The `applicationSection` to be created by this mutation. */
export type ApplicationSectionApplicationIdFkeyApplicationSectionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  applicationToApplicationId?: Maybe<ApplicationSectionApplicationIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInput>;
};

/** Input for the nested mutation of `application` in the `ApplicationSectionInput` mutation. */
export type ApplicationSectionApplicationIdFkeyInput = {
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectById?: Maybe<ApplicationApplicationPkeyConnect>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectBySerial?: Maybe<ApplicationApplicationSerialKeyConnect>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectByNodeId?: Maybe<ApplicationNodeIdConnect>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteById?: Maybe<ApplicationApplicationPkeyDelete>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteBySerial?: Maybe<ApplicationApplicationSerialKeyDelete>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ApplicationNodeIdDelete>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateById?: Maybe<ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationPkeyUpdate>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateBySerial?: Maybe<ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSerialKeyUpdate>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate>;
  /** A `ApplicationInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationSectionApplicationIdFkeyApplicationCreateInput>;
};

/** Input for the nested mutation of `applicationSection` in the `ApplicationInput` mutation. */
export type ApplicationSectionApplicationIdFkeyInverseInput = {
  /** Flag indicating whether all other `applicationSection` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationSectionApplicationSectionPkeyConnect>>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationSectionNodeIdConnect>>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationSectionApplicationSectionPkeyDelete>>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationSectionNodeIdDelete>>;
  /** The primary key(s) and patch data for `applicationSection` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSectionPkeyUpdate>>;
  /** The primary key(s) and patch data for `applicationSection` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate>>;
  /** A `ApplicationSectionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationSectionApplicationIdFkeyApplicationSectionCreateInput>>;
};

/** The fields on `applicationSection` to look up the row to connect. */
export type ApplicationSectionApplicationSectionPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `applicationSection` to look up the row to delete. */
export type ApplicationSectionApplicationSectionPkeyDelete = {
  id: Scalars['Int'];
};

/**
 * A condition to be used against `ApplicationSection` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ApplicationSectionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `applicationId` field. */
  applicationId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateSectionId` field. */
  templateSectionId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `ApplicationSection` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationSectionFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `applicationId` field. */
  applicationId?: Maybe<IntFilter>;
  /** Filter by the object’s `templateSectionId` field. */
  templateSectionId?: Maybe<IntFilter>;
  /** Filter by the object’s `application` relation. */
  application?: Maybe<ApplicationFilter>;
  /** A related `application` exists. */
  applicationExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `templateSection` relation. */
  templateSection?: Maybe<TemplateSectionFilter>;
  /** A related `templateSection` exists. */
  templateSectionExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ApplicationSectionFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ApplicationSectionFilter>>;
  /** Negates the expression. */
  not?: Maybe<ApplicationSectionFilter>;
};

/** An input for mutations affecting `ApplicationSection` */
export type ApplicationSectionInput = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  applicationToApplicationId?: Maybe<ApplicationSectionApplicationIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ApplicationSectionNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `applicationSection` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ApplicationSectionNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `applicationSection` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `application` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: ApplicationPatch;
};

/** The fields on `applicationSection` to look up the row to update. */
export type ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSectionPkeyUpdate = {
  /** An object where the defined keys will be set on the `applicationSection` being updated. */
  patch: UpdateApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateSection` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: TemplateSectionPatch;
};

/** The fields on `applicationSection` to look up the row to update. */
export type ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingApplicationSectionPkeyUpdate = {
  /** An object where the defined keys will be set on the `applicationSection` being updated. */
  patch: UpdateApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `ApplicationSection`. Fields that are set will be updated. */
export type ApplicationSectionPatch = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  applicationToApplicationId?: Maybe<ApplicationSectionApplicationIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInput>;
};

/** A connection to a list of `ApplicationSection` values. */
export type ApplicationSectionsConnection = {
  __typename?: 'ApplicationSectionsConnection';
  /** A list of `ApplicationSection` objects. */
  nodes: Array<Maybe<ApplicationSection>>;
  /** A list of edges which contains the `ApplicationSection` and cursor to aid in pagination. */
  edges: Array<ApplicationSectionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ApplicationSection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ApplicationSection` edge in the connection. */
export type ApplicationSectionsEdge = {
  __typename?: 'ApplicationSectionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ApplicationSection` at the end of the edge. */
  node?: Maybe<ApplicationSection>;
};

/** Methods to use when ordering `ApplicationSection`. */
export enum ApplicationSectionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ApplicationIdAsc = 'APPLICATION_ID_ASC',
  ApplicationIdDesc = 'APPLICATION_ID_DESC',
  TemplateSectionIdAsc = 'TEMPLATE_SECTION_ID_ASC',
  TemplateSectionIdDesc = 'TEMPLATE_SECTION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The `applicationSection` to be created by this mutation. */
export type ApplicationSectionTemplateSectionIdFkeyApplicationSectionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  applicationToApplicationId?: Maybe<ApplicationSectionApplicationIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInput>;
};

/** Input for the nested mutation of `templateSection` in the `ApplicationSectionInput` mutation. */
export type ApplicationSectionTemplateSectionIdFkeyInput = {
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectById?: Maybe<TemplateSectionTemplateSectionPkeyConnect>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateSectionNodeIdConnect>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteById?: Maybe<TemplateSectionTemplateSectionPkeyDelete>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateSectionNodeIdDelete>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateById?: Maybe<TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate>;
  /** A `TemplateSectionInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationSectionTemplateSectionIdFkeyTemplateSectionCreateInput>;
};

/** Input for the nested mutation of `applicationSection` in the `TemplateSectionInput` mutation. */
export type ApplicationSectionTemplateSectionIdFkeyInverseInput = {
  /** Flag indicating whether all other `applicationSection` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationSectionApplicationSectionPkeyConnect>>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationSectionNodeIdConnect>>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationSectionApplicationSectionPkeyDelete>>;
  /** The primary key(s) for `applicationSection` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationSectionNodeIdDelete>>;
  /** The primary key(s) and patch data for `applicationSection` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingApplicationSectionPkeyUpdate>>;
  /** The primary key(s) and patch data for `applicationSection` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate>>;
  /** A `ApplicationSectionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationSectionTemplateSectionIdFkeyApplicationSectionCreateInput>>;
};

/** The `templateSection` to be created by this mutation. */
export type ApplicationSectionTemplateSectionIdFkeyTemplateSectionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** A `Application` edge in the connection. */
export type ApplicationsEdge = {
  __typename?: 'ApplicationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Application` at the end of the edge. */
  node?: Maybe<Application>;
};

/** Methods to use when ordering `Application`. */
export enum ApplicationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TemplateIdAsc = 'TEMPLATE_ID_ASC',
  TemplateIdDesc = 'TEMPLATE_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  SerialAsc = 'SERIAL_ASC',
  SerialDesc = 'SERIAL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OutcomeAsc = 'OUTCOME_ASC',
  OutcomeDesc = 'OUTCOME_DESC',
  IsActiveAsc = 'IS_ACTIVE_ASC',
  IsActiveDesc = 'IS_ACTIVE_DESC',
  TriggerAsc = 'TRIGGER_ASC',
  TriggerDesc = 'TRIGGER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `ApplicationStageHistory` values. */
export type ApplicationStageHistoriesConnection = {
  __typename?: 'ApplicationStageHistoriesConnection';
  /** A list of `ApplicationStageHistory` objects. */
  nodes: Array<Maybe<ApplicationStageHistory>>;
  /** A list of edges which contains the `ApplicationStageHistory` and cursor to aid in pagination. */
  edges: Array<ApplicationStageHistoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ApplicationStageHistory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ApplicationStageHistory` edge in the connection. */
export type ApplicationStageHistoriesEdge = {
  __typename?: 'ApplicationStageHistoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ApplicationStageHistory` at the end of the edge. */
  node?: Maybe<ApplicationStageHistory>;
};

/** Methods to use when ordering `ApplicationStageHistory`. */
export enum ApplicationStageHistoriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ApplicationIdAsc = 'APPLICATION_ID_ASC',
  ApplicationIdDesc = 'APPLICATION_ID_DESC',
  StageIdAsc = 'STAGE_ID_ASC',
  StageIdDesc = 'STAGE_ID_DESC',
  TimeCreatedAsc = 'TIME_CREATED_ASC',
  TimeCreatedDesc = 'TIME_CREATED_DESC',
  IsCurrentAsc = 'IS_CURRENT_ASC',
  IsCurrentDesc = 'IS_CURRENT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ApplicationStageHistory = Node & {
  __typename?: 'ApplicationStageHistory';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  applicationId?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  /** Reads a single `Application` that is related to this `ApplicationStageHistory`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateStage` that is related to this `ApplicationStageHistory`. */
  stage?: Maybe<TemplateStage>;
  /** Reads and enables pagination through a set of `ApplicationStatusHistory`. */
  applicationStatusHistories: ApplicationStatusHistoriesConnection;
};


export type ApplicationStageHistoryApplicationStatusHistoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationStatusHistoriesOrderBy>>;
  condition?: Maybe<ApplicationStatusHistoryCondition>;
  filter?: Maybe<ApplicationStatusHistoryFilter>;
};

/** The `application` to be created by this mutation. */
export type ApplicationStageHistoryApplicationIdFkeyApplicationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** The `applicationStageHistory` to be created by this mutation. */
export type ApplicationStageHistoryApplicationIdFkeyApplicationStageHistoryCreateInput = {
  id?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** Input for the nested mutation of `application` in the `ApplicationStageHistoryInput` mutation. */
export type ApplicationStageHistoryApplicationIdFkeyInput = {
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectById?: Maybe<ApplicationApplicationPkeyConnect>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectBySerial?: Maybe<ApplicationApplicationSerialKeyConnect>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectByNodeId?: Maybe<ApplicationNodeIdConnect>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteById?: Maybe<ApplicationApplicationPkeyDelete>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteBySerial?: Maybe<ApplicationApplicationSerialKeyDelete>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ApplicationNodeIdDelete>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateById?: Maybe<ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationPkeyUpdate>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateBySerial?: Maybe<ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationSerialKeyUpdate>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate>;
  /** A `ApplicationInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationStageHistoryApplicationIdFkeyApplicationCreateInput>;
};

/** Input for the nested mutation of `applicationStageHistory` in the `ApplicationInput` mutation. */
export type ApplicationStageHistoryApplicationIdFkeyInverseInput = {
  /** Flag indicating whether all other `applicationStageHistory` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationStageHistoryApplicationStageHistoryPkeyConnect>>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationStageHistoryNodeIdConnect>>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationStageHistoryApplicationStageHistoryPkeyDelete>>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationStageHistoryNodeIdDelete>>;
  /** The primary key(s) and patch data for `applicationStageHistory` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationStageHistoryPkeyUpdate>>;
  /** The primary key(s) and patch data for `applicationStageHistory` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate>>;
  /** A `ApplicationStageHistoryInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationStageHistoryApplicationIdFkeyApplicationStageHistoryCreateInput>>;
};

/** The fields on `applicationStageHistory` to look up the row to connect. */
export type ApplicationStageHistoryApplicationStageHistoryPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `applicationStageHistory` to look up the row to delete. */
export type ApplicationStageHistoryApplicationStageHistoryPkeyDelete = {
  id: Scalars['Int'];
};

/**
 * A condition to be used against `ApplicationStageHistory` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type ApplicationStageHistoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `applicationId` field. */
  applicationId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stageId` field. */
  stageId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `timeCreated` field. */
  timeCreated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `isCurrent` field. */
  isCurrent?: Maybe<Scalars['Boolean']>;
};

/** A filter to be used against `ApplicationStageHistory` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationStageHistoryFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `applicationId` field. */
  applicationId?: Maybe<IntFilter>;
  /** Filter by the object’s `stageId` field. */
  stageId?: Maybe<IntFilter>;
  /** Filter by the object’s `timeCreated` field. */
  timeCreated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `isCurrent` field. */
  isCurrent?: Maybe<BooleanFilter>;
  /** Filter by the object’s `applicationStatusHistories` relation. */
  applicationStatusHistories?: Maybe<ApplicationStageHistoryToManyApplicationStatusHistoryFilter>;
  /** Some related `applicationStatusHistories` exist. */
  applicationStatusHistoriesExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `application` relation. */
  application?: Maybe<ApplicationFilter>;
  /** A related `application` exists. */
  applicationExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `stage` relation. */
  stage?: Maybe<TemplateStageFilter>;
  /** A related `stage` exists. */
  stageExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ApplicationStageHistoryFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ApplicationStageHistoryFilter>>;
  /** Negates the expression. */
  not?: Maybe<ApplicationStageHistoryFilter>;
};

/** An input for mutations affecting `ApplicationStageHistory` */
export type ApplicationStageHistoryInput = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ApplicationStageHistoryNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `applicationStageHistory` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ApplicationStageHistoryNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `applicationStageHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `application` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: ApplicationPatch;
};

/** The fields on `applicationStageHistory` to look up the row to update. */
export type ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationStageHistoryPkeyUpdate = {
  /** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
  patch: UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateStage` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateStage` being updated. */
  patch: TemplateStagePatch;
};

/** The fields on `applicationStageHistory` to look up the row to update. */
export type ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingApplicationStageHistoryPkeyUpdate = {
  /** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
  patch: UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `applicationStatusHistory` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `applicationStatusHistory` being updated. */
  patch: ApplicationStatusHistoryPatch;
};

/** The fields on `applicationStageHistory` to look up the row to update. */
export type ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStageHistoryPkeyUpdate = {
  /** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
  patch: UpdateApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `ApplicationStageHistory`. Fields that are set will be updated. */
export type ApplicationStageHistoryPatch = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** The `applicationStageHistory` to be created by this mutation. */
export type ApplicationStageHistoryStageIdFkeyApplicationStageHistoryCreateInput = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** Input for the nested mutation of `templateStage` in the `ApplicationStageHistoryInput` mutation. */
export type ApplicationStageHistoryStageIdFkeyInput = {
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  connectById?: Maybe<TemplateStageTemplateStagePkeyConnect>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateStageNodeIdConnect>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  deleteById?: Maybe<TemplateStageTemplateStagePkeyDelete>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateStageNodeIdDelete>;
  /** The primary key(s) and patch data for `templateStage` for the far side of the relationship. */
  updateById?: Maybe<TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingTemplateStagePkeyUpdate>;
  /** The primary key(s) and patch data for `templateStage` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate>;
  /** A `TemplateStageInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationStageHistoryStageIdFkeyTemplateStageCreateInput>;
};

/** Input for the nested mutation of `applicationStageHistory` in the `TemplateStageInput` mutation. */
export type ApplicationStageHistoryStageIdFkeyInverseInput = {
  /** Flag indicating whether all other `applicationStageHistory` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationStageHistoryApplicationStageHistoryPkeyConnect>>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationStageHistoryNodeIdConnect>>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationStageHistoryApplicationStageHistoryPkeyDelete>>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationStageHistoryNodeIdDelete>>;
  /** The primary key(s) and patch data for `applicationStageHistory` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingApplicationStageHistoryPkeyUpdate>>;
  /** The primary key(s) and patch data for `applicationStageHistory` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate>>;
  /** A `ApplicationStageHistoryInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationStageHistoryStageIdFkeyApplicationStageHistoryCreateInput>>;
};

/** The `templateStage` to be created by this mutation. */
export type ApplicationStageHistoryStageIdFkeyTemplateStageCreateInput = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateStageTemplateIdFkeyInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryStageIdFkeyInverseInput>;
};

/** A filter to be used against many `ApplicationStatusHistory` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationStageHistoryToManyApplicationStatusHistoryFilter = {
  /** Every related `ApplicationStatusHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationStatusHistoryFilter>;
  /** Some related `ApplicationStatusHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationStatusHistoryFilter>;
  /** No related `ApplicationStatusHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationStatusHistoryFilter>;
};

export type ApplicationStageStatusAll = {
  __typename?: 'ApplicationStageStatusAll';
  applicationId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  stageNumber?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['String']>;
  stageHistoryId?: Maybe<Scalars['Int']>;
  stageHistoryTimeCreated?: Maybe<Scalars['Datetime']>;
  stageIsCurrent?: Maybe<Scalars['Boolean']>;
  statusHistoryId?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
  statusHistoryTimeCreated?: Maybe<Scalars['Datetime']>;
  statusIsCurrent?: Maybe<Scalars['Boolean']>;
};

/**
 * A condition to be used against `ApplicationStageStatusAll` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type ApplicationStageStatusAllCondition = {
  /** Checks for equality with the object’s `applicationId` field. */
  applicationId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateId` field. */
  templateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `serial` field. */
  serial?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `orgId` field. */
  orgId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stageId` field. */
  stageId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stageNumber` field. */
  stageNumber?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stage` field. */
  stage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `stageHistoryId` field. */
  stageHistoryId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stageHistoryTimeCreated` field. */
  stageHistoryTimeCreated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `stageIsCurrent` field. */
  stageIsCurrent?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `statusHistoryId` field. */
  statusHistoryId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<ApplicationStatus>;
  /** Checks for equality with the object’s `statusHistoryTimeCreated` field. */
  statusHistoryTimeCreated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `statusIsCurrent` field. */
  statusIsCurrent?: Maybe<Scalars['Boolean']>;
};

/** A filter to be used against `ApplicationStageStatusAll` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationStageStatusAllFilter = {
  /** Filter by the object’s `applicationId` field. */
  applicationId?: Maybe<IntFilter>;
  /** Filter by the object’s `templateId` field. */
  templateId?: Maybe<IntFilter>;
  /** Filter by the object’s `serial` field. */
  serial?: Maybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
  /** Filter by the object’s `orgId` field. */
  orgId?: Maybe<IntFilter>;
  /** Filter by the object’s `stageId` field. */
  stageId?: Maybe<IntFilter>;
  /** Filter by the object’s `stageNumber` field. */
  stageNumber?: Maybe<IntFilter>;
  /** Filter by the object’s `stage` field. */
  stage?: Maybe<StringFilter>;
  /** Filter by the object’s `stageHistoryId` field. */
  stageHistoryId?: Maybe<IntFilter>;
  /** Filter by the object’s `stageHistoryTimeCreated` field. */
  stageHistoryTimeCreated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `stageIsCurrent` field. */
  stageIsCurrent?: Maybe<BooleanFilter>;
  /** Filter by the object’s `statusHistoryId` field. */
  statusHistoryId?: Maybe<IntFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<ApplicationStatusFilter>;
  /** Filter by the object’s `statusHistoryTimeCreated` field. */
  statusHistoryTimeCreated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `statusIsCurrent` field. */
  statusIsCurrent?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ApplicationStageStatusAllFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ApplicationStageStatusAllFilter>>;
  /** Negates the expression. */
  not?: Maybe<ApplicationStageStatusAllFilter>;
};

/** A connection to a list of `ApplicationStageStatusAll` values. */
export type ApplicationStageStatusAllsConnection = {
  __typename?: 'ApplicationStageStatusAllsConnection';
  /** A list of `ApplicationStageStatusAll` objects. */
  nodes: Array<Maybe<ApplicationStageStatusAll>>;
  /** A list of edges which contains the `ApplicationStageStatusAll` and cursor to aid in pagination. */
  edges: Array<ApplicationStageStatusAllsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ApplicationStageStatusAll` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ApplicationStageStatusAll` edge in the connection. */
export type ApplicationStageStatusAllsEdge = {
  __typename?: 'ApplicationStageStatusAllsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ApplicationStageStatusAll` at the end of the edge. */
  node?: Maybe<ApplicationStageStatusAll>;
};

/** Methods to use when ordering `ApplicationStageStatusAll`. */
export enum ApplicationStageStatusAllsOrderBy {
  Natural = 'NATURAL',
  ApplicationIdAsc = 'APPLICATION_ID_ASC',
  ApplicationIdDesc = 'APPLICATION_ID_DESC',
  TemplateIdAsc = 'TEMPLATE_ID_ASC',
  TemplateIdDesc = 'TEMPLATE_ID_DESC',
  SerialAsc = 'SERIAL_ASC',
  SerialDesc = 'SERIAL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  StageIdAsc = 'STAGE_ID_ASC',
  StageIdDesc = 'STAGE_ID_DESC',
  StageNumberAsc = 'STAGE_NUMBER_ASC',
  StageNumberDesc = 'STAGE_NUMBER_DESC',
  StageAsc = 'STAGE_ASC',
  StageDesc = 'STAGE_DESC',
  StageHistoryIdAsc = 'STAGE_HISTORY_ID_ASC',
  StageHistoryIdDesc = 'STAGE_HISTORY_ID_DESC',
  StageHistoryTimeCreatedAsc = 'STAGE_HISTORY_TIME_CREATED_ASC',
  StageHistoryTimeCreatedDesc = 'STAGE_HISTORY_TIME_CREATED_DESC',
  StageIsCurrentAsc = 'STAGE_IS_CURRENT_ASC',
  StageIsCurrentDesc = 'STAGE_IS_CURRENT_DESC',
  StatusHistoryIdAsc = 'STATUS_HISTORY_ID_ASC',
  StatusHistoryIdDesc = 'STATUS_HISTORY_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  StatusHistoryTimeCreatedAsc = 'STATUS_HISTORY_TIME_CREATED_ASC',
  StatusHistoryTimeCreatedDesc = 'STATUS_HISTORY_TIME_CREATED_DESC',
  StatusIsCurrentAsc = 'STATUS_IS_CURRENT_ASC',
  StatusIsCurrentDesc = 'STATUS_IS_CURRENT_DESC'
}

export enum ApplicationStatus {
  Draft = 'DRAFT',
  Withdrawn = 'WITHDRAWN',
  Submitted = 'SUBMITTED',
  ChangesRequired = 'CHANGES_REQUIRED',
  ReSubmitted = 'RE_SUBMITTED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED'
}

/** A filter to be used against ApplicationStatus fields. All fields are combined with a logical ‘and.’ */
export type ApplicationStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ApplicationStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ApplicationStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ApplicationStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ApplicationStatus>;
  /** Included in the specified list. */
  in?: Maybe<Array<ApplicationStatus>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ApplicationStatus>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ApplicationStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ApplicationStatus>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ApplicationStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ApplicationStatus>;
};

/** A connection to a list of `ApplicationStatusHistory` values. */
export type ApplicationStatusHistoriesConnection = {
  __typename?: 'ApplicationStatusHistoriesConnection';
  /** A list of `ApplicationStatusHistory` objects. */
  nodes: Array<Maybe<ApplicationStatusHistory>>;
  /** A list of edges which contains the `ApplicationStatusHistory` and cursor to aid in pagination. */
  edges: Array<ApplicationStatusHistoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ApplicationStatusHistory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ApplicationStatusHistory` edge in the connection. */
export type ApplicationStatusHistoriesEdge = {
  __typename?: 'ApplicationStatusHistoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ApplicationStatusHistory` at the end of the edge. */
  node?: Maybe<ApplicationStatusHistory>;
};

/** Methods to use when ordering `ApplicationStatusHistory`. */
export enum ApplicationStatusHistoriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ApplicationStageHistoryIdAsc = 'APPLICATION_STAGE_HISTORY_ID_ASC',
  ApplicationStageHistoryIdDesc = 'APPLICATION_STAGE_HISTORY_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TimeCreatedAsc = 'TIME_CREATED_ASC',
  TimeCreatedDesc = 'TIME_CREATED_DESC',
  IsCurrentAsc = 'IS_CURRENT_ASC',
  IsCurrentDesc = 'IS_CURRENT_DESC',
  ApplicationIdAsc = 'APPLICATION_ID_ASC',
  ApplicationIdDesc = 'APPLICATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ApplicationStatusHistory = Node & {
  __typename?: 'ApplicationStatusHistory';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  applicationStageHistoryId?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationId?: Maybe<Scalars['Int']>;
  /** Reads a single `ApplicationStageHistory` that is related to this `ApplicationStatusHistory`. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
};

/** The `applicationStageHistory` to be created by this mutation. */
export type ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStageHistoryCreateInput = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** The `applicationStatusHistory` to be created by this mutation. */
export type ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStatusHistoryCreateInput = {
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationId?: Maybe<Scalars['Int']>;
  applicationStageHistoryToApplicationStageHistoryId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput>;
};

/** Input for the nested mutation of `applicationStageHistory` in the `ApplicationStatusHistoryInput` mutation. */
export type ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput = {
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  connectById?: Maybe<ApplicationStageHistoryApplicationStageHistoryPkeyConnect>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  connectByNodeId?: Maybe<ApplicationStageHistoryNodeIdConnect>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  deleteById?: Maybe<ApplicationStageHistoryApplicationStageHistoryPkeyDelete>;
  /** The primary key(s) for `applicationStageHistory` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ApplicationStageHistoryNodeIdDelete>;
  /** The primary key(s) and patch data for `applicationStageHistory` for the far side of the relationship. */
  updateById?: Maybe<ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStageHistoryPkeyUpdate>;
  /** The primary key(s) and patch data for `applicationStageHistory` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate>;
  /** A `ApplicationStageHistoryInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStageHistoryCreateInput>;
};

/** Input for the nested mutation of `applicationStatusHistory` in the `ApplicationStageHistoryInput` mutation. */
export type ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput = {
  /** Flag indicating whether all other `applicationStatusHistory` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `applicationStatusHistory` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationStatusHistoryApplicationStatusHistoryPkeyConnect>>;
  /** The primary key(s) for `applicationStatusHistory` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationStatusHistoryNodeIdConnect>>;
  /** The primary key(s) for `applicationStatusHistory` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationStatusHistoryApplicationStatusHistoryPkeyDelete>>;
  /** The primary key(s) for `applicationStatusHistory` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationStatusHistoryNodeIdDelete>>;
  /** The primary key(s) and patch data for `applicationStatusHistory` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStatusHistoryPkeyUpdate>>;
  /** The primary key(s) and patch data for `applicationStatusHistory` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate>>;
  /** A `ApplicationStatusHistoryInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStatusHistoryCreateInput>>;
};

/** The fields on `applicationStatusHistory` to look up the row to connect. */
export type ApplicationStatusHistoryApplicationStatusHistoryPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `applicationStatusHistory` to look up the row to delete. */
export type ApplicationStatusHistoryApplicationStatusHistoryPkeyDelete = {
  id: Scalars['Int'];
};

/**
 * A condition to be used against `ApplicationStatusHistory` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type ApplicationStatusHistoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `applicationStageHistoryId` field. */
  applicationStageHistoryId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<ApplicationStatus>;
  /** Checks for equality with the object’s `timeCreated` field. */
  timeCreated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `isCurrent` field. */
  isCurrent?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `applicationId` field. */
  applicationId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `ApplicationStatusHistory` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationStatusHistoryFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `applicationStageHistoryId` field. */
  applicationStageHistoryId?: Maybe<IntFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<ApplicationStatusFilter>;
  /** Filter by the object’s `timeCreated` field. */
  timeCreated?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `isCurrent` field. */
  isCurrent?: Maybe<BooleanFilter>;
  /** Filter by the object’s `applicationId` field. */
  applicationId?: Maybe<IntFilter>;
  /** Filter by the object’s `applicationStageHistory` relation. */
  applicationStageHistory?: Maybe<ApplicationStageHistoryFilter>;
  /** A related `applicationStageHistory` exists. */
  applicationStageHistoryExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ApplicationStatusHistoryFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ApplicationStatusHistoryFilter>>;
  /** Negates the expression. */
  not?: Maybe<ApplicationStatusHistoryFilter>;
};

/** An input for mutations affecting `ApplicationStatusHistory` */
export type ApplicationStatusHistoryInput = {
  id?: Maybe<Scalars['Int']>;
  applicationStageHistoryId?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationId?: Maybe<Scalars['Int']>;
  applicationStageHistoryToApplicationStageHistoryId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ApplicationStatusHistoryNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `applicationStatusHistory` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ApplicationStatusHistoryNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `applicationStatusHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `applicationStageHistory` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
  patch: ApplicationStageHistoryPatch;
};

/** The fields on `applicationStatusHistory` to look up the row to update. */
export type ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStatusHistoryPkeyUpdate = {
  /** An object where the defined keys will be set on the `applicationStatusHistory` being updated. */
  patch: UpdateApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `ApplicationStatusHistory`. Fields that are set will be updated. */
export type ApplicationStatusHistoryPatch = {
  id?: Maybe<Scalars['Int']>;
  applicationStageHistoryId?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationId?: Maybe<Scalars['Int']>;
  applicationStageHistoryToApplicationStageHistoryId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput>;
};

/** The `application` to be created by this mutation. */
export type ApplicationTemplateIdFkeyApplicationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** Input for the nested mutation of `template` in the `ApplicationInput` mutation. */
export type ApplicationTemplateIdFkeyInput = {
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectById?: Maybe<TemplateTemplatePkeyConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateNodeIdConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteById?: Maybe<TemplateTemplatePkeyDelete>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateNodeIdDelete>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateById?: Maybe<TemplateOnApplicationForApplicationTemplateIdFkeyUsingTemplatePkeyUpdate>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate>;
  /** A `TemplateInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationTemplateIdFkeyTemplateCreateInput>;
};

/** Input for the nested mutation of `application` in the `TemplateInput` mutation. */
export type ApplicationTemplateIdFkeyInverseInput = {
  /** Flag indicating whether all other `application` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationApplicationPkeyConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectBySerial?: Maybe<Array<ApplicationApplicationSerialKeyConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationNodeIdConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationApplicationPkeyDelete>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteBySerial?: Maybe<Array<ApplicationApplicationSerialKeyDelete>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationNodeIdDelete>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationPkeyUpdate>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateBySerial?: Maybe<Array<ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationSerialKeyUpdate>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate>>;
  /** A `ApplicationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationTemplateIdFkeyApplicationCreateInput>>;
};

/** The `template` to be created by this mutation. */
export type ApplicationTemplateIdFkeyTemplateCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** A filter to be used against many `ApplicationSection` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationToManyApplicationSectionFilter = {
  /** Every related `ApplicationSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationSectionFilter>;
  /** Some related `ApplicationSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationSectionFilter>;
  /** No related `ApplicationSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationSectionFilter>;
};

/** A filter to be used against many `ApplicationStageHistory` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationToManyApplicationStageHistoryFilter = {
  /** Every related `ApplicationStageHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationStageHistoryFilter>;
  /** Some related `ApplicationStageHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationStageHistoryFilter>;
  /** No related `ApplicationStageHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationStageHistoryFilter>;
};

/** The `application` to be created by this mutation. */
export type ApplicationUserIdFkeyApplicationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** Input for the nested mutation of `user` in the `ApplicationInput` mutation. */
export type ApplicationUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: Maybe<UserUserPkeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByUsername?: Maybe<UserUserUsernameKeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByNodeId?: Maybe<UserNodeIdConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: Maybe<UserUserPkeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByUsername?: Maybe<UserUserUsernameKeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByNodeId?: Maybe<UserNodeIdDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: Maybe<UserOnApplicationForApplicationUserIdFkeyUsingUserPkeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByUsername?: Maybe<UserOnApplicationForApplicationUserIdFkeyUsingUserUsernameKeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByNodeId?: Maybe<ApplicationOnApplicationForApplicationUserIdFkeyNodeIdUpdate>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: Maybe<ApplicationUserIdFkeyUserCreateInput>;
};

/** Input for the nested mutation of `application` in the `UserInput` mutation. */
export type ApplicationUserIdFkeyInverseInput = {
  /** Flag indicating whether all other `application` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectById?: Maybe<Array<ApplicationApplicationPkeyConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectBySerial?: Maybe<Array<ApplicationApplicationSerialKeyConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ApplicationNodeIdConnect>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteById?: Maybe<Array<ApplicationApplicationPkeyDelete>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteBySerial?: Maybe<Array<ApplicationApplicationSerialKeyDelete>>;
  /** The primary key(s) for `application` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ApplicationNodeIdDelete>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateById?: Maybe<Array<ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationPkeyUpdate>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateBySerial?: Maybe<Array<ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationSerialKeyUpdate>>;
  /** The primary key(s) and patch data for `application` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<UserOnApplicationForApplicationUserIdFkeyNodeIdUpdate>>;
  /** A `ApplicationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ApplicationUserIdFkeyApplicationCreateInput>>;
};

/** The `user` to be created by this mutation. */
export type ApplicationUserIdFkeyUserCreateInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};


/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Boolean']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Boolean']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
};

/** All input for the create `Application` mutation. */
export type CreateApplicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Application` to be created by this mutation. */
  application: ApplicationInput;
};

/** The output of our create `Application` mutation. */
export type CreateApplicationPayload = {
  __typename?: 'CreateApplicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Application` that was created by this mutation. */
  application?: Maybe<Application>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `Application`. */
  template?: Maybe<Template>;
  /** Reads a single `User` that is related to this `Application`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `Application`. */
  org?: Maybe<Organisation>;
  /** An edge for our `Application`. May be used by Relay 1. */
  applicationEdge?: Maybe<ApplicationsEdge>;
};


/** The output of our create `Application` mutation. */
export type CreateApplicationPayloadApplicationEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
};

/** All input for the create `ApplicationSection` mutation. */
export type CreateApplicationSectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationSection` to be created by this mutation. */
  applicationSection: ApplicationSectionInput;
};

/** The output of our create `ApplicationSection` mutation. */
export type CreateApplicationSectionPayload = {
  __typename?: 'CreateApplicationSectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationSection` that was created by this mutation. */
  applicationSection?: Maybe<ApplicationSection>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Application` that is related to this `ApplicationSection`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateSection` that is related to this `ApplicationSection`. */
  templateSection?: Maybe<TemplateSection>;
  /** An edge for our `ApplicationSection`. May be used by Relay 1. */
  applicationSectionEdge?: Maybe<ApplicationSectionsEdge>;
};


/** The output of our create `ApplicationSection` mutation. */
export type CreateApplicationSectionPayloadApplicationSectionEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationSectionsOrderBy>>;
};

/** All input for the create `ApplicationStageHistory` mutation. */
export type CreateApplicationStageHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStageHistory` to be created by this mutation. */
  applicationStageHistory: ApplicationStageHistoryInput;
};

/** The output of our create `ApplicationStageHistory` mutation. */
export type CreateApplicationStageHistoryPayload = {
  __typename?: 'CreateApplicationStageHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStageHistory` that was created by this mutation. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Application` that is related to this `ApplicationStageHistory`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateStage` that is related to this `ApplicationStageHistory`. */
  stage?: Maybe<TemplateStage>;
  /** An edge for our `ApplicationStageHistory`. May be used by Relay 1. */
  applicationStageHistoryEdge?: Maybe<ApplicationStageHistoriesEdge>;
};


/** The output of our create `ApplicationStageHistory` mutation. */
export type CreateApplicationStageHistoryPayloadApplicationStageHistoryEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationStageHistoriesOrderBy>>;
};

/** All input for the create `ApplicationStatusHistory` mutation. */
export type CreateApplicationStatusHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStatusHistory` to be created by this mutation. */
  applicationStatusHistory: ApplicationStatusHistoryInput;
};

/** The output of our create `ApplicationStatusHistory` mutation. */
export type CreateApplicationStatusHistoryPayload = {
  __typename?: 'CreateApplicationStatusHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStatusHistory` that was created by this mutation. */
  applicationStatusHistory?: Maybe<ApplicationStatusHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ApplicationStageHistory` that is related to this `ApplicationStatusHistory`. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  /** An edge for our `ApplicationStatusHistory`. May be used by Relay 1. */
  applicationStatusHistoryEdge?: Maybe<ApplicationStatusHistoriesEdge>;
};


/** The output of our create `ApplicationStatusHistory` mutation. */
export type CreateApplicationStatusHistoryPayloadApplicationStatusHistoryEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationStatusHistoriesOrderBy>>;
};

/** All input for the create `ElementTypePlugin` mutation. */
export type CreateElementTypePluginInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ElementTypePlugin` to be created by this mutation. */
  elementTypePlugin: ElementTypePluginInput;
};

/** The output of our create `ElementTypePlugin` mutation. */
export type CreateElementTypePluginPayload = {
  __typename?: 'CreateElementTypePluginPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ElementTypePlugin` that was created by this mutation. */
  elementTypePlugin?: Maybe<ElementTypePlugin>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ElementTypePlugin`. May be used by Relay 1. */
  elementTypePluginEdge?: Maybe<ElementTypePluginsEdge>;
};


/** The output of our create `ElementTypePlugin` mutation. */
export type CreateElementTypePluginPayloadElementTypePluginEdgeArgs = {
  orderBy?: Maybe<Array<ElementTypePluginsOrderBy>>;
};

/** All input for the create `Organisation` mutation. */
export type CreateOrganisationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organisation` to be created by this mutation. */
  organisation: OrganisationInput;
};

/** The output of our create `Organisation` mutation. */
export type CreateOrganisationPayload = {
  __typename?: 'CreateOrganisationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organisation` that was created by this mutation. */
  organisation?: Maybe<Organisation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Organisation`. May be used by Relay 1. */
  organisationEdge?: Maybe<OrganisationsEdge>;
};


/** The output of our create `Organisation` mutation. */
export type CreateOrganisationPayloadOrganisationEdgeArgs = {
  orderBy?: Maybe<Array<OrganisationsOrderBy>>;
};

/** All input for the create `PermissionJoin` mutation. */
export type CreatePermissionJoinInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionJoin` to be created by this mutation. */
  permissionJoin: PermissionJoinInput;
};

/** The output of our create `PermissionJoin` mutation. */
export type CreatePermissionJoinPayload = {
  __typename?: 'CreatePermissionJoinPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionJoin` that was created by this mutation. */
  permissionJoin?: Maybe<PermissionJoin>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `PermissionJoin`. */
  user?: Maybe<User>;
  /** Reads a single `UserOrganisation` that is related to this `PermissionJoin`. */
  userOrganisation?: Maybe<UserOrganisation>;
  /** Reads a single `PermissionName` that is related to this `PermissionJoin`. */
  permissionName?: Maybe<PermissionName>;
  /** An edge for our `PermissionJoin`. May be used by Relay 1. */
  permissionJoinEdge?: Maybe<PermissionJoinsEdge>;
};


/** The output of our create `PermissionJoin` mutation. */
export type CreatePermissionJoinPayloadPermissionJoinEdgeArgs = {
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
};

/** All input for the create `PermissionName` mutation. */
export type CreatePermissionNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionName` to be created by this mutation. */
  permissionName: PermissionNameInput;
};

/** The output of our create `PermissionName` mutation. */
export type CreatePermissionNamePayload = {
  __typename?: 'CreatePermissionNamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionName` that was created by this mutation. */
  permissionName?: Maybe<PermissionName>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `PermissionPolicy` that is related to this `PermissionName`. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  /** An edge for our `PermissionName`. May be used by Relay 1. */
  permissionNameEdge?: Maybe<PermissionNamesEdge>;
};


/** The output of our create `PermissionName` mutation. */
export type CreatePermissionNamePayloadPermissionNameEdgeArgs = {
  orderBy?: Maybe<Array<PermissionNamesOrderBy>>;
};

/** All input for the create `PermissionPolicy` mutation. */
export type CreatePermissionPolicyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionPolicy` to be created by this mutation. */
  permissionPolicy: PermissionPolicyInput;
};

/** The output of our create `PermissionPolicy` mutation. */
export type CreatePermissionPolicyPayload = {
  __typename?: 'CreatePermissionPolicyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionPolicy` that was created by this mutation. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `PermissionPolicy`. May be used by Relay 1. */
  permissionPolicyEdge?: Maybe<PermissionPoliciesEdge>;
};


/** The output of our create `PermissionPolicy` mutation. */
export type CreatePermissionPolicyPayloadPermissionPolicyEdgeArgs = {
  orderBy?: Maybe<Array<PermissionPoliciesOrderBy>>;
};

/** All input for the create `TemplateElement` mutation. */
export type CreateTemplateElementInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateElement` to be created by this mutation. */
  templateElement: TemplateElementInput;
};

/** The output of our create `TemplateElement` mutation. */
export type CreateTemplateElementPayload = {
  __typename?: 'CreateTemplateElementPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateElement` that was created by this mutation. */
  templateElement?: Maybe<TemplateElement>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `TemplateSection` that is related to this `TemplateElement`. */
  section?: Maybe<TemplateSection>;
  /** An edge for our `TemplateElement`. May be used by Relay 1. */
  templateElementEdge?: Maybe<TemplateElementsEdge>;
};


/** The output of our create `TemplateElement` mutation. */
export type CreateTemplateElementPayloadTemplateElementEdgeArgs = {
  orderBy?: Maybe<Array<TemplateElementsOrderBy>>;
};

/** All input for the create `Template` mutation. */
export type CreateTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Template` to be created by this mutation. */
  template: TemplateInput;
};

/** The output of our create `Template` mutation. */
export type CreateTemplatePayload = {
  __typename?: 'CreateTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Template` that was created by this mutation. */
  template?: Maybe<Template>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Template`. May be used by Relay 1. */
  templateEdge?: Maybe<TemplatesEdge>;
};


/** The output of our create `Template` mutation. */
export type CreateTemplatePayloadTemplateEdgeArgs = {
  orderBy?: Maybe<Array<TemplatesOrderBy>>;
};

/** All input for the create `TemplatePermission` mutation. */
export type CreateTemplatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplatePermission` to be created by this mutation. */
  templatePermission: TemplatePermissionInput;
};

/** The output of our create `TemplatePermission` mutation. */
export type CreateTemplatePermissionPayload = {
  __typename?: 'CreateTemplatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplatePermission` that was created by this mutation. */
  templatePermission?: Maybe<TemplatePermission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `PermissionName` that is related to this `TemplatePermission`. */
  permissionName?: Maybe<PermissionName>;
  /** Reads a single `Template` that is related to this `TemplatePermission`. */
  template?: Maybe<Template>;
  /** Reads a single `TemplateSection` that is related to this `TemplatePermission`. */
  templateSection?: Maybe<TemplateSection>;
  /** An edge for our `TemplatePermission`. May be used by Relay 1. */
  templatePermissionEdge?: Maybe<TemplatePermissionsEdge>;
};


/** The output of our create `TemplatePermission` mutation. */
export type CreateTemplatePermissionPayloadTemplatePermissionEdgeArgs = {
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
};

/** All input for the create `TemplateSection` mutation. */
export type CreateTemplateSectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateSection` to be created by this mutation. */
  templateSection: TemplateSectionInput;
};

/** The output of our create `TemplateSection` mutation. */
export type CreateTemplateSectionPayload = {
  __typename?: 'CreateTemplateSectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateSection` that was created by this mutation. */
  templateSection?: Maybe<TemplateSection>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `TemplateSection`. */
  template?: Maybe<Template>;
  /** An edge for our `TemplateSection`. May be used by Relay 1. */
  templateSectionEdge?: Maybe<TemplateSectionsEdge>;
};


/** The output of our create `TemplateSection` mutation. */
export type CreateTemplateSectionPayloadTemplateSectionEdgeArgs = {
  orderBy?: Maybe<Array<TemplateSectionsOrderBy>>;
};

/** All input for the create `TemplateStage` mutation. */
export type CreateTemplateStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateStage` to be created by this mutation. */
  templateStage: TemplateStageInput;
};

/** The output of our create `TemplateStage` mutation. */
export type CreateTemplateStagePayload = {
  __typename?: 'CreateTemplateStagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateStage` that was created by this mutation. */
  templateStage?: Maybe<TemplateStage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `TemplateStage`. */
  template?: Maybe<Template>;
  /** An edge for our `TemplateStage`. May be used by Relay 1. */
  templateStageEdge?: Maybe<TemplateStagesEdge>;
};


/** The output of our create `TemplateStage` mutation. */
export type CreateTemplateStagePayloadTemplateStageEdgeArgs = {
  orderBy?: Maybe<Array<TemplateStagesOrderBy>>;
};

/** All input for the create `TriggerQueue` mutation. */
export type CreateTriggerQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TriggerQueue` to be created by this mutation. */
  triggerQueue: TriggerQueueInput;
};

/** The output of our create `TriggerQueue` mutation. */
export type CreateTriggerQueuePayload = {
  __typename?: 'CreateTriggerQueuePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TriggerQueue` that was created by this mutation. */
  triggerQueue?: Maybe<TriggerQueue>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `TriggerQueue`. May be used by Relay 1. */
  triggerQueueEdge?: Maybe<TriggerQueuesEdge>;
};


/** The output of our create `TriggerQueue` mutation. */
export type CreateTriggerQueuePayloadTriggerQueueEdgeArgs = {
  orderBy?: Maybe<Array<TriggerQueuesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** All input for the create `UserOrganisation` mutation. */
export type CreateUserOrganisationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserOrganisation` to be created by this mutation. */
  userOrganisation: UserOrganisationInput;
};

/** The output of our create `UserOrganisation` mutation. */
export type CreateUserOrganisationPayload = {
  __typename?: 'CreateUserOrganisationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserOrganisation` that was created by this mutation. */
  userOrganisation?: Maybe<UserOrganisation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserOrganisation`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `UserOrganisation`. */
  organisation?: Maybe<Organisation>;
  /** An edge for our `UserOrganisation`. May be used by Relay 1. */
  userOrganisationEdge?: Maybe<UserOrganisationsEdge>;
};


/** The output of our create `UserOrganisation` mutation. */
export type CreateUserOrganisationPayloadUserOrganisationEdgeArgs = {
  orderBy?: Maybe<Array<UserOrganisationsOrderBy>>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};



/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
export type DateFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Date']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Date']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Date']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Date']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Date']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Date']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Date']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Date']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Date']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Date']>;
};


/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Datetime']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Datetime']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
};

/** All input for the `deleteApplicationByNodeId` mutation. */
export type DeleteApplicationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Application` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteApplicationBySerial` mutation. */
export type DeleteApplicationBySerialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  serial: Scalars['String'];
};

/** All input for the `deleteApplication` mutation. */
export type DeleteApplicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Application` mutation. */
export type DeleteApplicationPayload = {
  __typename?: 'DeleteApplicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Application` that was deleted by this mutation. */
  application?: Maybe<Application>;
  deletedApplicationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `Application`. */
  template?: Maybe<Template>;
  /** Reads a single `User` that is related to this `Application`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `Application`. */
  org?: Maybe<Organisation>;
  /** An edge for our `Application`. May be used by Relay 1. */
  applicationEdge?: Maybe<ApplicationsEdge>;
};


/** The output of our delete `Application` mutation. */
export type DeleteApplicationPayloadApplicationEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
};

/** All input for the `deleteApplicationSectionByNodeId` mutation. */
export type DeleteApplicationSectionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ApplicationSection` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteApplicationSection` mutation. */
export type DeleteApplicationSectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `ApplicationSection` mutation. */
export type DeleteApplicationSectionPayload = {
  __typename?: 'DeleteApplicationSectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationSection` that was deleted by this mutation. */
  applicationSection?: Maybe<ApplicationSection>;
  deletedApplicationSectionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Application` that is related to this `ApplicationSection`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateSection` that is related to this `ApplicationSection`. */
  templateSection?: Maybe<TemplateSection>;
  /** An edge for our `ApplicationSection`. May be used by Relay 1. */
  applicationSectionEdge?: Maybe<ApplicationSectionsEdge>;
};


/** The output of our delete `ApplicationSection` mutation. */
export type DeleteApplicationSectionPayloadApplicationSectionEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationSectionsOrderBy>>;
};

/** All input for the `deleteApplicationStageHistoryByNodeId` mutation. */
export type DeleteApplicationStageHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ApplicationStageHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteApplicationStageHistory` mutation. */
export type DeleteApplicationStageHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `ApplicationStageHistory` mutation. */
export type DeleteApplicationStageHistoryPayload = {
  __typename?: 'DeleteApplicationStageHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStageHistory` that was deleted by this mutation. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  deletedApplicationStageHistoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Application` that is related to this `ApplicationStageHistory`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateStage` that is related to this `ApplicationStageHistory`. */
  stage?: Maybe<TemplateStage>;
  /** An edge for our `ApplicationStageHistory`. May be used by Relay 1. */
  applicationStageHistoryEdge?: Maybe<ApplicationStageHistoriesEdge>;
};


/** The output of our delete `ApplicationStageHistory` mutation. */
export type DeleteApplicationStageHistoryPayloadApplicationStageHistoryEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationStageHistoriesOrderBy>>;
};

/** All input for the `deleteApplicationStatusHistoryByNodeId` mutation. */
export type DeleteApplicationStatusHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ApplicationStatusHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteApplicationStatusHistory` mutation. */
export type DeleteApplicationStatusHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `ApplicationStatusHistory` mutation. */
export type DeleteApplicationStatusHistoryPayload = {
  __typename?: 'DeleteApplicationStatusHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStatusHistory` that was deleted by this mutation. */
  applicationStatusHistory?: Maybe<ApplicationStatusHistory>;
  deletedApplicationStatusHistoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ApplicationStageHistory` that is related to this `ApplicationStatusHistory`. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  /** An edge for our `ApplicationStatusHistory`. May be used by Relay 1. */
  applicationStatusHistoryEdge?: Maybe<ApplicationStatusHistoriesEdge>;
};


/** The output of our delete `ApplicationStatusHistory` mutation. */
export type DeleteApplicationStatusHistoryPayloadApplicationStatusHistoryEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationStatusHistoriesOrderBy>>;
};

/** All input for the `deleteElementTypePluginByNodeId` mutation. */
export type DeleteElementTypePluginByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ElementTypePlugin` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteElementTypePlugin` mutation. */
export type DeleteElementTypePluginInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
};

/** The output of our delete `ElementTypePlugin` mutation. */
export type DeleteElementTypePluginPayload = {
  __typename?: 'DeleteElementTypePluginPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ElementTypePlugin` that was deleted by this mutation. */
  elementTypePlugin?: Maybe<ElementTypePlugin>;
  deletedElementTypePluginNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ElementTypePlugin`. May be used by Relay 1. */
  elementTypePluginEdge?: Maybe<ElementTypePluginsEdge>;
};


/** The output of our delete `ElementTypePlugin` mutation. */
export type DeleteElementTypePluginPayloadElementTypePluginEdgeArgs = {
  orderBy?: Maybe<Array<ElementTypePluginsOrderBy>>;
};

/** All input for the `deleteOrganisationByNodeId` mutation. */
export type DeleteOrganisationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organisation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOrganisation` mutation. */
export type DeleteOrganisationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Organisation` mutation. */
export type DeleteOrganisationPayload = {
  __typename?: 'DeleteOrganisationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organisation` that was deleted by this mutation. */
  organisation?: Maybe<Organisation>;
  deletedOrganisationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Organisation`. May be used by Relay 1. */
  organisationEdge?: Maybe<OrganisationsEdge>;
};


/** The output of our delete `Organisation` mutation. */
export type DeleteOrganisationPayloadOrganisationEdgeArgs = {
  orderBy?: Maybe<Array<OrganisationsOrderBy>>;
};

/** All input for the `deletePermissionJoinByNodeId` mutation. */
export type DeletePermissionJoinByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionJoin` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePermissionJoin` mutation. */
export type DeletePermissionJoinInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `PermissionJoin` mutation. */
export type DeletePermissionJoinPayload = {
  __typename?: 'DeletePermissionJoinPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionJoin` that was deleted by this mutation. */
  permissionJoin?: Maybe<PermissionJoin>;
  deletedPermissionJoinNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `PermissionJoin`. */
  user?: Maybe<User>;
  /** Reads a single `UserOrganisation` that is related to this `PermissionJoin`. */
  userOrganisation?: Maybe<UserOrganisation>;
  /** Reads a single `PermissionName` that is related to this `PermissionJoin`. */
  permissionName?: Maybe<PermissionName>;
  /** An edge for our `PermissionJoin`. May be used by Relay 1. */
  permissionJoinEdge?: Maybe<PermissionJoinsEdge>;
};


/** The output of our delete `PermissionJoin` mutation. */
export type DeletePermissionJoinPayloadPermissionJoinEdgeArgs = {
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
};

/** All input for the `deletePermissionNameByNodeId` mutation. */
export type DeletePermissionNameByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionName` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePermissionName` mutation. */
export type DeletePermissionNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `PermissionName` mutation. */
export type DeletePermissionNamePayload = {
  __typename?: 'DeletePermissionNamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionName` that was deleted by this mutation. */
  permissionName?: Maybe<PermissionName>;
  deletedPermissionNameNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `PermissionPolicy` that is related to this `PermissionName`. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  /** An edge for our `PermissionName`. May be used by Relay 1. */
  permissionNameEdge?: Maybe<PermissionNamesEdge>;
};


/** The output of our delete `PermissionName` mutation. */
export type DeletePermissionNamePayloadPermissionNameEdgeArgs = {
  orderBy?: Maybe<Array<PermissionNamesOrderBy>>;
};

/** All input for the `deletePermissionPolicyByNodeId` mutation. */
export type DeletePermissionPolicyByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionPolicy` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePermissionPolicy` mutation. */
export type DeletePermissionPolicyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `PermissionPolicy` mutation. */
export type DeletePermissionPolicyPayload = {
  __typename?: 'DeletePermissionPolicyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionPolicy` that was deleted by this mutation. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  deletedPermissionPolicyNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `PermissionPolicy`. May be used by Relay 1. */
  permissionPolicyEdge?: Maybe<PermissionPoliciesEdge>;
};


/** The output of our delete `PermissionPolicy` mutation. */
export type DeletePermissionPolicyPayloadPermissionPolicyEdgeArgs = {
  orderBy?: Maybe<Array<PermissionPoliciesOrderBy>>;
};

/** All input for the `deleteTemplateByNodeId` mutation. */
export type DeleteTemplateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Template` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTemplateElementByNodeId` mutation. */
export type DeleteTemplateElementByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplateElement` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTemplateElement` mutation. */
export type DeleteTemplateElementInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `TemplateElement` mutation. */
export type DeleteTemplateElementPayload = {
  __typename?: 'DeleteTemplateElementPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateElement` that was deleted by this mutation. */
  templateElement?: Maybe<TemplateElement>;
  deletedTemplateElementNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `TemplateSection` that is related to this `TemplateElement`. */
  section?: Maybe<TemplateSection>;
  /** An edge for our `TemplateElement`. May be used by Relay 1. */
  templateElementEdge?: Maybe<TemplateElementsEdge>;
};


/** The output of our delete `TemplateElement` mutation. */
export type DeleteTemplateElementPayloadTemplateElementEdgeArgs = {
  orderBy?: Maybe<Array<TemplateElementsOrderBy>>;
};

/** All input for the `deleteTemplate` mutation. */
export type DeleteTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Template` mutation. */
export type DeleteTemplatePayload = {
  __typename?: 'DeleteTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Template` that was deleted by this mutation. */
  template?: Maybe<Template>;
  deletedTemplateNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Template`. May be used by Relay 1. */
  templateEdge?: Maybe<TemplatesEdge>;
};


/** The output of our delete `Template` mutation. */
export type DeleteTemplatePayloadTemplateEdgeArgs = {
  orderBy?: Maybe<Array<TemplatesOrderBy>>;
};

/** All input for the `deleteTemplatePermissionByNodeId` mutation. */
export type DeleteTemplatePermissionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplatePermission` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTemplatePermission` mutation. */
export type DeleteTemplatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `TemplatePermission` mutation. */
export type DeleteTemplatePermissionPayload = {
  __typename?: 'DeleteTemplatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplatePermission` that was deleted by this mutation. */
  templatePermission?: Maybe<TemplatePermission>;
  deletedTemplatePermissionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `PermissionName` that is related to this `TemplatePermission`. */
  permissionName?: Maybe<PermissionName>;
  /** Reads a single `Template` that is related to this `TemplatePermission`. */
  template?: Maybe<Template>;
  /** Reads a single `TemplateSection` that is related to this `TemplatePermission`. */
  templateSection?: Maybe<TemplateSection>;
  /** An edge for our `TemplatePermission`. May be used by Relay 1. */
  templatePermissionEdge?: Maybe<TemplatePermissionsEdge>;
};


/** The output of our delete `TemplatePermission` mutation. */
export type DeleteTemplatePermissionPayloadTemplatePermissionEdgeArgs = {
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
};

/** All input for the `deleteTemplateSectionByNodeId` mutation. */
export type DeleteTemplateSectionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplateSection` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTemplateSection` mutation. */
export type DeleteTemplateSectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `TemplateSection` mutation. */
export type DeleteTemplateSectionPayload = {
  __typename?: 'DeleteTemplateSectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateSection` that was deleted by this mutation. */
  templateSection?: Maybe<TemplateSection>;
  deletedTemplateSectionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `TemplateSection`. */
  template?: Maybe<Template>;
  /** An edge for our `TemplateSection`. May be used by Relay 1. */
  templateSectionEdge?: Maybe<TemplateSectionsEdge>;
};


/** The output of our delete `TemplateSection` mutation. */
export type DeleteTemplateSectionPayloadTemplateSectionEdgeArgs = {
  orderBy?: Maybe<Array<TemplateSectionsOrderBy>>;
};

/** All input for the `deleteTemplateStageByNodeId` mutation. */
export type DeleteTemplateStageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplateStage` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTemplateStage` mutation. */
export type DeleteTemplateStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `TemplateStage` mutation. */
export type DeleteTemplateStagePayload = {
  __typename?: 'DeleteTemplateStagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateStage` that was deleted by this mutation. */
  templateStage?: Maybe<TemplateStage>;
  deletedTemplateStageNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `TemplateStage`. */
  template?: Maybe<Template>;
  /** An edge for our `TemplateStage`. May be used by Relay 1. */
  templateStageEdge?: Maybe<TemplateStagesEdge>;
};


/** The output of our delete `TemplateStage` mutation. */
export type DeleteTemplateStagePayloadTemplateStageEdgeArgs = {
  orderBy?: Maybe<Array<TemplateStagesOrderBy>>;
};

/** All input for the `deleteTriggerQueueByNodeId` mutation. */
export type DeleteTriggerQueueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TriggerQueue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTriggerQueue` mutation. */
export type DeleteTriggerQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `TriggerQueue` mutation. */
export type DeleteTriggerQueuePayload = {
  __typename?: 'DeleteTriggerQueuePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TriggerQueue` that was deleted by this mutation. */
  triggerQueue?: Maybe<TriggerQueue>;
  deletedTriggerQueueNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `TriggerQueue`. May be used by Relay 1. */
  triggerQueueEdge?: Maybe<TriggerQueuesEdge>;
};


/** The output of our delete `TriggerQueue` mutation. */
export type DeleteTriggerQueuePayloadTriggerQueueEdgeArgs = {
  orderBy?: Maybe<Array<TriggerQueuesOrderBy>>;
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUserOrganisationByNodeId` mutation. */
export type DeleteUserOrganisationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserOrganisation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUserOrganisation` mutation. */
export type DeleteUserOrganisationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `UserOrganisation` mutation. */
export type DeleteUserOrganisationPayload = {
  __typename?: 'DeleteUserOrganisationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserOrganisation` that was deleted by this mutation. */
  userOrganisation?: Maybe<UserOrganisation>;
  deletedUserOrganisationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserOrganisation`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `UserOrganisation`. */
  organisation?: Maybe<Organisation>;
  /** An edge for our `UserOrganisation`. May be used by Relay 1. */
  userOrganisationEdge?: Maybe<UserOrganisationsEdge>;
};


/** The output of our delete `UserOrganisation` mutation. */
export type DeleteUserOrganisationPayloadUserOrganisationEdgeArgs = {
  orderBy?: Maybe<Array<UserOrganisationsOrderBy>>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  deletedUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

export type ElementTypePlugin = Node & {
  __typename?: 'ElementTypePlugin';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  path?: Maybe<Scalars['String']>;
  displayComponentName?: Maybe<Scalars['String']>;
  configComponentName?: Maybe<Scalars['String']>;
  requiredParameters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * A condition to be used against `ElementTypePlugin` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ElementTypePluginCondition = {
  /** Checks for equality with the object’s `code` field. */
  code?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<TemplateElementCategory>;
  /** Checks for equality with the object’s `path` field. */
  path?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `displayComponentName` field. */
  displayComponentName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `configComponentName` field. */
  configComponentName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `requiredParameters` field. */
  requiredParameters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A filter to be used against `ElementTypePlugin` object types. All fields are combined with a logical ‘and.’ */
export type ElementTypePluginFilter = {
  /** Filter by the object’s `code` field. */
  code?: Maybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `category` field. */
  category?: Maybe<TemplateElementCategoryFilter>;
  /** Filter by the object’s `path` field. */
  path?: Maybe<StringFilter>;
  /** Filter by the object’s `displayComponentName` field. */
  displayComponentName?: Maybe<StringFilter>;
  /** Filter by the object’s `configComponentName` field. */
  configComponentName?: Maybe<StringFilter>;
  /** Filter by the object’s `requiredParameters` field. */
  requiredParameters?: Maybe<StringListFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ElementTypePluginFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ElementTypePluginFilter>>;
  /** Negates the expression. */
  not?: Maybe<ElementTypePluginFilter>;
};

/** An input for mutations affecting `ElementTypePlugin` */
export type ElementTypePluginInput = {
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  path?: Maybe<Scalars['String']>;
  displayComponentName?: Maybe<Scalars['String']>;
  configComponentName?: Maybe<Scalars['String']>;
  requiredParameters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Represents an update to a `ElementTypePlugin`. Fields that are set will be updated. */
export type ElementTypePluginPatch = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  path?: Maybe<Scalars['String']>;
  displayComponentName?: Maybe<Scalars['String']>;
  configComponentName?: Maybe<Scalars['String']>;
  requiredParameters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of `ElementTypePlugin` values. */
export type ElementTypePluginsConnection = {
  __typename?: 'ElementTypePluginsConnection';
  /** A list of `ElementTypePlugin` objects. */
  nodes: Array<Maybe<ElementTypePlugin>>;
  /** A list of edges which contains the `ElementTypePlugin` and cursor to aid in pagination. */
  edges: Array<ElementTypePluginsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ElementTypePlugin` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ElementTypePlugin` edge in the connection. */
export type ElementTypePluginsEdge = {
  __typename?: 'ElementTypePluginsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ElementTypePlugin` at the end of the edge. */
  node?: Maybe<ElementTypePlugin>;
};

/** Methods to use when ordering `ElementTypePlugin`. */
export enum ElementTypePluginsOrderBy {
  Natural = 'NATURAL',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  DisplayComponentNameAsc = 'DISPLAY_COMPONENT_NAME_ASC',
  DisplayComponentNameDesc = 'DISPLAY_COMPONENT_NAME_DESC',
  ConfigComponentNameAsc = 'CONFIG_COMPONENT_NAME_ASC',
  ConfigComponentNameDesc = 'CONFIG_COMPONENT_NAME_DESC',
  RequiredParametersAsc = 'REQUIRED_PARAMETERS_ASC',
  RequiredParametersDesc = 'REQUIRED_PARAMETERS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};


/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['JSON']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['JSON']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['JSON']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['JSON']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  contains?: Maybe<Scalars['JSON']>;
  /** Contains the specified key. */
  containsKey?: Maybe<Scalars['String']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: Maybe<Array<Scalars['String']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: Maybe<Array<Scalars['String']>>;
  /** Contained by the specified JSON. */
  containedBy?: Maybe<Scalars['JSON']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Application`. */
  createApplication?: Maybe<CreateApplicationPayload>;
  /** Creates a single `ApplicationSection`. */
  createApplicationSection?: Maybe<CreateApplicationSectionPayload>;
  /** Creates a single `ApplicationStageHistory`. */
  createApplicationStageHistory?: Maybe<CreateApplicationStageHistoryPayload>;
  /** Creates a single `ApplicationStatusHistory`. */
  createApplicationStatusHistory?: Maybe<CreateApplicationStatusHistoryPayload>;
  /** Creates a single `ElementTypePlugin`. */
  createElementTypePlugin?: Maybe<CreateElementTypePluginPayload>;
  /** Creates a single `Organisation`. */
  createOrganisation?: Maybe<CreateOrganisationPayload>;
  /** Creates a single `PermissionJoin`. */
  createPermissionJoin?: Maybe<CreatePermissionJoinPayload>;
  /** Creates a single `PermissionName`. */
  createPermissionName?: Maybe<CreatePermissionNamePayload>;
  /** Creates a single `PermissionPolicy`. */
  createPermissionPolicy?: Maybe<CreatePermissionPolicyPayload>;
  /** Creates a single `Template`. */
  createTemplate?: Maybe<CreateTemplatePayload>;
  /** Creates a single `TemplateElement`. */
  createTemplateElement?: Maybe<CreateTemplateElementPayload>;
  /** Creates a single `TemplatePermission`. */
  createTemplatePermission?: Maybe<CreateTemplatePermissionPayload>;
  /** Creates a single `TemplateSection`. */
  createTemplateSection?: Maybe<CreateTemplateSectionPayload>;
  /** Creates a single `TemplateStage`. */
  createTemplateStage?: Maybe<CreateTemplateStagePayload>;
  /** Creates a single `TriggerQueue`. */
  createTriggerQueue?: Maybe<CreateTriggerQueuePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserOrganisation`. */
  createUserOrganisation?: Maybe<CreateUserOrganisationPayload>;
  /** Updates a single `Application` using its globally unique id and a patch. */
  updateApplicationByNodeId?: Maybe<UpdateApplicationPayload>;
  /** Updates a single `Application` using a unique key and a patch. */
  updateApplication?: Maybe<UpdateApplicationPayload>;
  /** Updates a single `Application` using a unique key and a patch. */
  updateApplicationBySerial?: Maybe<UpdateApplicationPayload>;
  /** Updates a single `ApplicationSection` using its globally unique id and a patch. */
  updateApplicationSectionByNodeId?: Maybe<UpdateApplicationSectionPayload>;
  /** Updates a single `ApplicationSection` using a unique key and a patch. */
  updateApplicationSection?: Maybe<UpdateApplicationSectionPayload>;
  /** Updates a single `ApplicationStageHistory` using its globally unique id and a patch. */
  updateApplicationStageHistoryByNodeId?: Maybe<UpdateApplicationStageHistoryPayload>;
  /** Updates a single `ApplicationStageHistory` using a unique key and a patch. */
  updateApplicationStageHistory?: Maybe<UpdateApplicationStageHistoryPayload>;
  /** Updates a single `ApplicationStatusHistory` using its globally unique id and a patch. */
  updateApplicationStatusHistoryByNodeId?: Maybe<UpdateApplicationStatusHistoryPayload>;
  /** Updates a single `ApplicationStatusHistory` using a unique key and a patch. */
  updateApplicationStatusHistory?: Maybe<UpdateApplicationStatusHistoryPayload>;
  /** Updates a single `ElementTypePlugin` using its globally unique id and a patch. */
  updateElementTypePluginByNodeId?: Maybe<UpdateElementTypePluginPayload>;
  /** Updates a single `ElementTypePlugin` using a unique key and a patch. */
  updateElementTypePlugin?: Maybe<UpdateElementTypePluginPayload>;
  /** Updates a single `Organisation` using its globally unique id and a patch. */
  updateOrganisationByNodeId?: Maybe<UpdateOrganisationPayload>;
  /** Updates a single `Organisation` using a unique key and a patch. */
  updateOrganisation?: Maybe<UpdateOrganisationPayload>;
  /** Updates a single `PermissionJoin` using its globally unique id and a patch. */
  updatePermissionJoinByNodeId?: Maybe<UpdatePermissionJoinPayload>;
  /** Updates a single `PermissionJoin` using a unique key and a patch. */
  updatePermissionJoin?: Maybe<UpdatePermissionJoinPayload>;
  /** Updates a single `PermissionName` using its globally unique id and a patch. */
  updatePermissionNameByNodeId?: Maybe<UpdatePermissionNamePayload>;
  /** Updates a single `PermissionName` using a unique key and a patch. */
  updatePermissionName?: Maybe<UpdatePermissionNamePayload>;
  /** Updates a single `PermissionPolicy` using its globally unique id and a patch. */
  updatePermissionPolicyByNodeId?: Maybe<UpdatePermissionPolicyPayload>;
  /** Updates a single `PermissionPolicy` using a unique key and a patch. */
  updatePermissionPolicy?: Maybe<UpdatePermissionPolicyPayload>;
  /** Updates a single `Template` using its globally unique id and a patch. */
  updateTemplateByNodeId?: Maybe<UpdateTemplatePayload>;
  /** Updates a single `Template` using a unique key and a patch. */
  updateTemplate?: Maybe<UpdateTemplatePayload>;
  /** Updates a single `TemplateElement` using its globally unique id and a patch. */
  updateTemplateElementByNodeId?: Maybe<UpdateTemplateElementPayload>;
  /** Updates a single `TemplateElement` using a unique key and a patch. */
  updateTemplateElement?: Maybe<UpdateTemplateElementPayload>;
  /** Updates a single `TemplatePermission` using its globally unique id and a patch. */
  updateTemplatePermissionByNodeId?: Maybe<UpdateTemplatePermissionPayload>;
  /** Updates a single `TemplatePermission` using a unique key and a patch. */
  updateTemplatePermission?: Maybe<UpdateTemplatePermissionPayload>;
  /** Updates a single `TemplateSection` using its globally unique id and a patch. */
  updateTemplateSectionByNodeId?: Maybe<UpdateTemplateSectionPayload>;
  /** Updates a single `TemplateSection` using a unique key and a patch. */
  updateTemplateSection?: Maybe<UpdateTemplateSectionPayload>;
  /** Updates a single `TemplateStage` using its globally unique id and a patch. */
  updateTemplateStageByNodeId?: Maybe<UpdateTemplateStagePayload>;
  /** Updates a single `TemplateStage` using a unique key and a patch. */
  updateTemplateStage?: Maybe<UpdateTemplateStagePayload>;
  /** Updates a single `TriggerQueue` using its globally unique id and a patch. */
  updateTriggerQueueByNodeId?: Maybe<UpdateTriggerQueuePayload>;
  /** Updates a single `TriggerQueue` using a unique key and a patch. */
  updateTriggerQueue?: Maybe<UpdateTriggerQueuePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserOrganisation` using its globally unique id and a patch. */
  updateUserOrganisationByNodeId?: Maybe<UpdateUserOrganisationPayload>;
  /** Updates a single `UserOrganisation` using a unique key and a patch. */
  updateUserOrganisation?: Maybe<UpdateUserOrganisationPayload>;
  /** Deletes a single `Application` using its globally unique id. */
  deleteApplicationByNodeId?: Maybe<DeleteApplicationPayload>;
  /** Deletes a single `Application` using a unique key. */
  deleteApplication?: Maybe<DeleteApplicationPayload>;
  /** Deletes a single `Application` using a unique key. */
  deleteApplicationBySerial?: Maybe<DeleteApplicationPayload>;
  /** Deletes a single `ApplicationSection` using its globally unique id. */
  deleteApplicationSectionByNodeId?: Maybe<DeleteApplicationSectionPayload>;
  /** Deletes a single `ApplicationSection` using a unique key. */
  deleteApplicationSection?: Maybe<DeleteApplicationSectionPayload>;
  /** Deletes a single `ApplicationStageHistory` using its globally unique id. */
  deleteApplicationStageHistoryByNodeId?: Maybe<DeleteApplicationStageHistoryPayload>;
  /** Deletes a single `ApplicationStageHistory` using a unique key. */
  deleteApplicationStageHistory?: Maybe<DeleteApplicationStageHistoryPayload>;
  /** Deletes a single `ApplicationStatusHistory` using its globally unique id. */
  deleteApplicationStatusHistoryByNodeId?: Maybe<DeleteApplicationStatusHistoryPayload>;
  /** Deletes a single `ApplicationStatusHistory` using a unique key. */
  deleteApplicationStatusHistory?: Maybe<DeleteApplicationStatusHistoryPayload>;
  /** Deletes a single `ElementTypePlugin` using its globally unique id. */
  deleteElementTypePluginByNodeId?: Maybe<DeleteElementTypePluginPayload>;
  /** Deletes a single `ElementTypePlugin` using a unique key. */
  deleteElementTypePlugin?: Maybe<DeleteElementTypePluginPayload>;
  /** Deletes a single `Organisation` using its globally unique id. */
  deleteOrganisationByNodeId?: Maybe<DeleteOrganisationPayload>;
  /** Deletes a single `Organisation` using a unique key. */
  deleteOrganisation?: Maybe<DeleteOrganisationPayload>;
  /** Deletes a single `PermissionJoin` using its globally unique id. */
  deletePermissionJoinByNodeId?: Maybe<DeletePermissionJoinPayload>;
  /** Deletes a single `PermissionJoin` using a unique key. */
  deletePermissionJoin?: Maybe<DeletePermissionJoinPayload>;
  /** Deletes a single `PermissionName` using its globally unique id. */
  deletePermissionNameByNodeId?: Maybe<DeletePermissionNamePayload>;
  /** Deletes a single `PermissionName` using a unique key. */
  deletePermissionName?: Maybe<DeletePermissionNamePayload>;
  /** Deletes a single `PermissionPolicy` using its globally unique id. */
  deletePermissionPolicyByNodeId?: Maybe<DeletePermissionPolicyPayload>;
  /** Deletes a single `PermissionPolicy` using a unique key. */
  deletePermissionPolicy?: Maybe<DeletePermissionPolicyPayload>;
  /** Deletes a single `Template` using its globally unique id. */
  deleteTemplateByNodeId?: Maybe<DeleteTemplatePayload>;
  /** Deletes a single `Template` using a unique key. */
  deleteTemplate?: Maybe<DeleteTemplatePayload>;
  /** Deletes a single `TemplateElement` using its globally unique id. */
  deleteTemplateElementByNodeId?: Maybe<DeleteTemplateElementPayload>;
  /** Deletes a single `TemplateElement` using a unique key. */
  deleteTemplateElement?: Maybe<DeleteTemplateElementPayload>;
  /** Deletes a single `TemplatePermission` using its globally unique id. */
  deleteTemplatePermissionByNodeId?: Maybe<DeleteTemplatePermissionPayload>;
  /** Deletes a single `TemplatePermission` using a unique key. */
  deleteTemplatePermission?: Maybe<DeleteTemplatePermissionPayload>;
  /** Deletes a single `TemplateSection` using its globally unique id. */
  deleteTemplateSectionByNodeId?: Maybe<DeleteTemplateSectionPayload>;
  /** Deletes a single `TemplateSection` using a unique key. */
  deleteTemplateSection?: Maybe<DeleteTemplateSectionPayload>;
  /** Deletes a single `TemplateStage` using its globally unique id. */
  deleteTemplateStageByNodeId?: Maybe<DeleteTemplateStagePayload>;
  /** Deletes a single `TemplateStage` using a unique key. */
  deleteTemplateStage?: Maybe<DeleteTemplateStagePayload>;
  /** Deletes a single `TriggerQueue` using its globally unique id. */
  deleteTriggerQueueByNodeId?: Maybe<DeleteTriggerQueuePayload>;
  /** Deletes a single `TriggerQueue` using a unique key. */
  deleteTriggerQueue?: Maybe<DeleteTriggerQueuePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserOrganisation` using its globally unique id. */
  deleteUserOrganisationByNodeId?: Maybe<DeleteUserOrganisationPayload>;
  /** Deletes a single `UserOrganisation` using a unique key. */
  deleteUserOrganisation?: Maybe<DeleteUserOrganisationPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateApplicationSectionArgs = {
  input: CreateApplicationSectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateApplicationStageHistoryArgs = {
  input: CreateApplicationStageHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateApplicationStatusHistoryArgs = {
  input: CreateApplicationStatusHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateElementTypePluginArgs = {
  input: CreateElementTypePluginInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganisationArgs = {
  input: CreateOrganisationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePermissionJoinArgs = {
  input: CreatePermissionJoinInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePermissionNameArgs = {
  input: CreatePermissionNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePermissionPolicyArgs = {
  input: CreatePermissionPolicyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemplateArgs = {
  input: CreateTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemplateElementArgs = {
  input: CreateTemplateElementInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemplatePermissionArgs = {
  input: CreateTemplatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemplateSectionArgs = {
  input: CreateTemplateSectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTemplateStageArgs = {
  input: CreateTemplateStageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTriggerQueueArgs = {
  input: CreateTriggerQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserOrganisationArgs = {
  input: CreateUserOrganisationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationByNodeIdArgs = {
  input: UpdateApplicationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationArgs = {
  input: UpdateApplicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationBySerialArgs = {
  input: UpdateApplicationBySerialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationSectionByNodeIdArgs = {
  input: UpdateApplicationSectionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationSectionArgs = {
  input: UpdateApplicationSectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationStageHistoryByNodeIdArgs = {
  input: UpdateApplicationStageHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationStageHistoryArgs = {
  input: UpdateApplicationStageHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationStatusHistoryByNodeIdArgs = {
  input: UpdateApplicationStatusHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateApplicationStatusHistoryArgs = {
  input: UpdateApplicationStatusHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateElementTypePluginByNodeIdArgs = {
  input: UpdateElementTypePluginByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateElementTypePluginArgs = {
  input: UpdateElementTypePluginInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganisationByNodeIdArgs = {
  input: UpdateOrganisationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganisationArgs = {
  input: UpdateOrganisationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionJoinByNodeIdArgs = {
  input: UpdatePermissionJoinByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionJoinArgs = {
  input: UpdatePermissionJoinInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionNameByNodeIdArgs = {
  input: UpdatePermissionNameByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionNameArgs = {
  input: UpdatePermissionNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionPolicyByNodeIdArgs = {
  input: UpdatePermissionPolicyByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionPolicyArgs = {
  input: UpdatePermissionPolicyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateByNodeIdArgs = {
  input: UpdateTemplateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateArgs = {
  input: UpdateTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateElementByNodeIdArgs = {
  input: UpdateTemplateElementByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateElementArgs = {
  input: UpdateTemplateElementInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplatePermissionByNodeIdArgs = {
  input: UpdateTemplatePermissionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplatePermissionArgs = {
  input: UpdateTemplatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateSectionByNodeIdArgs = {
  input: UpdateTemplateSectionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateSectionArgs = {
  input: UpdateTemplateSectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateStageByNodeIdArgs = {
  input: UpdateTemplateStageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTemplateStageArgs = {
  input: UpdateTemplateStageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTriggerQueueByNodeIdArgs = {
  input: UpdateTriggerQueueByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTriggerQueueArgs = {
  input: UpdateTriggerQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserOrganisationByNodeIdArgs = {
  input: UpdateUserOrganisationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserOrganisationArgs = {
  input: UpdateUserOrganisationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationByNodeIdArgs = {
  input: DeleteApplicationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationArgs = {
  input: DeleteApplicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationBySerialArgs = {
  input: DeleteApplicationBySerialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationSectionByNodeIdArgs = {
  input: DeleteApplicationSectionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationSectionArgs = {
  input: DeleteApplicationSectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationStageHistoryByNodeIdArgs = {
  input: DeleteApplicationStageHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationStageHistoryArgs = {
  input: DeleteApplicationStageHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationStatusHistoryByNodeIdArgs = {
  input: DeleteApplicationStatusHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteApplicationStatusHistoryArgs = {
  input: DeleteApplicationStatusHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteElementTypePluginByNodeIdArgs = {
  input: DeleteElementTypePluginByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteElementTypePluginArgs = {
  input: DeleteElementTypePluginInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganisationByNodeIdArgs = {
  input: DeleteOrganisationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganisationArgs = {
  input: DeleteOrganisationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionJoinByNodeIdArgs = {
  input: DeletePermissionJoinByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionJoinArgs = {
  input: DeletePermissionJoinInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionNameByNodeIdArgs = {
  input: DeletePermissionNameByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionNameArgs = {
  input: DeletePermissionNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionPolicyByNodeIdArgs = {
  input: DeletePermissionPolicyByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionPolicyArgs = {
  input: DeletePermissionPolicyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateByNodeIdArgs = {
  input: DeleteTemplateByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateArgs = {
  input: DeleteTemplateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateElementByNodeIdArgs = {
  input: DeleteTemplateElementByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateElementArgs = {
  input: DeleteTemplateElementInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplatePermissionByNodeIdArgs = {
  input: DeleteTemplatePermissionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplatePermissionArgs = {
  input: DeleteTemplatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateSectionByNodeIdArgs = {
  input: DeleteTemplateSectionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateSectionArgs = {
  input: DeleteTemplateSectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateStageByNodeIdArgs = {
  input: DeleteTemplateStageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTemplateStageArgs = {
  input: DeleteTemplateStageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTriggerQueueByNodeIdArgs = {
  input: DeleteTriggerQueueByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTriggerQueueArgs = {
  input: DeleteTriggerQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserOrganisationByNodeIdArgs = {
  input: DeleteUserOrganisationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserOrganisationArgs = {
  input: DeleteUserOrganisationInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Organisation = Node & {
  __typename?: 'Organisation';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `UserOrganisation`. */
  userOrganisations: UserOrganisationsConnection;
  /** Reads and enables pagination through a set of `Application`. */
  applicationsByOrgId: ApplicationsConnection;
};


export type OrganisationUserOrganisationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserOrganisationsOrderBy>>;
  condition?: Maybe<UserOrganisationCondition>;
  filter?: Maybe<UserOrganisationFilter>;
};


export type OrganisationApplicationsByOrgIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
  condition?: Maybe<ApplicationCondition>;
  filter?: Maybe<ApplicationFilter>;
};

/**
 * A condition to be used against `Organisation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OrganisationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `licenceNumber` field. */
  licenceNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['String']>;
};

/** A filter to be used against `Organisation` object types. All fields are combined with a logical ‘and.’ */
export type OrganisationFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `licenceNumber` field. */
  licenceNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `address` field. */
  address?: Maybe<StringFilter>;
  /** Filter by the object’s `userOrganisations` relation. */
  userOrganisations?: Maybe<OrganisationToManyUserOrganisationFilter>;
  /** Some related `userOrganisations` exist. */
  userOrganisationsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `applicationsByOrgId` relation. */
  applicationsByOrgId?: Maybe<OrganisationToManyApplicationFilter>;
  /** Some related `applicationsByOrgId` exist. */
  applicationsByOrgIdExist?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<OrganisationFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<OrganisationFilter>>;
  /** Negates the expression. */
  not?: Maybe<OrganisationFilter>;
};

/** An input for mutations affecting `Organisation` */
export type OrganisationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationOrganisationIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationOrgIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type OrganisationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `organisation` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type OrganisationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `organisation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type OrganisationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `application` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: ApplicationPatch;
};

/** The fields on `organisation` to look up the row to update. */
export type OrganisationOnApplicationForApplicationOrgIdFkeyUsingOrganisationPkeyUpdate = {
  /** An object where the defined keys will be set on the `organisation` being updated. */
  patch: UpdateOrganisationOnApplicationForApplicationOrgIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `userOrganisation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `userOrganisation` being updated. */
  patch: UserOrganisationPatch;
};

/** The fields on `organisation` to look up the row to update. */
export type OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingOrganisationPkeyUpdate = {
  /** An object where the defined keys will be set on the `organisation` being updated. */
  patch: UpdateOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `organisation` to look up the row to connect. */
export type OrganisationOrganisationPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `organisation` to look up the row to delete. */
export type OrganisationOrganisationPkeyDelete = {
  id: Scalars['Int'];
};

/** Represents an update to a `Organisation`. Fields that are set will be updated. */
export type OrganisationPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationOrganisationIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationOrgIdFkeyInverseInput>;
};

/** A connection to a list of `Organisation` values. */
export type OrganisationsConnection = {
  __typename?: 'OrganisationsConnection';
  /** A list of `Organisation` objects. */
  nodes: Array<Maybe<Organisation>>;
  /** A list of edges which contains the `Organisation` and cursor to aid in pagination. */
  edges: Array<OrganisationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organisation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organisation` edge in the connection. */
export type OrganisationsEdge = {
  __typename?: 'OrganisationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organisation` at the end of the edge. */
  node?: Maybe<Organisation>;
};

/** Methods to use when ordering `Organisation`. */
export enum OrganisationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  LicenceNumberAsc = 'LICENCE_NUMBER_ASC',
  LicenceNumberDesc = 'LICENCE_NUMBER_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against many `Application` object types. All fields are combined with a logical ‘and.’ */
export type OrganisationToManyApplicationFilter = {
  /** Every related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationFilter>;
  /** Some related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationFilter>;
  /** No related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationFilter>;
};

/** A filter to be used against many `UserOrganisation` object types. All fields are combined with a logical ‘and.’ */
export type OrganisationToManyUserOrganisationFilter = {
  /** Every related `UserOrganisation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<UserOrganisationFilter>;
  /** Some related `UserOrganisation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<UserOrganisationFilter>;
  /** No related `UserOrganisation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<UserOrganisationFilter>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

export type PermissionJoin = Node & {
  __typename?: 'PermissionJoin';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  /** Reads a single `User` that is related to this `PermissionJoin`. */
  user?: Maybe<User>;
  /** Reads a single `UserOrganisation` that is related to this `PermissionJoin`. */
  userOrganisation?: Maybe<UserOrganisation>;
  /** Reads a single `PermissionName` that is related to this `PermissionJoin`. */
  permissionName?: Maybe<PermissionName>;
};

/**
 * A condition to be used against `PermissionJoin` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PermissionJoinCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userOrganisationId` field. */
  userOrganisationId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `permissionNameId` field. */
  permissionNameId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `PermissionJoin` object types. All fields are combined with a logical ‘and.’ */
export type PermissionJoinFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
  /** Filter by the object’s `userOrganisationId` field. */
  userOrganisationId?: Maybe<IntFilter>;
  /** Filter by the object’s `permissionNameId` field. */
  permissionNameId?: Maybe<IntFilter>;
  /** Filter by the object’s `user` relation. */
  user?: Maybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `userOrganisation` relation. */
  userOrganisation?: Maybe<UserOrganisationFilter>;
  /** A related `userOrganisation` exists. */
  userOrganisationExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `permissionName` relation. */
  permissionName?: Maybe<PermissionNameFilter>;
  /** A related `permissionName` exists. */
  permissionNameExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PermissionJoinFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PermissionJoinFilter>>;
  /** Negates the expression. */
  not?: Maybe<PermissionJoinFilter>;
};

/** An input for mutations affecting `PermissionJoin` */
export type PermissionJoinInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type PermissionJoinNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `permissionJoin` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type PermissionJoinNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `permissionJoin` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionName` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionName` being updated. */
  patch: PermissionNamePatch;
};

/** The fields on `permissionJoin` to look up the row to update. */
export type PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionJoinPkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionJoin` being updated. */
  patch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UserPatch;
};

/** The fields on `permissionJoin` to look up the row to update. */
export type PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyUsingPermissionJoinPkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionJoin` being updated. */
  patch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `userOrganisation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `userOrganisation` being updated. */
  patch: UserOrganisationPatch;
};

/** The fields on `permissionJoin` to look up the row to update. */
export type PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingPermissionJoinPkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionJoin` being updated. */
  patch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `PermissionJoin`. Fields that are set will be updated. */
export type PermissionJoinPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** The fields on `permissionJoin` to look up the row to connect. */
export type PermissionJoinPermissionJoinPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `permissionJoin` to look up the row to delete. */
export type PermissionJoinPermissionJoinPkeyDelete = {
  id: Scalars['Int'];
};

/** Input for the nested mutation of `permissionName` in the `PermissionJoinInput` mutation. */
export type PermissionJoinPermissionNameIdFkeyInput = {
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  connectById?: Maybe<PermissionNamePermissionNamePkeyConnect>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  connectByNodeId?: Maybe<PermissionNameNodeIdConnect>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  deleteById?: Maybe<PermissionNamePermissionNamePkeyDelete>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  deleteByNodeId?: Maybe<PermissionNameNodeIdDelete>;
  /** The primary key(s) and patch data for `permissionName` for the far side of the relationship. */
  updateById?: Maybe<PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionNamePkeyUpdate>;
  /** The primary key(s) and patch data for `permissionName` for the far side of the relationship. */
  updateByNodeId?: Maybe<PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate>;
  /** A `PermissionNameInput` object that will be created and connected to this object. */
  create?: Maybe<PermissionJoinPermissionNameIdFkeyPermissionNameCreateInput>;
};

/** Input for the nested mutation of `permissionJoin` in the `PermissionNameInput` mutation. */
export type PermissionJoinPermissionNameIdFkeyInverseInput = {
  /** Flag indicating whether all other `permissionJoin` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  connectById?: Maybe<Array<PermissionJoinPermissionJoinPkeyConnect>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PermissionJoinNodeIdConnect>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  deleteById?: Maybe<Array<PermissionJoinPermissionJoinPkeyDelete>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PermissionJoinNodeIdDelete>>;
  /** The primary key(s) and patch data for `permissionJoin` for the far side of the relationship. */
  updateById?: Maybe<Array<PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionJoinPkeyUpdate>>;
  /** The primary key(s) and patch data for `permissionJoin` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate>>;
  /** A `PermissionJoinInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PermissionJoinPermissionNameIdFkeyPermissionJoinCreateInput>>;
};

/** The `permissionJoin` to be created by this mutation. */
export type PermissionJoinPermissionNameIdFkeyPermissionJoinCreateInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** The `permissionName` to be created by this mutation. */
export type PermissionJoinPermissionNameIdFkeyPermissionNameCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** A connection to a list of `PermissionJoin` values. */
export type PermissionJoinsConnection = {
  __typename?: 'PermissionJoinsConnection';
  /** A list of `PermissionJoin` objects. */
  nodes: Array<Maybe<PermissionJoin>>;
  /** A list of edges which contains the `PermissionJoin` and cursor to aid in pagination. */
  edges: Array<PermissionJoinsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PermissionJoin` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PermissionJoin` edge in the connection. */
export type PermissionJoinsEdge = {
  __typename?: 'PermissionJoinsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PermissionJoin` at the end of the edge. */
  node?: Maybe<PermissionJoin>;
};

/** Methods to use when ordering `PermissionJoin`. */
export enum PermissionJoinsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  UserOrganisationIdAsc = 'USER_ORGANISATION_ID_ASC',
  UserOrganisationIdDesc = 'USER_ORGANISATION_ID_DESC',
  PermissionNameIdAsc = 'PERMISSION_NAME_ID_ASC',
  PermissionNameIdDesc = 'PERMISSION_NAME_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Input for the nested mutation of `user` in the `PermissionJoinInput` mutation. */
export type PermissionJoinUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: Maybe<UserUserPkeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByUsername?: Maybe<UserUserUsernameKeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByNodeId?: Maybe<UserNodeIdConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: Maybe<UserUserPkeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByUsername?: Maybe<UserUserUsernameKeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByNodeId?: Maybe<UserNodeIdDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: Maybe<UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserPkeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByUsername?: Maybe<UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserUsernameKeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByNodeId?: Maybe<PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: Maybe<PermissionJoinUserIdFkeyUserCreateInput>;
};

/** Input for the nested mutation of `permissionJoin` in the `UserInput` mutation. */
export type PermissionJoinUserIdFkeyInverseInput = {
  /** Flag indicating whether all other `permissionJoin` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  connectById?: Maybe<Array<PermissionJoinPermissionJoinPkeyConnect>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PermissionJoinNodeIdConnect>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  deleteById?: Maybe<Array<PermissionJoinPermissionJoinPkeyDelete>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PermissionJoinNodeIdDelete>>;
  /** The primary key(s) and patch data for `permissionJoin` for the far side of the relationship. */
  updateById?: Maybe<Array<PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyUsingPermissionJoinPkeyUpdate>>;
  /** The primary key(s) and patch data for `permissionJoin` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<UserOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate>>;
  /** A `PermissionJoinInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PermissionJoinUserIdFkeyPermissionJoinCreateInput>>;
};

/** The `permissionJoin` to be created by this mutation. */
export type PermissionJoinUserIdFkeyPermissionJoinCreateInput = {
  id?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** The `user` to be created by this mutation. */
export type PermissionJoinUserIdFkeyUserCreateInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** Input for the nested mutation of `userOrganisation` in the `PermissionJoinInput` mutation. */
export type PermissionJoinUserOrganisationIdFkeyInput = {
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  connectById?: Maybe<UserOrganisationUserOrganisationPkeyConnect>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  connectByNodeId?: Maybe<UserOrganisationNodeIdConnect>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  deleteById?: Maybe<UserOrganisationUserOrganisationPkeyDelete>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<UserOrganisationNodeIdDelete>;
  /** The primary key(s) and patch data for `userOrganisation` for the far side of the relationship. */
  updateById?: Maybe<UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingUserOrganisationPkeyUpdate>;
  /** The primary key(s) and patch data for `userOrganisation` for the far side of the relationship. */
  updateByNodeId?: Maybe<PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate>;
  /** A `UserOrganisationInput` object that will be created and connected to this object. */
  create?: Maybe<PermissionJoinUserOrganisationIdFkeyUserOrganisationCreateInput>;
};

/** Input for the nested mutation of `permissionJoin` in the `UserOrganisationInput` mutation. */
export type PermissionJoinUserOrganisationIdFkeyInverseInput = {
  /** Flag indicating whether all other `permissionJoin` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  connectById?: Maybe<Array<PermissionJoinPermissionJoinPkeyConnect>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PermissionJoinNodeIdConnect>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  deleteById?: Maybe<Array<PermissionJoinPermissionJoinPkeyDelete>>;
  /** The primary key(s) for `permissionJoin` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PermissionJoinNodeIdDelete>>;
  /** The primary key(s) and patch data for `permissionJoin` for the far side of the relationship. */
  updateById?: Maybe<Array<PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingPermissionJoinPkeyUpdate>>;
  /** The primary key(s) and patch data for `permissionJoin` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate>>;
  /** A `PermissionJoinInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PermissionJoinUserOrganisationIdFkeyPermissionJoinCreateInput>>;
};

/** The `permissionJoin` to be created by this mutation. */
export type PermissionJoinUserOrganisationIdFkeyPermissionJoinCreateInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** The `userOrganisation` to be created by this mutation. */
export type PermissionJoinUserOrganisationIdFkeyUserOrganisationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

export type PermissionName = Node & {
  __typename?: 'PermissionName';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  /** Reads a single `PermissionPolicy` that is related to this `PermissionName`. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  /** Reads and enables pagination through a set of `PermissionJoin`. */
  permissionJoins: PermissionJoinsConnection;
  /** Reads and enables pagination through a set of `TemplatePermission`. */
  templatePermissions: TemplatePermissionsConnection;
};


export type PermissionNamePermissionJoinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
  condition?: Maybe<PermissionJoinCondition>;
  filter?: Maybe<PermissionJoinFilter>;
};


export type PermissionNameTemplatePermissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
  condition?: Maybe<TemplatePermissionCondition>;
  filter?: Maybe<TemplatePermissionFilter>;
};

/**
 * A condition to be used against `PermissionName` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PermissionNameCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `permissionPolicyId` field. */
  permissionPolicyId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `PermissionName` object types. All fields are combined with a logical ‘and.’ */
export type PermissionNameFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `permissionPolicyId` field. */
  permissionPolicyId?: Maybe<IntFilter>;
  /** Filter by the object’s `permissionJoins` relation. */
  permissionJoins?: Maybe<PermissionNameToManyPermissionJoinFilter>;
  /** Some related `permissionJoins` exist. */
  permissionJoinsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `templatePermissions` relation. */
  templatePermissions?: Maybe<PermissionNameToManyTemplatePermissionFilter>;
  /** Some related `templatePermissions` exist. */
  templatePermissionsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `permissionPolicy` relation. */
  permissionPolicy?: Maybe<PermissionPolicyFilter>;
  /** A related `permissionPolicy` exists. */
  permissionPolicyExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PermissionNameFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PermissionNameFilter>>;
  /** Negates the expression. */
  not?: Maybe<PermissionNameFilter>;
};

/** An input for mutations affecting `PermissionName` */
export type PermissionNameInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type PermissionNameNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `permissionName` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type PermissionNameNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `permissionName` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionJoin` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionJoin` being updated. */
  patch: PermissionJoinPatch;
};

/** The fields on `permissionName` to look up the row to update. */
export type PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionNamePkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionName` being updated. */
  patch: UpdatePermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionPolicy` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionPolicy` being updated. */
  patch: PermissionPolicyPatch;
};

/** The fields on `permissionName` to look up the row to update. */
export type PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionNamePkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionName` being updated. */
  patch: UpdatePermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templatePermission` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templatePermission` being updated. */
  patch: TemplatePermissionPatch;
};

/** The fields on `permissionName` to look up the row to update. */
export type PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingPermissionNamePkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionName` being updated. */
  patch: UpdatePermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `PermissionName`. Fields that are set will be updated. */
export type PermissionNamePatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** The fields on `permissionName` to look up the row to connect. */
export type PermissionNamePermissionNamePkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `permissionName` to look up the row to delete. */
export type PermissionNamePermissionNamePkeyDelete = {
  id: Scalars['Int'];
};

/** Input for the nested mutation of `permissionPolicy` in the `PermissionNameInput` mutation. */
export type PermissionNamePermissionPolicyIdFkeyInput = {
  /** The primary key(s) for `permissionPolicy` for the far side of the relationship. */
  connectById?: Maybe<PermissionPolicyPermissionPolicyPkeyConnect>;
  /** The primary key(s) for `permissionPolicy` for the far side of the relationship. */
  connectByNodeId?: Maybe<PermissionPolicyNodeIdConnect>;
  /** The primary key(s) for `permissionPolicy` for the far side of the relationship. */
  deleteById?: Maybe<PermissionPolicyPermissionPolicyPkeyDelete>;
  /** The primary key(s) for `permissionPolicy` for the far side of the relationship. */
  deleteByNodeId?: Maybe<PermissionPolicyNodeIdDelete>;
  /** The primary key(s) and patch data for `permissionPolicy` for the far side of the relationship. */
  updateById?: Maybe<PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionPolicyPkeyUpdate>;
  /** The primary key(s) and patch data for `permissionPolicy` for the far side of the relationship. */
  updateByNodeId?: Maybe<PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate>;
  /** A `PermissionPolicyInput` object that will be created and connected to this object. */
  create?: Maybe<PermissionNamePermissionPolicyIdFkeyPermissionPolicyCreateInput>;
};

/** Input for the nested mutation of `permissionName` in the `PermissionPolicyInput` mutation. */
export type PermissionNamePermissionPolicyIdFkeyInverseInput = {
  /** Flag indicating whether all other `permissionName` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  connectById?: Maybe<Array<PermissionNamePermissionNamePkeyConnect>>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PermissionNameNodeIdConnect>>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  deleteById?: Maybe<Array<PermissionNamePermissionNamePkeyDelete>>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PermissionNameNodeIdDelete>>;
  /** The primary key(s) and patch data for `permissionName` for the far side of the relationship. */
  updateById?: Maybe<Array<PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionNamePkeyUpdate>>;
  /** The primary key(s) and patch data for `permissionName` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate>>;
  /** A `PermissionNameInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PermissionNamePermissionPolicyIdFkeyPermissionNameCreateInput>>;
};

/** The `permissionName` to be created by this mutation. */
export type PermissionNamePermissionPolicyIdFkeyPermissionNameCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** The `permissionPolicy` to be created by this mutation. */
export type PermissionNamePermissionPolicyIdFkeyPermissionPolicyCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['JSON']>;
  type?: Maybe<PermissionPolicyType>;
  defaultRestrictions?: Maybe<Scalars['JSON']>;
  permissionNamesUsingId?: Maybe<PermissionNamePermissionPolicyIdFkeyInverseInput>;
};

/** A connection to a list of `PermissionName` values. */
export type PermissionNamesConnection = {
  __typename?: 'PermissionNamesConnection';
  /** A list of `PermissionName` objects. */
  nodes: Array<Maybe<PermissionName>>;
  /** A list of edges which contains the `PermissionName` and cursor to aid in pagination. */
  edges: Array<PermissionNamesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PermissionName` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PermissionName` edge in the connection. */
export type PermissionNamesEdge = {
  __typename?: 'PermissionNamesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PermissionName` at the end of the edge. */
  node?: Maybe<PermissionName>;
};

/** Methods to use when ordering `PermissionName`. */
export enum PermissionNamesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PermissionPolicyIdAsc = 'PERMISSION_POLICY_ID_ASC',
  PermissionPolicyIdDesc = 'PERMISSION_POLICY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against many `PermissionJoin` object types. All fields are combined with a logical ‘and.’ */
export type PermissionNameToManyPermissionJoinFilter = {
  /** Every related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<PermissionJoinFilter>;
  /** Some related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<PermissionJoinFilter>;
  /** No related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<PermissionJoinFilter>;
};

/** A filter to be used against many `TemplatePermission` object types. All fields are combined with a logical ‘and.’ */
export type PermissionNameToManyTemplatePermissionFilter = {
  /** Every related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<TemplatePermissionFilter>;
  /** Some related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<TemplatePermissionFilter>;
  /** No related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<TemplatePermissionFilter>;
};

/** A connection to a list of `PermissionPolicy` values. */
export type PermissionPoliciesConnection = {
  __typename?: 'PermissionPoliciesConnection';
  /** A list of `PermissionPolicy` objects. */
  nodes: Array<Maybe<PermissionPolicy>>;
  /** A list of edges which contains the `PermissionPolicy` and cursor to aid in pagination. */
  edges: Array<PermissionPoliciesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PermissionPolicy` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PermissionPolicy` edge in the connection. */
export type PermissionPoliciesEdge = {
  __typename?: 'PermissionPoliciesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PermissionPolicy` at the end of the edge. */
  node?: Maybe<PermissionPolicy>;
};

/** Methods to use when ordering `PermissionPolicy`. */
export enum PermissionPoliciesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  RulesAsc = 'RULES_ASC',
  RulesDesc = 'RULES_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  DefaultRestrictionsAsc = 'DEFAULT_RESTRICTIONS_ASC',
  DefaultRestrictionsDesc = 'DEFAULT_RESTRICTIONS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type PermissionPolicy = Node & {
  __typename?: 'PermissionPolicy';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['JSON']>;
  type?: Maybe<PermissionPolicyType>;
  defaultRestrictions?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `PermissionName`. */
  permissionNames: PermissionNamesConnection;
};


export type PermissionPolicyPermissionNamesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionNamesOrderBy>>;
  condition?: Maybe<PermissionNameCondition>;
  filter?: Maybe<PermissionNameFilter>;
};

/**
 * A condition to be used against `PermissionPolicy` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PermissionPolicyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `rules` field. */
  rules?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<PermissionPolicyType>;
  /** Checks for equality with the object’s `defaultRestrictions` field. */
  defaultRestrictions?: Maybe<Scalars['JSON']>;
};

/** A filter to be used against `PermissionPolicy` object types. All fields are combined with a logical ‘and.’ */
export type PermissionPolicyFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `rules` field. */
  rules?: Maybe<JsonFilter>;
  /** Filter by the object’s `type` field. */
  type?: Maybe<PermissionPolicyTypeFilter>;
  /** Filter by the object’s `defaultRestrictions` field. */
  defaultRestrictions?: Maybe<JsonFilter>;
  /** Filter by the object’s `permissionNames` relation. */
  permissionNames?: Maybe<PermissionPolicyToManyPermissionNameFilter>;
  /** Some related `permissionNames` exist. */
  permissionNamesExist?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PermissionPolicyFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PermissionPolicyFilter>>;
  /** Negates the expression. */
  not?: Maybe<PermissionPolicyFilter>;
};

/** An input for mutations affecting `PermissionPolicy` */
export type PermissionPolicyInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['JSON']>;
  type?: Maybe<PermissionPolicyType>;
  defaultRestrictions?: Maybe<Scalars['JSON']>;
  permissionNamesUsingId?: Maybe<PermissionNamePermissionPolicyIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type PermissionPolicyNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `permissionPolicy` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type PermissionPolicyNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `permissionPolicy` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionName` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionName` being updated. */
  patch: PermissionNamePatch;
};

/** The fields on `permissionPolicy` to look up the row to update. */
export type PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionPolicyPkeyUpdate = {
  /** An object where the defined keys will be set on the `permissionPolicy` being updated. */
  patch: UpdatePermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `PermissionPolicy`. Fields that are set will be updated. */
export type PermissionPolicyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['JSON']>;
  type?: Maybe<PermissionPolicyType>;
  defaultRestrictions?: Maybe<Scalars['JSON']>;
  permissionNamesUsingId?: Maybe<PermissionNamePermissionPolicyIdFkeyInverseInput>;
};

/** The fields on `permissionPolicy` to look up the row to connect. */
export type PermissionPolicyPermissionPolicyPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `permissionPolicy` to look up the row to delete. */
export type PermissionPolicyPermissionPolicyPkeyDelete = {
  id: Scalars['Int'];
};

/** A filter to be used against many `PermissionName` object types. All fields are combined with a logical ‘and.’ */
export type PermissionPolicyToManyPermissionNameFilter = {
  /** Every related `PermissionName` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<PermissionNameFilter>;
  /** Some related `PermissionName` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<PermissionNameFilter>;
  /** No related `PermissionName` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<PermissionNameFilter>;
};

export enum PermissionPolicyType {
  Review = 'REVIEW',
  Apply = 'APPLY',
  Assign = 'ASSIGN'
}

/** A filter to be used against PermissionPolicyType fields. All fields are combined with a logical ‘and.’ */
export type PermissionPolicyTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<PermissionPolicyType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<PermissionPolicyType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<PermissionPolicyType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<PermissionPolicyType>;
  /** Included in the specified list. */
  in?: Maybe<Array<PermissionPolicyType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<PermissionPolicyType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<PermissionPolicyType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<PermissionPolicyType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<PermissionPolicyType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<PermissionPolicyType>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `AllPermission`. */
  allPermissions?: Maybe<AllPermissionsConnection>;
  /** Reads and enables pagination through a set of `Application`. */
  applications?: Maybe<ApplicationsConnection>;
  /** Reads and enables pagination through a set of `ApplicationSection`. */
  applicationSections?: Maybe<ApplicationSectionsConnection>;
  /** Reads and enables pagination through a set of `ApplicationStageHistory`. */
  applicationStageHistories?: Maybe<ApplicationStageHistoriesConnection>;
  /** Reads and enables pagination through a set of `ApplicationStageStatusAll`. */
  applicationStageStatusAlls?: Maybe<ApplicationStageStatusAllsConnection>;
  /** Reads and enables pagination through a set of `ApplicationStatusHistory`. */
  applicationStatusHistories?: Maybe<ApplicationStatusHistoriesConnection>;
  /** Reads and enables pagination through a set of `ElementTypePlugin`. */
  elementTypePlugins?: Maybe<ElementTypePluginsConnection>;
  /** Reads and enables pagination through a set of `Organisation`. */
  organisations?: Maybe<OrganisationsConnection>;
  /** Reads and enables pagination through a set of `PermissionJoin`. */
  permissionJoins?: Maybe<PermissionJoinsConnection>;
  /** Reads and enables pagination through a set of `PermissionName`. */
  permissionNames?: Maybe<PermissionNamesConnection>;
  /** Reads and enables pagination through a set of `PermissionPolicy`. */
  permissionPolicies?: Maybe<PermissionPoliciesConnection>;
  /** Reads and enables pagination through a set of `Template`. */
  templates?: Maybe<TemplatesConnection>;
  /** Reads and enables pagination through a set of `TemplateElement`. */
  templateElements?: Maybe<TemplateElementsConnection>;
  /** Reads and enables pagination through a set of `TemplatePermission`. */
  templatePermissions?: Maybe<TemplatePermissionsConnection>;
  /** Reads and enables pagination through a set of `TemplateSection`. */
  templateSections?: Maybe<TemplateSectionsConnection>;
  /** Reads and enables pagination through a set of `TemplateStage`. */
  templateStages?: Maybe<TemplateStagesConnection>;
  /** Reads and enables pagination through a set of `TriggerQueue`. */
  triggerQueues?: Maybe<TriggerQueuesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
  /** Reads and enables pagination through a set of `UserOrgJoin`. */
  userOrgJoins?: Maybe<UserOrgJoinsConnection>;
  /** Reads and enables pagination through a set of `UserOrganisation`. */
  userOrganisations?: Maybe<UserOrganisationsConnection>;
  application?: Maybe<Application>;
  applicationBySerial?: Maybe<Application>;
  applicationSection?: Maybe<ApplicationSection>;
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  applicationStatusHistory?: Maybe<ApplicationStatusHistory>;
  elementTypePlugin?: Maybe<ElementTypePlugin>;
  organisation?: Maybe<Organisation>;
  permissionJoin?: Maybe<PermissionJoin>;
  permissionName?: Maybe<PermissionName>;
  permissionPolicy?: Maybe<PermissionPolicy>;
  template?: Maybe<Template>;
  templateElement?: Maybe<TemplateElement>;
  templatePermission?: Maybe<TemplatePermission>;
  templateSection?: Maybe<TemplateSection>;
  templateStage?: Maybe<TemplateStage>;
  triggerQueue?: Maybe<TriggerQueue>;
  user?: Maybe<User>;
  userByUsername?: Maybe<User>;
  userOrganisation?: Maybe<UserOrganisation>;
  applicationStatusHistoryApplicationId?: Maybe<Scalars['Int']>;
  jwtGetBigint?: Maybe<Scalars['BigInt']>;
  jwtGetBoolean?: Maybe<Scalars['Boolean']>;
  jwtGetText?: Maybe<Scalars['String']>;
  /** Reads a single `Application` using its globally unique `ID`. */
  applicationByNodeId?: Maybe<Application>;
  /** Reads a single `ApplicationSection` using its globally unique `ID`. */
  applicationSectionByNodeId?: Maybe<ApplicationSection>;
  /** Reads a single `ApplicationStageHistory` using its globally unique `ID`. */
  applicationStageHistoryByNodeId?: Maybe<ApplicationStageHistory>;
  /** Reads a single `ApplicationStatusHistory` using its globally unique `ID`. */
  applicationStatusHistoryByNodeId?: Maybe<ApplicationStatusHistory>;
  /** Reads a single `ElementTypePlugin` using its globally unique `ID`. */
  elementTypePluginByNodeId?: Maybe<ElementTypePlugin>;
  /** Reads a single `Organisation` using its globally unique `ID`. */
  organisationByNodeId?: Maybe<Organisation>;
  /** Reads a single `PermissionJoin` using its globally unique `ID`. */
  permissionJoinByNodeId?: Maybe<PermissionJoin>;
  /** Reads a single `PermissionName` using its globally unique `ID`. */
  permissionNameByNodeId?: Maybe<PermissionName>;
  /** Reads a single `PermissionPolicy` using its globally unique `ID`. */
  permissionPolicyByNodeId?: Maybe<PermissionPolicy>;
  /** Reads a single `Template` using its globally unique `ID`. */
  templateByNodeId?: Maybe<Template>;
  /** Reads a single `TemplateElement` using its globally unique `ID`. */
  templateElementByNodeId?: Maybe<TemplateElement>;
  /** Reads a single `TemplatePermission` using its globally unique `ID`. */
  templatePermissionByNodeId?: Maybe<TemplatePermission>;
  /** Reads a single `TemplateSection` using its globally unique `ID`. */
  templateSectionByNodeId?: Maybe<TemplateSection>;
  /** Reads a single `TemplateStage` using its globally unique `ID`. */
  templateStageByNodeId?: Maybe<TemplateStage>;
  /** Reads a single `TriggerQueue` using its globally unique `ID`. */
  triggerQueueByNodeId?: Maybe<TriggerQueue>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  /** Reads a single `UserOrganisation` using its globally unique `ID`. */
  userOrganisationByNodeId?: Maybe<UserOrganisation>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPermissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AllPermissionsOrderBy>>;
  condition?: Maybe<AllPermissionCondition>;
  filter?: Maybe<AllPermissionFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
  condition?: Maybe<ApplicationCondition>;
  filter?: Maybe<ApplicationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationSectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationSectionsOrderBy>>;
  condition?: Maybe<ApplicationSectionCondition>;
  filter?: Maybe<ApplicationSectionFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStageHistoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationStageHistoriesOrderBy>>;
  condition?: Maybe<ApplicationStageHistoryCondition>;
  filter?: Maybe<ApplicationStageHistoryFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStageStatusAllsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationStageStatusAllsOrderBy>>;
  condition?: Maybe<ApplicationStageStatusAllCondition>;
  filter?: Maybe<ApplicationStageStatusAllFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStatusHistoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationStatusHistoriesOrderBy>>;
  condition?: Maybe<ApplicationStatusHistoryCondition>;
  filter?: Maybe<ApplicationStatusHistoryFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryElementTypePluginsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ElementTypePluginsOrderBy>>;
  condition?: Maybe<ElementTypePluginCondition>;
  filter?: Maybe<ElementTypePluginFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganisationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OrganisationsOrderBy>>;
  condition?: Maybe<OrganisationCondition>;
  filter?: Maybe<OrganisationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionJoinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
  condition?: Maybe<PermissionJoinCondition>;
  filter?: Maybe<PermissionJoinFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionNamesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionNamesOrderBy>>;
  condition?: Maybe<PermissionNameCondition>;
  filter?: Maybe<PermissionNameFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionPoliciesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionPoliciesOrderBy>>;
  condition?: Maybe<PermissionPolicyCondition>;
  filter?: Maybe<PermissionPolicyFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplatesOrderBy>>;
  condition?: Maybe<TemplateCondition>;
  filter?: Maybe<TemplateFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateElementsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplateElementsOrderBy>>;
  condition?: Maybe<TemplateElementCondition>;
  filter?: Maybe<TemplateElementFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplatePermissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
  condition?: Maybe<TemplatePermissionCondition>;
  filter?: Maybe<TemplatePermissionFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateSectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplateSectionsOrderBy>>;
  condition?: Maybe<TemplateSectionCondition>;
  filter?: Maybe<TemplateSectionFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateStagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplateStagesOrderBy>>;
  condition?: Maybe<TemplateStageCondition>;
  filter?: Maybe<TemplateStageFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTriggerQueuesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TriggerQueuesOrderBy>>;
  condition?: Maybe<TriggerQueueCondition>;
  filter?: Maybe<TriggerQueueFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UsersOrderBy>>;
  condition?: Maybe<UserCondition>;
  filter?: Maybe<UserFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserOrgJoinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserOrgJoinsOrderBy>>;
  condition?: Maybe<UserOrgJoinCondition>;
  filter?: Maybe<UserOrgJoinFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserOrganisationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserOrganisationsOrderBy>>;
  condition?: Maybe<UserOrganisationCondition>;
  filter?: Maybe<UserOrganisationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationBySerialArgs = {
  serial: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationSectionArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStageHistoryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStatusHistoryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryElementTypePluginArgs = {
  code: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganisationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionJoinArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionNameArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionPolicyArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateElementArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplatePermissionArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateSectionArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateStageArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTriggerQueueArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserOrganisationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStatusHistoryApplicationIdArgs = {
  applicationStageHistoryId?: Maybe<Scalars['Int']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJwtGetBigintArgs = {
  jwtKey?: Maybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJwtGetBooleanArgs = {
  jwtKey?: Maybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJwtGetTextArgs = {
  jwtKey?: Maybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationSectionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStageHistoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationStatusHistoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryElementTypePluginByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganisationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionJoinByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionNameByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionPolicyByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateElementByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplatePermissionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateSectionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTemplateStageByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTriggerQueueByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserOrganisationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  like?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLike?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  likeInsensitive?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
};

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Contains the specified list of values. */
  contains?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Contained by the specified list of values. */
  containedBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Any array item is equal to the specified value. */
  anyEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: Maybe<Scalars['String']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: Maybe<Scalars['String']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: Maybe<Scalars['String']>;
};

export type Template = Node & {
  __typename?: 'Template';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `TemplateStage`. */
  templateStages: TemplateStagesConnection;
  /** Reads and enables pagination through a set of `TemplateSection`. */
  templateSections: TemplateSectionsConnection;
  /** Reads and enables pagination through a set of `TemplatePermission`. */
  templatePermissions: TemplatePermissionsConnection;
  /** Reads and enables pagination through a set of `Application`. */
  applications: ApplicationsConnection;
};


export type TemplateTemplateStagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplateStagesOrderBy>>;
  condition?: Maybe<TemplateStageCondition>;
  filter?: Maybe<TemplateStageFilter>;
};


export type TemplateTemplateSectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplateSectionsOrderBy>>;
  condition?: Maybe<TemplateSectionCondition>;
  filter?: Maybe<TemplateSectionFilter>;
};


export type TemplateTemplatePermissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
  condition?: Maybe<TemplatePermissionCondition>;
  filter?: Maybe<TemplatePermissionFilter>;
};


export type TemplateApplicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
  condition?: Maybe<ApplicationCondition>;
  filter?: Maybe<ApplicationFilter>;
};

/**
 * A condition to be used against `Template` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TemplateCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `code` field. */
  code?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isLinear` field. */
  isLinear?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `startMessage` field. */
  startMessage?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<TemplateStatus>;
  /** Checks for equality with the object’s `submissionMessage` field. */
  submissionMessage?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `versionTimestamp` field. */
  versionTimestamp?: Maybe<Scalars['Datetime']>;
};

export type TemplateElement = Node & {
  __typename?: 'TemplateElement';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  sectionId?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  elementTypePluginCode?: Maybe<Scalars['String']>;
  visibilityCondition?: Maybe<Scalars['JSON']>;
  isRequired?: Maybe<Scalars['JSON']>;
  isEditable?: Maybe<Scalars['JSON']>;
  validation?: Maybe<Scalars['JSON']>;
  validationMessage?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['JSON']>;
  /** Reads a single `TemplateSection` that is related to this `TemplateElement`. */
  section?: Maybe<TemplateSection>;
};

export enum TemplateElementCategory {
  Question = 'QUESTION',
  Information = 'INFORMATION'
}

/** A filter to be used against TemplateElementCategory fields. All fields are combined with a logical ‘and.’ */
export type TemplateElementCategoryFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<TemplateElementCategory>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<TemplateElementCategory>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<TemplateElementCategory>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<TemplateElementCategory>;
  /** Included in the specified list. */
  in?: Maybe<Array<TemplateElementCategory>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<TemplateElementCategory>>;
  /** Less than the specified value. */
  lessThan?: Maybe<TemplateElementCategory>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<TemplateElementCategory>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<TemplateElementCategory>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<TemplateElementCategory>;
};

/**
 * A condition to be used against `TemplateElement` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TemplateElementCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sectionId` field. */
  sectionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `code` field. */
  code?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `index` field. */
  index?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<TemplateElementCategory>;
  /** Checks for equality with the object’s `elementTypePluginCode` field. */
  elementTypePluginCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `visibilityCondition` field. */
  visibilityCondition?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `isRequired` field. */
  isRequired?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `isEditable` field. */
  isEditable?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `validation` field. */
  validation?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `validationMessage` field. */
  validationMessage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `parameters` field. */
  parameters?: Maybe<Scalars['JSON']>;
};

/** A filter to be used against `TemplateElement` object types. All fields are combined with a logical ‘and.’ */
export type TemplateElementFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `sectionId` field. */
  sectionId?: Maybe<IntFilter>;
  /** Filter by the object’s `code` field. */
  code?: Maybe<StringFilter>;
  /** Filter by the object’s `index` field. */
  index?: Maybe<IntFilter>;
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>;
  /** Filter by the object’s `category` field. */
  category?: Maybe<TemplateElementCategoryFilter>;
  /** Filter by the object’s `elementTypePluginCode` field. */
  elementTypePluginCode?: Maybe<StringFilter>;
  /** Filter by the object’s `visibilityCondition` field. */
  visibilityCondition?: Maybe<JsonFilter>;
  /** Filter by the object’s `isRequired` field. */
  isRequired?: Maybe<JsonFilter>;
  /** Filter by the object’s `isEditable` field. */
  isEditable?: Maybe<JsonFilter>;
  /** Filter by the object’s `validation` field. */
  validation?: Maybe<JsonFilter>;
  /** Filter by the object’s `validationMessage` field. */
  validationMessage?: Maybe<StringFilter>;
  /** Filter by the object’s `parameters` field. */
  parameters?: Maybe<JsonFilter>;
  /** Filter by the object’s `section` relation. */
  section?: Maybe<TemplateSectionFilter>;
  /** A related `section` exists. */
  sectionExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TemplateElementFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TemplateElementFilter>>;
  /** Negates the expression. */
  not?: Maybe<TemplateElementFilter>;
};

/** An input for mutations affecting `TemplateElement` */
export type TemplateElementInput = {
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  elementTypePluginCode?: Maybe<Scalars['String']>;
  visibilityCondition?: Maybe<Scalars['JSON']>;
  isRequired?: Maybe<Scalars['JSON']>;
  isEditable?: Maybe<Scalars['JSON']>;
  validation?: Maybe<Scalars['JSON']>;
  validationMessage?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['JSON']>;
  templateSectionToSectionId?: Maybe<TemplateElementSectionIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TemplateElementNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `templateElement` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TemplateElementNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `templateElement` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateSection` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: TemplateSectionPatch;
};

/** The fields on `templateElement` to look up the row to update. */
export type TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateElementPkeyUpdate = {
  /** An object where the defined keys will be set on the `templateElement` being updated. */
  patch: UpdateTemplateElementOnTemplateElementForTemplateElementSectionIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `TemplateElement`. Fields that are set will be updated. */
export type TemplateElementPatch = {
  id?: Maybe<Scalars['Int']>;
  sectionId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  elementTypePluginCode?: Maybe<Scalars['String']>;
  visibilityCondition?: Maybe<Scalars['JSON']>;
  isRequired?: Maybe<Scalars['JSON']>;
  isEditable?: Maybe<Scalars['JSON']>;
  validation?: Maybe<Scalars['JSON']>;
  validationMessage?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['JSON']>;
  templateSectionToSectionId?: Maybe<TemplateElementSectionIdFkeyInput>;
};

/** A connection to a list of `TemplateElement` values. */
export type TemplateElementsConnection = {
  __typename?: 'TemplateElementsConnection';
  /** A list of `TemplateElement` objects. */
  nodes: Array<Maybe<TemplateElement>>;
  /** A list of edges which contains the `TemplateElement` and cursor to aid in pagination. */
  edges: Array<TemplateElementsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TemplateElement` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** Input for the nested mutation of `templateSection` in the `TemplateElementInput` mutation. */
export type TemplateElementSectionIdFkeyInput = {
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectById?: Maybe<TemplateSectionTemplateSectionPkeyConnect>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateSectionNodeIdConnect>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteById?: Maybe<TemplateSectionTemplateSectionPkeyDelete>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateSectionNodeIdDelete>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateById?: Maybe<TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateSectionPkeyUpdate>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateByNodeId?: Maybe<TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate>;
  /** A `TemplateSectionInput` object that will be created and connected to this object. */
  create?: Maybe<TemplateElementSectionIdFkeyTemplateSectionCreateInput>;
};

/** Input for the nested mutation of `templateElement` in the `TemplateSectionInput` mutation. */
export type TemplateElementSectionIdFkeyInverseInput = {
  /** Flag indicating whether all other `templateElement` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `templateElement` for the far side of the relationship. */
  connectById?: Maybe<Array<TemplateElementTemplateElementPkeyConnect>>;
  /** The primary key(s) for `templateElement` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TemplateElementNodeIdConnect>>;
  /** The primary key(s) for `templateElement` for the far side of the relationship. */
  deleteById?: Maybe<Array<TemplateElementTemplateElementPkeyDelete>>;
  /** The primary key(s) for `templateElement` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TemplateElementNodeIdDelete>>;
  /** The primary key(s) and patch data for `templateElement` for the far side of the relationship. */
  updateById?: Maybe<Array<TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateElementPkeyUpdate>>;
  /** The primary key(s) and patch data for `templateElement` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate>>;
  /** A `TemplateElementInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TemplateElementSectionIdFkeyTemplateElementCreateInput>>;
};

/** The `templateElement` to be created by this mutation. */
export type TemplateElementSectionIdFkeyTemplateElementCreateInput = {
  id?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  elementTypePluginCode?: Maybe<Scalars['String']>;
  visibilityCondition?: Maybe<Scalars['JSON']>;
  isRequired?: Maybe<Scalars['JSON']>;
  isEditable?: Maybe<Scalars['JSON']>;
  validation?: Maybe<Scalars['JSON']>;
  validationMessage?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['JSON']>;
  templateSectionToSectionId?: Maybe<TemplateElementSectionIdFkeyInput>;
};

/** The `templateSection` to be created by this mutation. */
export type TemplateElementSectionIdFkeyTemplateSectionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** A `TemplateElement` edge in the connection. */
export type TemplateElementsEdge = {
  __typename?: 'TemplateElementsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TemplateElement` at the end of the edge. */
  node?: Maybe<TemplateElement>;
};

/** Methods to use when ordering `TemplateElement`. */
export enum TemplateElementsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SectionIdAsc = 'SECTION_ID_ASC',
  SectionIdDesc = 'SECTION_ID_DESC',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  ElementTypePluginCodeAsc = 'ELEMENT_TYPE_PLUGIN_CODE_ASC',
  ElementTypePluginCodeDesc = 'ELEMENT_TYPE_PLUGIN_CODE_DESC',
  VisibilityConditionAsc = 'VISIBILITY_CONDITION_ASC',
  VisibilityConditionDesc = 'VISIBILITY_CONDITION_DESC',
  IsRequiredAsc = 'IS_REQUIRED_ASC',
  IsRequiredDesc = 'IS_REQUIRED_DESC',
  IsEditableAsc = 'IS_EDITABLE_ASC',
  IsEditableDesc = 'IS_EDITABLE_DESC',
  ValidationAsc = 'VALIDATION_ASC',
  ValidationDesc = 'VALIDATION_DESC',
  ValidationMessageAsc = 'VALIDATION_MESSAGE_ASC',
  ValidationMessageDesc = 'VALIDATION_MESSAGE_DESC',
  ParametersAsc = 'PARAMETERS_ASC',
  ParametersDesc = 'PARAMETERS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The fields on `templateElement` to look up the row to connect. */
export type TemplateElementTemplateElementPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `templateElement` to look up the row to delete. */
export type TemplateElementTemplateElementPkeyDelete = {
  id: Scalars['Int'];
};

/** A filter to be used against `Template` object types. All fields are combined with a logical ‘and.’ */
export type TemplateFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `code` field. */
  code?: Maybe<StringFilter>;
  /** Filter by the object’s `isLinear` field. */
  isLinear?: Maybe<BooleanFilter>;
  /** Filter by the object’s `startMessage` field. */
  startMessage?: Maybe<JsonFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<TemplateStatusFilter>;
  /** Filter by the object’s `submissionMessage` field. */
  submissionMessage?: Maybe<JsonFilter>;
  /** Filter by the object’s `versionTimestamp` field. */
  versionTimestamp?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `templateStages` relation. */
  templateStages?: Maybe<TemplateToManyTemplateStageFilter>;
  /** Some related `templateStages` exist. */
  templateStagesExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `templateSections` relation. */
  templateSections?: Maybe<TemplateToManyTemplateSectionFilter>;
  /** Some related `templateSections` exist. */
  templateSectionsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `templatePermissions` relation. */
  templatePermissions?: Maybe<TemplateToManyTemplatePermissionFilter>;
  /** Some related `templatePermissions` exist. */
  templatePermissionsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `applications` relation. */
  applications?: Maybe<TemplateToManyApplicationFilter>;
  /** Some related `applications` exist. */
  applicationsExist?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TemplateFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TemplateFilter>>;
  /** Negates the expression. */
  not?: Maybe<TemplateFilter>;
};

/** An input for mutations affecting `Template` */
export type TemplateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TemplateNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `template` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TemplateNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `template` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `application` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: ApplicationPatch;
};

/** The fields on `template` to look up the row to update. */
export type TemplateOnApplicationForApplicationTemplateIdFkeyUsingTemplatePkeyUpdate = {
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: UpdateTemplateOnApplicationForApplicationTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templatePermission` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templatePermission` being updated. */
  patch: TemplatePermissionPatch;
};

/** The fields on `template` to look up the row to update. */
export type TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePkeyUpdate = {
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: UpdateTemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateSection` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: TemplateSectionPatch;
};

/** The fields on `template` to look up the row to update. */
export type TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplatePkeyUpdate = {
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: UpdateTemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateStage` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateStage` being updated. */
  patch: TemplateStagePatch;
};

/** The fields on `template` to look up the row to update. */
export type TemplateOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplatePkeyUpdate = {
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: UpdateTemplateOnTemplateStageForTemplateStageTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `Template`. Fields that are set will be updated. */
export type TemplatePatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

export type TemplatePermission = Node & {
  __typename?: 'TemplatePermission';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  permissionNameId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  /** Reads a single `PermissionName` that is related to this `TemplatePermission`. */
  permissionName?: Maybe<PermissionName>;
  /** Reads a single `Template` that is related to this `TemplatePermission`. */
  template?: Maybe<Template>;
  /** Reads a single `TemplateSection` that is related to this `TemplatePermission`. */
  templateSection?: Maybe<TemplateSection>;
};

/**
 * A condition to be used against `TemplatePermission` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TemplatePermissionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `permissionNameId` field. */
  permissionNameId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateId` field. */
  templateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateSectionId` field. */
  templateSectionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `restrictions` field. */
  restrictions?: Maybe<Scalars['JSON']>;
};

/** A filter to be used against `TemplatePermission` object types. All fields are combined with a logical ‘and.’ */
export type TemplatePermissionFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `permissionNameId` field. */
  permissionNameId?: Maybe<IntFilter>;
  /** Filter by the object’s `templateId` field. */
  templateId?: Maybe<IntFilter>;
  /** Filter by the object’s `templateSectionId` field. */
  templateSectionId?: Maybe<IntFilter>;
  /** Filter by the object’s `restrictions` field. */
  restrictions?: Maybe<JsonFilter>;
  /** Filter by the object’s `permissionName` relation. */
  permissionName?: Maybe<PermissionNameFilter>;
  /** A related `permissionName` exists. */
  permissionNameExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `template` relation. */
  template?: Maybe<TemplateFilter>;
  /** A related `template` exists. */
  templateExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `templateSection` relation. */
  templateSection?: Maybe<TemplateSectionFilter>;
  /** A related `templateSection` exists. */
  templateSectionExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TemplatePermissionFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TemplatePermissionFilter>>;
  /** Negates the expression. */
  not?: Maybe<TemplatePermissionFilter>;
};

/** An input for mutations affecting `TemplatePermission` */
export type TemplatePermissionInput = {
  id?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TemplatePermissionNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `templatePermission` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TemplatePermissionNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `templatePermission` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionName` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionName` being updated. */
  patch: PermissionNamePatch;
};

/** The fields on `templatePermission` to look up the row to update. */
export type TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingTemplatePermissionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templatePermission` being updated. */
  patch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `template` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: TemplatePatch;
};

/** The fields on `templatePermission` to look up the row to update. */
export type TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePermissionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templatePermission` being updated. */
  patch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateSection` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: TemplateSectionPatch;
};

/** The fields on `templatePermission` to look up the row to update. */
export type TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplatePermissionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templatePermission` being updated. */
  patch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `TemplatePermission`. Fields that are set will be updated. */
export type TemplatePermissionPatch = {
  id?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** Input for the nested mutation of `permissionName` in the `TemplatePermissionInput` mutation. */
export type TemplatePermissionPermissionNameIdFkeyInput = {
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  connectById?: Maybe<PermissionNamePermissionNamePkeyConnect>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  connectByNodeId?: Maybe<PermissionNameNodeIdConnect>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  deleteById?: Maybe<PermissionNamePermissionNamePkeyDelete>;
  /** The primary key(s) for `permissionName` for the far side of the relationship. */
  deleteByNodeId?: Maybe<PermissionNameNodeIdDelete>;
  /** The primary key(s) and patch data for `permissionName` for the far side of the relationship. */
  updateById?: Maybe<PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingPermissionNamePkeyUpdate>;
  /** The primary key(s) and patch data for `permissionName` for the far side of the relationship. */
  updateByNodeId?: Maybe<TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate>;
  /** A `PermissionNameInput` object that will be created and connected to this object. */
  create?: Maybe<TemplatePermissionPermissionNameIdFkeyPermissionNameCreateInput>;
};

/** Input for the nested mutation of `templatePermission` in the `PermissionNameInput` mutation. */
export type TemplatePermissionPermissionNameIdFkeyInverseInput = {
  /** Flag indicating whether all other `templatePermission` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  connectById?: Maybe<Array<TemplatePermissionTemplatePermissionPkeyConnect>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TemplatePermissionNodeIdConnect>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  deleteById?: Maybe<Array<TemplatePermissionTemplatePermissionPkeyDelete>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TemplatePermissionNodeIdDelete>>;
  /** The primary key(s) and patch data for `templatePermission` for the far side of the relationship. */
  updateById?: Maybe<Array<TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingTemplatePermissionPkeyUpdate>>;
  /** The primary key(s) and patch data for `templatePermission` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate>>;
  /** A `TemplatePermissionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TemplatePermissionPermissionNameIdFkeyTemplatePermissionCreateInput>>;
};

/** The `permissionName` to be created by this mutation. */
export type TemplatePermissionPermissionNameIdFkeyPermissionNameCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** The `templatePermission` to be created by this mutation. */
export type TemplatePermissionPermissionNameIdFkeyTemplatePermissionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** A connection to a list of `TemplatePermission` values. */
export type TemplatePermissionsConnection = {
  __typename?: 'TemplatePermissionsConnection';
  /** A list of `TemplatePermission` objects. */
  nodes: Array<Maybe<TemplatePermission>>;
  /** A list of edges which contains the `TemplatePermission` and cursor to aid in pagination. */
  edges: Array<TemplatePermissionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TemplatePermission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TemplatePermission` edge in the connection. */
export type TemplatePermissionsEdge = {
  __typename?: 'TemplatePermissionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TemplatePermission` at the end of the edge. */
  node?: Maybe<TemplatePermission>;
};

/** Methods to use when ordering `TemplatePermission`. */
export enum TemplatePermissionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PermissionNameIdAsc = 'PERMISSION_NAME_ID_ASC',
  PermissionNameIdDesc = 'PERMISSION_NAME_ID_DESC',
  TemplateIdAsc = 'TEMPLATE_ID_ASC',
  TemplateIdDesc = 'TEMPLATE_ID_DESC',
  TemplateSectionIdAsc = 'TEMPLATE_SECTION_ID_ASC',
  TemplateSectionIdDesc = 'TEMPLATE_SECTION_ID_DESC',
  RestrictionsAsc = 'RESTRICTIONS_ASC',
  RestrictionsDesc = 'RESTRICTIONS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Input for the nested mutation of `template` in the `TemplatePermissionInput` mutation. */
export type TemplatePermissionTemplateIdFkeyInput = {
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectById?: Maybe<TemplateTemplatePkeyConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateNodeIdConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteById?: Maybe<TemplateTemplatePkeyDelete>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateNodeIdDelete>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateById?: Maybe<TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePkeyUpdate>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateByNodeId?: Maybe<TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate>;
  /** A `TemplateInput` object that will be created and connected to this object. */
  create?: Maybe<TemplatePermissionTemplateIdFkeyTemplateCreateInput>;
};

/** Input for the nested mutation of `templatePermission` in the `TemplateInput` mutation. */
export type TemplatePermissionTemplateIdFkeyInverseInput = {
  /** Flag indicating whether all other `templatePermission` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  connectById?: Maybe<Array<TemplatePermissionTemplatePermissionPkeyConnect>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TemplatePermissionNodeIdConnect>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  deleteById?: Maybe<Array<TemplatePermissionTemplatePermissionPkeyDelete>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TemplatePermissionNodeIdDelete>>;
  /** The primary key(s) and patch data for `templatePermission` for the far side of the relationship. */
  updateById?: Maybe<Array<TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePermissionPkeyUpdate>>;
  /** The primary key(s) and patch data for `templatePermission` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate>>;
  /** A `TemplatePermissionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TemplatePermissionTemplateIdFkeyTemplatePermissionCreateInput>>;
};

/** The `template` to be created by this mutation. */
export type TemplatePermissionTemplateIdFkeyTemplateCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** The `templatePermission` to be created by this mutation. */
export type TemplatePermissionTemplateIdFkeyTemplatePermissionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** The fields on `templatePermission` to look up the row to connect. */
export type TemplatePermissionTemplatePermissionPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `templatePermission` to look up the row to delete. */
export type TemplatePermissionTemplatePermissionPkeyDelete = {
  id: Scalars['Int'];
};

/** Input for the nested mutation of `templateSection` in the `TemplatePermissionInput` mutation. */
export type TemplatePermissionTemplateSectionIdFkeyInput = {
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectById?: Maybe<TemplateSectionTemplateSectionPkeyConnect>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateSectionNodeIdConnect>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteById?: Maybe<TemplateSectionTemplateSectionPkeyDelete>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateSectionNodeIdDelete>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateById?: Maybe<TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateByNodeId?: Maybe<TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate>;
  /** A `TemplateSectionInput` object that will be created and connected to this object. */
  create?: Maybe<TemplatePermissionTemplateSectionIdFkeyTemplateSectionCreateInput>;
};

/** Input for the nested mutation of `templatePermission` in the `TemplateSectionInput` mutation. */
export type TemplatePermissionTemplateSectionIdFkeyInverseInput = {
  /** Flag indicating whether all other `templatePermission` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  connectById?: Maybe<Array<TemplatePermissionTemplatePermissionPkeyConnect>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TemplatePermissionNodeIdConnect>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  deleteById?: Maybe<Array<TemplatePermissionTemplatePermissionPkeyDelete>>;
  /** The primary key(s) for `templatePermission` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TemplatePermissionNodeIdDelete>>;
  /** The primary key(s) and patch data for `templatePermission` for the far side of the relationship. */
  updateById?: Maybe<Array<TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplatePermissionPkeyUpdate>>;
  /** The primary key(s) and patch data for `templatePermission` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate>>;
  /** A `TemplatePermissionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TemplatePermissionTemplateSectionIdFkeyTemplatePermissionCreateInput>>;
};

/** The `templatePermission` to be created by this mutation. */
export type TemplatePermissionTemplateSectionIdFkeyTemplatePermissionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** The `templateSection` to be created by this mutation. */
export type TemplatePermissionTemplateSectionIdFkeyTemplateSectionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** A connection to a list of `Template` values. */
export type TemplatesConnection = {
  __typename?: 'TemplatesConnection';
  /** A list of `Template` objects. */
  nodes: Array<Maybe<Template>>;
  /** A list of edges which contains the `Template` and cursor to aid in pagination. */
  edges: Array<TemplatesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Template` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type TemplateSection = Node & {
  __typename?: 'TemplateSection';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  /** Reads a single `Template` that is related to this `TemplateSection`. */
  template?: Maybe<Template>;
  /** Reads and enables pagination through a set of `TemplatePermission`. */
  templatePermissions: TemplatePermissionsConnection;
  /** Reads and enables pagination through a set of `TemplateElement`. */
  templateElementsBySectionId: TemplateElementsConnection;
  /** Reads and enables pagination through a set of `ApplicationSection`. */
  applicationSections: ApplicationSectionsConnection;
};


export type TemplateSectionTemplatePermissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
  condition?: Maybe<TemplatePermissionCondition>;
  filter?: Maybe<TemplatePermissionFilter>;
};


export type TemplateSectionTemplateElementsBySectionIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TemplateElementsOrderBy>>;
  condition?: Maybe<TemplateElementCondition>;
  filter?: Maybe<TemplateElementFilter>;
};


export type TemplateSectionApplicationSectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationSectionsOrderBy>>;
  condition?: Maybe<ApplicationSectionCondition>;
  filter?: Maybe<ApplicationSectionFilter>;
};

/**
 * A condition to be used against `TemplateSection` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TemplateSectionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `templateId` field. */
  templateId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `code` field. */
  code?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `index` field. */
  index?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `TemplateSection` object types. All fields are combined with a logical ‘and.’ */
export type TemplateSectionFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `templateId` field. */
  templateId?: Maybe<IntFilter>;
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>;
  /** Filter by the object’s `code` field. */
  code?: Maybe<StringFilter>;
  /** Filter by the object’s `index` field. */
  index?: Maybe<IntFilter>;
  /** Filter by the object’s `templatePermissions` relation. */
  templatePermissions?: Maybe<TemplateSectionToManyTemplatePermissionFilter>;
  /** Some related `templatePermissions` exist. */
  templatePermissionsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `templateElementsBySectionId` relation. */
  templateElementsBySectionId?: Maybe<TemplateSectionToManyTemplateElementFilter>;
  /** Some related `templateElementsBySectionId` exist. */
  templateElementsBySectionIdExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `applicationSections` relation. */
  applicationSections?: Maybe<TemplateSectionToManyApplicationSectionFilter>;
  /** Some related `applicationSections` exist. */
  applicationSectionsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `template` relation. */
  template?: Maybe<TemplateFilter>;
  /** A related `template` exists. */
  templateExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TemplateSectionFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TemplateSectionFilter>>;
  /** Negates the expression. */
  not?: Maybe<TemplateSectionFilter>;
};

/** An input for mutations affecting `TemplateSection` */
export type TemplateSectionInput = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TemplateSectionNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `templateSection` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TemplateSectionNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `templateSection` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `applicationSection` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `applicationSection` being updated. */
  patch: ApplicationSectionPatch;
};

/** The fields on `templateSection` to look up the row to update. */
export type TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: UpdateTemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templateElement` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templateElement` being updated. */
  patch: TemplateElementPatch;
};

/** The fields on `templateSection` to look up the row to update. */
export type TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateSectionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: UpdateTemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `templatePermission` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `templatePermission` being updated. */
  patch: TemplatePermissionPatch;
};

/** The fields on `templateSection` to look up the row to update. */
export type TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: UpdateTemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `template` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: TemplatePatch;
};

/** The fields on `templateSection` to look up the row to update. */
export type TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplateSectionPkeyUpdate = {
  /** An object where the defined keys will be set on the `templateSection` being updated. */
  patch: UpdateTemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `TemplateSection`. Fields that are set will be updated. */
export type TemplateSectionPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** A connection to a list of `TemplateSection` values. */
export type TemplateSectionsConnection = {
  __typename?: 'TemplateSectionsConnection';
  /** A list of `TemplateSection` objects. */
  nodes: Array<Maybe<TemplateSection>>;
  /** A list of edges which contains the `TemplateSection` and cursor to aid in pagination. */
  edges: Array<TemplateSectionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TemplateSection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TemplateSection` edge in the connection. */
export type TemplateSectionsEdge = {
  __typename?: 'TemplateSectionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TemplateSection` at the end of the edge. */
  node?: Maybe<TemplateSection>;
};

/** Methods to use when ordering `TemplateSection`. */
export enum TemplateSectionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TemplateIdAsc = 'TEMPLATE_ID_ASC',
  TemplateIdDesc = 'TEMPLATE_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Input for the nested mutation of `template` in the `TemplateSectionInput` mutation. */
export type TemplateSectionTemplateIdFkeyInput = {
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectById?: Maybe<TemplateTemplatePkeyConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateNodeIdConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteById?: Maybe<TemplateTemplatePkeyDelete>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateNodeIdDelete>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateById?: Maybe<TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplatePkeyUpdate>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateByNodeId?: Maybe<TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate>;
  /** A `TemplateInput` object that will be created and connected to this object. */
  create?: Maybe<TemplateSectionTemplateIdFkeyTemplateCreateInput>;
};

/** Input for the nested mutation of `templateSection` in the `TemplateInput` mutation. */
export type TemplateSectionTemplateIdFkeyInverseInput = {
  /** Flag indicating whether all other `templateSection` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectById?: Maybe<Array<TemplateSectionTemplateSectionPkeyConnect>>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TemplateSectionNodeIdConnect>>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteById?: Maybe<Array<TemplateSectionTemplateSectionPkeyDelete>>;
  /** The primary key(s) for `templateSection` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TemplateSectionNodeIdDelete>>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateById?: Maybe<Array<TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplateSectionPkeyUpdate>>;
  /** The primary key(s) and patch data for `templateSection` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate>>;
  /** A `TemplateSectionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TemplateSectionTemplateIdFkeyTemplateSectionCreateInput>>;
};

/** The `template` to be created by this mutation. */
export type TemplateSectionTemplateIdFkeyTemplateCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** The `templateSection` to be created by this mutation. */
export type TemplateSectionTemplateIdFkeyTemplateSectionCreateInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** The fields on `templateSection` to look up the row to connect. */
export type TemplateSectionTemplateSectionPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `templateSection` to look up the row to delete. */
export type TemplateSectionTemplateSectionPkeyDelete = {
  id: Scalars['Int'];
};

/** A filter to be used against many `ApplicationSection` object types. All fields are combined with a logical ‘and.’ */
export type TemplateSectionToManyApplicationSectionFilter = {
  /** Every related `ApplicationSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationSectionFilter>;
  /** Some related `ApplicationSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationSectionFilter>;
  /** No related `ApplicationSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationSectionFilter>;
};

/** A filter to be used against many `TemplateElement` object types. All fields are combined with a logical ‘and.’ */
export type TemplateSectionToManyTemplateElementFilter = {
  /** Every related `TemplateElement` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<TemplateElementFilter>;
  /** Some related `TemplateElement` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<TemplateElementFilter>;
  /** No related `TemplateElement` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<TemplateElementFilter>;
};

/** A filter to be used against many `TemplatePermission` object types. All fields are combined with a logical ‘and.’ */
export type TemplateSectionToManyTemplatePermissionFilter = {
  /** Every related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<TemplatePermissionFilter>;
  /** Some related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<TemplatePermissionFilter>;
  /** No related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<TemplatePermissionFilter>;
};

/** A `Template` edge in the connection. */
export type TemplatesEdge = {
  __typename?: 'TemplatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Template` at the end of the edge. */
  node?: Maybe<Template>;
};

/** Methods to use when ordering `Template`. */
export enum TemplatesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  IsLinearAsc = 'IS_LINEAR_ASC',
  IsLinearDesc = 'IS_LINEAR_DESC',
  StartMessageAsc = 'START_MESSAGE_ASC',
  StartMessageDesc = 'START_MESSAGE_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  SubmissionMessageAsc = 'SUBMISSION_MESSAGE_ASC',
  SubmissionMessageDesc = 'SUBMISSION_MESSAGE_DESC',
  VersionTimestampAsc = 'VERSION_TIMESTAMP_ASC',
  VersionTimestampDesc = 'VERSION_TIMESTAMP_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TemplateStage = Node & {
  __typename?: 'TemplateStage';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['Int']>;
  /** Reads a single `Template` that is related to this `TemplateStage`. */
  template?: Maybe<Template>;
  /** Reads and enables pagination through a set of `ApplicationStageHistory`. */
  applicationStageHistoriesByStageId: ApplicationStageHistoriesConnection;
};


export type TemplateStageApplicationStageHistoriesByStageIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationStageHistoriesOrderBy>>;
  condition?: Maybe<ApplicationStageHistoryCondition>;
  filter?: Maybe<ApplicationStageHistoryFilter>;
};

/**
 * A condition to be used against `TemplateStage` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TemplateStageCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `number` field. */
  number?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `templateId` field. */
  templateId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `TemplateStage` object types. All fields are combined with a logical ‘and.’ */
export type TemplateStageFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `number` field. */
  number?: Maybe<IntFilter>;
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `templateId` field. */
  templateId?: Maybe<IntFilter>;
  /** Filter by the object’s `applicationStageHistoriesByStageId` relation. */
  applicationStageHistoriesByStageId?: Maybe<TemplateStageToManyApplicationStageHistoryFilter>;
  /** Some related `applicationStageHistoriesByStageId` exist. */
  applicationStageHistoriesByStageIdExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `template` relation. */
  template?: Maybe<TemplateFilter>;
  /** A related `template` exists. */
  templateExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TemplateStageFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TemplateStageFilter>>;
  /** Negates the expression. */
  not?: Maybe<TemplateStageFilter>;
};

/** An input for mutations affecting `TemplateStage` */
export type TemplateStageInput = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateStageTemplateIdFkeyInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryStageIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TemplateStageNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `templateStage` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TemplateStageNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `templateStage` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `applicationStageHistory` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
  patch: ApplicationStageHistoryPatch;
};

/** The fields on `templateStage` to look up the row to update. */
export type TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingTemplateStagePkeyUpdate = {
  /** An object where the defined keys will be set on the `templateStage` being updated. */
  patch: UpdateTemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `template` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `template` being updated. */
  patch: TemplatePatch;
};

/** The fields on `templateStage` to look up the row to update. */
export type TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplateStagePkeyUpdate = {
  /** An object where the defined keys will be set on the `templateStage` being updated. */
  patch: UpdateTemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyPatch;
  id: Scalars['Int'];
};

/** Represents an update to a `TemplateStage`. Fields that are set will be updated. */
export type TemplateStagePatch = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateStageTemplateIdFkeyInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryStageIdFkeyInverseInput>;
};

/** A connection to a list of `TemplateStage` values. */
export type TemplateStagesConnection = {
  __typename?: 'TemplateStagesConnection';
  /** A list of `TemplateStage` objects. */
  nodes: Array<Maybe<TemplateStage>>;
  /** A list of edges which contains the `TemplateStage` and cursor to aid in pagination. */
  edges: Array<TemplateStagesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TemplateStage` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TemplateStage` edge in the connection. */
export type TemplateStagesEdge = {
  __typename?: 'TemplateStagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TemplateStage` at the end of the edge. */
  node?: Maybe<TemplateStage>;
};

/** Methods to use when ordering `TemplateStage`. */
export enum TemplateStagesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  TemplateIdAsc = 'TEMPLATE_ID_ASC',
  TemplateIdDesc = 'TEMPLATE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Input for the nested mutation of `template` in the `TemplateStageInput` mutation. */
export type TemplateStageTemplateIdFkeyInput = {
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectById?: Maybe<TemplateTemplatePkeyConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  connectByNodeId?: Maybe<TemplateNodeIdConnect>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteById?: Maybe<TemplateTemplatePkeyDelete>;
  /** The primary key(s) for `template` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TemplateNodeIdDelete>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateById?: Maybe<TemplateOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplatePkeyUpdate>;
  /** The primary key(s) and patch data for `template` for the far side of the relationship. */
  updateByNodeId?: Maybe<TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate>;
  /** A `TemplateInput` object that will be created and connected to this object. */
  create?: Maybe<TemplateStageTemplateIdFkeyTemplateCreateInput>;
};

/** Input for the nested mutation of `templateStage` in the `TemplateInput` mutation. */
export type TemplateStageTemplateIdFkeyInverseInput = {
  /** Flag indicating whether all other `templateStage` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  connectById?: Maybe<Array<TemplateStageTemplateStagePkeyConnect>>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TemplateStageNodeIdConnect>>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  deleteById?: Maybe<Array<TemplateStageTemplateStagePkeyDelete>>;
  /** The primary key(s) for `templateStage` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TemplateStageNodeIdDelete>>;
  /** The primary key(s) and patch data for `templateStage` for the far side of the relationship. */
  updateById?: Maybe<Array<TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplateStagePkeyUpdate>>;
  /** The primary key(s) and patch data for `templateStage` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TemplateOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate>>;
  /** A `TemplateStageInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TemplateStageTemplateIdFkeyTemplateStageCreateInput>>;
};

/** The `template` to be created by this mutation. */
export type TemplateStageTemplateIdFkeyTemplateCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** The `templateStage` to be created by this mutation. */
export type TemplateStageTemplateIdFkeyTemplateStageCreateInput = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateToTemplateId?: Maybe<TemplateStageTemplateIdFkeyInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryStageIdFkeyInverseInput>;
};

/** The fields on `templateStage` to look up the row to connect. */
export type TemplateStageTemplateStagePkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `templateStage` to look up the row to delete. */
export type TemplateStageTemplateStagePkeyDelete = {
  id: Scalars['Int'];
};

/** A filter to be used against many `ApplicationStageHistory` object types. All fields are combined with a logical ‘and.’ */
export type TemplateStageToManyApplicationStageHistoryFilter = {
  /** Every related `ApplicationStageHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationStageHistoryFilter>;
  /** Some related `ApplicationStageHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationStageHistoryFilter>;
  /** No related `ApplicationStageHistory` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationStageHistoryFilter>;
};

export enum TemplateStatus {
  Draft = 'DRAFT',
  Available = 'AVAILABLE',
  Disabled = 'DISABLED'
}

/** A filter to be used against TemplateStatus fields. All fields are combined with a logical ‘and.’ */
export type TemplateStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<TemplateStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<TemplateStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<TemplateStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<TemplateStatus>;
  /** Included in the specified list. */
  in?: Maybe<Array<TemplateStatus>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<TemplateStatus>>;
  /** Less than the specified value. */
  lessThan?: Maybe<TemplateStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<TemplateStatus>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<TemplateStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<TemplateStatus>;
};

/** The fields on `template` to look up the row to connect. */
export type TemplateTemplatePkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `template` to look up the row to delete. */
export type TemplateTemplatePkeyDelete = {
  id: Scalars['Int'];
};

/** A filter to be used against many `Application` object types. All fields are combined with a logical ‘and.’ */
export type TemplateToManyApplicationFilter = {
  /** Every related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationFilter>;
  /** Some related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationFilter>;
  /** No related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationFilter>;
};

/** A filter to be used against many `TemplatePermission` object types. All fields are combined with a logical ‘and.’ */
export type TemplateToManyTemplatePermissionFilter = {
  /** Every related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<TemplatePermissionFilter>;
  /** Some related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<TemplatePermissionFilter>;
  /** No related `TemplatePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<TemplatePermissionFilter>;
};

/** A filter to be used against many `TemplateSection` object types. All fields are combined with a logical ‘and.’ */
export type TemplateToManyTemplateSectionFilter = {
  /** Every related `TemplateSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<TemplateSectionFilter>;
  /** Some related `TemplateSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<TemplateSectionFilter>;
  /** No related `TemplateSection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<TemplateSectionFilter>;
};

/** A filter to be used against many `TemplateStage` object types. All fields are combined with a logical ‘and.’ */
export type TemplateToManyTemplateStageFilter = {
  /** Every related `TemplateStage` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<TemplateStageFilter>;
  /** Some related `TemplateStage` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<TemplateStageFilter>;
  /** No related `TemplateStage` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<TemplateStageFilter>;
};

export enum Trigger {
  OnApplicationCreate = 'ON_APPLICATION_CREATE',
  OnApplicationSubmit = 'ON_APPLICATION_SUBMIT',
  OnApplicationSave = 'ON_APPLICATION_SAVE',
  OnApplicationWithdrawn = 'ON_APPLICATION_WITHDRAWN',
  OnReviewCreate = 'ON_REVIEW_CREATE',
  OnReviewSubmit = 'ON_REVIEW_SUBMIT',
  OnReviewStart = 'ON_REVIEW_START',
  OnReviewAssign = 'ON_REVIEW_ASSIGN',
  OnApprovalSubmit = 'ON_APPROVAL_SUBMIT',
  OnScheduleTime = 'ON_SCHEDULE_TIME',
  Processing = 'PROCESSING',
  Error = 'ERROR'
}

/** A filter to be used against Trigger fields. All fields are combined with a logical ‘and.’ */
export type TriggerFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Trigger>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Trigger>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Trigger>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Trigger>;
  /** Included in the specified list. */
  in?: Maybe<Array<Trigger>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Trigger>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Trigger>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Trigger>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Trigger>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Trigger>;
};

export type TriggerQueue = Node & {
  __typename?: 'TriggerQueue';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  triggerType?: Maybe<Trigger>;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  status?: Maybe<TriggerQueueStatus>;
  log?: Maybe<Scalars['JSON']>;
};

/**
 * A condition to be used against `TriggerQueue` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TriggerQueueCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `triggerType` field. */
  triggerType?: Maybe<Trigger>;
  /** Checks for equality with the object’s `table` field. */
  table?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `recordId` field. */
  recordId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<TriggerQueueStatus>;
  /** Checks for equality with the object’s `log` field. */
  log?: Maybe<Scalars['JSON']>;
};

/** A filter to be used against `TriggerQueue` object types. All fields are combined with a logical ‘and.’ */
export type TriggerQueueFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `triggerType` field. */
  triggerType?: Maybe<TriggerFilter>;
  /** Filter by the object’s `table` field. */
  table?: Maybe<StringFilter>;
  /** Filter by the object’s `recordId` field. */
  recordId?: Maybe<IntFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<TriggerQueueStatusFilter>;
  /** Filter by the object’s `log` field. */
  log?: Maybe<JsonFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TriggerQueueFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TriggerQueueFilter>>;
  /** Negates the expression. */
  not?: Maybe<TriggerQueueFilter>;
};

/** An input for mutations affecting `TriggerQueue` */
export type TriggerQueueInput = {
  id?: Maybe<Scalars['Int']>;
  triggerType?: Maybe<Trigger>;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  status?: Maybe<TriggerQueueStatus>;
  log?: Maybe<Scalars['JSON']>;
};

/** Represents an update to a `TriggerQueue`. Fields that are set will be updated. */
export type TriggerQueuePatch = {
  id?: Maybe<Scalars['Int']>;
  triggerType?: Maybe<Trigger>;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  status?: Maybe<TriggerQueueStatus>;
  log?: Maybe<Scalars['JSON']>;
};

/** A connection to a list of `TriggerQueue` values. */
export type TriggerQueuesConnection = {
  __typename?: 'TriggerQueuesConnection';
  /** A list of `TriggerQueue` objects. */
  nodes: Array<Maybe<TriggerQueue>>;
  /** A list of edges which contains the `TriggerQueue` and cursor to aid in pagination. */
  edges: Array<TriggerQueuesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TriggerQueue` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TriggerQueue` edge in the connection. */
export type TriggerQueuesEdge = {
  __typename?: 'TriggerQueuesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TriggerQueue` at the end of the edge. */
  node?: Maybe<TriggerQueue>;
};

/** Methods to use when ordering `TriggerQueue`. */
export enum TriggerQueuesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TriggerTypeAsc = 'TRIGGER_TYPE_ASC',
  TriggerTypeDesc = 'TRIGGER_TYPE_DESC',
  TableAsc = 'TABLE_ASC',
  TableDesc = 'TABLE_DESC',
  RecordIdAsc = 'RECORD_ID_ASC',
  RecordIdDesc = 'RECORD_ID_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  LogAsc = 'LOG_ASC',
  LogDesc = 'LOG_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum TriggerQueueStatus {
  Triggered = 'TRIGGERED',
  ActionsDispatched = 'ACTIONS_DISPATCHED',
  Error = 'ERROR'
}

/** A filter to be used against TriggerQueueStatus fields. All fields are combined with a logical ‘and.’ */
export type TriggerQueueStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<TriggerQueueStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<TriggerQueueStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<TriggerQueueStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<TriggerQueueStatus>;
  /** Included in the specified list. */
  in?: Maybe<Array<TriggerQueueStatus>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<TriggerQueueStatus>>;
  /** Less than the specified value. */
  lessThan?: Maybe<TriggerQueueStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<TriggerQueueStatus>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<TriggerQueueStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<TriggerQueueStatus>;
};

/** All input for the `updateApplicationByNodeId` mutation. */
export type UpdateApplicationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Application` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Application` being updated. */
  patch: ApplicationPatch;
};

/** All input for the `updateApplicationBySerial` mutation. */
export type UpdateApplicationBySerialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Application` being updated. */
  patch: ApplicationPatch;
  serial: Scalars['String'];
};

/** All input for the `updateApplication` mutation. */
export type UpdateApplicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Application` being updated. */
  patch: ApplicationPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `application` being updated. */
export type UpdateApplicationOnApplicationForApplicationOrgIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `application` being updated. */
export type UpdateApplicationOnApplicationForApplicationTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `application` being updated. */
export type UpdateApplicationOnApplicationForApplicationUserIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `application` being updated. */
export type UpdateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `application` being updated. */
export type UpdateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outcome?: Maybe<ApplicationOutcome>;
  isActive?: Maybe<Scalars['Boolean']>;
  trigger?: Maybe<Trigger>;
  templateToTemplateId?: Maybe<ApplicationTemplateIdFkeyInput>;
  userToUserId?: Maybe<ApplicationUserIdFkeyInput>;
  organisationToOrgId?: Maybe<ApplicationOrgIdFkeyInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionApplicationIdFkeyInverseInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInverseInput>;
};

/** The output of our update `Application` mutation. */
export type UpdateApplicationPayload = {
  __typename?: 'UpdateApplicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Application` that was updated by this mutation. */
  application?: Maybe<Application>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `Application`. */
  template?: Maybe<Template>;
  /** Reads a single `User` that is related to this `Application`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `Application`. */
  org?: Maybe<Organisation>;
  /** An edge for our `Application`. May be used by Relay 1. */
  applicationEdge?: Maybe<ApplicationsEdge>;
};


/** The output of our update `Application` mutation. */
export type UpdateApplicationPayloadApplicationEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
};

/** All input for the `updateApplicationSectionByNodeId` mutation. */
export type UpdateApplicationSectionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ApplicationSection` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ApplicationSection` being updated. */
  patch: ApplicationSectionPatch;
};

/** All input for the `updateApplicationSection` mutation. */
export type UpdateApplicationSectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ApplicationSection` being updated. */
  patch: ApplicationSectionPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `applicationSection` being updated. */
export type UpdateApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  applicationToApplicationId?: Maybe<ApplicationSectionApplicationIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInput>;
};

/** An object where the defined keys will be set on the `applicationSection` being updated. */
export type UpdateApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  applicationToApplicationId?: Maybe<ApplicationSectionApplicationIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInput>;
};

/** The output of our update `ApplicationSection` mutation. */
export type UpdateApplicationSectionPayload = {
  __typename?: 'UpdateApplicationSectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationSection` that was updated by this mutation. */
  applicationSection?: Maybe<ApplicationSection>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Application` that is related to this `ApplicationSection`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateSection` that is related to this `ApplicationSection`. */
  templateSection?: Maybe<TemplateSection>;
  /** An edge for our `ApplicationSection`. May be used by Relay 1. */
  applicationSectionEdge?: Maybe<ApplicationSectionsEdge>;
};


/** The output of our update `ApplicationSection` mutation. */
export type UpdateApplicationSectionPayloadApplicationSectionEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationSectionsOrderBy>>;
};

/** All input for the `updateApplicationStageHistoryByNodeId` mutation. */
export type UpdateApplicationStageHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ApplicationStageHistory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ApplicationStageHistory` being updated. */
  patch: ApplicationStageHistoryPatch;
};

/** All input for the `updateApplicationStageHistory` mutation. */
export type UpdateApplicationStageHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ApplicationStageHistory` being updated. */
  patch: ApplicationStageHistoryPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
export type UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
export type UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `applicationStageHistory` being updated. */
export type UpdateApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  applicationId?: Maybe<Scalars['Int']>;
  stageId?: Maybe<Scalars['Int']>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationToApplicationId?: Maybe<ApplicationStageHistoryApplicationIdFkeyInput>;
  templateStageToStageId?: Maybe<ApplicationStageHistoryStageIdFkeyInput>;
  applicationStatusHistoriesUsingId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput>;
};

/** The output of our update `ApplicationStageHistory` mutation. */
export type UpdateApplicationStageHistoryPayload = {
  __typename?: 'UpdateApplicationStageHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStageHistory` that was updated by this mutation. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Application` that is related to this `ApplicationStageHistory`. */
  application?: Maybe<Application>;
  /** Reads a single `TemplateStage` that is related to this `ApplicationStageHistory`. */
  stage?: Maybe<TemplateStage>;
  /** An edge for our `ApplicationStageHistory`. May be used by Relay 1. */
  applicationStageHistoryEdge?: Maybe<ApplicationStageHistoriesEdge>;
};


/** The output of our update `ApplicationStageHistory` mutation. */
export type UpdateApplicationStageHistoryPayloadApplicationStageHistoryEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationStageHistoriesOrderBy>>;
};

/** All input for the `updateApplicationStatusHistoryByNodeId` mutation. */
export type UpdateApplicationStatusHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ApplicationStatusHistory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ApplicationStatusHistory` being updated. */
  patch: ApplicationStatusHistoryPatch;
};

/** All input for the `updateApplicationStatusHistory` mutation. */
export type UpdateApplicationStatusHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ApplicationStatusHistory` being updated. */
  patch: ApplicationStatusHistoryPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `applicationStatusHistory` being updated. */
export type UpdateApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<ApplicationStatus>;
  timeCreated?: Maybe<Scalars['Datetime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  applicationId?: Maybe<Scalars['Int']>;
  applicationStageHistoryToApplicationStageHistoryId?: Maybe<ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput>;
};

/** The output of our update `ApplicationStatusHistory` mutation. */
export type UpdateApplicationStatusHistoryPayload = {
  __typename?: 'UpdateApplicationStatusHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ApplicationStatusHistory` that was updated by this mutation. */
  applicationStatusHistory?: Maybe<ApplicationStatusHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ApplicationStageHistory` that is related to this `ApplicationStatusHistory`. */
  applicationStageHistory?: Maybe<ApplicationStageHistory>;
  /** An edge for our `ApplicationStatusHistory`. May be used by Relay 1. */
  applicationStatusHistoryEdge?: Maybe<ApplicationStatusHistoriesEdge>;
};


/** The output of our update `ApplicationStatusHistory` mutation. */
export type UpdateApplicationStatusHistoryPayloadApplicationStatusHistoryEdgeArgs = {
  orderBy?: Maybe<Array<ApplicationStatusHistoriesOrderBy>>;
};

/** All input for the `updateElementTypePluginByNodeId` mutation. */
export type UpdateElementTypePluginByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ElementTypePlugin` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ElementTypePlugin` being updated. */
  patch: ElementTypePluginPatch;
};

/** All input for the `updateElementTypePlugin` mutation. */
export type UpdateElementTypePluginInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ElementTypePlugin` being updated. */
  patch: ElementTypePluginPatch;
  code: Scalars['String'];
};

/** The output of our update `ElementTypePlugin` mutation. */
export type UpdateElementTypePluginPayload = {
  __typename?: 'UpdateElementTypePluginPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ElementTypePlugin` that was updated by this mutation. */
  elementTypePlugin?: Maybe<ElementTypePlugin>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ElementTypePlugin`. May be used by Relay 1. */
  elementTypePluginEdge?: Maybe<ElementTypePluginsEdge>;
};


/** The output of our update `ElementTypePlugin` mutation. */
export type UpdateElementTypePluginPayloadElementTypePluginEdgeArgs = {
  orderBy?: Maybe<Array<ElementTypePluginsOrderBy>>;
};

/** All input for the `updateOrganisationByNodeId` mutation. */
export type UpdateOrganisationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organisation` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organisation` being updated. */
  patch: OrganisationPatch;
};

/** All input for the `updateOrganisation` mutation. */
export type UpdateOrganisationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Organisation` being updated. */
  patch: OrganisationPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `organisation` being updated. */
export type UpdateOrganisationOnApplicationForApplicationOrgIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationOrganisationIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationOrgIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `organisation` being updated. */
export type UpdateOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationOrganisationIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationOrgIdFkeyInverseInput>;
};

/** The output of our update `Organisation` mutation. */
export type UpdateOrganisationPayload = {
  __typename?: 'UpdateOrganisationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organisation` that was updated by this mutation. */
  organisation?: Maybe<Organisation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Organisation`. May be used by Relay 1. */
  organisationEdge?: Maybe<OrganisationsEdge>;
};


/** The output of our update `Organisation` mutation. */
export type UpdateOrganisationPayloadOrganisationEdgeArgs = {
  orderBy?: Maybe<Array<OrganisationsOrderBy>>;
};

/** All input for the `updatePermissionJoinByNodeId` mutation. */
export type UpdatePermissionJoinByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionJoin` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PermissionJoin` being updated. */
  patch: PermissionJoinPatch;
};

/** All input for the `updatePermissionJoin` mutation. */
export type UpdatePermissionJoinInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PermissionJoin` being updated. */
  patch: PermissionJoinPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `permissionJoin` being updated. */
export type UpdatePermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** An object where the defined keys will be set on the `permissionJoin` being updated. */
export type UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  userOrganisationId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** An object where the defined keys will be set on the `permissionJoin` being updated. */
export type UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  userToUserId?: Maybe<PermissionJoinUserIdFkeyInput>;
  userOrganisationToUserOrganisationId?: Maybe<PermissionJoinUserOrganisationIdFkeyInput>;
  permissionNameToPermissionNameId?: Maybe<PermissionJoinPermissionNameIdFkeyInput>;
};

/** The output of our update `PermissionJoin` mutation. */
export type UpdatePermissionJoinPayload = {
  __typename?: 'UpdatePermissionJoinPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionJoin` that was updated by this mutation. */
  permissionJoin?: Maybe<PermissionJoin>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `PermissionJoin`. */
  user?: Maybe<User>;
  /** Reads a single `UserOrganisation` that is related to this `PermissionJoin`. */
  userOrganisation?: Maybe<UserOrganisation>;
  /** Reads a single `PermissionName` that is related to this `PermissionJoin`. */
  permissionName?: Maybe<PermissionName>;
  /** An edge for our `PermissionJoin`. May be used by Relay 1. */
  permissionJoinEdge?: Maybe<PermissionJoinsEdge>;
};


/** The output of our update `PermissionJoin` mutation. */
export type UpdatePermissionJoinPayloadPermissionJoinEdgeArgs = {
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
};

/** All input for the `updatePermissionNameByNodeId` mutation. */
export type UpdatePermissionNameByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionName` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PermissionName` being updated. */
  patch: PermissionNamePatch;
};

/** All input for the `updatePermissionName` mutation. */
export type UpdatePermissionNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PermissionName` being updated. */
  patch: PermissionNamePatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `permissionName` being updated. */
export type UpdatePermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `permissionName` being updated. */
export type UpdatePermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `permissionName` being updated. */
export type UpdatePermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permissionPolicyId?: Maybe<Scalars['Int']>;
  permissionPolicyToPermissionPolicyId?: Maybe<PermissionNamePermissionPolicyIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinPermissionNameIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionPermissionNameIdFkeyInverseInput>;
};

/** The output of our update `PermissionName` mutation. */
export type UpdatePermissionNamePayload = {
  __typename?: 'UpdatePermissionNamePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionName` that was updated by this mutation. */
  permissionName?: Maybe<PermissionName>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `PermissionPolicy` that is related to this `PermissionName`. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  /** An edge for our `PermissionName`. May be used by Relay 1. */
  permissionNameEdge?: Maybe<PermissionNamesEdge>;
};


/** The output of our update `PermissionName` mutation. */
export type UpdatePermissionNamePayloadPermissionNameEdgeArgs = {
  orderBy?: Maybe<Array<PermissionNamesOrderBy>>;
};

/** All input for the `updatePermissionPolicyByNodeId` mutation. */
export type UpdatePermissionPolicyByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionPolicy` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `PermissionPolicy` being updated. */
  patch: PermissionPolicyPatch;
};

/** All input for the `updatePermissionPolicy` mutation. */
export type UpdatePermissionPolicyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PermissionPolicy` being updated. */
  patch: PermissionPolicyPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `permissionPolicy` being updated. */
export type UpdatePermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['JSON']>;
  type?: Maybe<PermissionPolicyType>;
  defaultRestrictions?: Maybe<Scalars['JSON']>;
  permissionNamesUsingId?: Maybe<PermissionNamePermissionPolicyIdFkeyInverseInput>;
};

/** The output of our update `PermissionPolicy` mutation. */
export type UpdatePermissionPolicyPayload = {
  __typename?: 'UpdatePermissionPolicyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionPolicy` that was updated by this mutation. */
  permissionPolicy?: Maybe<PermissionPolicy>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `PermissionPolicy`. May be used by Relay 1. */
  permissionPolicyEdge?: Maybe<PermissionPoliciesEdge>;
};


/** The output of our update `PermissionPolicy` mutation. */
export type UpdatePermissionPolicyPayloadPermissionPolicyEdgeArgs = {
  orderBy?: Maybe<Array<PermissionPoliciesOrderBy>>;
};

/** All input for the `updateTemplateByNodeId` mutation. */
export type UpdateTemplateByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Template` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Template` being updated. */
  patch: TemplatePatch;
};

/** All input for the `updateTemplateElementByNodeId` mutation. */
export type UpdateTemplateElementByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplateElement` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TemplateElement` being updated. */
  patch: TemplateElementPatch;
};

/** All input for the `updateTemplateElement` mutation. */
export type UpdateTemplateElementInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TemplateElement` being updated. */
  patch: TemplateElementPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `templateElement` being updated. */
export type UpdateTemplateElementOnTemplateElementForTemplateElementSectionIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<TemplateElementCategory>;
  elementTypePluginCode?: Maybe<Scalars['String']>;
  visibilityCondition?: Maybe<Scalars['JSON']>;
  isRequired?: Maybe<Scalars['JSON']>;
  isEditable?: Maybe<Scalars['JSON']>;
  validation?: Maybe<Scalars['JSON']>;
  validationMessage?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['JSON']>;
  templateSectionToSectionId?: Maybe<TemplateElementSectionIdFkeyInput>;
};

/** The output of our update `TemplateElement` mutation. */
export type UpdateTemplateElementPayload = {
  __typename?: 'UpdateTemplateElementPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateElement` that was updated by this mutation. */
  templateElement?: Maybe<TemplateElement>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `TemplateSection` that is related to this `TemplateElement`. */
  section?: Maybe<TemplateSection>;
  /** An edge for our `TemplateElement`. May be used by Relay 1. */
  templateElementEdge?: Maybe<TemplateElementsEdge>;
};


/** The output of our update `TemplateElement` mutation. */
export type UpdateTemplateElementPayloadTemplateElementEdgeArgs = {
  orderBy?: Maybe<Array<TemplateElementsOrderBy>>;
};

/** All input for the `updateTemplate` mutation. */
export type UpdateTemplateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Template` being updated. */
  patch: TemplatePatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `template` being updated. */
export type UpdateTemplateOnApplicationForApplicationTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `template` being updated. */
export type UpdateTemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `template` being updated. */
export type UpdateTemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `template` being updated. */
export type UpdateTemplateOnTemplateStageForTemplateStageTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  isLinear?: Maybe<Scalars['Boolean']>;
  startMessage?: Maybe<Scalars['JSON']>;
  status?: Maybe<TemplateStatus>;
  submissionMessage?: Maybe<Scalars['JSON']>;
  versionTimestamp?: Maybe<Scalars['Datetime']>;
  templateStagesUsingId?: Maybe<TemplateStageTemplateIdFkeyInverseInput>;
  templateSectionsUsingId?: Maybe<TemplateSectionTemplateIdFkeyInverseInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationTemplateIdFkeyInverseInput>;
};

/** The output of our update `Template` mutation. */
export type UpdateTemplatePayload = {
  __typename?: 'UpdateTemplatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Template` that was updated by this mutation. */
  template?: Maybe<Template>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Template`. May be used by Relay 1. */
  templateEdge?: Maybe<TemplatesEdge>;
};


/** The output of our update `Template` mutation. */
export type UpdateTemplatePayloadTemplateEdgeArgs = {
  orderBy?: Maybe<Array<TemplatesOrderBy>>;
};

/** All input for the `updateTemplatePermissionByNodeId` mutation. */
export type UpdateTemplatePermissionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplatePermission` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TemplatePermission` being updated. */
  patch: TemplatePermissionPatch;
};

/** All input for the `updateTemplatePermission` mutation. */
export type UpdateTemplatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TemplatePermission` being updated. */
  patch: TemplatePermissionPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `templatePermission` being updated. */
export type UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** An object where the defined keys will be set on the `templatePermission` being updated. */
export type UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templateSectionId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** An object where the defined keys will be set on the `templatePermission` being updated. */
export type UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  permissionNameId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  restrictions?: Maybe<Scalars['JSON']>;
  permissionNameToPermissionNameId?: Maybe<TemplatePermissionPermissionNameIdFkeyInput>;
  templateToTemplateId?: Maybe<TemplatePermissionTemplateIdFkeyInput>;
  templateSectionToTemplateSectionId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInput>;
};

/** The output of our update `TemplatePermission` mutation. */
export type UpdateTemplatePermissionPayload = {
  __typename?: 'UpdateTemplatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplatePermission` that was updated by this mutation. */
  templatePermission?: Maybe<TemplatePermission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `PermissionName` that is related to this `TemplatePermission`. */
  permissionName?: Maybe<PermissionName>;
  /** Reads a single `Template` that is related to this `TemplatePermission`. */
  template?: Maybe<Template>;
  /** Reads a single `TemplateSection` that is related to this `TemplatePermission`. */
  templateSection?: Maybe<TemplateSection>;
  /** An edge for our `TemplatePermission`. May be used by Relay 1. */
  templatePermissionEdge?: Maybe<TemplatePermissionsEdge>;
};


/** The output of our update `TemplatePermission` mutation. */
export type UpdateTemplatePermissionPayloadTemplatePermissionEdgeArgs = {
  orderBy?: Maybe<Array<TemplatePermissionsOrderBy>>;
};

/** All input for the `updateTemplateSectionByNodeId` mutation. */
export type UpdateTemplateSectionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplateSection` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TemplateSection` being updated. */
  patch: TemplateSectionPatch;
};

/** All input for the `updateTemplateSection` mutation. */
export type UpdateTemplateSectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TemplateSection` being updated. */
  patch: TemplateSectionPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `templateSection` being updated. */
export type UpdateTemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `templateSection` being updated. */
export type UpdateTemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `templateSection` being updated. */
export type UpdateTemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `templateSection` being updated. */
export type UpdateTemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateSectionTemplateIdFkeyInput>;
  templatePermissionsUsingId?: Maybe<TemplatePermissionTemplateSectionIdFkeyInverseInput>;
  templateElementsUsingId?: Maybe<TemplateElementSectionIdFkeyInverseInput>;
  applicationSectionsUsingId?: Maybe<ApplicationSectionTemplateSectionIdFkeyInverseInput>;
};

/** The output of our update `TemplateSection` mutation. */
export type UpdateTemplateSectionPayload = {
  __typename?: 'UpdateTemplateSectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateSection` that was updated by this mutation. */
  templateSection?: Maybe<TemplateSection>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `TemplateSection`. */
  template?: Maybe<Template>;
  /** An edge for our `TemplateSection`. May be used by Relay 1. */
  templateSectionEdge?: Maybe<TemplateSectionsEdge>;
};


/** The output of our update `TemplateSection` mutation. */
export type UpdateTemplateSectionPayloadTemplateSectionEdgeArgs = {
  orderBy?: Maybe<Array<TemplateSectionsOrderBy>>;
};

/** All input for the `updateTemplateStageByNodeId` mutation. */
export type UpdateTemplateStageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TemplateStage` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TemplateStage` being updated. */
  patch: TemplateStagePatch;
};

/** All input for the `updateTemplateStage` mutation. */
export type UpdateTemplateStageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TemplateStage` being updated. */
  patch: TemplateStagePatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `templateStage` being updated. */
export type UpdateTemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['Int']>;
  templateToTemplateId?: Maybe<TemplateStageTemplateIdFkeyInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryStageIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `templateStage` being updated. */
export type UpdateTemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templateToTemplateId?: Maybe<TemplateStageTemplateIdFkeyInput>;
  applicationStageHistoriesUsingId?: Maybe<ApplicationStageHistoryStageIdFkeyInverseInput>;
};

/** The output of our update `TemplateStage` mutation. */
export type UpdateTemplateStagePayload = {
  __typename?: 'UpdateTemplateStagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TemplateStage` that was updated by this mutation. */
  templateStage?: Maybe<TemplateStage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Template` that is related to this `TemplateStage`. */
  template?: Maybe<Template>;
  /** An edge for our `TemplateStage`. May be used by Relay 1. */
  templateStageEdge?: Maybe<TemplateStagesEdge>;
};


/** The output of our update `TemplateStage` mutation. */
export type UpdateTemplateStagePayloadTemplateStageEdgeArgs = {
  orderBy?: Maybe<Array<TemplateStagesOrderBy>>;
};

/** All input for the `updateTriggerQueueByNodeId` mutation. */
export type UpdateTriggerQueueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TriggerQueue` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TriggerQueue` being updated. */
  patch: TriggerQueuePatch;
};

/** All input for the `updateTriggerQueue` mutation. */
export type UpdateTriggerQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TriggerQueue` being updated. */
  patch: TriggerQueuePatch;
  id: Scalars['Int'];
};

/** The output of our update `TriggerQueue` mutation. */
export type UpdateTriggerQueuePayload = {
  __typename?: 'UpdateTriggerQueuePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `TriggerQueue` that was updated by this mutation. */
  triggerQueue?: Maybe<TriggerQueue>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `TriggerQueue`. May be used by Relay 1. */
  triggerQueueEdge?: Maybe<TriggerQueuesEdge>;
};


/** The output of our update `TriggerQueue` mutation. */
export type UpdateTriggerQueuePayloadTriggerQueueEdgeArgs = {
  orderBy?: Maybe<Array<TriggerQueuesOrderBy>>;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  username: Scalars['String'];
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnApplicationForApplicationUserIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** All input for the `updateUserOrganisationByNodeId` mutation. */
export type UpdateUserOrganisationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserOrganisation` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `UserOrganisation` being updated. */
  patch: UserOrganisationPatch;
};

/** All input for the `updateUserOrganisation` mutation. */
export type UpdateUserOrganisationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `UserOrganisation` being updated. */
  patch: UserOrganisationPatch;
  id: Scalars['Int'];
};

/** An object where the defined keys will be set on the `userOrganisation` being updated. */
export type UpdateUserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `userOrganisation` being updated. */
export type UpdateUserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `userOrganisation` being updated. */
export type UpdateUserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyPatch = {
  id?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** The output of our update `UserOrganisation` mutation. */
export type UpdateUserOrganisationPayload = {
  __typename?: 'UpdateUserOrganisationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `UserOrganisation` that was updated by this mutation. */
  userOrganisation?: Maybe<UserOrganisation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserOrganisation`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `UserOrganisation`. */
  organisation?: Maybe<Organisation>;
  /** An edge for our `UserOrganisation`. May be used by Relay 1. */
  userOrganisationEdge?: Maybe<UserOrganisationsEdge>;
};


/** The output of our update `UserOrganisation` mutation. */
export type UpdateUserOrganisationPayloadUserOrganisationEdgeArgs = {
  orderBy?: Maybe<Array<UserOrganisationsOrderBy>>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `UserOrganisation`. */
  userOrganisations: UserOrganisationsConnection;
  /** Reads and enables pagination through a set of `PermissionJoin`. */
  permissionJoins: PermissionJoinsConnection;
  /** Reads and enables pagination through a set of `Application`. */
  applications: ApplicationsConnection;
};


export type UserUserOrganisationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UserOrganisationsOrderBy>>;
  condition?: Maybe<UserOrganisationCondition>;
  filter?: Maybe<UserOrganisationFilter>;
};


export type UserPermissionJoinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
  condition?: Maybe<PermissionJoinCondition>;
  filter?: Maybe<PermissionJoinFilter>;
};


export type UserApplicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ApplicationsOrderBy>>;
  condition?: Maybe<ApplicationCondition>;
  filter?: Maybe<ApplicationFilter>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dateOfBirth` field. */
  dateOfBirth?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `passwordHash` field. */
  passwordHash?: Maybe<Scalars['String']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `firstName` field. */
  firstName?: Maybe<StringFilter>;
  /** Filter by the object’s `lastName` field. */
  lastName?: Maybe<StringFilter>;
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  email?: Maybe<StringFilter>;
  /** Filter by the object’s `dateOfBirth` field. */
  dateOfBirth?: Maybe<DateFilter>;
  /** Filter by the object’s `passwordHash` field. */
  passwordHash?: Maybe<StringFilter>;
  /** Filter by the object’s `userOrganisations` relation. */
  userOrganisations?: Maybe<UserToManyUserOrganisationFilter>;
  /** Some related `userOrganisations` exist. */
  userOrganisationsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `permissionJoins` relation. */
  permissionJoins?: Maybe<UserToManyPermissionJoinFilter>;
  /** Some related `permissionJoins` exist. */
  permissionJoinsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `applications` relation. */
  applications?: Maybe<UserToManyApplicationFilter>;
  /** Some related `applications` exist. */
  applicationsExist?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserFilter>>;
  /** Negates the expression. */
  not?: Maybe<UserFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type UserNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type UserNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `user` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOnApplicationForApplicationUserIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `application` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `application` being updated. */
  patch: ApplicationPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnApplicationForApplicationUserIdFkeyUsingUserPkeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnApplicationForApplicationUserIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to update. */
export type UserOnApplicationForApplicationUserIdFkeyUsingUserUsernameKeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnApplicationForApplicationUserIdFkeyPatch;
  username: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionJoin` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionJoin` being updated. */
  patch: PermissionJoinPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserPkeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to update. */
export type UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserUsernameKeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  username: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `userOrganisation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `userOrganisation` being updated. */
  patch: UserOrganisationPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserPkeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserUsernameKeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  username: Scalars['String'];
};

export type UserOrganisation = Node & {
  __typename?: 'UserOrganisation';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  /** Reads a single `User` that is related to this `UserOrganisation`. */
  user?: Maybe<User>;
  /** Reads a single `Organisation` that is related to this `UserOrganisation`. */
  organisation?: Maybe<Organisation>;
  /** Reads and enables pagination through a set of `PermissionJoin`. */
  permissionJoins: PermissionJoinsConnection;
};


export type UserOrganisationPermissionJoinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PermissionJoinsOrderBy>>;
  condition?: Maybe<PermissionJoinCondition>;
  filter?: Maybe<PermissionJoinFilter>;
};

/**
 * A condition to be used against `UserOrganisation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserOrganisationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `organisationId` field. */
  organisationId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `userRole` field. */
  userRole?: Maybe<Scalars['String']>;
};

/** A filter to be used against `UserOrganisation` object types. All fields are combined with a logical ‘and.’ */
export type UserOrganisationFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
  /** Filter by the object’s `organisationId` field. */
  organisationId?: Maybe<IntFilter>;
  /** Filter by the object’s `userRole` field. */
  userRole?: Maybe<StringFilter>;
  /** Filter by the object’s `permissionJoins` relation. */
  permissionJoins?: Maybe<UserOrganisationToManyPermissionJoinFilter>;
  /** Some related `permissionJoins` exist. */
  permissionJoinsExist?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `user` relation. */
  user?: Maybe<UserFilter>;
  /** A related `user` exists. */
  userExists?: Maybe<Scalars['Boolean']>;
  /** Filter by the object’s `organisation` relation. */
  organisation?: Maybe<OrganisationFilter>;
  /** A related `organisation` exists. */
  organisationExists?: Maybe<Scalars['Boolean']>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserOrganisationFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserOrganisationFilter>>;
  /** Negates the expression. */
  not?: Maybe<UserOrganisationFilter>;
};

/** An input for mutations affecting `UserOrganisation` */
export type UserOrganisationInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type UserOrganisationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `userOrganisation` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type UserOrganisationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `userOrganisation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `permissionJoin` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `permissionJoin` being updated. */
  patch: PermissionJoinPatch;
};

/** The fields on `userOrganisation` to look up the row to update. */
export type UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingUserOrganisationPkeyUpdate = {
  /** An object where the defined keys will be set on the `userOrganisation` being updated. */
  patch: UpdateUserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `organisation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `organisation` being updated. */
  patch: OrganisationPatch;
};

/** The fields on `userOrganisation` to look up the row to update. */
export type UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingUserOrganisationPkeyUpdate = {
  /** An object where the defined keys will be set on the `userOrganisation` being updated. */
  patch: UpdateUserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch;
  id: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UserPatch;
};

/** The fields on `userOrganisation` to look up the row to update. */
export type UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserOrganisationPkeyUpdate = {
  /** An object where the defined keys will be set on the `userOrganisation` being updated. */
  patch: UpdateUserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  id: Scalars['Int'];
};

/** Input for the nested mutation of `organisation` in the `UserOrganisationInput` mutation. */
export type UserOrganisationOrganisationIdFkeyInput = {
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  connectById?: Maybe<OrganisationOrganisationPkeyConnect>;
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  connectByNodeId?: Maybe<OrganisationNodeIdConnect>;
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  deleteById?: Maybe<OrganisationOrganisationPkeyDelete>;
  /** The primary key(s) for `organisation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<OrganisationNodeIdDelete>;
  /** The primary key(s) and patch data for `organisation` for the far side of the relationship. */
  updateById?: Maybe<OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingOrganisationPkeyUpdate>;
  /** The primary key(s) and patch data for `organisation` for the far side of the relationship. */
  updateByNodeId?: Maybe<UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate>;
  /** A `OrganisationInput` object that will be created and connected to this object. */
  create?: Maybe<UserOrganisationOrganisationIdFkeyOrganisationCreateInput>;
};

/** Input for the nested mutation of `userOrganisation` in the `OrganisationInput` mutation. */
export type UserOrganisationOrganisationIdFkeyInverseInput = {
  /** Flag indicating whether all other `userOrganisation` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  connectById?: Maybe<Array<UserOrganisationUserOrganisationPkeyConnect>>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<UserOrganisationNodeIdConnect>>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  deleteById?: Maybe<Array<UserOrganisationUserOrganisationPkeyDelete>>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<UserOrganisationNodeIdDelete>>;
  /** The primary key(s) and patch data for `userOrganisation` for the far side of the relationship. */
  updateById?: Maybe<Array<UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingUserOrganisationPkeyUpdate>>;
  /** The primary key(s) and patch data for `userOrganisation` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate>>;
  /** A `UserOrganisationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<UserOrganisationOrganisationIdFkeyUserOrganisationCreateInput>>;
};

/** The `organisation` to be created by this mutation. */
export type UserOrganisationOrganisationIdFkeyOrganisationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationOrganisationIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationOrgIdFkeyInverseInput>;
};

/** The `userOrganisation` to be created by this mutation. */
export type UserOrganisationOrganisationIdFkeyUserOrganisationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** Represents an update to a `UserOrganisation`. Fields that are set will be updated. */
export type UserOrganisationPatch = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** A connection to a list of `UserOrganisation` values. */
export type UserOrganisationsConnection = {
  __typename?: 'UserOrganisationsConnection';
  /** A list of `UserOrganisation` objects. */
  nodes: Array<Maybe<UserOrganisation>>;
  /** A list of edges which contains the `UserOrganisation` and cursor to aid in pagination. */
  edges: Array<UserOrganisationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserOrganisation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `UserOrganisation` edge in the connection. */
export type UserOrganisationsEdge = {
  __typename?: 'UserOrganisationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserOrganisation` at the end of the edge. */
  node?: Maybe<UserOrganisation>;
};

/** Methods to use when ordering `UserOrganisation`. */
export enum UserOrganisationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  OrganisationIdAsc = 'ORGANISATION_ID_ASC',
  OrganisationIdDesc = 'ORGANISATION_ID_DESC',
  UserRoleAsc = 'USER_ROLE_ASC',
  UserRoleDesc = 'USER_ROLE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against many `PermissionJoin` object types. All fields are combined with a logical ‘and.’ */
export type UserOrganisationToManyPermissionJoinFilter = {
  /** Every related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<PermissionJoinFilter>;
  /** Some related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<PermissionJoinFilter>;
  /** No related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<PermissionJoinFilter>;
};

/** Input for the nested mutation of `user` in the `UserOrganisationInput` mutation. */
export type UserOrganisationUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: Maybe<UserUserPkeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByUsername?: Maybe<UserUserUsernameKeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByNodeId?: Maybe<UserNodeIdConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: Maybe<UserUserPkeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByUsername?: Maybe<UserUserUsernameKeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByNodeId?: Maybe<UserNodeIdDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: Maybe<UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserPkeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByUsername?: Maybe<UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserUsernameKeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByNodeId?: Maybe<UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: Maybe<UserOrganisationUserIdFkeyUserCreateInput>;
};

/** Input for the nested mutation of `userOrganisation` in the `UserInput` mutation. */
export type UserOrganisationUserIdFkeyInverseInput = {
  /** Flag indicating whether all other `userOrganisation` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  connectById?: Maybe<Array<UserOrganisationUserOrganisationPkeyConnect>>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<UserOrganisationNodeIdConnect>>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  deleteById?: Maybe<Array<UserOrganisationUserOrganisationPkeyDelete>>;
  /** The primary key(s) for `userOrganisation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<UserOrganisationNodeIdDelete>>;
  /** The primary key(s) and patch data for `userOrganisation` for the far side of the relationship. */
  updateById?: Maybe<Array<UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserOrganisationPkeyUpdate>>;
  /** The primary key(s) and patch data for `userOrganisation` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<UserOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate>>;
  /** A `UserOrganisationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<UserOrganisationUserIdFkeyUserOrganisationCreateInput>>;
};

/** The `user` to be created by this mutation. */
export type UserOrganisationUserIdFkeyUserCreateInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** The `userOrganisation` to be created by this mutation. */
export type UserOrganisationUserIdFkeyUserOrganisationCreateInput = {
  id?: Maybe<Scalars['Int']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  userToUserId?: Maybe<UserOrganisationUserIdFkeyInput>;
  organisationToOrganisationId?: Maybe<UserOrganisationOrganisationIdFkeyInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserOrganisationIdFkeyInverseInput>;
};

/** The fields on `userOrganisation` to look up the row to connect. */
export type UserOrganisationUserOrganisationPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `userOrganisation` to look up the row to delete. */
export type UserOrganisationUserOrganisationPkeyDelete = {
  id: Scalars['Int'];
};

export type UserOrgJoin = {
  __typename?: 'UserOrgJoin';
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Int']>;
  orgName?: Maybe<Scalars['String']>;
  userRole?: Maybe<Scalars['String']>;
  licenceNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `UserOrgJoin` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserOrgJoinCondition = {
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dateOfBirth` field. */
  dateOfBirth?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `passwordHash` field. */
  passwordHash?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `orgId` field. */
  orgId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `orgName` field. */
  orgName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `userRole` field. */
  userRole?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `licenceNumber` field. */
  licenceNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['String']>;
};

/** A filter to be used against `UserOrgJoin` object types. All fields are combined with a logical ‘and.’ */
export type UserOrgJoinFilter = {
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
  /** Filter by the object’s `username` field. */
  username?: Maybe<StringFilter>;
  /** Filter by the object’s `firstName` field. */
  firstName?: Maybe<StringFilter>;
  /** Filter by the object’s `lastName` field. */
  lastName?: Maybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  email?: Maybe<StringFilter>;
  /** Filter by the object’s `dateOfBirth` field. */
  dateOfBirth?: Maybe<DateFilter>;
  /** Filter by the object’s `passwordHash` field. */
  passwordHash?: Maybe<StringFilter>;
  /** Filter by the object’s `orgId` field. */
  orgId?: Maybe<IntFilter>;
  /** Filter by the object’s `orgName` field. */
  orgName?: Maybe<StringFilter>;
  /** Filter by the object’s `userRole` field. */
  userRole?: Maybe<StringFilter>;
  /** Filter by the object’s `licenceNumber` field. */
  licenceNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `address` field. */
  address?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserOrgJoinFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserOrgJoinFilter>>;
  /** Negates the expression. */
  not?: Maybe<UserOrgJoinFilter>;
};

/** A connection to a list of `UserOrgJoin` values. */
export type UserOrgJoinsConnection = {
  __typename?: 'UserOrgJoinsConnection';
  /** A list of `UserOrgJoin` objects. */
  nodes: Array<Maybe<UserOrgJoin>>;
  /** A list of edges which contains the `UserOrgJoin` and cursor to aid in pagination. */
  edges: Array<UserOrgJoinsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserOrgJoin` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `UserOrgJoin` edge in the connection. */
export type UserOrgJoinsEdge = {
  __typename?: 'UserOrgJoinsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserOrgJoin` at the end of the edge. */
  node?: Maybe<UserOrgJoin>;
};

/** Methods to use when ordering `UserOrgJoin`. */
export enum UserOrgJoinsOrderBy {
  Natural = 'NATURAL',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  DateOfBirthAsc = 'DATE_OF_BIRTH_ASC',
  DateOfBirthDesc = 'DATE_OF_BIRTH_DESC',
  PasswordHashAsc = 'PASSWORD_HASH_ASC',
  PasswordHashDesc = 'PASSWORD_HASH_DESC',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  OrgNameAsc = 'ORG_NAME_ASC',
  OrgNameDesc = 'ORG_NAME_DESC',
  UserRoleAsc = 'USER_ROLE_ASC',
  UserRoleDesc = 'USER_ROLE_DESC',
  LicenceNumberAsc = 'LICENCE_NUMBER_ASC',
  LicenceNumberDesc = 'LICENCE_NUMBER_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC'
}

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  passwordHash?: Maybe<Scalars['String']>;
  userOrganisationsUsingId?: Maybe<UserOrganisationUserIdFkeyInverseInput>;
  permissionJoinsUsingId?: Maybe<PermissionJoinUserIdFkeyInverseInput>;
  applicationsUsingId?: Maybe<ApplicationUserIdFkeyInverseInput>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  DateOfBirthAsc = 'DATE_OF_BIRTH_ASC',
  DateOfBirthDesc = 'DATE_OF_BIRTH_DESC',
  PasswordHashAsc = 'PASSWORD_HASH_ASC',
  PasswordHashDesc = 'PASSWORD_HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against many `Application` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyApplicationFilter = {
  /** Every related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<ApplicationFilter>;
  /** Some related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<ApplicationFilter>;
  /** No related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<ApplicationFilter>;
};

/** A filter to be used against many `PermissionJoin` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyPermissionJoinFilter = {
  /** Every related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<PermissionJoinFilter>;
  /** Some related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<PermissionJoinFilter>;
  /** No related `PermissionJoin` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<PermissionJoinFilter>;
};

/** A filter to be used against many `UserOrganisation` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyUserOrganisationFilter = {
  /** Every related `UserOrganisation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: Maybe<UserOrganisationFilter>;
  /** Some related `UserOrganisation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: Maybe<UserOrganisationFilter>;
  /** No related `UserOrganisation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: Maybe<UserOrganisationFilter>;
};

/** The fields on `user` to look up the row to connect. */
export type UserUserPkeyConnect = {
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUserPkeyDelete = {
  id: Scalars['Int'];
};

/** The fields on `user` to look up the row to connect. */
export type UserUserUsernameKeyConnect = {
  username: Scalars['String'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUserUsernameKeyDelete = {
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Query'] | ResolversTypes['Application'] | ResolversTypes['Template'] | ResolversTypes['TemplateStage'] | ResolversTypes['ApplicationStageHistory'] | ResolversTypes['ApplicationStatusHistory'] | ResolversTypes['TemplateSection'] | ResolversTypes['TemplatePermission'] | ResolversTypes['PermissionName'] | ResolversTypes['PermissionPolicy'] | ResolversTypes['PermissionJoin'] | ResolversTypes['User'] | ResolversTypes['UserOrganisation'] | ResolversTypes['Organisation'] | ResolversTypes['TemplateElement'] | ResolversTypes['ApplicationSection'] | ResolversTypes['ElementTypePlugin'] | ResolversTypes['TriggerQueue'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  AllPermissionsOrderBy: AllPermissionsOrderBy;
  AllPermissionCondition: AllPermissionCondition;
  PermissionPolicyType: PermissionPolicyType;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AllPermissionFilter: AllPermissionFilter;
  PermissionPolicyTypeFilter: PermissionPolicyTypeFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IntFilter: IntFilter;
  JSONFilter: JsonFilter;
  StringFilter: StringFilter;
  AllPermissionsConnection: ResolverTypeWrapper<AllPermissionsConnection>;
  AllPermission: ResolverTypeWrapper<AllPermission>;
  AllPermissionsEdge: ResolverTypeWrapper<AllPermissionsEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  ApplicationsOrderBy: ApplicationsOrderBy;
  ApplicationCondition: ApplicationCondition;
  ApplicationOutcome: ApplicationOutcome;
  Trigger: Trigger;
  ApplicationFilter: ApplicationFilter;
  ApplicationOutcomeFilter: ApplicationOutcomeFilter;
  BooleanFilter: BooleanFilter;
  TriggerFilter: TriggerFilter;
  ApplicationStatusFilter: ApplicationStatusFilter;
  ApplicationStatus: ApplicationStatus;
  ApplicationToManyApplicationSectionFilter: ApplicationToManyApplicationSectionFilter;
  ApplicationSectionFilter: ApplicationSectionFilter;
  TemplateSectionFilter: TemplateSectionFilter;
  TemplateSectionToManyTemplatePermissionFilter: TemplateSectionToManyTemplatePermissionFilter;
  TemplatePermissionFilter: TemplatePermissionFilter;
  PermissionNameFilter: PermissionNameFilter;
  PermissionNameToManyPermissionJoinFilter: PermissionNameToManyPermissionJoinFilter;
  PermissionJoinFilter: PermissionJoinFilter;
  UserFilter: UserFilter;
  DateFilter: DateFilter;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  UserToManyUserOrganisationFilter: UserToManyUserOrganisationFilter;
  UserOrganisationFilter: UserOrganisationFilter;
  UserOrganisationToManyPermissionJoinFilter: UserOrganisationToManyPermissionJoinFilter;
  OrganisationFilter: OrganisationFilter;
  OrganisationToManyUserOrganisationFilter: OrganisationToManyUserOrganisationFilter;
  OrganisationToManyApplicationFilter: OrganisationToManyApplicationFilter;
  UserToManyPermissionJoinFilter: UserToManyPermissionJoinFilter;
  UserToManyApplicationFilter: UserToManyApplicationFilter;
  PermissionNameToManyTemplatePermissionFilter: PermissionNameToManyTemplatePermissionFilter;
  PermissionPolicyFilter: PermissionPolicyFilter;
  PermissionPolicyToManyPermissionNameFilter: PermissionPolicyToManyPermissionNameFilter;
  TemplateFilter: TemplateFilter;
  TemplateStatusFilter: TemplateStatusFilter;
  TemplateStatus: TemplateStatus;
  DatetimeFilter: DatetimeFilter;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  TemplateToManyTemplateStageFilter: TemplateToManyTemplateStageFilter;
  TemplateStageFilter: TemplateStageFilter;
  TemplateStageToManyApplicationStageHistoryFilter: TemplateStageToManyApplicationStageHistoryFilter;
  ApplicationStageHistoryFilter: ApplicationStageHistoryFilter;
  ApplicationStageHistoryToManyApplicationStatusHistoryFilter: ApplicationStageHistoryToManyApplicationStatusHistoryFilter;
  ApplicationStatusHistoryFilter: ApplicationStatusHistoryFilter;
  TemplateToManyTemplateSectionFilter: TemplateToManyTemplateSectionFilter;
  TemplateToManyTemplatePermissionFilter: TemplateToManyTemplatePermissionFilter;
  TemplateToManyApplicationFilter: TemplateToManyApplicationFilter;
  TemplateSectionToManyTemplateElementFilter: TemplateSectionToManyTemplateElementFilter;
  TemplateElementFilter: TemplateElementFilter;
  TemplateElementCategoryFilter: TemplateElementCategoryFilter;
  TemplateElementCategory: TemplateElementCategory;
  TemplateSectionToManyApplicationSectionFilter: TemplateSectionToManyApplicationSectionFilter;
  ApplicationToManyApplicationStageHistoryFilter: ApplicationToManyApplicationStageHistoryFilter;
  ApplicationsConnection: ResolverTypeWrapper<ApplicationsConnection>;
  Application: ResolverTypeWrapper<Application>;
  Template: ResolverTypeWrapper<Template>;
  TemplateStagesOrderBy: TemplateStagesOrderBy;
  TemplateStageCondition: TemplateStageCondition;
  TemplateStagesConnection: ResolverTypeWrapper<TemplateStagesConnection>;
  TemplateStage: ResolverTypeWrapper<TemplateStage>;
  ApplicationStageHistoriesOrderBy: ApplicationStageHistoriesOrderBy;
  ApplicationStageHistoryCondition: ApplicationStageHistoryCondition;
  ApplicationStageHistoriesConnection: ResolverTypeWrapper<ApplicationStageHistoriesConnection>;
  ApplicationStageHistory: ResolverTypeWrapper<ApplicationStageHistory>;
  ApplicationStatusHistoriesOrderBy: ApplicationStatusHistoriesOrderBy;
  ApplicationStatusHistoryCondition: ApplicationStatusHistoryCondition;
  ApplicationStatusHistoriesConnection: ResolverTypeWrapper<ApplicationStatusHistoriesConnection>;
  ApplicationStatusHistory: ResolverTypeWrapper<ApplicationStatusHistory>;
  ApplicationStatusHistoriesEdge: ResolverTypeWrapper<ApplicationStatusHistoriesEdge>;
  ApplicationStageHistoriesEdge: ResolverTypeWrapper<ApplicationStageHistoriesEdge>;
  TemplateStagesEdge: ResolverTypeWrapper<TemplateStagesEdge>;
  TemplateSectionsOrderBy: TemplateSectionsOrderBy;
  TemplateSectionCondition: TemplateSectionCondition;
  TemplateSectionsConnection: ResolverTypeWrapper<TemplateSectionsConnection>;
  TemplateSection: ResolverTypeWrapper<TemplateSection>;
  TemplatePermissionsOrderBy: TemplatePermissionsOrderBy;
  TemplatePermissionCondition: TemplatePermissionCondition;
  TemplatePermissionsConnection: ResolverTypeWrapper<TemplatePermissionsConnection>;
  TemplatePermission: ResolverTypeWrapper<TemplatePermission>;
  PermissionName: ResolverTypeWrapper<PermissionName>;
  PermissionPolicy: ResolverTypeWrapper<PermissionPolicy>;
  PermissionNamesOrderBy: PermissionNamesOrderBy;
  PermissionNameCondition: PermissionNameCondition;
  PermissionNamesConnection: ResolverTypeWrapper<PermissionNamesConnection>;
  PermissionNamesEdge: ResolverTypeWrapper<PermissionNamesEdge>;
  PermissionJoinsOrderBy: PermissionJoinsOrderBy;
  PermissionJoinCondition: PermissionJoinCondition;
  PermissionJoinsConnection: ResolverTypeWrapper<PermissionJoinsConnection>;
  PermissionJoin: ResolverTypeWrapper<PermissionJoin>;
  User: ResolverTypeWrapper<User>;
  UserOrganisationsOrderBy: UserOrganisationsOrderBy;
  UserOrganisationCondition: UserOrganisationCondition;
  UserOrganisationsConnection: ResolverTypeWrapper<UserOrganisationsConnection>;
  UserOrganisation: ResolverTypeWrapper<UserOrganisation>;
  Organisation: ResolverTypeWrapper<Organisation>;
  UserOrganisationsEdge: ResolverTypeWrapper<UserOrganisationsEdge>;
  PermissionJoinsEdge: ResolverTypeWrapper<PermissionJoinsEdge>;
  TemplatePermissionsEdge: ResolverTypeWrapper<TemplatePermissionsEdge>;
  TemplateElementsOrderBy: TemplateElementsOrderBy;
  TemplateElementCondition: TemplateElementCondition;
  TemplateElementsConnection: ResolverTypeWrapper<TemplateElementsConnection>;
  TemplateElement: ResolverTypeWrapper<TemplateElement>;
  TemplateElementsEdge: ResolverTypeWrapper<TemplateElementsEdge>;
  ApplicationSectionsOrderBy: ApplicationSectionsOrderBy;
  ApplicationSectionCondition: ApplicationSectionCondition;
  ApplicationSectionsConnection: ResolverTypeWrapper<ApplicationSectionsConnection>;
  ApplicationSection: ResolverTypeWrapper<ApplicationSection>;
  ApplicationSectionsEdge: ResolverTypeWrapper<ApplicationSectionsEdge>;
  TemplateSectionsEdge: ResolverTypeWrapper<TemplateSectionsEdge>;
  ApplicationsEdge: ResolverTypeWrapper<ApplicationsEdge>;
  ApplicationStageStatusAllsOrderBy: ApplicationStageStatusAllsOrderBy;
  ApplicationStageStatusAllCondition: ApplicationStageStatusAllCondition;
  ApplicationStageStatusAllFilter: ApplicationStageStatusAllFilter;
  ApplicationStageStatusAllsConnection: ResolverTypeWrapper<ApplicationStageStatusAllsConnection>;
  ApplicationStageStatusAll: ResolverTypeWrapper<ApplicationStageStatusAll>;
  ApplicationStageStatusAllsEdge: ResolverTypeWrapper<ApplicationStageStatusAllsEdge>;
  ElementTypePluginsOrderBy: ElementTypePluginsOrderBy;
  ElementTypePluginCondition: ElementTypePluginCondition;
  ElementTypePluginFilter: ElementTypePluginFilter;
  StringListFilter: StringListFilter;
  ElementTypePluginsConnection: ResolverTypeWrapper<ElementTypePluginsConnection>;
  ElementTypePlugin: ResolverTypeWrapper<ElementTypePlugin>;
  ElementTypePluginsEdge: ResolverTypeWrapper<ElementTypePluginsEdge>;
  OrganisationsOrderBy: OrganisationsOrderBy;
  OrganisationCondition: OrganisationCondition;
  OrganisationsConnection: ResolverTypeWrapper<OrganisationsConnection>;
  OrganisationsEdge: ResolverTypeWrapper<OrganisationsEdge>;
  PermissionPoliciesOrderBy: PermissionPoliciesOrderBy;
  PermissionPolicyCondition: PermissionPolicyCondition;
  PermissionPoliciesConnection: ResolverTypeWrapper<PermissionPoliciesConnection>;
  PermissionPoliciesEdge: ResolverTypeWrapper<PermissionPoliciesEdge>;
  TemplatesOrderBy: TemplatesOrderBy;
  TemplateCondition: TemplateCondition;
  TemplatesConnection: ResolverTypeWrapper<TemplatesConnection>;
  TemplatesEdge: ResolverTypeWrapper<TemplatesEdge>;
  TriggerQueuesOrderBy: TriggerQueuesOrderBy;
  TriggerQueueCondition: TriggerQueueCondition;
  TriggerQueueStatus: TriggerQueueStatus;
  TriggerQueueFilter: TriggerQueueFilter;
  TriggerQueueStatusFilter: TriggerQueueStatusFilter;
  TriggerQueuesConnection: ResolverTypeWrapper<TriggerQueuesConnection>;
  TriggerQueue: ResolverTypeWrapper<TriggerQueue>;
  TriggerQueuesEdge: ResolverTypeWrapper<TriggerQueuesEdge>;
  UsersOrderBy: UsersOrderBy;
  UserCondition: UserCondition;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  UsersEdge: ResolverTypeWrapper<UsersEdge>;
  UserOrgJoinsOrderBy: UserOrgJoinsOrderBy;
  UserOrgJoinCondition: UserOrgJoinCondition;
  UserOrgJoinFilter: UserOrgJoinFilter;
  UserOrgJoinsConnection: ResolverTypeWrapper<UserOrgJoinsConnection>;
  UserOrgJoin: ResolverTypeWrapper<UserOrgJoin>;
  UserOrgJoinsEdge: ResolverTypeWrapper<UserOrgJoinsEdge>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateApplicationInput: CreateApplicationInput;
  ApplicationInput: ApplicationInput;
  ApplicationTemplateIdFkeyInput: ApplicationTemplateIdFkeyInput;
  TemplateTemplatePkeyConnect: TemplateTemplatePkeyConnect;
  TemplateNodeIdConnect: TemplateNodeIdConnect;
  TemplateTemplatePkeyDelete: TemplateTemplatePkeyDelete;
  TemplateNodeIdDelete: TemplateNodeIdDelete;
  TemplateOnApplicationForApplicationTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnApplicationForApplicationTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnApplicationForApplicationTemplateIdFkeyPatch: UpdateTemplateOnApplicationForApplicationTemplateIdFkeyPatch;
  TemplateStageTemplateIdFkeyInverseInput: TemplateStageTemplateIdFkeyInverseInput;
  TemplateStageTemplateStagePkeyConnect: TemplateStageTemplateStagePkeyConnect;
  TemplateStageNodeIdConnect: TemplateStageNodeIdConnect;
  TemplateStageTemplateStagePkeyDelete: TemplateStageTemplateStagePkeyDelete;
  TemplateStageNodeIdDelete: TemplateStageNodeIdDelete;
  TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplateStagePkeyUpdate: TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplateStagePkeyUpdate;
  updateTemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyPatch: UpdateTemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyPatch;
  TemplateStageTemplateIdFkeyInput: TemplateStageTemplateIdFkeyInput;
  TemplateOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnTemplateStageForTemplateStageTemplateIdFkeyPatch: UpdateTemplateOnTemplateStageForTemplateStageTemplateIdFkeyPatch;
  TemplateSectionTemplateIdFkeyInverseInput: TemplateSectionTemplateIdFkeyInverseInput;
  TemplateSectionTemplateSectionPkeyConnect: TemplateSectionTemplateSectionPkeyConnect;
  TemplateSectionNodeIdConnect: TemplateSectionNodeIdConnect;
  TemplateSectionTemplateSectionPkeyDelete: TemplateSectionTemplateSectionPkeyDelete;
  TemplateSectionNodeIdDelete: TemplateSectionNodeIdDelete;
  TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch: UpdateTemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch;
  TemplateSectionTemplateIdFkeyInput: TemplateSectionTemplateIdFkeyInput;
  TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch: UpdateTemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch;
  TemplatePermissionTemplateIdFkeyInverseInput: TemplatePermissionTemplateIdFkeyInverseInput;
  TemplatePermissionTemplatePermissionPkeyConnect: TemplatePermissionTemplatePermissionPkeyConnect;
  TemplatePermissionNodeIdConnect: TemplatePermissionNodeIdConnect;
  TemplatePermissionTemplatePermissionPkeyDelete: TemplatePermissionTemplatePermissionPkeyDelete;
  TemplatePermissionNodeIdDelete: TemplatePermissionNodeIdDelete;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePermissionPkeyUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePermissionPkeyUpdate;
  updateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch;
  TemplatePermissionPermissionNameIdFkeyInput: TemplatePermissionPermissionNameIdFkeyInput;
  PermissionNamePermissionNamePkeyConnect: PermissionNamePermissionNamePkeyConnect;
  PermissionNameNodeIdConnect: PermissionNameNodeIdConnect;
  PermissionNamePermissionNamePkeyDelete: PermissionNamePermissionNamePkeyDelete;
  PermissionNameNodeIdDelete: PermissionNameNodeIdDelete;
  PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingPermissionNamePkeyUpdate: PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingPermissionNamePkeyUpdate;
  updatePermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch: UpdatePermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch;
  PermissionNamePermissionPolicyIdFkeyInput: PermissionNamePermissionPolicyIdFkeyInput;
  PermissionPolicyPermissionPolicyPkeyConnect: PermissionPolicyPermissionPolicyPkeyConnect;
  PermissionPolicyNodeIdConnect: PermissionPolicyNodeIdConnect;
  PermissionPolicyPermissionPolicyPkeyDelete: PermissionPolicyPermissionPolicyPkeyDelete;
  PermissionPolicyNodeIdDelete: PermissionPolicyNodeIdDelete;
  PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionPolicyPkeyUpdate: PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionPolicyPkeyUpdate;
  updatePermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch: UpdatePermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch;
  PermissionNamePermissionPolicyIdFkeyInverseInput: PermissionNamePermissionPolicyIdFkeyInverseInput;
  PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionNamePkeyUpdate: PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionNamePkeyUpdate;
  updatePermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch: UpdatePermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch;
  PermissionJoinPermissionNameIdFkeyInverseInput: PermissionJoinPermissionNameIdFkeyInverseInput;
  PermissionJoinPermissionJoinPkeyConnect: PermissionJoinPermissionJoinPkeyConnect;
  PermissionJoinNodeIdConnect: PermissionJoinNodeIdConnect;
  PermissionJoinPermissionJoinPkeyDelete: PermissionJoinPermissionJoinPkeyDelete;
  PermissionJoinNodeIdDelete: PermissionJoinNodeIdDelete;
  PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionJoinPkeyUpdate: PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionJoinPkeyUpdate;
  updatePermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch;
  PermissionJoinUserIdFkeyInput: PermissionJoinUserIdFkeyInput;
  UserUserPkeyConnect: UserUserPkeyConnect;
  UserUserUsernameKeyConnect: UserUserUsernameKeyConnect;
  UserNodeIdConnect: UserNodeIdConnect;
  UserUserPkeyDelete: UserUserPkeyDelete;
  UserUserUsernameKeyDelete: UserUserUsernameKeyDelete;
  UserNodeIdDelete: UserNodeIdDelete;
  UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserPkeyUpdate: UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserPkeyUpdate;
  updateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch: UpdateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  UserOrganisationUserIdFkeyInverseInput: UserOrganisationUserIdFkeyInverseInput;
  UserOrganisationUserOrganisationPkeyConnect: UserOrganisationUserOrganisationPkeyConnect;
  UserOrganisationNodeIdConnect: UserOrganisationNodeIdConnect;
  UserOrganisationUserOrganisationPkeyDelete: UserOrganisationUserOrganisationPkeyDelete;
  UserOrganisationNodeIdDelete: UserOrganisationNodeIdDelete;
  UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserOrganisationPkeyUpdate: UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserOrganisationPkeyUpdate;
  updateUserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyPatch: UpdateUserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  UserOrganisationUserIdFkeyInput: UserOrganisationUserIdFkeyInput;
  UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserPkeyUpdate: UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserPkeyUpdate;
  updateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch: UpdateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  PermissionJoinUserIdFkeyInverseInput: PermissionJoinUserIdFkeyInverseInput;
  PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyUsingPermissionJoinPkeyUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyUsingPermissionJoinPkeyUpdate;
  updatePermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyPatch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  PermissionJoinUserOrganisationIdFkeyInput: PermissionJoinUserOrganisationIdFkeyInput;
  UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingUserOrganisationPkeyUpdate: UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingUserOrganisationPkeyUpdate;
  updateUserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch: UpdateUserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch;
  UserOrganisationOrganisationIdFkeyInput: UserOrganisationOrganisationIdFkeyInput;
  OrganisationOrganisationPkeyConnect: OrganisationOrganisationPkeyConnect;
  OrganisationNodeIdConnect: OrganisationNodeIdConnect;
  OrganisationOrganisationPkeyDelete: OrganisationOrganisationPkeyDelete;
  OrganisationNodeIdDelete: OrganisationNodeIdDelete;
  OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingOrganisationPkeyUpdate: OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingOrganisationPkeyUpdate;
  updateOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch: UpdateOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch;
  UserOrganisationOrganisationIdFkeyInverseInput: UserOrganisationOrganisationIdFkeyInverseInput;
  UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingUserOrganisationPkeyUpdate: UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingUserOrganisationPkeyUpdate;
  updateUserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch: UpdateUserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch;
  PermissionJoinUserOrganisationIdFkeyInverseInput: PermissionJoinUserOrganisationIdFkeyInverseInput;
  PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingPermissionJoinPkeyUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingPermissionJoinPkeyUpdate;
  updatePermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch;
  PermissionJoinPermissionNameIdFkeyInput: PermissionJoinPermissionNameIdFkeyInput;
  PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionNamePkeyUpdate: PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionNamePkeyUpdate;
  updatePermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch: UpdatePermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch;
  TemplatePermissionPermissionNameIdFkeyInverseInput: TemplatePermissionPermissionNameIdFkeyInverseInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingTemplatePermissionPkeyUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingTemplatePermissionPkeyUpdate;
  updateTemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch;
  TemplatePermissionTemplateIdFkeyInput: TemplatePermissionTemplateIdFkeyInput;
  TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch: UpdateTemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch;
  ApplicationTemplateIdFkeyInverseInput: ApplicationTemplateIdFkeyInverseInput;
  ApplicationApplicationPkeyConnect: ApplicationApplicationPkeyConnect;
  ApplicationApplicationSerialKeyConnect: ApplicationApplicationSerialKeyConnect;
  ApplicationNodeIdConnect: ApplicationNodeIdConnect;
  ApplicationApplicationPkeyDelete: ApplicationApplicationPkeyDelete;
  ApplicationApplicationSerialKeyDelete: ApplicationApplicationSerialKeyDelete;
  ApplicationNodeIdDelete: ApplicationNodeIdDelete;
  ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationForApplicationTemplateIdFkeyPatch: UpdateApplicationOnApplicationForApplicationTemplateIdFkeyPatch;
  ApplicationUserIdFkeyInput: ApplicationUserIdFkeyInput;
  UserOnApplicationForApplicationUserIdFkeyUsingUserPkeyUpdate: UserOnApplicationForApplicationUserIdFkeyUsingUserPkeyUpdate;
  updateUserOnApplicationForApplicationUserIdFkeyPatch: UpdateUserOnApplicationForApplicationUserIdFkeyPatch;
  ApplicationUserIdFkeyInverseInput: ApplicationUserIdFkeyInverseInput;
  ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationForApplicationUserIdFkeyPatch: UpdateApplicationOnApplicationForApplicationUserIdFkeyPatch;
  ApplicationOrgIdFkeyInput: ApplicationOrgIdFkeyInput;
  OrganisationOnApplicationForApplicationOrgIdFkeyUsingOrganisationPkeyUpdate: OrganisationOnApplicationForApplicationOrgIdFkeyUsingOrganisationPkeyUpdate;
  updateOrganisationOnApplicationForApplicationOrgIdFkeyPatch: UpdateOrganisationOnApplicationForApplicationOrgIdFkeyPatch;
  ApplicationOrgIdFkeyInverseInput: ApplicationOrgIdFkeyInverseInput;
  ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationForApplicationOrgIdFkeyPatch: UpdateApplicationOnApplicationForApplicationOrgIdFkeyPatch;
  ApplicationSectionApplicationIdFkeyInverseInput: ApplicationSectionApplicationIdFkeyInverseInput;
  ApplicationSectionApplicationSectionPkeyConnect: ApplicationSectionApplicationSectionPkeyConnect;
  ApplicationSectionNodeIdConnect: ApplicationSectionNodeIdConnect;
  ApplicationSectionApplicationSectionPkeyDelete: ApplicationSectionApplicationSectionPkeyDelete;
  ApplicationSectionNodeIdDelete: ApplicationSectionNodeIdDelete;
  ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSectionPkeyUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSectionPkeyUpdate;
  updateApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch: UpdateApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  ApplicationSectionApplicationIdFkeyInput: ApplicationSectionApplicationIdFkeyInput;
  ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch: UpdateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  ApplicationStageHistoryApplicationIdFkeyInverseInput: ApplicationStageHistoryApplicationIdFkeyInverseInput;
  ApplicationStageHistoryApplicationStageHistoryPkeyConnect: ApplicationStageHistoryApplicationStageHistoryPkeyConnect;
  ApplicationStageHistoryNodeIdConnect: ApplicationStageHistoryNodeIdConnect;
  ApplicationStageHistoryApplicationStageHistoryPkeyDelete: ApplicationStageHistoryApplicationStageHistoryPkeyDelete;
  ApplicationStageHistoryNodeIdDelete: ApplicationStageHistoryNodeIdDelete;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationStageHistoryPkeyUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationStageHistoryPkeyUpdate;
  updateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch: UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  ApplicationStageHistoryApplicationIdFkeyInput: ApplicationStageHistoryApplicationIdFkeyInput;
  ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch: UpdateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationSerialKeyUpdate;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate;
  ApplicationPatch: ApplicationPatch;
  ApplicationStageHistoryApplicationIdFkeyApplicationCreateInput: ApplicationStageHistoryApplicationIdFkeyApplicationCreateInput;
  ApplicationStageHistoryStageIdFkeyInput: ApplicationStageHistoryStageIdFkeyInput;
  TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingTemplateStagePkeyUpdate: TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingTemplateStagePkeyUpdate;
  updateTemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch: UpdateTemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch;
  ApplicationStageHistoryStageIdFkeyInverseInput: ApplicationStageHistoryStageIdFkeyInverseInput;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingApplicationStageHistoryPkeyUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingApplicationStageHistoryPkeyUpdate;
  updateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch: UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput;
  ApplicationStatusHistoryApplicationStatusHistoryPkeyConnect: ApplicationStatusHistoryApplicationStatusHistoryPkeyConnect;
  ApplicationStatusHistoryNodeIdConnect: ApplicationStatusHistoryNodeIdConnect;
  ApplicationStatusHistoryApplicationStatusHistoryPkeyDelete: ApplicationStatusHistoryApplicationStatusHistoryPkeyDelete;
  ApplicationStatusHistoryNodeIdDelete: ApplicationStatusHistoryNodeIdDelete;
  ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStatusHistoryPkeyUpdate: ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStatusHistoryPkeyUpdate;
  updateApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch: UpdateApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput;
  ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStageHistoryPkeyUpdate: ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStageHistoryPkeyUpdate;
  updateApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch: UpdateApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch;
  ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate: ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate;
  ApplicationStageHistoryPatch: ApplicationStageHistoryPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStageHistoryCreateInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStageHistoryCreateInput;
  ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate: ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate;
  ApplicationStatusHistoryPatch: ApplicationStatusHistoryPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStatusHistoryCreateInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStatusHistoryCreateInput;
  TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate: TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate;
  ApplicationStageHistoryStageIdFkeyApplicationStageHistoryCreateInput: ApplicationStageHistoryStageIdFkeyApplicationStageHistoryCreateInput;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate;
  TemplateStagePatch: TemplateStagePatch;
  ApplicationStageHistoryStageIdFkeyTemplateStageCreateInput: ApplicationStageHistoryStageIdFkeyTemplateStageCreateInput;
  ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate: ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate;
  ApplicationStageHistoryApplicationIdFkeyApplicationStageHistoryCreateInput: ApplicationStageHistoryApplicationIdFkeyApplicationStageHistoryCreateInput;
  ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSerialKeyUpdate;
  ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate;
  ApplicationSectionApplicationIdFkeyApplicationCreateInput: ApplicationSectionApplicationIdFkeyApplicationCreateInput;
  ApplicationSectionTemplateSectionIdFkeyInput: ApplicationSectionTemplateSectionIdFkeyInput;
  TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch: UpdateTemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch;
  TemplatePermissionTemplateSectionIdFkeyInverseInput: TemplatePermissionTemplateSectionIdFkeyInverseInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplatePermissionPkeyUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplatePermissionPkeyUpdate;
  updateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch;
  TemplatePermissionTemplateSectionIdFkeyInput: TemplatePermissionTemplateSectionIdFkeyInput;
  TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch: UpdateTemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch;
  TemplateElementSectionIdFkeyInverseInput: TemplateElementSectionIdFkeyInverseInput;
  TemplateElementTemplateElementPkeyConnect: TemplateElementTemplateElementPkeyConnect;
  TemplateElementNodeIdConnect: TemplateElementNodeIdConnect;
  TemplateElementTemplateElementPkeyDelete: TemplateElementTemplateElementPkeyDelete;
  TemplateElementNodeIdDelete: TemplateElementNodeIdDelete;
  TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateElementPkeyUpdate: TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateElementPkeyUpdate;
  updateTemplateElementOnTemplateElementForTemplateElementSectionIdFkeyPatch: UpdateTemplateElementOnTemplateElementForTemplateElementSectionIdFkeyPatch;
  TemplateElementSectionIdFkeyInput: TemplateElementSectionIdFkeyInput;
  TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyPatch: UpdateTemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyPatch;
  ApplicationSectionTemplateSectionIdFkeyInverseInput: ApplicationSectionTemplateSectionIdFkeyInverseInput;
  ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingApplicationSectionPkeyUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingApplicationSectionPkeyUpdate;
  updateApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch: UpdateApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch;
  TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate: TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate;
  ApplicationSectionPatch: ApplicationSectionPatch;
  ApplicationSectionTemplateSectionIdFkeyApplicationSectionCreateInput: ApplicationSectionTemplateSectionIdFkeyApplicationSectionCreateInput;
  TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate: TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate;
  TemplateSectionPatch: TemplateSectionPatch;
  TemplateElementSectionIdFkeyTemplateSectionCreateInput: TemplateElementSectionIdFkeyTemplateSectionCreateInput;
  TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate: TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate;
  TemplateElementPatch: TemplateElementPatch;
  TemplateElementSectionIdFkeyTemplateElementCreateInput: TemplateElementSectionIdFkeyTemplateElementCreateInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate;
  TemplatePermissionTemplateSectionIdFkeyTemplateSectionCreateInput: TemplatePermissionTemplateSectionIdFkeyTemplateSectionCreateInput;
  TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate: TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate;
  TemplatePermissionPatch: TemplatePermissionPatch;
  TemplatePermissionTemplateSectionIdFkeyTemplatePermissionCreateInput: TemplatePermissionTemplateSectionIdFkeyTemplatePermissionCreateInput;
  ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate;
  ApplicationSectionTemplateSectionIdFkeyTemplateSectionCreateInput: ApplicationSectionTemplateSectionIdFkeyTemplateSectionCreateInput;
  ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate: ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate;
  ApplicationSectionApplicationIdFkeyApplicationSectionCreateInput: ApplicationSectionApplicationIdFkeyApplicationSectionCreateInput;
  ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationSerialKeyUpdate;
  OrganisationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate: OrganisationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate;
  ApplicationOrgIdFkeyApplicationCreateInput: ApplicationOrgIdFkeyApplicationCreateInput;
  ApplicationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate: ApplicationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate;
  OrganisationPatch: OrganisationPatch;
  ApplicationOrgIdFkeyOrganisationCreateInput: ApplicationOrgIdFkeyOrganisationCreateInput;
  ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationSerialKeyUpdate;
  UserOnApplicationForApplicationUserIdFkeyNodeIdUpdate: UserOnApplicationForApplicationUserIdFkeyNodeIdUpdate;
  ApplicationUserIdFkeyApplicationCreateInput: ApplicationUserIdFkeyApplicationCreateInput;
  UserOnApplicationForApplicationUserIdFkeyUsingUserUsernameKeyUpdate: UserOnApplicationForApplicationUserIdFkeyUsingUserUsernameKeyUpdate;
  ApplicationOnApplicationForApplicationUserIdFkeyNodeIdUpdate: ApplicationOnApplicationForApplicationUserIdFkeyNodeIdUpdate;
  UserPatch: UserPatch;
  ApplicationUserIdFkeyUserCreateInput: ApplicationUserIdFkeyUserCreateInput;
  ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationSerialKeyUpdate;
  TemplateOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate: TemplateOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate;
  ApplicationTemplateIdFkeyApplicationCreateInput: ApplicationTemplateIdFkeyApplicationCreateInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate;
  TemplatePatch: TemplatePatch;
  TemplatePermissionTemplateIdFkeyTemplateCreateInput: TemplatePermissionTemplateIdFkeyTemplateCreateInput;
  PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate: PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate;
  TemplatePermissionPermissionNameIdFkeyTemplatePermissionCreateInput: TemplatePermissionPermissionNameIdFkeyTemplatePermissionCreateInput;
  PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate: PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate;
  PermissionNamePatch: PermissionNamePatch;
  PermissionJoinPermissionNameIdFkeyPermissionNameCreateInput: PermissionJoinPermissionNameIdFkeyPermissionNameCreateInput;
  UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate: UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate;
  PermissionJoinPatch: PermissionJoinPatch;
  PermissionJoinUserOrganisationIdFkeyPermissionJoinCreateInput: PermissionJoinUserOrganisationIdFkeyPermissionJoinCreateInput;
  OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate: OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate;
  UserOrganisationPatch: UserOrganisationPatch;
  UserOrganisationOrganisationIdFkeyUserOrganisationCreateInput: UserOrganisationOrganisationIdFkeyUserOrganisationCreateInput;
  UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate: UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate;
  UserOrganisationOrganisationIdFkeyOrganisationCreateInput: UserOrganisationOrganisationIdFkeyOrganisationCreateInput;
  PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate;
  PermissionJoinUserOrganisationIdFkeyUserOrganisationCreateInput: PermissionJoinUserOrganisationIdFkeyUserOrganisationCreateInput;
  UserOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate: UserOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate;
  PermissionJoinUserIdFkeyPermissionJoinCreateInput: PermissionJoinUserIdFkeyPermissionJoinCreateInput;
  UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserUsernameKeyUpdate: UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserUsernameKeyUpdate;
  UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate: UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate;
  UserOrganisationUserIdFkeyUserCreateInput: UserOrganisationUserIdFkeyUserCreateInput;
  UserOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate: UserOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate;
  UserOrganisationUserIdFkeyUserOrganisationCreateInput: UserOrganisationUserIdFkeyUserOrganisationCreateInput;
  UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserUsernameKeyUpdate: UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserUsernameKeyUpdate;
  PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate;
  PermissionJoinUserIdFkeyUserCreateInput: PermissionJoinUserIdFkeyUserCreateInput;
  PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate: PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate;
  PermissionJoinPermissionNameIdFkeyPermissionJoinCreateInput: PermissionJoinPermissionNameIdFkeyPermissionJoinCreateInput;
  PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate: PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate;
  PermissionNamePermissionPolicyIdFkeyPermissionNameCreateInput: PermissionNamePermissionPolicyIdFkeyPermissionNameCreateInput;
  PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate: PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate;
  PermissionPolicyPatch: PermissionPolicyPatch;
  PermissionNamePermissionPolicyIdFkeyPermissionPolicyCreateInput: PermissionNamePermissionPolicyIdFkeyPermissionPolicyCreateInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate;
  TemplatePermissionPermissionNameIdFkeyPermissionNameCreateInput: TemplatePermissionPermissionNameIdFkeyPermissionNameCreateInput;
  TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate: TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate;
  TemplatePermissionTemplateIdFkeyTemplatePermissionCreateInput: TemplatePermissionTemplateIdFkeyTemplatePermissionCreateInput;
  TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate: TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate;
  TemplateSectionTemplateIdFkeyTemplateCreateInput: TemplateSectionTemplateIdFkeyTemplateCreateInput;
  TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate: TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate;
  TemplateSectionTemplateIdFkeyTemplateSectionCreateInput: TemplateSectionTemplateIdFkeyTemplateSectionCreateInput;
  TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate: TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate;
  TemplateStageTemplateIdFkeyTemplateCreateInput: TemplateStageTemplateIdFkeyTemplateCreateInput;
  TemplateOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate: TemplateOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate;
  TemplateStageTemplateIdFkeyTemplateStageCreateInput: TemplateStageTemplateIdFkeyTemplateStageCreateInput;
  ApplicationOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate: ApplicationOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate;
  ApplicationTemplateIdFkeyTemplateCreateInput: ApplicationTemplateIdFkeyTemplateCreateInput;
  CreateApplicationPayload: ResolverTypeWrapper<CreateApplicationPayload>;
  CreateApplicationSectionInput: CreateApplicationSectionInput;
  ApplicationSectionInput: ApplicationSectionInput;
  CreateApplicationSectionPayload: ResolverTypeWrapper<CreateApplicationSectionPayload>;
  CreateApplicationStageHistoryInput: CreateApplicationStageHistoryInput;
  ApplicationStageHistoryInput: ApplicationStageHistoryInput;
  CreateApplicationStageHistoryPayload: ResolverTypeWrapper<CreateApplicationStageHistoryPayload>;
  CreateApplicationStatusHistoryInput: CreateApplicationStatusHistoryInput;
  ApplicationStatusHistoryInput: ApplicationStatusHistoryInput;
  CreateApplicationStatusHistoryPayload: ResolverTypeWrapper<CreateApplicationStatusHistoryPayload>;
  CreateElementTypePluginInput: CreateElementTypePluginInput;
  ElementTypePluginInput: ElementTypePluginInput;
  CreateElementTypePluginPayload: ResolverTypeWrapper<CreateElementTypePluginPayload>;
  CreateOrganisationInput: CreateOrganisationInput;
  OrganisationInput: OrganisationInput;
  CreateOrganisationPayload: ResolverTypeWrapper<CreateOrganisationPayload>;
  CreatePermissionJoinInput: CreatePermissionJoinInput;
  PermissionJoinInput: PermissionJoinInput;
  CreatePermissionJoinPayload: ResolverTypeWrapper<CreatePermissionJoinPayload>;
  CreatePermissionNameInput: CreatePermissionNameInput;
  PermissionNameInput: PermissionNameInput;
  CreatePermissionNamePayload: ResolverTypeWrapper<CreatePermissionNamePayload>;
  CreatePermissionPolicyInput: CreatePermissionPolicyInput;
  PermissionPolicyInput: PermissionPolicyInput;
  CreatePermissionPolicyPayload: ResolverTypeWrapper<CreatePermissionPolicyPayload>;
  CreateTemplateInput: CreateTemplateInput;
  TemplateInput: TemplateInput;
  CreateTemplatePayload: ResolverTypeWrapper<CreateTemplatePayload>;
  CreateTemplateElementInput: CreateTemplateElementInput;
  TemplateElementInput: TemplateElementInput;
  CreateTemplateElementPayload: ResolverTypeWrapper<CreateTemplateElementPayload>;
  CreateTemplatePermissionInput: CreateTemplatePermissionInput;
  TemplatePermissionInput: TemplatePermissionInput;
  CreateTemplatePermissionPayload: ResolverTypeWrapper<CreateTemplatePermissionPayload>;
  CreateTemplateSectionInput: CreateTemplateSectionInput;
  TemplateSectionInput: TemplateSectionInput;
  CreateTemplateSectionPayload: ResolverTypeWrapper<CreateTemplateSectionPayload>;
  CreateTemplateStageInput: CreateTemplateStageInput;
  TemplateStageInput: TemplateStageInput;
  CreateTemplateStagePayload: ResolverTypeWrapper<CreateTemplateStagePayload>;
  CreateTriggerQueueInput: CreateTriggerQueueInput;
  TriggerQueueInput: TriggerQueueInput;
  CreateTriggerQueuePayload: ResolverTypeWrapper<CreateTriggerQueuePayload>;
  CreateUserInput: CreateUserInput;
  UserInput: UserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  CreateUserOrganisationInput: CreateUserOrganisationInput;
  UserOrganisationInput: UserOrganisationInput;
  CreateUserOrganisationPayload: ResolverTypeWrapper<CreateUserOrganisationPayload>;
  UpdateApplicationByNodeIdInput: UpdateApplicationByNodeIdInput;
  UpdateApplicationPayload: ResolverTypeWrapper<UpdateApplicationPayload>;
  UpdateApplicationInput: UpdateApplicationInput;
  UpdateApplicationBySerialInput: UpdateApplicationBySerialInput;
  UpdateApplicationSectionByNodeIdInput: UpdateApplicationSectionByNodeIdInput;
  UpdateApplicationSectionPayload: ResolverTypeWrapper<UpdateApplicationSectionPayload>;
  UpdateApplicationSectionInput: UpdateApplicationSectionInput;
  UpdateApplicationStageHistoryByNodeIdInput: UpdateApplicationStageHistoryByNodeIdInput;
  UpdateApplicationStageHistoryPayload: ResolverTypeWrapper<UpdateApplicationStageHistoryPayload>;
  UpdateApplicationStageHistoryInput: UpdateApplicationStageHistoryInput;
  UpdateApplicationStatusHistoryByNodeIdInput: UpdateApplicationStatusHistoryByNodeIdInput;
  UpdateApplicationStatusHistoryPayload: ResolverTypeWrapper<UpdateApplicationStatusHistoryPayload>;
  UpdateApplicationStatusHistoryInput: UpdateApplicationStatusHistoryInput;
  UpdateElementTypePluginByNodeIdInput: UpdateElementTypePluginByNodeIdInput;
  ElementTypePluginPatch: ElementTypePluginPatch;
  UpdateElementTypePluginPayload: ResolverTypeWrapper<UpdateElementTypePluginPayload>;
  UpdateElementTypePluginInput: UpdateElementTypePluginInput;
  UpdateOrganisationByNodeIdInput: UpdateOrganisationByNodeIdInput;
  UpdateOrganisationPayload: ResolverTypeWrapper<UpdateOrganisationPayload>;
  UpdateOrganisationInput: UpdateOrganisationInput;
  UpdatePermissionJoinByNodeIdInput: UpdatePermissionJoinByNodeIdInput;
  UpdatePermissionJoinPayload: ResolverTypeWrapper<UpdatePermissionJoinPayload>;
  UpdatePermissionJoinInput: UpdatePermissionJoinInput;
  UpdatePermissionNameByNodeIdInput: UpdatePermissionNameByNodeIdInput;
  UpdatePermissionNamePayload: ResolverTypeWrapper<UpdatePermissionNamePayload>;
  UpdatePermissionNameInput: UpdatePermissionNameInput;
  UpdatePermissionPolicyByNodeIdInput: UpdatePermissionPolicyByNodeIdInput;
  UpdatePermissionPolicyPayload: ResolverTypeWrapper<UpdatePermissionPolicyPayload>;
  UpdatePermissionPolicyInput: UpdatePermissionPolicyInput;
  UpdateTemplateByNodeIdInput: UpdateTemplateByNodeIdInput;
  UpdateTemplatePayload: ResolverTypeWrapper<UpdateTemplatePayload>;
  UpdateTemplateInput: UpdateTemplateInput;
  UpdateTemplateElementByNodeIdInput: UpdateTemplateElementByNodeIdInput;
  UpdateTemplateElementPayload: ResolverTypeWrapper<UpdateTemplateElementPayload>;
  UpdateTemplateElementInput: UpdateTemplateElementInput;
  UpdateTemplatePermissionByNodeIdInput: UpdateTemplatePermissionByNodeIdInput;
  UpdateTemplatePermissionPayload: ResolverTypeWrapper<UpdateTemplatePermissionPayload>;
  UpdateTemplatePermissionInput: UpdateTemplatePermissionInput;
  UpdateTemplateSectionByNodeIdInput: UpdateTemplateSectionByNodeIdInput;
  UpdateTemplateSectionPayload: ResolverTypeWrapper<UpdateTemplateSectionPayload>;
  UpdateTemplateSectionInput: UpdateTemplateSectionInput;
  UpdateTemplateStageByNodeIdInput: UpdateTemplateStageByNodeIdInput;
  UpdateTemplateStagePayload: ResolverTypeWrapper<UpdateTemplateStagePayload>;
  UpdateTemplateStageInput: UpdateTemplateStageInput;
  UpdateTriggerQueueByNodeIdInput: UpdateTriggerQueueByNodeIdInput;
  TriggerQueuePatch: TriggerQueuePatch;
  UpdateTriggerQueuePayload: ResolverTypeWrapper<UpdateTriggerQueuePayload>;
  UpdateTriggerQueueInput: UpdateTriggerQueueInput;
  UpdateUserByNodeIdInput: UpdateUserByNodeIdInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserByUsernameInput: UpdateUserByUsernameInput;
  UpdateUserOrganisationByNodeIdInput: UpdateUserOrganisationByNodeIdInput;
  UpdateUserOrganisationPayload: ResolverTypeWrapper<UpdateUserOrganisationPayload>;
  UpdateUserOrganisationInput: UpdateUserOrganisationInput;
  DeleteApplicationByNodeIdInput: DeleteApplicationByNodeIdInput;
  DeleteApplicationPayload: ResolverTypeWrapper<DeleteApplicationPayload>;
  DeleteApplicationInput: DeleteApplicationInput;
  DeleteApplicationBySerialInput: DeleteApplicationBySerialInput;
  DeleteApplicationSectionByNodeIdInput: DeleteApplicationSectionByNodeIdInput;
  DeleteApplicationSectionPayload: ResolverTypeWrapper<DeleteApplicationSectionPayload>;
  DeleteApplicationSectionInput: DeleteApplicationSectionInput;
  DeleteApplicationStageHistoryByNodeIdInput: DeleteApplicationStageHistoryByNodeIdInput;
  DeleteApplicationStageHistoryPayload: ResolverTypeWrapper<DeleteApplicationStageHistoryPayload>;
  DeleteApplicationStageHistoryInput: DeleteApplicationStageHistoryInput;
  DeleteApplicationStatusHistoryByNodeIdInput: DeleteApplicationStatusHistoryByNodeIdInput;
  DeleteApplicationStatusHistoryPayload: ResolverTypeWrapper<DeleteApplicationStatusHistoryPayload>;
  DeleteApplicationStatusHistoryInput: DeleteApplicationStatusHistoryInput;
  DeleteElementTypePluginByNodeIdInput: DeleteElementTypePluginByNodeIdInput;
  DeleteElementTypePluginPayload: ResolverTypeWrapper<DeleteElementTypePluginPayload>;
  DeleteElementTypePluginInput: DeleteElementTypePluginInput;
  DeleteOrganisationByNodeIdInput: DeleteOrganisationByNodeIdInput;
  DeleteOrganisationPayload: ResolverTypeWrapper<DeleteOrganisationPayload>;
  DeleteOrganisationInput: DeleteOrganisationInput;
  DeletePermissionJoinByNodeIdInput: DeletePermissionJoinByNodeIdInput;
  DeletePermissionJoinPayload: ResolverTypeWrapper<DeletePermissionJoinPayload>;
  DeletePermissionJoinInput: DeletePermissionJoinInput;
  DeletePermissionNameByNodeIdInput: DeletePermissionNameByNodeIdInput;
  DeletePermissionNamePayload: ResolverTypeWrapper<DeletePermissionNamePayload>;
  DeletePermissionNameInput: DeletePermissionNameInput;
  DeletePermissionPolicyByNodeIdInput: DeletePermissionPolicyByNodeIdInput;
  DeletePermissionPolicyPayload: ResolverTypeWrapper<DeletePermissionPolicyPayload>;
  DeletePermissionPolicyInput: DeletePermissionPolicyInput;
  DeleteTemplateByNodeIdInput: DeleteTemplateByNodeIdInput;
  DeleteTemplatePayload: ResolverTypeWrapper<DeleteTemplatePayload>;
  DeleteTemplateInput: DeleteTemplateInput;
  DeleteTemplateElementByNodeIdInput: DeleteTemplateElementByNodeIdInput;
  DeleteTemplateElementPayload: ResolverTypeWrapper<DeleteTemplateElementPayload>;
  DeleteTemplateElementInput: DeleteTemplateElementInput;
  DeleteTemplatePermissionByNodeIdInput: DeleteTemplatePermissionByNodeIdInput;
  DeleteTemplatePermissionPayload: ResolverTypeWrapper<DeleteTemplatePermissionPayload>;
  DeleteTemplatePermissionInput: DeleteTemplatePermissionInput;
  DeleteTemplateSectionByNodeIdInput: DeleteTemplateSectionByNodeIdInput;
  DeleteTemplateSectionPayload: ResolverTypeWrapper<DeleteTemplateSectionPayload>;
  DeleteTemplateSectionInput: DeleteTemplateSectionInput;
  DeleteTemplateStageByNodeIdInput: DeleteTemplateStageByNodeIdInput;
  DeleteTemplateStagePayload: ResolverTypeWrapper<DeleteTemplateStagePayload>;
  DeleteTemplateStageInput: DeleteTemplateStageInput;
  DeleteTriggerQueueByNodeIdInput: DeleteTriggerQueueByNodeIdInput;
  DeleteTriggerQueuePayload: ResolverTypeWrapper<DeleteTriggerQueuePayload>;
  DeleteTriggerQueueInput: DeleteTriggerQueueInput;
  DeleteUserByNodeIdInput: DeleteUserByNodeIdInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserByUsernameInput: DeleteUserByUsernameInput;
  DeleteUserOrganisationByNodeIdInput: DeleteUserOrganisationByNodeIdInput;
  DeleteUserOrganisationPayload: ResolverTypeWrapper<DeleteUserOrganisationPayload>;
  DeleteUserOrganisationInput: DeleteUserOrganisationInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['Application'] | ResolversParentTypes['Template'] | ResolversParentTypes['TemplateStage'] | ResolversParentTypes['ApplicationStageHistory'] | ResolversParentTypes['ApplicationStatusHistory'] | ResolversParentTypes['TemplateSection'] | ResolversParentTypes['TemplatePermission'] | ResolversParentTypes['PermissionName'] | ResolversParentTypes['PermissionPolicy'] | ResolversParentTypes['PermissionJoin'] | ResolversParentTypes['User'] | ResolversParentTypes['UserOrganisation'] | ResolversParentTypes['Organisation'] | ResolversParentTypes['TemplateElement'] | ResolversParentTypes['ApplicationSection'] | ResolversParentTypes['ElementTypePlugin'] | ResolversParentTypes['TriggerQueue'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Cursor: Scalars['Cursor'];
  AllPermissionCondition: AllPermissionCondition;
  JSON: Scalars['JSON'];
  String: Scalars['String'];
  AllPermissionFilter: AllPermissionFilter;
  PermissionPolicyTypeFilter: PermissionPolicyTypeFilter;
  Boolean: Scalars['Boolean'];
  IntFilter: IntFilter;
  JSONFilter: JsonFilter;
  StringFilter: StringFilter;
  AllPermissionsConnection: AllPermissionsConnection;
  AllPermission: AllPermission;
  AllPermissionsEdge: AllPermissionsEdge;
  PageInfo: PageInfo;
  ApplicationCondition: ApplicationCondition;
  ApplicationFilter: ApplicationFilter;
  ApplicationOutcomeFilter: ApplicationOutcomeFilter;
  BooleanFilter: BooleanFilter;
  TriggerFilter: TriggerFilter;
  ApplicationStatusFilter: ApplicationStatusFilter;
  ApplicationToManyApplicationSectionFilter: ApplicationToManyApplicationSectionFilter;
  ApplicationSectionFilter: ApplicationSectionFilter;
  TemplateSectionFilter: TemplateSectionFilter;
  TemplateSectionToManyTemplatePermissionFilter: TemplateSectionToManyTemplatePermissionFilter;
  TemplatePermissionFilter: TemplatePermissionFilter;
  PermissionNameFilter: PermissionNameFilter;
  PermissionNameToManyPermissionJoinFilter: PermissionNameToManyPermissionJoinFilter;
  PermissionJoinFilter: PermissionJoinFilter;
  UserFilter: UserFilter;
  DateFilter: DateFilter;
  Date: Scalars['Date'];
  UserToManyUserOrganisationFilter: UserToManyUserOrganisationFilter;
  UserOrganisationFilter: UserOrganisationFilter;
  UserOrganisationToManyPermissionJoinFilter: UserOrganisationToManyPermissionJoinFilter;
  OrganisationFilter: OrganisationFilter;
  OrganisationToManyUserOrganisationFilter: OrganisationToManyUserOrganisationFilter;
  OrganisationToManyApplicationFilter: OrganisationToManyApplicationFilter;
  UserToManyPermissionJoinFilter: UserToManyPermissionJoinFilter;
  UserToManyApplicationFilter: UserToManyApplicationFilter;
  PermissionNameToManyTemplatePermissionFilter: PermissionNameToManyTemplatePermissionFilter;
  PermissionPolicyFilter: PermissionPolicyFilter;
  PermissionPolicyToManyPermissionNameFilter: PermissionPolicyToManyPermissionNameFilter;
  TemplateFilter: TemplateFilter;
  TemplateStatusFilter: TemplateStatusFilter;
  DatetimeFilter: DatetimeFilter;
  Datetime: Scalars['Datetime'];
  TemplateToManyTemplateStageFilter: TemplateToManyTemplateStageFilter;
  TemplateStageFilter: TemplateStageFilter;
  TemplateStageToManyApplicationStageHistoryFilter: TemplateStageToManyApplicationStageHistoryFilter;
  ApplicationStageHistoryFilter: ApplicationStageHistoryFilter;
  ApplicationStageHistoryToManyApplicationStatusHistoryFilter: ApplicationStageHistoryToManyApplicationStatusHistoryFilter;
  ApplicationStatusHistoryFilter: ApplicationStatusHistoryFilter;
  TemplateToManyTemplateSectionFilter: TemplateToManyTemplateSectionFilter;
  TemplateToManyTemplatePermissionFilter: TemplateToManyTemplatePermissionFilter;
  TemplateToManyApplicationFilter: TemplateToManyApplicationFilter;
  TemplateSectionToManyTemplateElementFilter: TemplateSectionToManyTemplateElementFilter;
  TemplateElementFilter: TemplateElementFilter;
  TemplateElementCategoryFilter: TemplateElementCategoryFilter;
  TemplateSectionToManyApplicationSectionFilter: TemplateSectionToManyApplicationSectionFilter;
  ApplicationToManyApplicationStageHistoryFilter: ApplicationToManyApplicationStageHistoryFilter;
  ApplicationsConnection: ApplicationsConnection;
  Application: Application;
  Template: Template;
  TemplateStageCondition: TemplateStageCondition;
  TemplateStagesConnection: TemplateStagesConnection;
  TemplateStage: TemplateStage;
  ApplicationStageHistoryCondition: ApplicationStageHistoryCondition;
  ApplicationStageHistoriesConnection: ApplicationStageHistoriesConnection;
  ApplicationStageHistory: ApplicationStageHistory;
  ApplicationStatusHistoryCondition: ApplicationStatusHistoryCondition;
  ApplicationStatusHistoriesConnection: ApplicationStatusHistoriesConnection;
  ApplicationStatusHistory: ApplicationStatusHistory;
  ApplicationStatusHistoriesEdge: ApplicationStatusHistoriesEdge;
  ApplicationStageHistoriesEdge: ApplicationStageHistoriesEdge;
  TemplateStagesEdge: TemplateStagesEdge;
  TemplateSectionCondition: TemplateSectionCondition;
  TemplateSectionsConnection: TemplateSectionsConnection;
  TemplateSection: TemplateSection;
  TemplatePermissionCondition: TemplatePermissionCondition;
  TemplatePermissionsConnection: TemplatePermissionsConnection;
  TemplatePermission: TemplatePermission;
  PermissionName: PermissionName;
  PermissionPolicy: PermissionPolicy;
  PermissionNameCondition: PermissionNameCondition;
  PermissionNamesConnection: PermissionNamesConnection;
  PermissionNamesEdge: PermissionNamesEdge;
  PermissionJoinCondition: PermissionJoinCondition;
  PermissionJoinsConnection: PermissionJoinsConnection;
  PermissionJoin: PermissionJoin;
  User: User;
  UserOrganisationCondition: UserOrganisationCondition;
  UserOrganisationsConnection: UserOrganisationsConnection;
  UserOrganisation: UserOrganisation;
  Organisation: Organisation;
  UserOrganisationsEdge: UserOrganisationsEdge;
  PermissionJoinsEdge: PermissionJoinsEdge;
  TemplatePermissionsEdge: TemplatePermissionsEdge;
  TemplateElementCondition: TemplateElementCondition;
  TemplateElementsConnection: TemplateElementsConnection;
  TemplateElement: TemplateElement;
  TemplateElementsEdge: TemplateElementsEdge;
  ApplicationSectionCondition: ApplicationSectionCondition;
  ApplicationSectionsConnection: ApplicationSectionsConnection;
  ApplicationSection: ApplicationSection;
  ApplicationSectionsEdge: ApplicationSectionsEdge;
  TemplateSectionsEdge: TemplateSectionsEdge;
  ApplicationsEdge: ApplicationsEdge;
  ApplicationStageStatusAllCondition: ApplicationStageStatusAllCondition;
  ApplicationStageStatusAllFilter: ApplicationStageStatusAllFilter;
  ApplicationStageStatusAllsConnection: ApplicationStageStatusAllsConnection;
  ApplicationStageStatusAll: ApplicationStageStatusAll;
  ApplicationStageStatusAllsEdge: ApplicationStageStatusAllsEdge;
  ElementTypePluginCondition: ElementTypePluginCondition;
  ElementTypePluginFilter: ElementTypePluginFilter;
  StringListFilter: StringListFilter;
  ElementTypePluginsConnection: ElementTypePluginsConnection;
  ElementTypePlugin: ElementTypePlugin;
  ElementTypePluginsEdge: ElementTypePluginsEdge;
  OrganisationCondition: OrganisationCondition;
  OrganisationsConnection: OrganisationsConnection;
  OrganisationsEdge: OrganisationsEdge;
  PermissionPolicyCondition: PermissionPolicyCondition;
  PermissionPoliciesConnection: PermissionPoliciesConnection;
  PermissionPoliciesEdge: PermissionPoliciesEdge;
  TemplateCondition: TemplateCondition;
  TemplatesConnection: TemplatesConnection;
  TemplatesEdge: TemplatesEdge;
  TriggerQueueCondition: TriggerQueueCondition;
  TriggerQueueFilter: TriggerQueueFilter;
  TriggerQueueStatusFilter: TriggerQueueStatusFilter;
  TriggerQueuesConnection: TriggerQueuesConnection;
  TriggerQueue: TriggerQueue;
  TriggerQueuesEdge: TriggerQueuesEdge;
  UserCondition: UserCondition;
  UsersConnection: UsersConnection;
  UsersEdge: UsersEdge;
  UserOrgJoinCondition: UserOrgJoinCondition;
  UserOrgJoinFilter: UserOrgJoinFilter;
  UserOrgJoinsConnection: UserOrgJoinsConnection;
  UserOrgJoin: UserOrgJoin;
  UserOrgJoinsEdge: UserOrgJoinsEdge;
  BigInt: Scalars['BigInt'];
  Mutation: {};
  CreateApplicationInput: CreateApplicationInput;
  ApplicationInput: ApplicationInput;
  ApplicationTemplateIdFkeyInput: ApplicationTemplateIdFkeyInput;
  TemplateTemplatePkeyConnect: TemplateTemplatePkeyConnect;
  TemplateNodeIdConnect: TemplateNodeIdConnect;
  TemplateTemplatePkeyDelete: TemplateTemplatePkeyDelete;
  TemplateNodeIdDelete: TemplateNodeIdDelete;
  TemplateOnApplicationForApplicationTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnApplicationForApplicationTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnApplicationForApplicationTemplateIdFkeyPatch: UpdateTemplateOnApplicationForApplicationTemplateIdFkeyPatch;
  TemplateStageTemplateIdFkeyInverseInput: TemplateStageTemplateIdFkeyInverseInput;
  TemplateStageTemplateStagePkeyConnect: TemplateStageTemplateStagePkeyConnect;
  TemplateStageNodeIdConnect: TemplateStageNodeIdConnect;
  TemplateStageTemplateStagePkeyDelete: TemplateStageTemplateStagePkeyDelete;
  TemplateStageNodeIdDelete: TemplateStageNodeIdDelete;
  TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplateStagePkeyUpdate: TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplateStagePkeyUpdate;
  updateTemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyPatch: UpdateTemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyPatch;
  TemplateStageTemplateIdFkeyInput: TemplateStageTemplateIdFkeyInput;
  TemplateOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnTemplateStageForTemplateStageTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnTemplateStageForTemplateStageTemplateIdFkeyPatch: UpdateTemplateOnTemplateStageForTemplateStageTemplateIdFkeyPatch;
  TemplateSectionTemplateIdFkeyInverseInput: TemplateSectionTemplateIdFkeyInverseInput;
  TemplateSectionTemplateSectionPkeyConnect: TemplateSectionTemplateSectionPkeyConnect;
  TemplateSectionNodeIdConnect: TemplateSectionNodeIdConnect;
  TemplateSectionTemplateSectionPkeyDelete: TemplateSectionTemplateSectionPkeyDelete;
  TemplateSectionNodeIdDelete: TemplateSectionNodeIdDelete;
  TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch: UpdateTemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch;
  TemplateSectionTemplateIdFkeyInput: TemplateSectionTemplateIdFkeyInput;
  TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch: UpdateTemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyPatch;
  TemplatePermissionTemplateIdFkeyInverseInput: TemplatePermissionTemplateIdFkeyInverseInput;
  TemplatePermissionTemplatePermissionPkeyConnect: TemplatePermissionTemplatePermissionPkeyConnect;
  TemplatePermissionNodeIdConnect: TemplatePermissionNodeIdConnect;
  TemplatePermissionTemplatePermissionPkeyDelete: TemplatePermissionTemplatePermissionPkeyDelete;
  TemplatePermissionNodeIdDelete: TemplatePermissionNodeIdDelete;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePermissionPkeyUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePermissionPkeyUpdate;
  updateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch;
  TemplatePermissionPermissionNameIdFkeyInput: TemplatePermissionPermissionNameIdFkeyInput;
  PermissionNamePermissionNamePkeyConnect: PermissionNamePermissionNamePkeyConnect;
  PermissionNameNodeIdConnect: PermissionNameNodeIdConnect;
  PermissionNamePermissionNamePkeyDelete: PermissionNamePermissionNamePkeyDelete;
  PermissionNameNodeIdDelete: PermissionNameNodeIdDelete;
  PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingPermissionNamePkeyUpdate: PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingPermissionNamePkeyUpdate;
  updatePermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch: UpdatePermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch;
  PermissionNamePermissionPolicyIdFkeyInput: PermissionNamePermissionPolicyIdFkeyInput;
  PermissionPolicyPermissionPolicyPkeyConnect: PermissionPolicyPermissionPolicyPkeyConnect;
  PermissionPolicyNodeIdConnect: PermissionPolicyNodeIdConnect;
  PermissionPolicyPermissionPolicyPkeyDelete: PermissionPolicyPermissionPolicyPkeyDelete;
  PermissionPolicyNodeIdDelete: PermissionPolicyNodeIdDelete;
  PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionPolicyPkeyUpdate: PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionPolicyPkeyUpdate;
  updatePermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch: UpdatePermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch;
  PermissionNamePermissionPolicyIdFkeyInverseInput: PermissionNamePermissionPolicyIdFkeyInverseInput;
  PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionNamePkeyUpdate: PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyUsingPermissionNamePkeyUpdate;
  updatePermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch: UpdatePermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyPatch;
  PermissionJoinPermissionNameIdFkeyInverseInput: PermissionJoinPermissionNameIdFkeyInverseInput;
  PermissionJoinPermissionJoinPkeyConnect: PermissionJoinPermissionJoinPkeyConnect;
  PermissionJoinNodeIdConnect: PermissionJoinNodeIdConnect;
  PermissionJoinPermissionJoinPkeyDelete: PermissionJoinPermissionJoinPkeyDelete;
  PermissionJoinNodeIdDelete: PermissionJoinNodeIdDelete;
  PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionJoinPkeyUpdate: PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionJoinPkeyUpdate;
  updatePermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch;
  PermissionJoinUserIdFkeyInput: PermissionJoinUserIdFkeyInput;
  UserUserPkeyConnect: UserUserPkeyConnect;
  UserUserUsernameKeyConnect: UserUserUsernameKeyConnect;
  UserNodeIdConnect: UserNodeIdConnect;
  UserUserPkeyDelete: UserUserPkeyDelete;
  UserUserUsernameKeyDelete: UserUserUsernameKeyDelete;
  UserNodeIdDelete: UserNodeIdDelete;
  UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserPkeyUpdate: UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserPkeyUpdate;
  updateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch: UpdateUserOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  UserOrganisationUserIdFkeyInverseInput: UserOrganisationUserIdFkeyInverseInput;
  UserOrganisationUserOrganisationPkeyConnect: UserOrganisationUserOrganisationPkeyConnect;
  UserOrganisationNodeIdConnect: UserOrganisationNodeIdConnect;
  UserOrganisationUserOrganisationPkeyDelete: UserOrganisationUserOrganisationPkeyDelete;
  UserOrganisationNodeIdDelete: UserOrganisationNodeIdDelete;
  UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserOrganisationPkeyUpdate: UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserOrganisationPkeyUpdate;
  updateUserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyPatch: UpdateUserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  UserOrganisationUserIdFkeyInput: UserOrganisationUserIdFkeyInput;
  UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserPkeyUpdate: UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserPkeyUpdate;
  updateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch: UpdateUserOnUserOrganisationForUserOrganisationUserIdFkeyPatch;
  PermissionJoinUserIdFkeyInverseInput: PermissionJoinUserIdFkeyInverseInput;
  PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyUsingPermissionJoinPkeyUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyUsingPermissionJoinPkeyUpdate;
  updatePermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyPatch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyPatch;
  PermissionJoinUserOrganisationIdFkeyInput: PermissionJoinUserOrganisationIdFkeyInput;
  UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingUserOrganisationPkeyUpdate: UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingUserOrganisationPkeyUpdate;
  updateUserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch: UpdateUserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch;
  UserOrganisationOrganisationIdFkeyInput: UserOrganisationOrganisationIdFkeyInput;
  OrganisationOrganisationPkeyConnect: OrganisationOrganisationPkeyConnect;
  OrganisationNodeIdConnect: OrganisationNodeIdConnect;
  OrganisationOrganisationPkeyDelete: OrganisationOrganisationPkeyDelete;
  OrganisationNodeIdDelete: OrganisationNodeIdDelete;
  OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingOrganisationPkeyUpdate: OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingOrganisationPkeyUpdate;
  updateOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch: UpdateOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch;
  UserOrganisationOrganisationIdFkeyInverseInput: UserOrganisationOrganisationIdFkeyInverseInput;
  UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingUserOrganisationPkeyUpdate: UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyUsingUserOrganisationPkeyUpdate;
  updateUserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch: UpdateUserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyPatch;
  PermissionJoinUserOrganisationIdFkeyInverseInput: PermissionJoinUserOrganisationIdFkeyInverseInput;
  PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingPermissionJoinPkeyUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyUsingPermissionJoinPkeyUpdate;
  updatePermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch: UpdatePermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyPatch;
  PermissionJoinPermissionNameIdFkeyInput: PermissionJoinPermissionNameIdFkeyInput;
  PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionNamePkeyUpdate: PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyUsingPermissionNamePkeyUpdate;
  updatePermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch: UpdatePermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyPatch;
  TemplatePermissionPermissionNameIdFkeyInverseInput: TemplatePermissionPermissionNameIdFkeyInverseInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingTemplatePermissionPkeyUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyUsingTemplatePermissionPkeyUpdate;
  updateTemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyPatch;
  TemplatePermissionTemplateIdFkeyInput: TemplatePermissionTemplateIdFkeyInput;
  TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePkeyUpdate: TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyUsingTemplatePkeyUpdate;
  updateTemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch: UpdateTemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyPatch;
  ApplicationTemplateIdFkeyInverseInput: ApplicationTemplateIdFkeyInverseInput;
  ApplicationApplicationPkeyConnect: ApplicationApplicationPkeyConnect;
  ApplicationApplicationSerialKeyConnect: ApplicationApplicationSerialKeyConnect;
  ApplicationNodeIdConnect: ApplicationNodeIdConnect;
  ApplicationApplicationPkeyDelete: ApplicationApplicationPkeyDelete;
  ApplicationApplicationSerialKeyDelete: ApplicationApplicationSerialKeyDelete;
  ApplicationNodeIdDelete: ApplicationNodeIdDelete;
  ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationForApplicationTemplateIdFkeyPatch: UpdateApplicationOnApplicationForApplicationTemplateIdFkeyPatch;
  ApplicationUserIdFkeyInput: ApplicationUserIdFkeyInput;
  UserOnApplicationForApplicationUserIdFkeyUsingUserPkeyUpdate: UserOnApplicationForApplicationUserIdFkeyUsingUserPkeyUpdate;
  updateUserOnApplicationForApplicationUserIdFkeyPatch: UpdateUserOnApplicationForApplicationUserIdFkeyPatch;
  ApplicationUserIdFkeyInverseInput: ApplicationUserIdFkeyInverseInput;
  ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationForApplicationUserIdFkeyPatch: UpdateApplicationOnApplicationForApplicationUserIdFkeyPatch;
  ApplicationOrgIdFkeyInput: ApplicationOrgIdFkeyInput;
  OrganisationOnApplicationForApplicationOrgIdFkeyUsingOrganisationPkeyUpdate: OrganisationOnApplicationForApplicationOrgIdFkeyUsingOrganisationPkeyUpdate;
  updateOrganisationOnApplicationForApplicationOrgIdFkeyPatch: UpdateOrganisationOnApplicationForApplicationOrgIdFkeyPatch;
  ApplicationOrgIdFkeyInverseInput: ApplicationOrgIdFkeyInverseInput;
  ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationForApplicationOrgIdFkeyPatch: UpdateApplicationOnApplicationForApplicationOrgIdFkeyPatch;
  ApplicationSectionApplicationIdFkeyInverseInput: ApplicationSectionApplicationIdFkeyInverseInput;
  ApplicationSectionApplicationSectionPkeyConnect: ApplicationSectionApplicationSectionPkeyConnect;
  ApplicationSectionNodeIdConnect: ApplicationSectionNodeIdConnect;
  ApplicationSectionApplicationSectionPkeyDelete: ApplicationSectionApplicationSectionPkeyDelete;
  ApplicationSectionNodeIdDelete: ApplicationSectionNodeIdDelete;
  ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSectionPkeyUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSectionPkeyUpdate;
  updateApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch: UpdateApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  ApplicationSectionApplicationIdFkeyInput: ApplicationSectionApplicationIdFkeyInput;
  ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch: UpdateApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyPatch;
  ApplicationStageHistoryApplicationIdFkeyInverseInput: ApplicationStageHistoryApplicationIdFkeyInverseInput;
  ApplicationStageHistoryApplicationStageHistoryPkeyConnect: ApplicationStageHistoryApplicationStageHistoryPkeyConnect;
  ApplicationStageHistoryNodeIdConnect: ApplicationStageHistoryNodeIdConnect;
  ApplicationStageHistoryApplicationStageHistoryPkeyDelete: ApplicationStageHistoryApplicationStageHistoryPkeyDelete;
  ApplicationStageHistoryNodeIdDelete: ApplicationStageHistoryNodeIdDelete;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationStageHistoryPkeyUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationStageHistoryPkeyUpdate;
  updateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch: UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  ApplicationStageHistoryApplicationIdFkeyInput: ApplicationStageHistoryApplicationIdFkeyInput;
  ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationPkeyUpdate: ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationPkeyUpdate;
  updateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch: UpdateApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyPatch;
  ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyUsingApplicationSerialKeyUpdate;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate;
  ApplicationPatch: ApplicationPatch;
  ApplicationStageHistoryApplicationIdFkeyApplicationCreateInput: ApplicationStageHistoryApplicationIdFkeyApplicationCreateInput;
  ApplicationStageHistoryStageIdFkeyInput: ApplicationStageHistoryStageIdFkeyInput;
  TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingTemplateStagePkeyUpdate: TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingTemplateStagePkeyUpdate;
  updateTemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch: UpdateTemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch;
  ApplicationStageHistoryStageIdFkeyInverseInput: ApplicationStageHistoryStageIdFkeyInverseInput;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingApplicationStageHistoryPkeyUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyUsingApplicationStageHistoryPkeyUpdate;
  updateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch: UpdateApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyInverseInput;
  ApplicationStatusHistoryApplicationStatusHistoryPkeyConnect: ApplicationStatusHistoryApplicationStatusHistoryPkeyConnect;
  ApplicationStatusHistoryNodeIdConnect: ApplicationStatusHistoryNodeIdConnect;
  ApplicationStatusHistoryApplicationStatusHistoryPkeyDelete: ApplicationStatusHistoryApplicationStatusHistoryPkeyDelete;
  ApplicationStatusHistoryNodeIdDelete: ApplicationStatusHistoryNodeIdDelete;
  ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStatusHistoryPkeyUpdate: ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStatusHistoryPkeyUpdate;
  updateApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch: UpdateApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyInput;
  ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStageHistoryPkeyUpdate: ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyUsingApplicationStageHistoryPkeyUpdate;
  updateApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch: UpdateApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyPatch;
  ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate: ApplicationStatusHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate;
  ApplicationStageHistoryPatch: ApplicationStageHistoryPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStageHistoryCreateInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStageHistoryCreateInput;
  ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate: ApplicationStageHistoryOnApplicationStatusHistoryForApplicationStatusHistoryApplicationStageHistoryIdFkeyNodeIdUpdate;
  ApplicationStatusHistoryPatch: ApplicationStatusHistoryPatch;
  ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStatusHistoryCreateInput: ApplicationStatusHistoryApplicationStageHistoryIdFkeyApplicationStatusHistoryCreateInput;
  TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate: TemplateStageOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate;
  ApplicationStageHistoryStageIdFkeyApplicationStageHistoryCreateInput: ApplicationStageHistoryStageIdFkeyApplicationStageHistoryCreateInput;
  ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate: ApplicationStageHistoryOnApplicationStageHistoryForApplicationStageHistoryStageIdFkeyNodeIdUpdate;
  TemplateStagePatch: TemplateStagePatch;
  ApplicationStageHistoryStageIdFkeyTemplateStageCreateInput: ApplicationStageHistoryStageIdFkeyTemplateStageCreateInput;
  ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate: ApplicationOnApplicationStageHistoryForApplicationStageHistoryApplicationIdFkeyNodeIdUpdate;
  ApplicationStageHistoryApplicationIdFkeyApplicationStageHistoryCreateInput: ApplicationStageHistoryApplicationIdFkeyApplicationStageHistoryCreateInput;
  ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyUsingApplicationSerialKeyUpdate;
  ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate;
  ApplicationSectionApplicationIdFkeyApplicationCreateInput: ApplicationSectionApplicationIdFkeyApplicationCreateInput;
  ApplicationSectionTemplateSectionIdFkeyInput: ApplicationSectionTemplateSectionIdFkeyInput;
  TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch: UpdateTemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch;
  TemplatePermissionTemplateSectionIdFkeyInverseInput: TemplatePermissionTemplateSectionIdFkeyInverseInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplatePermissionPkeyUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplatePermissionPkeyUpdate;
  updateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch: UpdateTemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch;
  TemplatePermissionTemplateSectionIdFkeyInput: TemplatePermissionTemplateSectionIdFkeyInput;
  TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch: UpdateTemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyPatch;
  TemplateElementSectionIdFkeyInverseInput: TemplateElementSectionIdFkeyInverseInput;
  TemplateElementTemplateElementPkeyConnect: TemplateElementTemplateElementPkeyConnect;
  TemplateElementNodeIdConnect: TemplateElementNodeIdConnect;
  TemplateElementTemplateElementPkeyDelete: TemplateElementTemplateElementPkeyDelete;
  TemplateElementNodeIdDelete: TemplateElementNodeIdDelete;
  TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateElementPkeyUpdate: TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateElementPkeyUpdate;
  updateTemplateElementOnTemplateElementForTemplateElementSectionIdFkeyPatch: UpdateTemplateElementOnTemplateElementForTemplateElementSectionIdFkeyPatch;
  TemplateElementSectionIdFkeyInput: TemplateElementSectionIdFkeyInput;
  TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateSectionPkeyUpdate: TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyUsingTemplateSectionPkeyUpdate;
  updateTemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyPatch: UpdateTemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyPatch;
  ApplicationSectionTemplateSectionIdFkeyInverseInput: ApplicationSectionTemplateSectionIdFkeyInverseInput;
  ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingApplicationSectionPkeyUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyUsingApplicationSectionPkeyUpdate;
  updateApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch: UpdateApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyPatch;
  TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate: TemplateSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate;
  ApplicationSectionPatch: ApplicationSectionPatch;
  ApplicationSectionTemplateSectionIdFkeyApplicationSectionCreateInput: ApplicationSectionTemplateSectionIdFkeyApplicationSectionCreateInput;
  TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate: TemplateElementOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate;
  TemplateSectionPatch: TemplateSectionPatch;
  TemplateElementSectionIdFkeyTemplateSectionCreateInput: TemplateElementSectionIdFkeyTemplateSectionCreateInput;
  TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate: TemplateSectionOnTemplateElementForTemplateElementSectionIdFkeyNodeIdUpdate;
  TemplateElementPatch: TemplateElementPatch;
  TemplateElementSectionIdFkeyTemplateElementCreateInput: TemplateElementSectionIdFkeyTemplateElementCreateInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate;
  TemplatePermissionTemplateSectionIdFkeyTemplateSectionCreateInput: TemplatePermissionTemplateSectionIdFkeyTemplateSectionCreateInput;
  TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate: TemplateSectionOnTemplatePermissionForTemplatePermissionTemplateSectionIdFkeyNodeIdUpdate;
  TemplatePermissionPatch: TemplatePermissionPatch;
  TemplatePermissionTemplateSectionIdFkeyTemplatePermissionCreateInput: TemplatePermissionTemplateSectionIdFkeyTemplatePermissionCreateInput;
  ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate: ApplicationSectionOnApplicationSectionForApplicationSectionTemplateSectionIdFkeyNodeIdUpdate;
  ApplicationSectionTemplateSectionIdFkeyTemplateSectionCreateInput: ApplicationSectionTemplateSectionIdFkeyTemplateSectionCreateInput;
  ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate: ApplicationOnApplicationSectionForApplicationSectionApplicationIdFkeyNodeIdUpdate;
  ApplicationSectionApplicationIdFkeyApplicationSectionCreateInput: ApplicationSectionApplicationIdFkeyApplicationSectionCreateInput;
  ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationForApplicationOrgIdFkeyUsingApplicationSerialKeyUpdate;
  OrganisationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate: OrganisationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate;
  ApplicationOrgIdFkeyApplicationCreateInput: ApplicationOrgIdFkeyApplicationCreateInput;
  ApplicationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate: ApplicationOnApplicationForApplicationOrgIdFkeyNodeIdUpdate;
  OrganisationPatch: OrganisationPatch;
  ApplicationOrgIdFkeyOrganisationCreateInput: ApplicationOrgIdFkeyOrganisationCreateInput;
  ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationForApplicationUserIdFkeyUsingApplicationSerialKeyUpdate;
  UserOnApplicationForApplicationUserIdFkeyNodeIdUpdate: UserOnApplicationForApplicationUserIdFkeyNodeIdUpdate;
  ApplicationUserIdFkeyApplicationCreateInput: ApplicationUserIdFkeyApplicationCreateInput;
  UserOnApplicationForApplicationUserIdFkeyUsingUserUsernameKeyUpdate: UserOnApplicationForApplicationUserIdFkeyUsingUserUsernameKeyUpdate;
  ApplicationOnApplicationForApplicationUserIdFkeyNodeIdUpdate: ApplicationOnApplicationForApplicationUserIdFkeyNodeIdUpdate;
  UserPatch: UserPatch;
  ApplicationUserIdFkeyUserCreateInput: ApplicationUserIdFkeyUserCreateInput;
  ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationSerialKeyUpdate: ApplicationOnApplicationForApplicationTemplateIdFkeyUsingApplicationSerialKeyUpdate;
  TemplateOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate: TemplateOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate;
  ApplicationTemplateIdFkeyApplicationCreateInput: ApplicationTemplateIdFkeyApplicationCreateInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate;
  TemplatePatch: TemplatePatch;
  TemplatePermissionTemplateIdFkeyTemplateCreateInput: TemplatePermissionTemplateIdFkeyTemplateCreateInput;
  PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate: PermissionNameOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate;
  TemplatePermissionPermissionNameIdFkeyTemplatePermissionCreateInput: TemplatePermissionPermissionNameIdFkeyTemplatePermissionCreateInput;
  PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate: PermissionJoinOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate;
  PermissionNamePatch: PermissionNamePatch;
  PermissionJoinPermissionNameIdFkeyPermissionNameCreateInput: PermissionJoinPermissionNameIdFkeyPermissionNameCreateInput;
  UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate: UserOrganisationOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate;
  PermissionJoinPatch: PermissionJoinPatch;
  PermissionJoinUserOrganisationIdFkeyPermissionJoinCreateInput: PermissionJoinUserOrganisationIdFkeyPermissionJoinCreateInput;
  OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate: OrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate;
  UserOrganisationPatch: UserOrganisationPatch;
  UserOrganisationOrganisationIdFkeyUserOrganisationCreateInput: UserOrganisationOrganisationIdFkeyUserOrganisationCreateInput;
  UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate: UserOrganisationOnUserOrganisationForUserOrganisationOrganisationIdFkeyNodeIdUpdate;
  UserOrganisationOrganisationIdFkeyOrganisationCreateInput: UserOrganisationOrganisationIdFkeyOrganisationCreateInput;
  PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserOrganisationIdFkeyNodeIdUpdate;
  PermissionJoinUserOrganisationIdFkeyUserOrganisationCreateInput: PermissionJoinUserOrganisationIdFkeyUserOrganisationCreateInput;
  UserOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate: UserOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate;
  PermissionJoinUserIdFkeyPermissionJoinCreateInput: PermissionJoinUserIdFkeyPermissionJoinCreateInput;
  UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserUsernameKeyUpdate: UserOnUserOrganisationForUserOrganisationUserIdFkeyUsingUserUsernameKeyUpdate;
  UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate: UserOrganisationOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate;
  UserOrganisationUserIdFkeyUserCreateInput: UserOrganisationUserIdFkeyUserCreateInput;
  UserOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate: UserOnUserOrganisationForUserOrganisationUserIdFkeyNodeIdUpdate;
  UserOrganisationUserIdFkeyUserOrganisationCreateInput: UserOrganisationUserIdFkeyUserOrganisationCreateInput;
  UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserUsernameKeyUpdate: UserOnPermissionJoinForPermissionJoinUserIdFkeyUsingUserUsernameKeyUpdate;
  PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate: PermissionJoinOnPermissionJoinForPermissionJoinUserIdFkeyNodeIdUpdate;
  PermissionJoinUserIdFkeyUserCreateInput: PermissionJoinUserIdFkeyUserCreateInput;
  PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate: PermissionNameOnPermissionJoinForPermissionJoinPermissionNameIdFkeyNodeIdUpdate;
  PermissionJoinPermissionNameIdFkeyPermissionJoinCreateInput: PermissionJoinPermissionNameIdFkeyPermissionJoinCreateInput;
  PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate: PermissionPolicyOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate;
  PermissionNamePermissionPolicyIdFkeyPermissionNameCreateInput: PermissionNamePermissionPolicyIdFkeyPermissionNameCreateInput;
  PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate: PermissionNameOnPermissionNameForPermissionNamePermissionPolicyIdFkeyNodeIdUpdate;
  PermissionPolicyPatch: PermissionPolicyPatch;
  PermissionNamePermissionPolicyIdFkeyPermissionPolicyCreateInput: PermissionNamePermissionPolicyIdFkeyPermissionPolicyCreateInput;
  TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate: TemplatePermissionOnTemplatePermissionForTemplatePermissionPermissionNameIdFkeyNodeIdUpdate;
  TemplatePermissionPermissionNameIdFkeyPermissionNameCreateInput: TemplatePermissionPermissionNameIdFkeyPermissionNameCreateInput;
  TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate: TemplateOnTemplatePermissionForTemplatePermissionTemplateIdFkeyNodeIdUpdate;
  TemplatePermissionTemplateIdFkeyTemplatePermissionCreateInput: TemplatePermissionTemplateIdFkeyTemplatePermissionCreateInput;
  TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate: TemplateSectionOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate;
  TemplateSectionTemplateIdFkeyTemplateCreateInput: TemplateSectionTemplateIdFkeyTemplateCreateInput;
  TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate: TemplateOnTemplateSectionForTemplateSectionTemplateIdFkeyNodeIdUpdate;
  TemplateSectionTemplateIdFkeyTemplateSectionCreateInput: TemplateSectionTemplateIdFkeyTemplateSectionCreateInput;
  TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate: TemplateStageOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate;
  TemplateStageTemplateIdFkeyTemplateCreateInput: TemplateStageTemplateIdFkeyTemplateCreateInput;
  TemplateOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate: TemplateOnTemplateStageForTemplateStageTemplateIdFkeyNodeIdUpdate;
  TemplateStageTemplateIdFkeyTemplateStageCreateInput: TemplateStageTemplateIdFkeyTemplateStageCreateInput;
  ApplicationOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate: ApplicationOnApplicationForApplicationTemplateIdFkeyNodeIdUpdate;
  ApplicationTemplateIdFkeyTemplateCreateInput: ApplicationTemplateIdFkeyTemplateCreateInput;
  CreateApplicationPayload: CreateApplicationPayload;
  CreateApplicationSectionInput: CreateApplicationSectionInput;
  ApplicationSectionInput: ApplicationSectionInput;
  CreateApplicationSectionPayload: CreateApplicationSectionPayload;
  CreateApplicationStageHistoryInput: CreateApplicationStageHistoryInput;
  ApplicationStageHistoryInput: ApplicationStageHistoryInput;
  CreateApplicationStageHistoryPayload: CreateApplicationStageHistoryPayload;
  CreateApplicationStatusHistoryInput: CreateApplicationStatusHistoryInput;
  ApplicationStatusHistoryInput: ApplicationStatusHistoryInput;
  CreateApplicationStatusHistoryPayload: CreateApplicationStatusHistoryPayload;
  CreateElementTypePluginInput: CreateElementTypePluginInput;
  ElementTypePluginInput: ElementTypePluginInput;
  CreateElementTypePluginPayload: CreateElementTypePluginPayload;
  CreateOrganisationInput: CreateOrganisationInput;
  OrganisationInput: OrganisationInput;
  CreateOrganisationPayload: CreateOrganisationPayload;
  CreatePermissionJoinInput: CreatePermissionJoinInput;
  PermissionJoinInput: PermissionJoinInput;
  CreatePermissionJoinPayload: CreatePermissionJoinPayload;
  CreatePermissionNameInput: CreatePermissionNameInput;
  PermissionNameInput: PermissionNameInput;
  CreatePermissionNamePayload: CreatePermissionNamePayload;
  CreatePermissionPolicyInput: CreatePermissionPolicyInput;
  PermissionPolicyInput: PermissionPolicyInput;
  CreatePermissionPolicyPayload: CreatePermissionPolicyPayload;
  CreateTemplateInput: CreateTemplateInput;
  TemplateInput: TemplateInput;
  CreateTemplatePayload: CreateTemplatePayload;
  CreateTemplateElementInput: CreateTemplateElementInput;
  TemplateElementInput: TemplateElementInput;
  CreateTemplateElementPayload: CreateTemplateElementPayload;
  CreateTemplatePermissionInput: CreateTemplatePermissionInput;
  TemplatePermissionInput: TemplatePermissionInput;
  CreateTemplatePermissionPayload: CreateTemplatePermissionPayload;
  CreateTemplateSectionInput: CreateTemplateSectionInput;
  TemplateSectionInput: TemplateSectionInput;
  CreateTemplateSectionPayload: CreateTemplateSectionPayload;
  CreateTemplateStageInput: CreateTemplateStageInput;
  TemplateStageInput: TemplateStageInput;
  CreateTemplateStagePayload: CreateTemplateStagePayload;
  CreateTriggerQueueInput: CreateTriggerQueueInput;
  TriggerQueueInput: TriggerQueueInput;
  CreateTriggerQueuePayload: CreateTriggerQueuePayload;
  CreateUserInput: CreateUserInput;
  UserInput: UserInput;
  CreateUserPayload: CreateUserPayload;
  CreateUserOrganisationInput: CreateUserOrganisationInput;
  UserOrganisationInput: UserOrganisationInput;
  CreateUserOrganisationPayload: CreateUserOrganisationPayload;
  UpdateApplicationByNodeIdInput: UpdateApplicationByNodeIdInput;
  UpdateApplicationPayload: UpdateApplicationPayload;
  UpdateApplicationInput: UpdateApplicationInput;
  UpdateApplicationBySerialInput: UpdateApplicationBySerialInput;
  UpdateApplicationSectionByNodeIdInput: UpdateApplicationSectionByNodeIdInput;
  UpdateApplicationSectionPayload: UpdateApplicationSectionPayload;
  UpdateApplicationSectionInput: UpdateApplicationSectionInput;
  UpdateApplicationStageHistoryByNodeIdInput: UpdateApplicationStageHistoryByNodeIdInput;
  UpdateApplicationStageHistoryPayload: UpdateApplicationStageHistoryPayload;
  UpdateApplicationStageHistoryInput: UpdateApplicationStageHistoryInput;
  UpdateApplicationStatusHistoryByNodeIdInput: UpdateApplicationStatusHistoryByNodeIdInput;
  UpdateApplicationStatusHistoryPayload: UpdateApplicationStatusHistoryPayload;
  UpdateApplicationStatusHistoryInput: UpdateApplicationStatusHistoryInput;
  UpdateElementTypePluginByNodeIdInput: UpdateElementTypePluginByNodeIdInput;
  ElementTypePluginPatch: ElementTypePluginPatch;
  UpdateElementTypePluginPayload: UpdateElementTypePluginPayload;
  UpdateElementTypePluginInput: UpdateElementTypePluginInput;
  UpdateOrganisationByNodeIdInput: UpdateOrganisationByNodeIdInput;
  UpdateOrganisationPayload: UpdateOrganisationPayload;
  UpdateOrganisationInput: UpdateOrganisationInput;
  UpdatePermissionJoinByNodeIdInput: UpdatePermissionJoinByNodeIdInput;
  UpdatePermissionJoinPayload: UpdatePermissionJoinPayload;
  UpdatePermissionJoinInput: UpdatePermissionJoinInput;
  UpdatePermissionNameByNodeIdInput: UpdatePermissionNameByNodeIdInput;
  UpdatePermissionNamePayload: UpdatePermissionNamePayload;
  UpdatePermissionNameInput: UpdatePermissionNameInput;
  UpdatePermissionPolicyByNodeIdInput: UpdatePermissionPolicyByNodeIdInput;
  UpdatePermissionPolicyPayload: UpdatePermissionPolicyPayload;
  UpdatePermissionPolicyInput: UpdatePermissionPolicyInput;
  UpdateTemplateByNodeIdInput: UpdateTemplateByNodeIdInput;
  UpdateTemplatePayload: UpdateTemplatePayload;
  UpdateTemplateInput: UpdateTemplateInput;
  UpdateTemplateElementByNodeIdInput: UpdateTemplateElementByNodeIdInput;
  UpdateTemplateElementPayload: UpdateTemplateElementPayload;
  UpdateTemplateElementInput: UpdateTemplateElementInput;
  UpdateTemplatePermissionByNodeIdInput: UpdateTemplatePermissionByNodeIdInput;
  UpdateTemplatePermissionPayload: UpdateTemplatePermissionPayload;
  UpdateTemplatePermissionInput: UpdateTemplatePermissionInput;
  UpdateTemplateSectionByNodeIdInput: UpdateTemplateSectionByNodeIdInput;
  UpdateTemplateSectionPayload: UpdateTemplateSectionPayload;
  UpdateTemplateSectionInput: UpdateTemplateSectionInput;
  UpdateTemplateStageByNodeIdInput: UpdateTemplateStageByNodeIdInput;
  UpdateTemplateStagePayload: UpdateTemplateStagePayload;
  UpdateTemplateStageInput: UpdateTemplateStageInput;
  UpdateTriggerQueueByNodeIdInput: UpdateTriggerQueueByNodeIdInput;
  TriggerQueuePatch: TriggerQueuePatch;
  UpdateTriggerQueuePayload: UpdateTriggerQueuePayload;
  UpdateTriggerQueueInput: UpdateTriggerQueueInput;
  UpdateUserByNodeIdInput: UpdateUserByNodeIdInput;
  UpdateUserPayload: UpdateUserPayload;
  UpdateUserInput: UpdateUserInput;
  UpdateUserByUsernameInput: UpdateUserByUsernameInput;
  UpdateUserOrganisationByNodeIdInput: UpdateUserOrganisationByNodeIdInput;
  UpdateUserOrganisationPayload: UpdateUserOrganisationPayload;
  UpdateUserOrganisationInput: UpdateUserOrganisationInput;
  DeleteApplicationByNodeIdInput: DeleteApplicationByNodeIdInput;
  DeleteApplicationPayload: DeleteApplicationPayload;
  DeleteApplicationInput: DeleteApplicationInput;
  DeleteApplicationBySerialInput: DeleteApplicationBySerialInput;
  DeleteApplicationSectionByNodeIdInput: DeleteApplicationSectionByNodeIdInput;
  DeleteApplicationSectionPayload: DeleteApplicationSectionPayload;
  DeleteApplicationSectionInput: DeleteApplicationSectionInput;
  DeleteApplicationStageHistoryByNodeIdInput: DeleteApplicationStageHistoryByNodeIdInput;
  DeleteApplicationStageHistoryPayload: DeleteApplicationStageHistoryPayload;
  DeleteApplicationStageHistoryInput: DeleteApplicationStageHistoryInput;
  DeleteApplicationStatusHistoryByNodeIdInput: DeleteApplicationStatusHistoryByNodeIdInput;
  DeleteApplicationStatusHistoryPayload: DeleteApplicationStatusHistoryPayload;
  DeleteApplicationStatusHistoryInput: DeleteApplicationStatusHistoryInput;
  DeleteElementTypePluginByNodeIdInput: DeleteElementTypePluginByNodeIdInput;
  DeleteElementTypePluginPayload: DeleteElementTypePluginPayload;
  DeleteElementTypePluginInput: DeleteElementTypePluginInput;
  DeleteOrganisationByNodeIdInput: DeleteOrganisationByNodeIdInput;
  DeleteOrganisationPayload: DeleteOrganisationPayload;
  DeleteOrganisationInput: DeleteOrganisationInput;
  DeletePermissionJoinByNodeIdInput: DeletePermissionJoinByNodeIdInput;
  DeletePermissionJoinPayload: DeletePermissionJoinPayload;
  DeletePermissionJoinInput: DeletePermissionJoinInput;
  DeletePermissionNameByNodeIdInput: DeletePermissionNameByNodeIdInput;
  DeletePermissionNamePayload: DeletePermissionNamePayload;
  DeletePermissionNameInput: DeletePermissionNameInput;
  DeletePermissionPolicyByNodeIdInput: DeletePermissionPolicyByNodeIdInput;
  DeletePermissionPolicyPayload: DeletePermissionPolicyPayload;
  DeletePermissionPolicyInput: DeletePermissionPolicyInput;
  DeleteTemplateByNodeIdInput: DeleteTemplateByNodeIdInput;
  DeleteTemplatePayload: DeleteTemplatePayload;
  DeleteTemplateInput: DeleteTemplateInput;
  DeleteTemplateElementByNodeIdInput: DeleteTemplateElementByNodeIdInput;
  DeleteTemplateElementPayload: DeleteTemplateElementPayload;
  DeleteTemplateElementInput: DeleteTemplateElementInput;
  DeleteTemplatePermissionByNodeIdInput: DeleteTemplatePermissionByNodeIdInput;
  DeleteTemplatePermissionPayload: DeleteTemplatePermissionPayload;
  DeleteTemplatePermissionInput: DeleteTemplatePermissionInput;
  DeleteTemplateSectionByNodeIdInput: DeleteTemplateSectionByNodeIdInput;
  DeleteTemplateSectionPayload: DeleteTemplateSectionPayload;
  DeleteTemplateSectionInput: DeleteTemplateSectionInput;
  DeleteTemplateStageByNodeIdInput: DeleteTemplateStageByNodeIdInput;
  DeleteTemplateStagePayload: DeleteTemplateStagePayload;
  DeleteTemplateStageInput: DeleteTemplateStageInput;
  DeleteTriggerQueueByNodeIdInput: DeleteTriggerQueueByNodeIdInput;
  DeleteTriggerQueuePayload: DeleteTriggerQueuePayload;
  DeleteTriggerQueueInput: DeleteTriggerQueueInput;
  DeleteUserByNodeIdInput: DeleteUserByNodeIdInput;
  DeleteUserPayload: DeleteUserPayload;
  DeleteUserInput: DeleteUserInput;
  DeleteUserByUsernameInput: DeleteUserByUsernameInput;
  DeleteUserOrganisationByNodeIdInput: DeleteUserOrganisationByNodeIdInput;
  DeleteUserOrganisationPayload: DeleteUserOrganisationPayload;
  DeleteUserOrganisationInput: DeleteUserOrganisationInput;
};

export type AllPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllPermission'] = ResolversParentTypes['AllPermission']> = {
  permissionType?: Resolver<Maybe<ResolversTypes['PermissionPolicyType']>, ParentType, ContextType>;
  permissionPolicyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  permissionPolicyRules?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  permissionNameId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templatePermissionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templatePermissionRestrictions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templateCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllPermissionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllPermissionsConnection'] = ResolversParentTypes['AllPermissionsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['AllPermission']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AllPermissionsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllPermissionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllPermissionsEdge'] = ResolversParentTypes['AllPermissionsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AllPermission']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Application'] = ResolversParentTypes['Application']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  serial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outcome?: Resolver<Maybe<ResolversTypes['ApplicationOutcome']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  trigger?: Resolver<Maybe<ResolversTypes['Trigger']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  applicationSections?: Resolver<ResolversTypes['ApplicationSectionsConnection'], ParentType, ContextType, RequireFields<ApplicationApplicationSectionsArgs, 'orderBy'>>;
  applicationStageHistories?: Resolver<ResolversTypes['ApplicationStageHistoriesConnection'], ParentType, ContextType, RequireFields<ApplicationApplicationStageHistoriesArgs, 'orderBy'>>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stageNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationsConnection'] = ResolversParentTypes['ApplicationsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['Application']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ApplicationsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationSection'] = ResolversParentTypes['ApplicationSection']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  applicationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templateSectionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationSectionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationSectionsConnection'] = ResolversParentTypes['ApplicationSectionsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['ApplicationSection']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ApplicationSectionsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationSectionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationSectionsEdge'] = ResolversParentTypes['ApplicationSectionsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ApplicationSection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationsEdge'] = ResolversParentTypes['ApplicationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStageHistoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStageHistoriesConnection'] = ResolversParentTypes['ApplicationStageHistoriesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['ApplicationStageHistory']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ApplicationStageHistoriesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStageHistoriesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStageHistoriesEdge'] = ResolversParentTypes['ApplicationStageHistoriesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStageHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStageHistory'] = ResolversParentTypes['ApplicationStageHistory']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  applicationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stageId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeCreated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  applicationStatusHistories?: Resolver<ResolversTypes['ApplicationStatusHistoriesConnection'], ParentType, ContextType, RequireFields<ApplicationStageHistoryApplicationStatusHistoriesArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStageStatusAllResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStageStatusAll'] = ResolversParentTypes['ApplicationStageStatusAll']> = {
  applicationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  serial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stageId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stageNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stageHistoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stageHistoryTimeCreated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  stageIsCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  statusHistoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicationStatus']>, ParentType, ContextType>;
  statusHistoryTimeCreated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  statusIsCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStageStatusAllsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStageStatusAllsConnection'] = ResolversParentTypes['ApplicationStageStatusAllsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['ApplicationStageStatusAll']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ApplicationStageStatusAllsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStageStatusAllsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStageStatusAllsEdge'] = ResolversParentTypes['ApplicationStageStatusAllsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ApplicationStageStatusAll']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStatusHistoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStatusHistoriesConnection'] = ResolversParentTypes['ApplicationStatusHistoriesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['ApplicationStatusHistory']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ApplicationStatusHistoriesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStatusHistoriesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStatusHistoriesEdge'] = ResolversParentTypes['ApplicationStatusHistoriesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationStatusHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationStatusHistory'] = ResolversParentTypes['ApplicationStatusHistory']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  applicationStageHistoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ApplicationStatus']>, ParentType, ContextType>;
  timeCreated?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  applicationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CreateApplicationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateApplicationPayload'] = ResolversParentTypes['CreateApplicationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  applicationEdge?: Resolver<Maybe<ResolversTypes['ApplicationsEdge']>, ParentType, ContextType, RequireFields<CreateApplicationPayloadApplicationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateApplicationSectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateApplicationSectionPayload'] = ResolversParentTypes['CreateApplicationSectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationSection?: Resolver<Maybe<ResolversTypes['ApplicationSection']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  applicationSectionEdge?: Resolver<Maybe<ResolversTypes['ApplicationSectionsEdge']>, ParentType, ContextType, RequireFields<CreateApplicationSectionPayloadApplicationSectionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateApplicationStageHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateApplicationStageHistoryPayload'] = ResolversParentTypes['CreateApplicationStageHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  applicationStageHistoryEdge?: Resolver<Maybe<ResolversTypes['ApplicationStageHistoriesEdge']>, ParentType, ContextType, RequireFields<CreateApplicationStageHistoryPayloadApplicationStageHistoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateApplicationStatusHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateApplicationStatusHistoryPayload'] = ResolversParentTypes['CreateApplicationStatusHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationStatusHistory?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistory']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  applicationStatusHistoryEdge?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistoriesEdge']>, ParentType, ContextType, RequireFields<CreateApplicationStatusHistoryPayloadApplicationStatusHistoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateElementTypePluginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateElementTypePluginPayload'] = ResolversParentTypes['CreateElementTypePluginPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elementTypePlugin?: Resolver<Maybe<ResolversTypes['ElementTypePlugin']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  elementTypePluginEdge?: Resolver<Maybe<ResolversTypes['ElementTypePluginsEdge']>, ParentType, ContextType, RequireFields<CreateElementTypePluginPayloadElementTypePluginEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganisationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrganisationPayload'] = ResolversParentTypes['CreateOrganisationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  organisationEdge?: Resolver<Maybe<ResolversTypes['OrganisationsEdge']>, ParentType, ContextType, RequireFields<CreateOrganisationPayloadOrganisationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePermissionJoinPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePermissionJoinPayload'] = ResolversParentTypes['CreatePermissionJoinPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionJoin?: Resolver<Maybe<ResolversTypes['PermissionJoin']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  permissionJoinEdge?: Resolver<Maybe<ResolversTypes['PermissionJoinsEdge']>, ParentType, ContextType, RequireFields<CreatePermissionJoinPayloadPermissionJoinEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePermissionNamePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePermissionNamePayload'] = ResolversParentTypes['CreatePermissionNamePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  permissionNameEdge?: Resolver<Maybe<ResolversTypes['PermissionNamesEdge']>, ParentType, ContextType, RequireFields<CreatePermissionNamePayloadPermissionNameEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePermissionPolicyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePermissionPolicyPayload'] = ResolversParentTypes['CreatePermissionPolicyPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionPolicyEdge?: Resolver<Maybe<ResolversTypes['PermissionPoliciesEdge']>, ParentType, ContextType, RequireFields<CreatePermissionPolicyPayloadPermissionPolicyEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTemplateElementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemplateElementPayload'] = ResolversParentTypes['CreateTemplateElementPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateElement?: Resolver<Maybe<ResolversTypes['TemplateElement']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  templateElementEdge?: Resolver<Maybe<ResolversTypes['TemplateElementsEdge']>, ParentType, ContextType, RequireFields<CreateTemplateElementPayloadTemplateElementEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTemplatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemplatePayload'] = ResolversParentTypes['CreateTemplatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  templateEdge?: Resolver<Maybe<ResolversTypes['TemplatesEdge']>, ParentType, ContextType, RequireFields<CreateTemplatePayloadTemplateEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTemplatePermissionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemplatePermissionPayload'] = ResolversParentTypes['CreateTemplatePermissionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templatePermission?: Resolver<Maybe<ResolversTypes['TemplatePermission']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  templatePermissionEdge?: Resolver<Maybe<ResolversTypes['TemplatePermissionsEdge']>, ParentType, ContextType, RequireFields<CreateTemplatePermissionPayloadTemplatePermissionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTemplateSectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemplateSectionPayload'] = ResolversParentTypes['CreateTemplateSectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSectionEdge?: Resolver<Maybe<ResolversTypes['TemplateSectionsEdge']>, ParentType, ContextType, RequireFields<CreateTemplateSectionPayloadTemplateSectionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTemplateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTemplateStagePayload'] = ResolversParentTypes['CreateTemplateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateStage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateStageEdge?: Resolver<Maybe<ResolversTypes['TemplateStagesEdge']>, ParentType, ContextType, RequireFields<CreateTemplateStagePayloadTemplateStageEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTriggerQueuePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTriggerQueuePayload'] = ResolversParentTypes['CreateTriggerQueuePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggerQueue?: Resolver<Maybe<ResolversTypes['TriggerQueue']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  triggerQueueEdge?: Resolver<Maybe<ResolversTypes['TriggerQueuesEdge']>, ParentType, ContextType, RequireFields<CreateTriggerQueuePayloadTriggerQueueEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserOrganisationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserOrganisationPayload'] = ResolversParentTypes['CreateUserOrganisationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  userOrganisationEdge?: Resolver<Maybe<ResolversTypes['UserOrganisationsEdge']>, ParentType, ContextType, RequireFields<CreateUserOrganisationPayloadUserOrganisationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteApplicationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteApplicationPayload'] = ResolversParentTypes['DeleteApplicationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  deletedApplicationNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  applicationEdge?: Resolver<Maybe<ResolversTypes['ApplicationsEdge']>, ParentType, ContextType, RequireFields<DeleteApplicationPayloadApplicationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteApplicationSectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteApplicationSectionPayload'] = ResolversParentTypes['DeleteApplicationSectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationSection?: Resolver<Maybe<ResolversTypes['ApplicationSection']>, ParentType, ContextType>;
  deletedApplicationSectionNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  applicationSectionEdge?: Resolver<Maybe<ResolversTypes['ApplicationSectionsEdge']>, ParentType, ContextType, RequireFields<DeleteApplicationSectionPayloadApplicationSectionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteApplicationStageHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteApplicationStageHistoryPayload'] = ResolversParentTypes['DeleteApplicationStageHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  deletedApplicationStageHistoryNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  applicationStageHistoryEdge?: Resolver<Maybe<ResolversTypes['ApplicationStageHistoriesEdge']>, ParentType, ContextType, RequireFields<DeleteApplicationStageHistoryPayloadApplicationStageHistoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteApplicationStatusHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteApplicationStatusHistoryPayload'] = ResolversParentTypes['DeleteApplicationStatusHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationStatusHistory?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistory']>, ParentType, ContextType>;
  deletedApplicationStatusHistoryNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  applicationStatusHistoryEdge?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistoriesEdge']>, ParentType, ContextType, RequireFields<DeleteApplicationStatusHistoryPayloadApplicationStatusHistoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteElementTypePluginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteElementTypePluginPayload'] = ResolversParentTypes['DeleteElementTypePluginPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elementTypePlugin?: Resolver<Maybe<ResolversTypes['ElementTypePlugin']>, ParentType, ContextType>;
  deletedElementTypePluginNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  elementTypePluginEdge?: Resolver<Maybe<ResolversTypes['ElementTypePluginsEdge']>, ParentType, ContextType, RequireFields<DeleteElementTypePluginPayloadElementTypePluginEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteOrganisationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteOrganisationPayload'] = ResolversParentTypes['DeleteOrganisationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  deletedOrganisationNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  organisationEdge?: Resolver<Maybe<ResolversTypes['OrganisationsEdge']>, ParentType, ContextType, RequireFields<DeleteOrganisationPayloadOrganisationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePermissionJoinPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePermissionJoinPayload'] = ResolversParentTypes['DeletePermissionJoinPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionJoin?: Resolver<Maybe<ResolversTypes['PermissionJoin']>, ParentType, ContextType>;
  deletedPermissionJoinNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  permissionJoinEdge?: Resolver<Maybe<ResolversTypes['PermissionJoinsEdge']>, ParentType, ContextType, RequireFields<DeletePermissionJoinPayloadPermissionJoinEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePermissionNamePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePermissionNamePayload'] = ResolversParentTypes['DeletePermissionNamePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  deletedPermissionNameNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  permissionNameEdge?: Resolver<Maybe<ResolversTypes['PermissionNamesEdge']>, ParentType, ContextType, RequireFields<DeletePermissionNamePayloadPermissionNameEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePermissionPolicyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePermissionPolicyPayload'] = ResolversParentTypes['DeletePermissionPolicyPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  deletedPermissionPolicyNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionPolicyEdge?: Resolver<Maybe<ResolversTypes['PermissionPoliciesEdge']>, ParentType, ContextType, RequireFields<DeletePermissionPolicyPayloadPermissionPolicyEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTemplateElementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemplateElementPayload'] = ResolversParentTypes['DeleteTemplateElementPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateElement?: Resolver<Maybe<ResolversTypes['TemplateElement']>, ParentType, ContextType>;
  deletedTemplateElementNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  templateElementEdge?: Resolver<Maybe<ResolversTypes['TemplateElementsEdge']>, ParentType, ContextType, RequireFields<DeleteTemplateElementPayloadTemplateElementEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTemplatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemplatePayload'] = ResolversParentTypes['DeleteTemplatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  deletedTemplateNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  templateEdge?: Resolver<Maybe<ResolversTypes['TemplatesEdge']>, ParentType, ContextType, RequireFields<DeleteTemplatePayloadTemplateEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTemplatePermissionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemplatePermissionPayload'] = ResolversParentTypes['DeleteTemplatePermissionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templatePermission?: Resolver<Maybe<ResolversTypes['TemplatePermission']>, ParentType, ContextType>;
  deletedTemplatePermissionNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  templatePermissionEdge?: Resolver<Maybe<ResolversTypes['TemplatePermissionsEdge']>, ParentType, ContextType, RequireFields<DeleteTemplatePermissionPayloadTemplatePermissionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTemplateSectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemplateSectionPayload'] = ResolversParentTypes['DeleteTemplateSectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  deletedTemplateSectionNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSectionEdge?: Resolver<Maybe<ResolversTypes['TemplateSectionsEdge']>, ParentType, ContextType, RequireFields<DeleteTemplateSectionPayloadTemplateSectionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTemplateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTemplateStagePayload'] = ResolversParentTypes['DeleteTemplateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateStage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  deletedTemplateStageNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateStageEdge?: Resolver<Maybe<ResolversTypes['TemplateStagesEdge']>, ParentType, ContextType, RequireFields<DeleteTemplateStagePayloadTemplateStageEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTriggerQueuePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTriggerQueuePayload'] = ResolversParentTypes['DeleteTriggerQueuePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggerQueue?: Resolver<Maybe<ResolversTypes['TriggerQueue']>, ParentType, ContextType>;
  deletedTriggerQueueNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  triggerQueueEdge?: Resolver<Maybe<ResolversTypes['TriggerQueuesEdge']>, ParentType, ContextType, RequireFields<DeleteTriggerQueuePayloadTriggerQueueEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserOrganisationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserOrganisationPayload'] = ResolversParentTypes['DeleteUserOrganisationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  deletedUserOrganisationNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  userOrganisationEdge?: Resolver<Maybe<ResolversTypes['UserOrganisationsEdge']>, ParentType, ContextType, RequireFields<DeleteUserOrganisationPayloadUserOrganisationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  deletedUserNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<DeleteUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElementTypePluginResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementTypePlugin'] = ResolversParentTypes['ElementTypePlugin']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['TemplateElementCategory']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayComponentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configComponentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requiredParameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElementTypePluginsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementTypePluginsConnection'] = ResolversParentTypes['ElementTypePluginsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['ElementTypePlugin']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ElementTypePluginsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElementTypePluginsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ElementTypePluginsEdge'] = ResolversParentTypes['ElementTypePluginsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ElementTypePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createApplication?: Resolver<Maybe<ResolversTypes['CreateApplicationPayload']>, ParentType, ContextType, RequireFields<MutationCreateApplicationArgs, 'input'>>;
  createApplicationSection?: Resolver<Maybe<ResolversTypes['CreateApplicationSectionPayload']>, ParentType, ContextType, RequireFields<MutationCreateApplicationSectionArgs, 'input'>>;
  createApplicationStageHistory?: Resolver<Maybe<ResolversTypes['CreateApplicationStageHistoryPayload']>, ParentType, ContextType, RequireFields<MutationCreateApplicationStageHistoryArgs, 'input'>>;
  createApplicationStatusHistory?: Resolver<Maybe<ResolversTypes['CreateApplicationStatusHistoryPayload']>, ParentType, ContextType, RequireFields<MutationCreateApplicationStatusHistoryArgs, 'input'>>;
  createElementTypePlugin?: Resolver<Maybe<ResolversTypes['CreateElementTypePluginPayload']>, ParentType, ContextType, RequireFields<MutationCreateElementTypePluginArgs, 'input'>>;
  createOrganisation?: Resolver<Maybe<ResolversTypes['CreateOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrganisationArgs, 'input'>>;
  createPermissionJoin?: Resolver<Maybe<ResolversTypes['CreatePermissionJoinPayload']>, ParentType, ContextType, RequireFields<MutationCreatePermissionJoinArgs, 'input'>>;
  createPermissionName?: Resolver<Maybe<ResolversTypes['CreatePermissionNamePayload']>, ParentType, ContextType, RequireFields<MutationCreatePermissionNameArgs, 'input'>>;
  createPermissionPolicy?: Resolver<Maybe<ResolversTypes['CreatePermissionPolicyPayload']>, ParentType, ContextType, RequireFields<MutationCreatePermissionPolicyArgs, 'input'>>;
  createTemplate?: Resolver<Maybe<ResolversTypes['CreateTemplatePayload']>, ParentType, ContextType, RequireFields<MutationCreateTemplateArgs, 'input'>>;
  createTemplateElement?: Resolver<Maybe<ResolversTypes['CreateTemplateElementPayload']>, ParentType, ContextType, RequireFields<MutationCreateTemplateElementArgs, 'input'>>;
  createTemplatePermission?: Resolver<Maybe<ResolversTypes['CreateTemplatePermissionPayload']>, ParentType, ContextType, RequireFields<MutationCreateTemplatePermissionArgs, 'input'>>;
  createTemplateSection?: Resolver<Maybe<ResolversTypes['CreateTemplateSectionPayload']>, ParentType, ContextType, RequireFields<MutationCreateTemplateSectionArgs, 'input'>>;
  createTemplateStage?: Resolver<Maybe<ResolversTypes['CreateTemplateStagePayload']>, ParentType, ContextType, RequireFields<MutationCreateTemplateStageArgs, 'input'>>;
  createTriggerQueue?: Resolver<Maybe<ResolversTypes['CreateTriggerQueuePayload']>, ParentType, ContextType, RequireFields<MutationCreateTriggerQueueArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserOrganisation?: Resolver<Maybe<ResolversTypes['CreateUserOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserOrganisationArgs, 'input'>>;
  updateApplicationByNodeId?: Resolver<Maybe<ResolversTypes['UpdateApplicationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationByNodeIdArgs, 'input'>>;
  updateApplication?: Resolver<Maybe<ResolversTypes['UpdateApplicationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationArgs, 'input'>>;
  updateApplicationBySerial?: Resolver<Maybe<ResolversTypes['UpdateApplicationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationBySerialArgs, 'input'>>;
  updateApplicationSectionByNodeId?: Resolver<Maybe<ResolversTypes['UpdateApplicationSectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationSectionByNodeIdArgs, 'input'>>;
  updateApplicationSection?: Resolver<Maybe<ResolversTypes['UpdateApplicationSectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationSectionArgs, 'input'>>;
  updateApplicationStageHistoryByNodeId?: Resolver<Maybe<ResolversTypes['UpdateApplicationStageHistoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationStageHistoryByNodeIdArgs, 'input'>>;
  updateApplicationStageHistory?: Resolver<Maybe<ResolversTypes['UpdateApplicationStageHistoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationStageHistoryArgs, 'input'>>;
  updateApplicationStatusHistoryByNodeId?: Resolver<Maybe<ResolversTypes['UpdateApplicationStatusHistoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationStatusHistoryByNodeIdArgs, 'input'>>;
  updateApplicationStatusHistory?: Resolver<Maybe<ResolversTypes['UpdateApplicationStatusHistoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateApplicationStatusHistoryArgs, 'input'>>;
  updateElementTypePluginByNodeId?: Resolver<Maybe<ResolversTypes['UpdateElementTypePluginPayload']>, ParentType, ContextType, RequireFields<MutationUpdateElementTypePluginByNodeIdArgs, 'input'>>;
  updateElementTypePlugin?: Resolver<Maybe<ResolversTypes['UpdateElementTypePluginPayload']>, ParentType, ContextType, RequireFields<MutationUpdateElementTypePluginArgs, 'input'>>;
  updateOrganisationByNodeId?: Resolver<Maybe<ResolversTypes['UpdateOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrganisationByNodeIdArgs, 'input'>>;
  updateOrganisation?: Resolver<Maybe<ResolversTypes['UpdateOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrganisationArgs, 'input'>>;
  updatePermissionJoinByNodeId?: Resolver<Maybe<ResolversTypes['UpdatePermissionJoinPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionJoinByNodeIdArgs, 'input'>>;
  updatePermissionJoin?: Resolver<Maybe<ResolversTypes['UpdatePermissionJoinPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionJoinArgs, 'input'>>;
  updatePermissionNameByNodeId?: Resolver<Maybe<ResolversTypes['UpdatePermissionNamePayload']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionNameByNodeIdArgs, 'input'>>;
  updatePermissionName?: Resolver<Maybe<ResolversTypes['UpdatePermissionNamePayload']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionNameArgs, 'input'>>;
  updatePermissionPolicyByNodeId?: Resolver<Maybe<ResolversTypes['UpdatePermissionPolicyPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionPolicyByNodeIdArgs, 'input'>>;
  updatePermissionPolicy?: Resolver<Maybe<ResolversTypes['UpdatePermissionPolicyPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePermissionPolicyArgs, 'input'>>;
  updateTemplateByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemplatePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateByNodeIdArgs, 'input'>>;
  updateTemplate?: Resolver<Maybe<ResolversTypes['UpdateTemplatePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateArgs, 'input'>>;
  updateTemplateElementByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemplateElementPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateElementByNodeIdArgs, 'input'>>;
  updateTemplateElement?: Resolver<Maybe<ResolversTypes['UpdateTemplateElementPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateElementArgs, 'input'>>;
  updateTemplatePermissionByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemplatePermissionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplatePermissionByNodeIdArgs, 'input'>>;
  updateTemplatePermission?: Resolver<Maybe<ResolversTypes['UpdateTemplatePermissionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplatePermissionArgs, 'input'>>;
  updateTemplateSectionByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemplateSectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateSectionByNodeIdArgs, 'input'>>;
  updateTemplateSection?: Resolver<Maybe<ResolversTypes['UpdateTemplateSectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateSectionArgs, 'input'>>;
  updateTemplateStageByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTemplateStagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateStageByNodeIdArgs, 'input'>>;
  updateTemplateStage?: Resolver<Maybe<ResolversTypes['UpdateTemplateStagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTemplateStageArgs, 'input'>>;
  updateTriggerQueueByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTriggerQueuePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTriggerQueueByNodeIdArgs, 'input'>>;
  updateTriggerQueue?: Resolver<Maybe<ResolversTypes['UpdateTriggerQueuePayload']>, ParentType, ContextType, RequireFields<MutationUpdateTriggerQueueArgs, 'input'>>;
  updateUserByNodeId?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByNodeIdArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateUserByUsername?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByUsernameArgs, 'input'>>;
  updateUserOrganisationByNodeId?: Resolver<Maybe<ResolversTypes['UpdateUserOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserOrganisationByNodeIdArgs, 'input'>>;
  updateUserOrganisation?: Resolver<Maybe<ResolversTypes['UpdateUserOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserOrganisationArgs, 'input'>>;
  deleteApplicationByNodeId?: Resolver<Maybe<ResolversTypes['DeleteApplicationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationByNodeIdArgs, 'input'>>;
  deleteApplication?: Resolver<Maybe<ResolversTypes['DeleteApplicationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationArgs, 'input'>>;
  deleteApplicationBySerial?: Resolver<Maybe<ResolversTypes['DeleteApplicationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationBySerialArgs, 'input'>>;
  deleteApplicationSectionByNodeId?: Resolver<Maybe<ResolversTypes['DeleteApplicationSectionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationSectionByNodeIdArgs, 'input'>>;
  deleteApplicationSection?: Resolver<Maybe<ResolversTypes['DeleteApplicationSectionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationSectionArgs, 'input'>>;
  deleteApplicationStageHistoryByNodeId?: Resolver<Maybe<ResolversTypes['DeleteApplicationStageHistoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationStageHistoryByNodeIdArgs, 'input'>>;
  deleteApplicationStageHistory?: Resolver<Maybe<ResolversTypes['DeleteApplicationStageHistoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationStageHistoryArgs, 'input'>>;
  deleteApplicationStatusHistoryByNodeId?: Resolver<Maybe<ResolversTypes['DeleteApplicationStatusHistoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationStatusHistoryByNodeIdArgs, 'input'>>;
  deleteApplicationStatusHistory?: Resolver<Maybe<ResolversTypes['DeleteApplicationStatusHistoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteApplicationStatusHistoryArgs, 'input'>>;
  deleteElementTypePluginByNodeId?: Resolver<Maybe<ResolversTypes['DeleteElementTypePluginPayload']>, ParentType, ContextType, RequireFields<MutationDeleteElementTypePluginByNodeIdArgs, 'input'>>;
  deleteElementTypePlugin?: Resolver<Maybe<ResolversTypes['DeleteElementTypePluginPayload']>, ParentType, ContextType, RequireFields<MutationDeleteElementTypePluginArgs, 'input'>>;
  deleteOrganisationByNodeId?: Resolver<Maybe<ResolversTypes['DeleteOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteOrganisationByNodeIdArgs, 'input'>>;
  deleteOrganisation?: Resolver<Maybe<ResolversTypes['DeleteOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteOrganisationArgs, 'input'>>;
  deletePermissionJoinByNodeId?: Resolver<Maybe<ResolversTypes['DeletePermissionJoinPayload']>, ParentType, ContextType, RequireFields<MutationDeletePermissionJoinByNodeIdArgs, 'input'>>;
  deletePermissionJoin?: Resolver<Maybe<ResolversTypes['DeletePermissionJoinPayload']>, ParentType, ContextType, RequireFields<MutationDeletePermissionJoinArgs, 'input'>>;
  deletePermissionNameByNodeId?: Resolver<Maybe<ResolversTypes['DeletePermissionNamePayload']>, ParentType, ContextType, RequireFields<MutationDeletePermissionNameByNodeIdArgs, 'input'>>;
  deletePermissionName?: Resolver<Maybe<ResolversTypes['DeletePermissionNamePayload']>, ParentType, ContextType, RequireFields<MutationDeletePermissionNameArgs, 'input'>>;
  deletePermissionPolicyByNodeId?: Resolver<Maybe<ResolversTypes['DeletePermissionPolicyPayload']>, ParentType, ContextType, RequireFields<MutationDeletePermissionPolicyByNodeIdArgs, 'input'>>;
  deletePermissionPolicy?: Resolver<Maybe<ResolversTypes['DeletePermissionPolicyPayload']>, ParentType, ContextType, RequireFields<MutationDeletePermissionPolicyArgs, 'input'>>;
  deleteTemplateByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemplatePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateByNodeIdArgs, 'input'>>;
  deleteTemplate?: Resolver<Maybe<ResolversTypes['DeleteTemplatePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateArgs, 'input'>>;
  deleteTemplateElementByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemplateElementPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateElementByNodeIdArgs, 'input'>>;
  deleteTemplateElement?: Resolver<Maybe<ResolversTypes['DeleteTemplateElementPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateElementArgs, 'input'>>;
  deleteTemplatePermissionByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemplatePermissionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplatePermissionByNodeIdArgs, 'input'>>;
  deleteTemplatePermission?: Resolver<Maybe<ResolversTypes['DeleteTemplatePermissionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplatePermissionArgs, 'input'>>;
  deleteTemplateSectionByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemplateSectionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateSectionByNodeIdArgs, 'input'>>;
  deleteTemplateSection?: Resolver<Maybe<ResolversTypes['DeleteTemplateSectionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateSectionArgs, 'input'>>;
  deleteTemplateStageByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTemplateStagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateStageByNodeIdArgs, 'input'>>;
  deleteTemplateStage?: Resolver<Maybe<ResolversTypes['DeleteTemplateStagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTemplateStageArgs, 'input'>>;
  deleteTriggerQueueByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTriggerQueuePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTriggerQueueByNodeIdArgs, 'input'>>;
  deleteTriggerQueue?: Resolver<Maybe<ResolversTypes['DeleteTriggerQueuePayload']>, ParentType, ContextType, RequireFields<MutationDeleteTriggerQueueArgs, 'input'>>;
  deleteUserByNodeId?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByNodeIdArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  deleteUserByUsername?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByUsernameArgs, 'input'>>;
  deleteUserOrganisationByNodeId?: Resolver<Maybe<ResolversTypes['DeleteUserOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserOrganisationByNodeIdArgs, 'input'>>;
  deleteUserOrganisation?: Resolver<Maybe<ResolversTypes['DeleteUserOrganisationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserOrganisationArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Application' | 'Template' | 'TemplateStage' | 'ApplicationStageHistory' | 'ApplicationStatusHistory' | 'TemplateSection' | 'TemplatePermission' | 'PermissionName' | 'PermissionPolicy' | 'PermissionJoin' | 'User' | 'UserOrganisation' | 'Organisation' | 'TemplateElement' | 'ApplicationSection' | 'ElementTypePlugin' | 'TriggerQueue', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrganisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organisation'] = ResolversParentTypes['Organisation']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userOrganisations?: Resolver<ResolversTypes['UserOrganisationsConnection'], ParentType, ContextType, RequireFields<OrganisationUserOrganisationsArgs, 'orderBy'>>;
  applicationsByOrgId?: Resolver<ResolversTypes['ApplicationsConnection'], ParentType, ContextType, RequireFields<OrganisationApplicationsByOrgIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganisationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganisationsConnection'] = ResolversParentTypes['OrganisationsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['Organisation']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['OrganisationsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganisationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganisationsEdge'] = ResolversParentTypes['OrganisationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionJoinResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionJoin'] = ResolversParentTypes['PermissionJoin']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userOrganisationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  permissionNameId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionJoinsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionJoinsConnection'] = ResolversParentTypes['PermissionJoinsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['PermissionJoin']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PermissionJoinsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionJoinsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionJoinsEdge'] = ResolversParentTypes['PermissionJoinsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PermissionJoin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionName'] = ResolversParentTypes['PermissionName']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionPolicyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  permissionJoins?: Resolver<ResolversTypes['PermissionJoinsConnection'], ParentType, ContextType, RequireFields<PermissionNamePermissionJoinsArgs, 'orderBy'>>;
  templatePermissions?: Resolver<ResolversTypes['TemplatePermissionsConnection'], ParentType, ContextType, RequireFields<PermissionNameTemplatePermissionsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionNamesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionNamesConnection'] = ResolversParentTypes['PermissionNamesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['PermissionName']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PermissionNamesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionNamesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionNamesEdge'] = ResolversParentTypes['PermissionNamesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionPoliciesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionPoliciesConnection'] = ResolversParentTypes['PermissionPoliciesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['PermissionPolicy']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PermissionPoliciesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionPoliciesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionPoliciesEdge'] = ResolversParentTypes['PermissionPoliciesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionPolicyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionPolicy'] = ResolversParentTypes['PermissionPolicy']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PermissionPolicyType']>, ParentType, ContextType>;
  defaultRestrictions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  permissionNames?: Resolver<ResolversTypes['PermissionNamesConnection'], ParentType, ContextType, RequireFields<PermissionPolicyPermissionNamesArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  allPermissions?: Resolver<Maybe<ResolversTypes['AllPermissionsConnection']>, ParentType, ContextType, RequireFields<QueryAllPermissionsArgs, 'orderBy'>>;
  applications?: Resolver<Maybe<ResolversTypes['ApplicationsConnection']>, ParentType, ContextType, RequireFields<QueryApplicationsArgs, 'orderBy'>>;
  applicationSections?: Resolver<Maybe<ResolversTypes['ApplicationSectionsConnection']>, ParentType, ContextType, RequireFields<QueryApplicationSectionsArgs, 'orderBy'>>;
  applicationStageHistories?: Resolver<Maybe<ResolversTypes['ApplicationStageHistoriesConnection']>, ParentType, ContextType, RequireFields<QueryApplicationStageHistoriesArgs, 'orderBy'>>;
  applicationStageStatusAlls?: Resolver<Maybe<ResolversTypes['ApplicationStageStatusAllsConnection']>, ParentType, ContextType, RequireFields<QueryApplicationStageStatusAllsArgs, 'orderBy'>>;
  applicationStatusHistories?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistoriesConnection']>, ParentType, ContextType, RequireFields<QueryApplicationStatusHistoriesArgs, 'orderBy'>>;
  elementTypePlugins?: Resolver<Maybe<ResolversTypes['ElementTypePluginsConnection']>, ParentType, ContextType, RequireFields<QueryElementTypePluginsArgs, 'orderBy'>>;
  organisations?: Resolver<Maybe<ResolversTypes['OrganisationsConnection']>, ParentType, ContextType, RequireFields<QueryOrganisationsArgs, 'orderBy'>>;
  permissionJoins?: Resolver<Maybe<ResolversTypes['PermissionJoinsConnection']>, ParentType, ContextType, RequireFields<QueryPermissionJoinsArgs, 'orderBy'>>;
  permissionNames?: Resolver<Maybe<ResolversTypes['PermissionNamesConnection']>, ParentType, ContextType, RequireFields<QueryPermissionNamesArgs, 'orderBy'>>;
  permissionPolicies?: Resolver<Maybe<ResolversTypes['PermissionPoliciesConnection']>, ParentType, ContextType, RequireFields<QueryPermissionPoliciesArgs, 'orderBy'>>;
  templates?: Resolver<Maybe<ResolversTypes['TemplatesConnection']>, ParentType, ContextType, RequireFields<QueryTemplatesArgs, 'orderBy'>>;
  templateElements?: Resolver<Maybe<ResolversTypes['TemplateElementsConnection']>, ParentType, ContextType, RequireFields<QueryTemplateElementsArgs, 'orderBy'>>;
  templatePermissions?: Resolver<Maybe<ResolversTypes['TemplatePermissionsConnection']>, ParentType, ContextType, RequireFields<QueryTemplatePermissionsArgs, 'orderBy'>>;
  templateSections?: Resolver<Maybe<ResolversTypes['TemplateSectionsConnection']>, ParentType, ContextType, RequireFields<QueryTemplateSectionsArgs, 'orderBy'>>;
  templateStages?: Resolver<Maybe<ResolversTypes['TemplateStagesConnection']>, ParentType, ContextType, RequireFields<QueryTemplateStagesArgs, 'orderBy'>>;
  triggerQueues?: Resolver<Maybe<ResolversTypes['TriggerQueuesConnection']>, ParentType, ContextType, RequireFields<QueryTriggerQueuesArgs, 'orderBy'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'orderBy'>>;
  userOrgJoins?: Resolver<Maybe<ResolversTypes['UserOrgJoinsConnection']>, ParentType, ContextType, RequireFields<QueryUserOrgJoinsArgs, 'orderBy'>>;
  userOrganisations?: Resolver<Maybe<ResolversTypes['UserOrganisationsConnection']>, ParentType, ContextType, RequireFields<QueryUserOrganisationsArgs, 'orderBy'>>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType, RequireFields<QueryApplicationArgs, 'id'>>;
  applicationBySerial?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType, RequireFields<QueryApplicationBySerialArgs, 'serial'>>;
  applicationSection?: Resolver<Maybe<ResolversTypes['ApplicationSection']>, ParentType, ContextType, RequireFields<QueryApplicationSectionArgs, 'id'>>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType, RequireFields<QueryApplicationStageHistoryArgs, 'id'>>;
  applicationStatusHistory?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistory']>, ParentType, ContextType, RequireFields<QueryApplicationStatusHistoryArgs, 'id'>>;
  elementTypePlugin?: Resolver<Maybe<ResolversTypes['ElementTypePlugin']>, ParentType, ContextType, RequireFields<QueryElementTypePluginArgs, 'code'>>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<QueryOrganisationArgs, 'id'>>;
  permissionJoin?: Resolver<Maybe<ResolversTypes['PermissionJoin']>, ParentType, ContextType, RequireFields<QueryPermissionJoinArgs, 'id'>>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType, RequireFields<QueryPermissionNameArgs, 'id'>>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType, RequireFields<QueryPermissionPolicyArgs, 'id'>>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<QueryTemplateArgs, 'id'>>;
  templateElement?: Resolver<Maybe<ResolversTypes['TemplateElement']>, ParentType, ContextType, RequireFields<QueryTemplateElementArgs, 'id'>>;
  templatePermission?: Resolver<Maybe<ResolversTypes['TemplatePermission']>, ParentType, ContextType, RequireFields<QueryTemplatePermissionArgs, 'id'>>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType, RequireFields<QueryTemplateSectionArgs, 'id'>>;
  templateStage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType, RequireFields<QueryTemplateStageArgs, 'id'>>;
  triggerQueue?: Resolver<Maybe<ResolversTypes['TriggerQueue']>, ParentType, ContextType, RequireFields<QueryTriggerQueueArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userByUsername?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByUsernameArgs, 'username'>>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType, RequireFields<QueryUserOrganisationArgs, 'id'>>;
  applicationStatusHistoryApplicationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryApplicationStatusHistoryApplicationIdArgs, never>>;
  jwtGetBigint?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType, RequireFields<QueryJwtGetBigintArgs, never>>;
  jwtGetBoolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryJwtGetBooleanArgs, never>>;
  jwtGetText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryJwtGetTextArgs, never>>;
  applicationByNodeId?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType, RequireFields<QueryApplicationByNodeIdArgs, 'nodeId'>>;
  applicationSectionByNodeId?: Resolver<Maybe<ResolversTypes['ApplicationSection']>, ParentType, ContextType, RequireFields<QueryApplicationSectionByNodeIdArgs, 'nodeId'>>;
  applicationStageHistoryByNodeId?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType, RequireFields<QueryApplicationStageHistoryByNodeIdArgs, 'nodeId'>>;
  applicationStatusHistoryByNodeId?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistory']>, ParentType, ContextType, RequireFields<QueryApplicationStatusHistoryByNodeIdArgs, 'nodeId'>>;
  elementTypePluginByNodeId?: Resolver<Maybe<ResolversTypes['ElementTypePlugin']>, ParentType, ContextType, RequireFields<QueryElementTypePluginByNodeIdArgs, 'nodeId'>>;
  organisationByNodeId?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<QueryOrganisationByNodeIdArgs, 'nodeId'>>;
  permissionJoinByNodeId?: Resolver<Maybe<ResolversTypes['PermissionJoin']>, ParentType, ContextType, RequireFields<QueryPermissionJoinByNodeIdArgs, 'nodeId'>>;
  permissionNameByNodeId?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType, RequireFields<QueryPermissionNameByNodeIdArgs, 'nodeId'>>;
  permissionPolicyByNodeId?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType, RequireFields<QueryPermissionPolicyByNodeIdArgs, 'nodeId'>>;
  templateByNodeId?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<QueryTemplateByNodeIdArgs, 'nodeId'>>;
  templateElementByNodeId?: Resolver<Maybe<ResolversTypes['TemplateElement']>, ParentType, ContextType, RequireFields<QueryTemplateElementByNodeIdArgs, 'nodeId'>>;
  templatePermissionByNodeId?: Resolver<Maybe<ResolversTypes['TemplatePermission']>, ParentType, ContextType, RequireFields<QueryTemplatePermissionByNodeIdArgs, 'nodeId'>>;
  templateSectionByNodeId?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType, RequireFields<QueryTemplateSectionByNodeIdArgs, 'nodeId'>>;
  templateStageByNodeId?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType, RequireFields<QueryTemplateStageByNodeIdArgs, 'nodeId'>>;
  triggerQueueByNodeId?: Resolver<Maybe<ResolversTypes['TriggerQueue']>, ParentType, ContextType, RequireFields<QueryTriggerQueueByNodeIdArgs, 'nodeId'>>;
  userByNodeId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByNodeIdArgs, 'nodeId'>>;
  userOrganisationByNodeId?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType, RequireFields<QueryUserOrganisationByNodeIdArgs, 'nodeId'>>;
};

export type TemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Template'] = ResolversParentTypes['Template']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isLinear?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startMessage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TemplateStatus']>, ParentType, ContextType>;
  submissionMessage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  versionTimestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  templateStages?: Resolver<ResolversTypes['TemplateStagesConnection'], ParentType, ContextType, RequireFields<TemplateTemplateStagesArgs, 'orderBy'>>;
  templateSections?: Resolver<ResolversTypes['TemplateSectionsConnection'], ParentType, ContextType, RequireFields<TemplateTemplateSectionsArgs, 'orderBy'>>;
  templatePermissions?: Resolver<ResolversTypes['TemplatePermissionsConnection'], ParentType, ContextType, RequireFields<TemplateTemplatePermissionsArgs, 'orderBy'>>;
  applications?: Resolver<ResolversTypes['ApplicationsConnection'], ParentType, ContextType, RequireFields<TemplateApplicationsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateElement'] = ResolversParentTypes['TemplateElement']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sectionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['TemplateElementCategory']>, ParentType, ContextType>;
  elementTypePluginCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visibilityCondition?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isRequired?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isEditable?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  validation?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  validationMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateElementsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateElementsConnection'] = ResolversParentTypes['TemplateElementsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['TemplateElement']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TemplateElementsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateElementsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateElementsEdge'] = ResolversParentTypes['TemplateElementsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TemplateElement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatePermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplatePermission'] = ResolversParentTypes['TemplatePermission']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  permissionNameId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  templateSectionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatePermissionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplatePermissionsConnection'] = ResolversParentTypes['TemplatePermissionsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['TemplatePermission']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TemplatePermissionsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatePermissionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplatePermissionsEdge'] = ResolversParentTypes['TemplatePermissionsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TemplatePermission']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplatesConnection'] = ResolversParentTypes['TemplatesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['Template']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TemplatesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSection'] = ResolversParentTypes['TemplateSection']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templatePermissions?: Resolver<ResolversTypes['TemplatePermissionsConnection'], ParentType, ContextType, RequireFields<TemplateSectionTemplatePermissionsArgs, 'orderBy'>>;
  templateElementsBySectionId?: Resolver<ResolversTypes['TemplateElementsConnection'], ParentType, ContextType, RequireFields<TemplateSectionTemplateElementsBySectionIdArgs, 'orderBy'>>;
  applicationSections?: Resolver<ResolversTypes['ApplicationSectionsConnection'], ParentType, ContextType, RequireFields<TemplateSectionApplicationSectionsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSectionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSectionsConnection'] = ResolversParentTypes['TemplateSectionsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['TemplateSection']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TemplateSectionsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSectionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateSectionsEdge'] = ResolversParentTypes['TemplateSectionsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplatesEdge'] = ResolversParentTypes['TemplatesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateStageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateStage'] = ResolversParentTypes['TemplateStage']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  applicationStageHistoriesByStageId?: Resolver<ResolversTypes['ApplicationStageHistoriesConnection'], ParentType, ContextType, RequireFields<TemplateStageApplicationStageHistoriesByStageIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateStagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateStagesConnection'] = ResolversParentTypes['TemplateStagesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['TemplateStage']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TemplateStagesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateStagesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateStagesEdge'] = ResolversParentTypes['TemplateStagesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TriggerQueueResolvers<ContextType = any, ParentType extends ResolversParentTypes['TriggerQueue'] = ResolversParentTypes['TriggerQueue']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  triggerType?: Resolver<Maybe<ResolversTypes['Trigger']>, ParentType, ContextType>;
  table?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recordId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TriggerQueueStatus']>, ParentType, ContextType>;
  log?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TriggerQueuesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TriggerQueuesConnection'] = ResolversParentTypes['TriggerQueuesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['TriggerQueue']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TriggerQueuesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TriggerQueuesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TriggerQueuesEdge'] = ResolversParentTypes['TriggerQueuesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TriggerQueue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateApplicationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateApplicationPayload'] = ResolversParentTypes['UpdateApplicationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  applicationEdge?: Resolver<Maybe<ResolversTypes['ApplicationsEdge']>, ParentType, ContextType, RequireFields<UpdateApplicationPayloadApplicationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateApplicationSectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateApplicationSectionPayload'] = ResolversParentTypes['UpdateApplicationSectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationSection?: Resolver<Maybe<ResolversTypes['ApplicationSection']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  applicationSectionEdge?: Resolver<Maybe<ResolversTypes['ApplicationSectionsEdge']>, ParentType, ContextType, RequireFields<UpdateApplicationSectionPayloadApplicationSectionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateApplicationStageHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateApplicationStageHistoryPayload'] = ResolversParentTypes['UpdateApplicationStageHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  application?: Resolver<Maybe<ResolversTypes['Application']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  applicationStageHistoryEdge?: Resolver<Maybe<ResolversTypes['ApplicationStageHistoriesEdge']>, ParentType, ContextType, RequireFields<UpdateApplicationStageHistoryPayloadApplicationStageHistoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateApplicationStatusHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateApplicationStatusHistoryPayload'] = ResolversParentTypes['UpdateApplicationStatusHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  applicationStatusHistory?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistory']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  applicationStageHistory?: Resolver<Maybe<ResolversTypes['ApplicationStageHistory']>, ParentType, ContextType>;
  applicationStatusHistoryEdge?: Resolver<Maybe<ResolversTypes['ApplicationStatusHistoriesEdge']>, ParentType, ContextType, RequireFields<UpdateApplicationStatusHistoryPayloadApplicationStatusHistoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateElementTypePluginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateElementTypePluginPayload'] = ResolversParentTypes['UpdateElementTypePluginPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elementTypePlugin?: Resolver<Maybe<ResolversTypes['ElementTypePlugin']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  elementTypePluginEdge?: Resolver<Maybe<ResolversTypes['ElementTypePluginsEdge']>, ParentType, ContextType, RequireFields<UpdateElementTypePluginPayloadElementTypePluginEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrganisationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrganisationPayload'] = ResolversParentTypes['UpdateOrganisationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  organisationEdge?: Resolver<Maybe<ResolversTypes['OrganisationsEdge']>, ParentType, ContextType, RequireFields<UpdateOrganisationPayloadOrganisationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePermissionJoinPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePermissionJoinPayload'] = ResolversParentTypes['UpdatePermissionJoinPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionJoin?: Resolver<Maybe<ResolversTypes['PermissionJoin']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  permissionJoinEdge?: Resolver<Maybe<ResolversTypes['PermissionJoinsEdge']>, ParentType, ContextType, RequireFields<UpdatePermissionJoinPayloadPermissionJoinEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePermissionNamePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePermissionNamePayload'] = ResolversParentTypes['UpdatePermissionNamePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  permissionNameEdge?: Resolver<Maybe<ResolversTypes['PermissionNamesEdge']>, ParentType, ContextType, RequireFields<UpdatePermissionNamePayloadPermissionNameEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePermissionPolicyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePermissionPolicyPayload'] = ResolversParentTypes['UpdatePermissionPolicyPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissionPolicy?: Resolver<Maybe<ResolversTypes['PermissionPolicy']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionPolicyEdge?: Resolver<Maybe<ResolversTypes['PermissionPoliciesEdge']>, ParentType, ContextType, RequireFields<UpdatePermissionPolicyPayloadPermissionPolicyEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTemplateElementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemplateElementPayload'] = ResolversParentTypes['UpdateTemplateElementPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateElement?: Resolver<Maybe<ResolversTypes['TemplateElement']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  templateElementEdge?: Resolver<Maybe<ResolversTypes['TemplateElementsEdge']>, ParentType, ContextType, RequireFields<UpdateTemplateElementPayloadTemplateElementEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTemplatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemplatePayload'] = ResolversParentTypes['UpdateTemplatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  templateEdge?: Resolver<Maybe<ResolversTypes['TemplatesEdge']>, ParentType, ContextType, RequireFields<UpdateTemplatePayloadTemplateEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTemplatePermissionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemplatePermissionPayload'] = ResolversParentTypes['UpdateTemplatePermissionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templatePermission?: Resolver<Maybe<ResolversTypes['TemplatePermission']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  permissionName?: Resolver<Maybe<ResolversTypes['PermissionName']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  templatePermissionEdge?: Resolver<Maybe<ResolversTypes['TemplatePermissionsEdge']>, ParentType, ContextType, RequireFields<UpdateTemplatePermissionPayloadTemplatePermissionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTemplateSectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemplateSectionPayload'] = ResolversParentTypes['UpdateTemplateSectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateSection?: Resolver<Maybe<ResolversTypes['TemplateSection']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateSectionEdge?: Resolver<Maybe<ResolversTypes['TemplateSectionsEdge']>, ParentType, ContextType, RequireFields<UpdateTemplateSectionPayloadTemplateSectionEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTemplateStagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTemplateStagePayload'] = ResolversParentTypes['UpdateTemplateStagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateStage?: Resolver<Maybe<ResolversTypes['TemplateStage']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  templateStageEdge?: Resolver<Maybe<ResolversTypes['TemplateStagesEdge']>, ParentType, ContextType, RequireFields<UpdateTemplateStagePayloadTemplateStageEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTriggerQueuePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTriggerQueuePayload'] = ResolversParentTypes['UpdateTriggerQueuePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  triggerQueue?: Resolver<Maybe<ResolversTypes['TriggerQueue']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  triggerQueueEdge?: Resolver<Maybe<ResolversTypes['TriggerQueuesEdge']>, ParentType, ContextType, RequireFields<UpdateTriggerQueuePayloadTriggerQueueEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserOrganisationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserOrganisationPayload'] = ResolversParentTypes['UpdateUserOrganisationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userOrganisation?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  userOrganisationEdge?: Resolver<Maybe<ResolversTypes['UserOrganisationsEdge']>, ParentType, ContextType, RequireFields<UpdateUserOrganisationPayloadUserOrganisationEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<UpdateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userOrganisations?: Resolver<ResolversTypes['UserOrganisationsConnection'], ParentType, ContextType, RequireFields<UserUserOrganisationsArgs, 'orderBy'>>;
  permissionJoins?: Resolver<ResolversTypes['PermissionJoinsConnection'], ParentType, ContextType, RequireFields<UserPermissionJoinsArgs, 'orderBy'>>;
  applications?: Resolver<ResolversTypes['ApplicationsConnection'], ParentType, ContextType, RequireFields<UserApplicationsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrganisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrganisation'] = ResolversParentTypes['UserOrganisation']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  organisationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType>;
  permissionJoins?: Resolver<ResolversTypes['PermissionJoinsConnection'], ParentType, ContextType, RequireFields<UserOrganisationPermissionJoinsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrganisationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrganisationsConnection'] = ResolversParentTypes['UserOrganisationsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['UserOrganisation']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UserOrganisationsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrganisationsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrganisationsEdge'] = ResolversParentTypes['UserOrganisationsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserOrganisation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrgJoinResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrgJoin'] = ResolversParentTypes['UserOrgJoin']> = {
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orgName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrgJoinsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrgJoinsConnection'] = ResolversParentTypes['UserOrgJoinsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['UserOrgJoin']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UserOrgJoinsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOrgJoinsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrgJoinsEdge'] = ResolversParentTypes['UserOrgJoinsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserOrgJoin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UsersEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersEdge'] = ResolversParentTypes['UsersEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AllPermission?: AllPermissionResolvers<ContextType>;
  AllPermissionsConnection?: AllPermissionsConnectionResolvers<ContextType>;
  AllPermissionsEdge?: AllPermissionsEdgeResolvers<ContextType>;
  Application?: ApplicationResolvers<ContextType>;
  ApplicationsConnection?: ApplicationsConnectionResolvers<ContextType>;
  ApplicationSection?: ApplicationSectionResolvers<ContextType>;
  ApplicationSectionsConnection?: ApplicationSectionsConnectionResolvers<ContextType>;
  ApplicationSectionsEdge?: ApplicationSectionsEdgeResolvers<ContextType>;
  ApplicationsEdge?: ApplicationsEdgeResolvers<ContextType>;
  ApplicationStageHistoriesConnection?: ApplicationStageHistoriesConnectionResolvers<ContextType>;
  ApplicationStageHistoriesEdge?: ApplicationStageHistoriesEdgeResolvers<ContextType>;
  ApplicationStageHistory?: ApplicationStageHistoryResolvers<ContextType>;
  ApplicationStageStatusAll?: ApplicationStageStatusAllResolvers<ContextType>;
  ApplicationStageStatusAllsConnection?: ApplicationStageStatusAllsConnectionResolvers<ContextType>;
  ApplicationStageStatusAllsEdge?: ApplicationStageStatusAllsEdgeResolvers<ContextType>;
  ApplicationStatusHistoriesConnection?: ApplicationStatusHistoriesConnectionResolvers<ContextType>;
  ApplicationStatusHistoriesEdge?: ApplicationStatusHistoriesEdgeResolvers<ContextType>;
  ApplicationStatusHistory?: ApplicationStatusHistoryResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  CreateApplicationPayload?: CreateApplicationPayloadResolvers<ContextType>;
  CreateApplicationSectionPayload?: CreateApplicationSectionPayloadResolvers<ContextType>;
  CreateApplicationStageHistoryPayload?: CreateApplicationStageHistoryPayloadResolvers<ContextType>;
  CreateApplicationStatusHistoryPayload?: CreateApplicationStatusHistoryPayloadResolvers<ContextType>;
  CreateElementTypePluginPayload?: CreateElementTypePluginPayloadResolvers<ContextType>;
  CreateOrganisationPayload?: CreateOrganisationPayloadResolvers<ContextType>;
  CreatePermissionJoinPayload?: CreatePermissionJoinPayloadResolvers<ContextType>;
  CreatePermissionNamePayload?: CreatePermissionNamePayloadResolvers<ContextType>;
  CreatePermissionPolicyPayload?: CreatePermissionPolicyPayloadResolvers<ContextType>;
  CreateTemplateElementPayload?: CreateTemplateElementPayloadResolvers<ContextType>;
  CreateTemplatePayload?: CreateTemplatePayloadResolvers<ContextType>;
  CreateTemplatePermissionPayload?: CreateTemplatePermissionPayloadResolvers<ContextType>;
  CreateTemplateSectionPayload?: CreateTemplateSectionPayloadResolvers<ContextType>;
  CreateTemplateStagePayload?: CreateTemplateStagePayloadResolvers<ContextType>;
  CreateTriggerQueuePayload?: CreateTriggerQueuePayloadResolvers<ContextType>;
  CreateUserOrganisationPayload?: CreateUserOrganisationPayloadResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteApplicationPayload?: DeleteApplicationPayloadResolvers<ContextType>;
  DeleteApplicationSectionPayload?: DeleteApplicationSectionPayloadResolvers<ContextType>;
  DeleteApplicationStageHistoryPayload?: DeleteApplicationStageHistoryPayloadResolvers<ContextType>;
  DeleteApplicationStatusHistoryPayload?: DeleteApplicationStatusHistoryPayloadResolvers<ContextType>;
  DeleteElementTypePluginPayload?: DeleteElementTypePluginPayloadResolvers<ContextType>;
  DeleteOrganisationPayload?: DeleteOrganisationPayloadResolvers<ContextType>;
  DeletePermissionJoinPayload?: DeletePermissionJoinPayloadResolvers<ContextType>;
  DeletePermissionNamePayload?: DeletePermissionNamePayloadResolvers<ContextType>;
  DeletePermissionPolicyPayload?: DeletePermissionPolicyPayloadResolvers<ContextType>;
  DeleteTemplateElementPayload?: DeleteTemplateElementPayloadResolvers<ContextType>;
  DeleteTemplatePayload?: DeleteTemplatePayloadResolvers<ContextType>;
  DeleteTemplatePermissionPayload?: DeleteTemplatePermissionPayloadResolvers<ContextType>;
  DeleteTemplateSectionPayload?: DeleteTemplateSectionPayloadResolvers<ContextType>;
  DeleteTemplateStagePayload?: DeleteTemplateStagePayloadResolvers<ContextType>;
  DeleteTriggerQueuePayload?: DeleteTriggerQueuePayloadResolvers<ContextType>;
  DeleteUserOrganisationPayload?: DeleteUserOrganisationPayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  ElementTypePlugin?: ElementTypePluginResolvers<ContextType>;
  ElementTypePluginsConnection?: ElementTypePluginsConnectionResolvers<ContextType>;
  ElementTypePluginsEdge?: ElementTypePluginsEdgeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Organisation?: OrganisationResolvers<ContextType>;
  OrganisationsConnection?: OrganisationsConnectionResolvers<ContextType>;
  OrganisationsEdge?: OrganisationsEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PermissionJoin?: PermissionJoinResolvers<ContextType>;
  PermissionJoinsConnection?: PermissionJoinsConnectionResolvers<ContextType>;
  PermissionJoinsEdge?: PermissionJoinsEdgeResolvers<ContextType>;
  PermissionName?: PermissionNameResolvers<ContextType>;
  PermissionNamesConnection?: PermissionNamesConnectionResolvers<ContextType>;
  PermissionNamesEdge?: PermissionNamesEdgeResolvers<ContextType>;
  PermissionPoliciesConnection?: PermissionPoliciesConnectionResolvers<ContextType>;
  PermissionPoliciesEdge?: PermissionPoliciesEdgeResolvers<ContextType>;
  PermissionPolicy?: PermissionPolicyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Template?: TemplateResolvers<ContextType>;
  TemplateElement?: TemplateElementResolvers<ContextType>;
  TemplateElementsConnection?: TemplateElementsConnectionResolvers<ContextType>;
  TemplateElementsEdge?: TemplateElementsEdgeResolvers<ContextType>;
  TemplatePermission?: TemplatePermissionResolvers<ContextType>;
  TemplatePermissionsConnection?: TemplatePermissionsConnectionResolvers<ContextType>;
  TemplatePermissionsEdge?: TemplatePermissionsEdgeResolvers<ContextType>;
  TemplatesConnection?: TemplatesConnectionResolvers<ContextType>;
  TemplateSection?: TemplateSectionResolvers<ContextType>;
  TemplateSectionsConnection?: TemplateSectionsConnectionResolvers<ContextType>;
  TemplateSectionsEdge?: TemplateSectionsEdgeResolvers<ContextType>;
  TemplatesEdge?: TemplatesEdgeResolvers<ContextType>;
  TemplateStage?: TemplateStageResolvers<ContextType>;
  TemplateStagesConnection?: TemplateStagesConnectionResolvers<ContextType>;
  TemplateStagesEdge?: TemplateStagesEdgeResolvers<ContextType>;
  TriggerQueue?: TriggerQueueResolvers<ContextType>;
  TriggerQueuesConnection?: TriggerQueuesConnectionResolvers<ContextType>;
  TriggerQueuesEdge?: TriggerQueuesEdgeResolvers<ContextType>;
  UpdateApplicationPayload?: UpdateApplicationPayloadResolvers<ContextType>;
  UpdateApplicationSectionPayload?: UpdateApplicationSectionPayloadResolvers<ContextType>;
  UpdateApplicationStageHistoryPayload?: UpdateApplicationStageHistoryPayloadResolvers<ContextType>;
  UpdateApplicationStatusHistoryPayload?: UpdateApplicationStatusHistoryPayloadResolvers<ContextType>;
  UpdateElementTypePluginPayload?: UpdateElementTypePluginPayloadResolvers<ContextType>;
  UpdateOrganisationPayload?: UpdateOrganisationPayloadResolvers<ContextType>;
  UpdatePermissionJoinPayload?: UpdatePermissionJoinPayloadResolvers<ContextType>;
  UpdatePermissionNamePayload?: UpdatePermissionNamePayloadResolvers<ContextType>;
  UpdatePermissionPolicyPayload?: UpdatePermissionPolicyPayloadResolvers<ContextType>;
  UpdateTemplateElementPayload?: UpdateTemplateElementPayloadResolvers<ContextType>;
  UpdateTemplatePayload?: UpdateTemplatePayloadResolvers<ContextType>;
  UpdateTemplatePermissionPayload?: UpdateTemplatePermissionPayloadResolvers<ContextType>;
  UpdateTemplateSectionPayload?: UpdateTemplateSectionPayloadResolvers<ContextType>;
  UpdateTemplateStagePayload?: UpdateTemplateStagePayloadResolvers<ContextType>;
  UpdateTriggerQueuePayload?: UpdateTriggerQueuePayloadResolvers<ContextType>;
  UpdateUserOrganisationPayload?: UpdateUserOrganisationPayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserOrganisation?: UserOrganisationResolvers<ContextType>;
  UserOrganisationsConnection?: UserOrganisationsConnectionResolvers<ContextType>;
  UserOrganisationsEdge?: UserOrganisationsEdgeResolvers<ContextType>;
  UserOrgJoin?: UserOrgJoinResolvers<ContextType>;
  UserOrgJoinsConnection?: UserOrgJoinsConnectionResolvers<ContextType>;
  UserOrgJoinsEdge?: UserOrgJoinsEdgeResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  UsersEdge?: UsersEdgeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
