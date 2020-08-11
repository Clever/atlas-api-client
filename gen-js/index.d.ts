import { Span, Tracer } from "opentracing";
import { Logger } from "kayvee";

type Callback<R> = (err: Error, result: R) => void;
type ArrayInner<R> = R extends (infer T)[] ? T : never;

interface RetryPolicy {
  backoffs(): number[];
  retry(requestOptions: {method: string}, err: Error, res: {statusCode: number}): boolean;
}

interface RequestOptions {
  timeout?: number;
  span?: Span;
  retryPolicy?: RetryPolicy;
}

interface IterResult<R> {
  map<T>(f: (r: R) => T, cb?: Callback<T[]>): Promise<T[]>;
  toArray(cb?: Callback<R[]>): Promise<R[]>;
  forEach(f: (r: R) => void, cb?: Callback<void>): Promise<void>;
  forEachAsync(f: (r: R) => void, cb?: Callback<void>): Promise<void>;
}

interface CircuitOptions {
  forceClosed?: boolean;
  maxConcurrentRequests?: number;
  requestVolumeThreshold?: number;
  sleepWindow?: number;
  errorPercentThreshold?: number;
}

interface GenericOptions {
  timeout?: number;
  keepalive?: boolean;
  retryPolicy?: RetryPolicy;
  logger?: Logger;
  tracer?: Tracer;
  circuit?: CircuitOptions;
  serviceName?: string;
}

interface DiscoveryOptions {
  discovery: true;
  address?: undefined;
}

interface AddressOptions {
  discovery?: false;
  address: string;
}

type AtlasAPIClientOptions = (DiscoveryOptions | AddressOptions) & GenericOptions;

import models = AtlasAPIClient.Models

declare class AtlasAPIClient {
  constructor(options: AtlasAPIClientOptions);

  
  getClusters(groupID: string, options?: RequestOptions, cb?: Callback<models.GetClustersResponse>): Promise<models.GetClustersResponse>
  
  createCluster(params: models.CreateClusterParams, options?: RequestOptions, cb?: Callback<models.Cluster>): Promise<models.Cluster>
  
  deleteCluster(params: models.DeleteClusterParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getCluster(params: models.GetClusterParams, options?: RequestOptions, cb?: Callback<models.Cluster>): Promise<models.Cluster>
  
  updateCluster(params: models.UpdateClusterParams, options?: RequestOptions, cb?: Callback<models.Cluster>): Promise<models.Cluster>
  
  restartPrimaries(params: models.RestartPrimariesParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getRestoreJobs(params: models.GetRestoreJobsParams, options?: RequestOptions, cb?: Callback<models.GetRestoreJobsResponse>): Promise<models.GetRestoreJobsResponse>
  
  createRestoreJob(params: models.CreateRestoreJobParams, options?: RequestOptions, cb?: Callback<models.CreateRestoreJobResponse>): Promise<models.CreateRestoreJobResponse>
  
  getSnapshotSchedule(params: models.GetSnapshotScheduleParams, options?: RequestOptions, cb?: Callback<models.SnapshotSchedule>): Promise<models.SnapshotSchedule>
  
  updateSnapshotSchedule(params: models.UpdateSnapshotScheduleParams, options?: RequestOptions, cb?: Callback<models.SnapshotSchedule>): Promise<models.SnapshotSchedule>
  
  getSnapshots(params: models.GetSnapshotsParams, options?: RequestOptions, cb?: Callback<models.GetSnapshotsResponse>): Promise<models.GetSnapshotsResponse>
  
  getRestoreJob(params: models.GetRestoreJobParams, options?: RequestOptions, cb?: Callback<models.RestoreJob>): Promise<models.RestoreJob>
  
  getContainers(groupID: string, options?: RequestOptions, cb?: Callback<models.GetContainersResponse>): Promise<models.GetContainersResponse>
  
  createContainer(params: models.CreateContainerParams, options?: RequestOptions, cb?: Callback<models.Container>): Promise<models.Container>
  
  getContainer(params: models.GetContainerParams, options?: RequestOptions, cb?: Callback<models.Container>): Promise<models.Container>
  
  updateContainer(params: models.UpdateContainerParams, options?: RequestOptions, cb?: Callback<models.Container>): Promise<models.Container>
  
  getDatabaseUsers(groupID: string, options?: RequestOptions, cb?: Callback<models.GetDatabaseUsersResponse>): Promise<models.GetDatabaseUsersResponse>
  
  createDatabaseUser(params: models.CreateDatabaseUserParams, options?: RequestOptions, cb?: Callback<models.DatabaseUser>): Promise<models.DatabaseUser>
  
  deleteDatabaseUser(params: models.DeleteDatabaseUserParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getDatabaseUser(params: models.GetDatabaseUserParams, options?: RequestOptions, cb?: Callback<models.DatabaseUser>): Promise<models.DatabaseUser>
  
  updateDatabaseUser(params: models.UpdateDatabaseUserParams, options?: RequestOptions, cb?: Callback<models.DatabaseUser>): Promise<models.DatabaseUser>
  
  getEvents(params: models.GetEventsParams, options?: RequestOptions, cb?: Callback<models.GetEventsResponse>): Promise<models.GetEventsResponse>
  
  getPeers(groupID: string, options?: RequestOptions, cb?: Callback<models.GetPeersResponse>): Promise<models.GetPeersResponse>
  
  createPeer(params: models.CreatePeerParams, options?: RequestOptions, cb?: Callback<models.Peer>): Promise<models.Peer>
  
  deletePeer(params: models.DeletePeerParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getPeer(params: models.GetPeerParams, options?: RequestOptions, cb?: Callback<models.Peer>): Promise<models.Peer>
  
  updatePeer(params: models.UpdatePeerParams, options?: RequestOptions, cb?: Callback<models.Peer>): Promise<models.Peer>
  
  getProcesses(groupID: string, options?: RequestOptions, cb?: Callback<models.GetProcessesResponse>): Promise<models.GetProcessesResponse>
  
  getProcessDatabases(params: models.GetProcessDatabasesParams, options?: RequestOptions, cb?: Callback<models.GetProcessDatabasesResponse>): Promise<models.GetProcessDatabasesResponse>
  
  getProcessDatabaseMeasurements(params: models.GetProcessDatabaseMeasurementsParams, options?: RequestOptions, cb?: Callback<models.GetProcessDatabaseMeasurementsResponse>): Promise<models.GetProcessDatabaseMeasurementsResponse>
  
  getProcessDisks(params: models.GetProcessDisksParams, options?: RequestOptions, cb?: Callback<models.GetProcessDisksResponse>): Promise<models.GetProcessDisksResponse>
  
  getProcessDiskMeasurements(params: models.GetProcessDiskMeasurementsParams, options?: RequestOptions, cb?: Callback<models.GetProcessDiskMeasurementsResponse>): Promise<models.GetProcessDiskMeasurementsResponse>
  
  getProcessMeasurements(params: models.GetProcessMeasurementsParams, options?: RequestOptions, cb?: Callback<models.GetProcessMeasurementsResponse>): Promise<models.GetProcessMeasurementsResponse>
  
}

declare namespace AtlasAPIClient {
  const RetryPolicies: {
    Single: RetryPolicy;
    Exponential: RetryPolicy;
    None: RetryPolicy;
  }

  const DefaultCircuitOptions: CircuitOptions;

  namespace Errors {
    interface ErrorBody {
      message: string;
      [key: string]: any;
    }

    
    class BadRequest {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
    class Unauthorized {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
    class Forbidden {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
    class NotFound {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
    class Conflict {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
    class TooManyRequests {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
    class InternalError {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;

  constructor(body: ErrorBody);
}
    
  }

  namespace Models {
    
    type AutoScaling = {
  diskGBEnabled?: boolean;
};
    
    type BIConnector = {
  enabled?: boolean;
  readPreference?: BIConnectorReadPreference;
};
    
    type BIConnectorReadPreference = ("primary" | "secondary" | "analytics");
    
    type Cluster = {
  autoScaling?: AutoScaling;
  backupEnabled?: boolean;
  biConnector?: BIConnector;
  clusterType?: ClusterType;
  diskSizeGB?: number;
  groupId?: string;
  id?: string;
  links?: Link[];
  mongoDBMajorVersion?: string;
  mongoDBVersion?: string;
  mongoURI?: string;
  mongoURIUpdated?: string;
  mongoURIWithOptions?: string;
  name?: string;
  numShards?: number;
  paused?: boolean;
  pitEnabled?: boolean;
  providerBackupEnabled?: boolean;
  providerSettings?: ProviderSettings;
  replicationFactor?: number;
  replicationSpec?: ReplicationSpec;
  replicationSpecs?: ReplicationSpecEntry[];
  srvAddress?: string;
  stateName?: ClusterState;
};
    
    type ClusterState = ("IDLE" | "CREATING" | "UPDATING" | "DELETING" | "DELETED" | "REPAIRING");
    
    type ClusterType = ("REPLICASET" | "SHARDED" | "GEOSHARDED");
    
    type Conflict = {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
};
    
    type Container = {
  atlasCidrBlock?: string;
  id?: string;
  providerName?: string;
  provisioned?: boolean;
  regionName?: string;
  vpcId?: string;
};
    
    type CreateClusterParams = {
  groupID: string;
  createOrUpdateClusterRequest: CreateOrUpdateClusterRequest;
};
    
    type CreateContainerParams = {
  groupID: string;
  createOrUpdateContainerRequest: CreateOrUpdateContainerRequest;
};
    
    type CreateDatabaseUserParams = {
  groupID: string;
  createDatabaseUserRequest: CreateDatabaseUserRequest;
};
    
    type CreateDatabaseUserRequest = {
  
};
    
    type CreateOrUpdateClusterRequest = {
  autoScaling?: AutoScaling;
  backupEnabled?: boolean;
  biConnector?: BIConnector;
  clusterType?: ClusterType;
  diskSizeGB?: number;
  mongoDBMajorVersion?: ("3.2" | "3.4" | "3.6" | "4.0");
  name?: string;
  numShards?: number;
  paused?: boolean;
  providerBackupEnabled?: boolean;
  providerSettings?: ProviderSettings;
  replicationFactor?: number;
  replicationSpec?: ReplicationSpec;
  replicationSpecs?: ReplicationSpecEntry[];
};
    
    type CreateOrUpdateContainerRequest = {
  atlasCidrBlock?: string;
  providerName?: ("AWS");
  regionName?: string;
};
    
    type CreatePeerParams = {
  groupID: string;
  createPeerRequest: CreatePeerRequest;
};
    
    type CreatePeerRequest = {
  accepterRegionName?: string;
  awsAccountId?: string;
  containerId?: string;
  providerName?: string;
  routeTableCidrBlock?: string;
  vpcId?: string;
};
    
    type CreateRestoreJobParams = {
  groupID: string;
  clusterName: string;
  createRestoreJobRequest: CreateRestoreJobRequest;
};
    
    type CreateRestoreJobRequest = {
  delivery: RestoreJobDelivery;
  pointInTimeUTCMillis?: string;
  snapshotId?: string;
};
    
    type CreateRestoreJobResponse = {
  results?: RestoreJob[];
  totalCount?: number;
};
    
    type DataPoint = {
  timestamp?: string;
  value?: number;
};
    
    type Database = {
  databaseName?: string;
  links?: Link[];
};
    
    type DatabaseUser = {
  databaseName?: string;
  groupId?: string;
  links?: Link[];
  roles?: Role[];
  username?: string;
};
    
    type DeleteClusterParams = {
  groupID: string;
  clusterName: string;
};
    
    type DeleteDatabaseUserParams = {
  groupID: string;
  username: string;
};
    
    type DeletePeerParams = {
  groupID: string;
  peerID: string;
};
    
    type Disk = {
  links?: Link[];
  partitionName?: string;
};
    
    type Event = {
  alertConfigId?: string;
  alertId?: string;
  apiKeyId?: string;
  collection?: string;
  created?: string;
  currentValue?: MetricValue;
  database?: string;
  eventTypeName?: EventType;
  groupId?: string;
  hostname?: string;
  id?: string;
  invoiceId?: string;
  isGlobalAdmin?: boolean;
  links?: Link[];
  metricName?: string;
  opType?: string;
  orgId?: string;
  paymentId?: string;
  port?: number;
  publicKey?: string;
  remoteAddress?: string;
  replicaSetName?: string;
  shardName?: string;
  targetPublicKey?: string;
  targetUsername?: string;
  teamID?: string;
  userId?: string;
  username?: string;
  whitelistEntry?: string;
};
    
    type EventType = ("CREDIT_CARD_ABOUT_TO_EXPIRE" | "PENDING_INVOICE_OVER_THRESHOLD" | "DAILY_BILL_OVER_THRESHOLD" | "AWS_ENCRYPTION_KEY_NEEDS_ROTATION" | "AZURE_ENCRYPTION_KEY_NEEDS_ROTATION" | "GCP_ENCRYPTION_KEY_NEEDS_ROTATION" | "HOST_DOWN" | "OUTSIDE_METRIC_THRESHOLD" | "USERS_WITHOUT_MULTIFACTOR_AUTH" | "PRIMARY_ELECTED" | "NO_PRIMARY" | "TOO_MANY_ELECTIONS" | "REPLICATION_OPLOG_WINDOW_RUNNING_OUT" | "CLUSTER_MONGOS_IS_MISSING" | "USER_ROLES_CHANGED_AUDIT" | "JOINED_GROUP" | "REMOVED_FROM_GROUP" | "NDS_X509_USER_AUTHENTICATION_MANAGED_USER_CERTS_EXPIRATION_CHECK" | "NDS_X509_USER_AUTHENTICATION_CUSTOMER_CA_EXPIRATION_CHECK");
    
    type Forbidden = {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
};
    
    type GetClusterParams = {
  groupID: string;
  clusterName: string;
};
    
    type GetClustersResponse = {
  results?: Cluster[];
  totalCount?: number;
};
    
    type GetContainerParams = {
  groupID: string;
  containerID: string;
};
    
    type GetContainersResponse = {
  links?: Link[];
  results?: Container[];
  totalCount?: number;
};
    
    type GetDatabaseUserParams = {
  groupID: string;
  username: string;
};
    
    type GetDatabaseUsersResponse = {
  results?: DatabaseUser[];
  totalCount?: number;
};
    
    type GetEventsParams = {
  groupID: string;
  pageNum?: number;
  itemsPerPage?: number;
  pretty?: boolean;
  eventType?: ("CREDIT_CARD_ABOUT_TO_EXPIRE" | "PENDING_INVOICE_OVER_THRESHOLD" | "DAILY_BILL_OVER_THRESHOLD" | "AWS_ENCRYPTION_KEY_NEEDS_ROTATION" | "AZURE_ENCRYPTION_KEY_NEEDS_ROTATION" | "GCP_ENCRYPTION_KEY_NEEDS_ROTATION" | "HOST_DOWN" | "OUTSIDE_METRIC_THRESHOLD" | "USERS_WITHOUT_MULTIFACTOR_AUTH" | "PRIMARY_ELECTED" | "NO_PRIMARY" | "TOO_MANY_ELECTIONS" | "REPLICATION_OPLOG_WINDOW_RUNNING_OUT" | "CLUSTER_MONGOS_IS_MISSING" | "USER_ROLES_CHANGED_AUDIT" | "JOINED_GROUP" | "REMOVED_FROM_GROUP" | "NDS_X509_USER_AUTHENTICATION_MANAGED_USER_CERTS_EXPIRATION_CHECK" | "NDS_X509_USER_AUTHENTICATION_CUSTOMER_CA_EXPIRATION_CHECK");
  minDate?: string;
  maxDate?: string;
};
    
    type GetEventsResponse = {
  links?: Link[];
  results?: Event[];
  totalCount?: number;
};
    
    type GetPeerParams = {
  groupID: string;
  peerID: string;
};
    
    type GetPeersResponse = {
  links?: Link[];
  results?: Peer[];
  totalCount?: number;
};
    
    type GetProcessDatabaseMeasurementsParams = {
  groupID: string;
  host: string;
  port: number;
  databaseID: string;
  granularity: ("PT1M" | "PT5M" | "PT1H" | "P1D");
  period?: string;
  start?: string;
  end?: string;
  m?: string[];
  pageNum?: number;
  itemsPerPage?: number;
};
    
    type GetProcessDatabaseMeasurementsResponse = {
  databaseName?: string;
  end?: string;
  granularity?: Granularity;
  groupId?: string;
  hostId?: string;
  links?: Link[];
  measurements?: Measurement[];
  processId?: string;
  start?: string;
};
    
    type GetProcessDatabasesParams = {
  groupID: string;
  host: string;
  port: number;
  pageNum?: number;
  itemsPerPage?: number;
};
    
    type GetProcessDatabasesResponse = {
  links?: Link[];
  results?: Database[];
  totalCount?: number;
};
    
    type GetProcessDiskMeasurementsParams = {
  groupID: string;
  host: string;
  port: number;
  diskName: string;
  granularity: ("PT1M" | "PT5M" | "PT1H" | "P1D");
  period?: string;
  start?: string;
  end?: string;
  m?: string[];
  pageNum?: number;
  itemsPerPage?: number;
};
    
    type GetProcessDiskMeasurementsResponse = {
  end?: string;
  granularity?: Granularity;
  groupId?: string;
  hostId?: string;
  links?: Link[];
  measurements?: Measurement[];
  partitionName?: string;
  processId?: string;
  start?: string;
};
    
    type GetProcessDisksParams = {
  groupID: string;
  host: string;
  port: number;
  pageNum?: number;
  itemsPerPage?: number;
};
    
    type GetProcessDisksResponse = {
  links?: Link[];
  results?: Disk[];
  totalCount?: number;
};
    
    type GetProcessMeasurementsParams = {
  groupID: string;
  host: string;
  port: number;
  granularity: ("PT1M" | "PT5M" | "PT1H" | "P1D");
  period?: string;
  start?: string;
  end?: string;
  m?: string[];
  pageNum?: number;
  itemsPerPage?: number;
};
    
    type GetProcessMeasurementsResponse = {
  end?: string;
  granularity?: Granularity;
  groupId?: string;
  hostId?: string;
  links?: Link[];
  measurements?: Measurement[];
  processId?: string;
  start?: string;
};
    
    type GetProcessesResponse = {
  links?: Link[];
  results?: Process[];
  totalCount?: number;
};
    
    type GetRestoreJobParams = {
  groupID: string;
  sourceClusterName: string;
  jobID: string;
};
    
    type GetRestoreJobsParams = {
  groupID: string;
  clusterName: string;
  pageNum?: number;
  itemsPerPage?: number;
};
    
    type GetRestoreJobsResponse = {
  results?: RestoreJob[];
  totalCount?: number;
};
    
    type GetSnapshotScheduleParams = {
  groupID: string;
  clusterName: string;
};
    
    type GetSnapshotsParams = {
  groupID: string;
  clusterName: string;
};
    
    type GetSnapshotsResponse = {
  links?: Link[];
  results?: Snapshot[];
  totalCount?: number;
};
    
    type Granularity = ("PT1M" | "PT5M" | "PT1H" | "P1D");
    
    type Link = {
  href?: string;
  rel?: string;
};
    
    type Measurement = {
  dataPoints?: DataPoint[];
  name?: string;
  units?: Units;
};
    
    type MetricValue = {
  number?: number;
  units?: ("RAW" | "BITS" | "BYTES" | "KILOBITS" | "KILOBYTES" | "MEGABITS" | "MEGABYTES" | "GIGABITS" | "GIGABYTES" | "TERABYTES" | "PETABYTES" | "MILLISECONDS" | "SECONDS" | "MINUTES" | "HOURS" | "DAYS");
};
    
    type Peer = {
  accepterRegionName?: string;
  awsAccountId?: string;
  connectionId?: string;
  containerId?: string;
  errorStateName?: PeerErrorState;
  id?: string;
  routeTableCidrBlock?: string;
  statusName?: PeerStatus;
  vpcId?: string;
};
    
    type PeerErrorState = ("REJECTED" | "EXPIRED" | "INVALID_ARGUMENT");
    
    type PeerStatus = ("INITIATING" | "PENDING_ACCEPTANCE" | "FAILED" | "FINALIZING" | "AVAILABLE" | "TERMINATING");
    
    type Process = {
  created?: string;
  groupId?: string;
  hostname?: string;
  id?: string;
  lastPing?: string;
  links?: Link[];
  port?: number;
  replicaSetName?: string;
  shardName?: string;
  typeName?: ProcessType;
  version?: string;
};
    
    type ProcessType = ("REPLICA_PRIMARY" | "REPLICA_SECONDARY" | "RECOVERING" | "SHARD_MONGOS" | "SHARD_CONFIG" | "SHARD_STANDALONE" | "SHARD_PRIMARY" | "SHARD_SECONDARY" | "NO_DATA");
    
    type ProviderSettings = {
  backingProviderName?: ("AWS");
  diskIOPS?: number;
  encryptEBSVolume?: boolean;
  instanceSizeName?: ("M2" | "M5" | "M10" | "M20" | "M30" | "M40" | "R40" | "M50" | "R50" | "M60" | "R60" | "M80" | "R80" | "M100" | "M140" | "M200" | "R200" | "M300" | "R300" | "R400" | "R700");
  providerName?: ("AWS" | "TENANT");
  regionName?: ("US_WEST_1" | "US_WEST_2" | "US_EAST_1" | "US_EAST_2");
  volumeType?: ("STANDARD" | "PROVISIONED");
};
    
    type RegionsConfig = {
  US_EAST_1?: RegionsConfigEntry;
  US_EAST_2?: RegionsConfigEntry;
  US_WEST_1?: RegionsConfigEntry;
  US_WEST_2?: RegionsConfigEntry;
};
    
    type RegionsConfigEntry = {
  analyticsNodes: number;
  electableNodes: number;
  priority: number;
  readOnlyNodes: number;
};
    
    type ReplicationSpec = {
  US_EAST_1?: ReplicationSpecItem;
  US_EAST_2?: ReplicationSpecItem;
  US_WEST_1?: ReplicationSpecItem;
  US_WEST_2?: ReplicationSpecItem;
};
    
    type ReplicationSpecEntry = {
  id?: string;
  numShards?: number;
  regionsConfig?: RegionsConfig;
  zoneName?: string;
};
    
    type ReplicationSpecItem = {
  analyticsNodes?: number;
  electableNodes?: number;
  priority?: number;
  readOnlyNodes?: number;
};
    
    type RestartPrimariesParams = {
  groupID: string;
  clusterName: string;
};
    
    type RestoreJob = {
  clusterId?: string;
  created?: string;
  delivery?: RestoreJobResponseDelivery;
  encryptionEnabled?: boolean;
  groupId?: string;
  hashes?: RestoreJobResponseHash[];
  id?: string;
  links?: Link[];
  masterKeyUUID?: string;
  snapshotId?: string;
  statusName?: ("FINISHED" | "IN_PROGRESS" | "BROKEN" | "KILLED");
  timestamp?: SnapshotTimestamp;
};
    
    type RestoreJobDelivery = {
  methodName?: ("AUTOMATED_RESTORE");
  targetClusterName?: string;
  targetGroupId?: string;
};
    
    type RestoreJobResponseDelivery = {
  methodName?: ("AUTOMATED_RESTORE" | "HTTP");
  statusName?: ("NOT_STARTED" | "IN_PROGRESS" | "READY" | "FAILED" | "INTERRUPTED" | "EXPIRED" | "MAX_DOWNLOADS_EXCEEDED");
};
    
    type RestoreJobResponseHash = {
  fileName?: string;
  hash?: string;
  typeName?: string;
};
    
    type Role = {
  collectionName?: string;
  databaseName?: string;
  roleName?: RoleName;
};
    
    type RoleName = ("atlasAdmin" | "readWriteAnyDatabase" | "readAnyDatabase" | "backup" | "clusterMonitor" | "dbAdmin" | "dbAdminAnyDatabase" | "enableSharding" | "read" | "readWrite");
    
    type Snapshot = {
  clusterId?: string;
  complete?: boolean;
  created?: SnapshotTimestamp;
  doNotDelete?: boolean;
  expires?: string;
  groupId?: string;
  id?: string;
  lastOplogAppliedTimestamp?: SnapshotTimestamp;
  links?: Link[];
  parts?: SnapshotPart[];
};
    
    type SnapshotPart = {
  clusterId?: string;
  compressionSetting?: string;
  dataSizeBytes?: number;
  encryptionEnabled?: boolean;
  fileSizeBytes?: number;
  masterKeyUUID?: string;
  mongodVersion?: string;
  replicaSetName?: string;
  storageSizeBytes?: number;
  typeName?: ("REPLICA_SET" | "CONFIG_SERVER_REPLICA_SET");
};
    
    type SnapshotSchedule = {
  clusterCheckpointIntervalMin?: number;
  clusterId?: string;
  dailySnapshotRetentionDays?: number;
  groupId?: string;
  links?: Link[];
  monthlySnapshotRetentionMonths?: number;
  pointInTimeWindowHours?: number;
  snapshotIntervalHours?: number;
  snapshotRetentionDays?: number;
  weeklySnapshotRetentionWeeks?: number;
};
    
    type SnapshotTimestamp = {
  date?: string;
  increment?: number;
};
    
    type TooManyRequests = {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
};
    
    type Unauthorized = {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
};
    
    type Units = ("PERCENT" | "MILLISECONDS" | "BYTES" | "GIGABYTES" | "BYTES_PER_SECOND" | "MEGABYTES_PER_SECOND" | "GIGABYTES_PER_HOUR" | "SCALAR_PER_SECOND" | "SCALAR");
    
    type UpdateClusterParams = {
  groupID: string;
  clusterName: string;
  createOrUpdateClusterRequest: CreateOrUpdateClusterRequest;
};
    
    type UpdateContainerParams = {
  groupID: string;
  containerID: string;
  createOrUpdateContainerRequest: CreateOrUpdateContainerRequest;
};
    
    type UpdateDatabaseUserParams = {
  groupID: string;
  username: string;
  updateDatabaseUserRequest: UpdateDatabaseUserRequest;
};
    
    type UpdateDatabaseUserRequest = {
  password?: string;
  roles?: Role[];
};
    
    type UpdatePeerParams = {
  groupID: string;
  peerID: string;
  updatePeerRequest: UpdatePeerRequest;
};
    
    type UpdatePeerRequest = {
  awsAccountId?: string;
  providerName?: string;
  routeTableCidrBlock?: string;
  vpcId?: string;
};
    
    type UpdateSnapshotScheduleParams = {
  groupID: string;
  clusterName: string;
  updateSnapshotSchedule: UpdateSnapshotScheduleRequest;
};
    
    type UpdateSnapshotScheduleRequest = {
  clusterCheckpointIntervalMin?: number;
  clusterId?: string;
  dailySnapshotRetentionDays?: number;
  groupId?: string;
  monthlySnapshotRetentionMonths?: number;
  pointInTimeWindowHours?: number;
  snapshotIntervalHours?: number;
  snapshotRetentionDays?: number;
  weeklySnapshotRetentionWeeks?: number;
};
    
  }
}

export = AtlasAPIClient;
