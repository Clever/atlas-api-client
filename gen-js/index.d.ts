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
  granularity: string;
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
  granularity: string;
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
  granularity: string;
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
  instanceSizeName?: ("M2" | "M5" | "M10" | "M20" | "M30" | "M40" | "M50" | "M60" | "M100" | "M200");
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

declare class AtlasAPIClient {
  constructor(options: AtlasAPIClientOptions);

  
  getClusters(groupID: string, options?: RequestOptions, cb?: Callback<GetClustersResponse>): Promise<GetClustersResponse>
  
  createCluster(params: CreateClusterParams, options?: RequestOptions, cb?: Callback<Cluster>): Promise<Cluster>
  
  deleteCluster(params: DeleteClusterParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getCluster(params: GetClusterParams, options?: RequestOptions, cb?: Callback<Cluster>): Promise<Cluster>
  
  updateCluster(params: UpdateClusterParams, options?: RequestOptions, cb?: Callback<Cluster>): Promise<Cluster>
  
  getRestoreJobs(params: GetRestoreJobsParams, options?: RequestOptions, cb?: Callback<GetRestoreJobsResponse>): Promise<GetRestoreJobsResponse>
  
  createRestoreJob(params: CreateRestoreJobParams, options?: RequestOptions, cb?: Callback<CreateRestoreJobResponse>): Promise<CreateRestoreJobResponse>
  
  getSnapshotSchedule(params: GetSnapshotScheduleParams, options?: RequestOptions, cb?: Callback<SnapshotSchedule>): Promise<SnapshotSchedule>
  
  updateSnapshotSchedule(params: UpdateSnapshotScheduleParams, options?: RequestOptions, cb?: Callback<SnapshotSchedule>): Promise<SnapshotSchedule>
  
  getSnapshots(params: GetSnapshotsParams, options?: RequestOptions, cb?: Callback<GetSnapshotsResponse>): Promise<GetSnapshotsResponse>
  
  getRestoreJob(params: GetRestoreJobParams, options?: RequestOptions, cb?: Callback<RestoreJob>): Promise<RestoreJob>
  
  getContainers(groupID: string, options?: RequestOptions, cb?: Callback<GetContainersResponse>): Promise<GetContainersResponse>
  
  createContainer(params: CreateContainerParams, options?: RequestOptions, cb?: Callback<Container>): Promise<Container>
  
  getContainer(params: GetContainerParams, options?: RequestOptions, cb?: Callback<Container>): Promise<Container>
  
  updateContainer(params: UpdateContainerParams, options?: RequestOptions, cb?: Callback<Container>): Promise<Container>
  
  getDatabaseUsers(groupID: string, options?: RequestOptions, cb?: Callback<GetDatabaseUsersResponse>): Promise<GetDatabaseUsersResponse>
  
  createDatabaseUser(params: CreateDatabaseUserParams, options?: RequestOptions, cb?: Callback<DatabaseUser>): Promise<DatabaseUser>
  
  deleteDatabaseUser(params: DeleteDatabaseUserParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getDatabaseUser(params: GetDatabaseUserParams, options?: RequestOptions, cb?: Callback<DatabaseUser>): Promise<DatabaseUser>
  
  updateDatabaseUser(params: UpdateDatabaseUserParams, options?: RequestOptions, cb?: Callback<DatabaseUser>): Promise<DatabaseUser>
  
  getPeers(groupID: string, options?: RequestOptions, cb?: Callback<GetPeersResponse>): Promise<GetPeersResponse>
  
  createPeer(params: CreatePeerParams, options?: RequestOptions, cb?: Callback<Peer>): Promise<Peer>
  
  deletePeer(params: DeletePeerParams, options?: RequestOptions, cb?: Callback<void>): Promise<void>
  
  getPeer(params: GetPeerParams, options?: RequestOptions, cb?: Callback<Peer>): Promise<Peer>
  
  updatePeer(params: UpdatePeerParams, options?: RequestOptions, cb?: Callback<Peer>): Promise<Peer>
  
  getProcesses(groupID: string, options?: RequestOptions, cb?: Callback<GetProcessesResponse>): Promise<GetProcessesResponse>
  
  getProcessDatabases(params: GetProcessDatabasesParams, options?: RequestOptions, cb?: Callback<GetProcessDatabasesResponse>): Promise<GetProcessDatabasesResponse>
  
  getProcessDatabaseMeasurements(params: GetProcessDatabaseMeasurementsParams, options?: RequestOptions, cb?: Callback<GetProcessDatabaseMeasurementsResponse>): Promise<GetProcessDatabaseMeasurementsResponse>
  
  getProcessDisks(params: GetProcessDisksParams, options?: RequestOptions, cb?: Callback<GetProcessDisksResponse>): Promise<GetProcessDisksResponse>
  
  getProcessDiskMeasurements(params: GetProcessDiskMeasurementsParams, options?: RequestOptions, cb?: Callback<GetProcessDiskMeasurementsResponse>): Promise<GetProcessDiskMeasurementsResponse>
  
  getProcessMeasurements(params: GetProcessMeasurementsParams, options?: RequestOptions, cb?: Callback<GetProcessMeasurementsResponse>): Promise<GetProcessMeasurementsResponse>
  
}

declare namespace AtlasAPIClient {
  const RetryPolicies: {
    Single: RetryPolicy;
    Exponential: RetryPolicy;
    None: RetryPolicy;
  }

  const DefaultCircuitOptions: CircuitOptions;

  namespace Errors {
    
    class BadRequest {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
    class Unauthorized {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
    class Forbidden {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
    class NotFound {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
    class Conflict {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
    class TooManyRequests {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
    class InternalError {
  detail?: string;
  error?: number;
  message?: string;
  reason?: string;
}
    
  }
}

export = AtlasAPIClient;
