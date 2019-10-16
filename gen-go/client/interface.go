package client

import (
	"context"

	"github.com/Clever/atlas-api-client/gen-go/models"
)

//go:generate mockgen -source=$GOFILE -destination=mock_client.go -package=client

// Client defines the methods available to clients of the atlas-api-client service.
type Client interface {

	// GetClusters makes a GET request to /groups/{groupID}/clusters
	// Get all clusters
	// 200: *models.GetClustersResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetClusters(ctx context.Context, groupID string) (*models.GetClustersResponse, error)

	// CreateCluster makes a POST request to /groups/{groupID}/clusters
	// Create a Cluster
	// 201: *models.Cluster
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	CreateCluster(ctx context.Context, i *models.CreateClusterInput) (*models.Cluster, error)

	// DeleteCluster makes a DELETE request to /groups/{groupID}/clusters/{clusterName}
	// Deletes a cluster
	// 202: nil
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	DeleteCluster(ctx context.Context, i *models.DeleteClusterInput) error

	// GetCluster makes a GET request to /groups/{groupID}/clusters/{clusterName}
	// Gets a cluster
	// 200: *models.Cluster
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetCluster(ctx context.Context, i *models.GetClusterInput) (*models.Cluster, error)

	// UpdateCluster makes a PATCH request to /groups/{groupID}/clusters/{clusterName}
	// Update a Cluster
	// 200: *models.Cluster
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	UpdateCluster(ctx context.Context, i *models.UpdateClusterInput) (*models.Cluster, error)

	// GetRestoreJobs makes a GET request to /groups/{groupID}/clusters/{clusterName}/restoreJobs
	// Get all restore jobs for a cluster
	// 200: *models.GetRestoreJobsResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetRestoreJobs(ctx context.Context, i *models.GetRestoreJobsInput) (*models.GetRestoreJobsResponse, error)

	// CreateRestoreJob makes a POST request to /groups/{groupID}/clusters/{clusterName}/restoreJobs
	// Create a restore job
	// 200: *models.CreateRestoreJobResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	CreateRestoreJob(ctx context.Context, i *models.CreateRestoreJobInput) (*models.CreateRestoreJobResponse, error)

	// GetSnapshotSchedule makes a GET request to /groups/{groupID}/clusters/{clusterName}/snapshotSchedule
	// Get snapshot schedules of a cluster
	// 200: *models.SnapshotSchedule
	// 400: *models.BadRequest
	// 404: *models.NotFound
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetSnapshotSchedule(ctx context.Context, i *models.GetSnapshotScheduleInput) (*models.SnapshotSchedule, error)

	// UpdateSnapshotSchedule makes a PATCH request to /groups/{groupID}/clusters/{clusterName}/snapshotSchedule
	// Update a Cluster's snapshot schedule
	// 200: *models.SnapshotSchedule
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	UpdateSnapshotSchedule(ctx context.Context, i *models.UpdateSnapshotScheduleInput) (*models.SnapshotSchedule, error)

	// GetSnapshots makes a GET request to /groups/{groupID}/clusters/{clusterName}/snapshots
	// Gets snapshots for a cluster
	// 200: *models.GetSnapshotsResponse
	// 400: *models.BadRequest
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetSnapshots(ctx context.Context, i *models.GetSnapshotsInput) (*models.GetSnapshotsResponse, error)

	// GetRestoreJob makes a GET request to /groups/{groupID}/clusters/{sourceClusterName}/restoreJobs/{jobID}
	// Get one restore job
	// 200: *models.RestoreJob
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetRestoreJob(ctx context.Context, i *models.GetRestoreJobInput) (*models.RestoreJob, error)

	// GetContainers makes a GET request to /groups/{groupID}/containers
	// Get All Containers
	// 200: *models.GetContainersResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetContainers(ctx context.Context, groupID string) (*models.GetContainersResponse, error)

	// CreateContainer makes a POST request to /groups/{groupID}/containers
	// Create a Container
	// 201: *models.Container
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	CreateContainer(ctx context.Context, i *models.CreateContainerInput) (*models.Container, error)

	// GetContainer makes a GET request to /groups/{groupID}/containers/{containerID}
	// Gets a container
	// 200: *models.Container
	// 400: *models.BadRequest
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetContainer(ctx context.Context, i *models.GetContainerInput) (*models.Container, error)

	// UpdateContainer makes a PATCH request to /groups/{groupID}/containers/{containerID}
	// Update a Container
	// 200: *models.Container
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	UpdateContainer(ctx context.Context, i *models.UpdateContainerInput) (*models.Container, error)

	// GetDatabaseUsers makes a GET request to /groups/{groupID}/databaseUsers
	// Get All DatabaseUsers
	// 200: *models.GetDatabaseUsersResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetDatabaseUsers(ctx context.Context, groupID string) (*models.GetDatabaseUsersResponse, error)

	// CreateDatabaseUser makes a POST request to /groups/{groupID}/databaseUsers
	// Create a DatabaseUser
	// 201: *models.DatabaseUser
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	CreateDatabaseUser(ctx context.Context, i *models.CreateDatabaseUserInput) (*models.DatabaseUser, error)

	// DeleteDatabaseUser makes a DELETE request to /groups/{groupID}/databaseUsers/admin/{username}
	// Deletes a DatabaseUser
	// 200: nil
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	DeleteDatabaseUser(ctx context.Context, i *models.DeleteDatabaseUserInput) error

	// GetDatabaseUser makes a GET request to /groups/{groupID}/databaseUsers/admin/{username}
	// Gets a database user
	// 200: *models.DatabaseUser
	// 400: *models.BadRequest
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetDatabaseUser(ctx context.Context, i *models.GetDatabaseUserInput) (*models.DatabaseUser, error)

	// UpdateDatabaseUser makes a PATCH request to /groups/{groupID}/databaseUsers/admin/{username}
	// Update a DatabaseUser
	// 200: *models.DatabaseUser
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	UpdateDatabaseUser(ctx context.Context, i *models.UpdateDatabaseUserInput) (*models.DatabaseUser, error)

	// GetPeers makes a GET request to /groups/{groupID}/peers
	// Get All VPC Peering Connections in One Project (first page only)
	// 200: *models.GetPeersResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 404: *models.NotFound
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetPeers(ctx context.Context, groupID string) (*models.GetPeersResponse, error)

	// CreatePeer makes a POST request to /groups/{groupID}/peers
	// Create One New VPC Peering Connection
	// 201: *models.Peer
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 404: *models.NotFound
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	CreatePeer(ctx context.Context, i *models.CreatePeerInput) (*models.Peer, error)

	// DeletePeer makes a DELETE request to /groups/{groupID}/peers/{peerID}
	// Delete One Existing VPC Peering Connection
	// 200: nil
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 404: *models.NotFound
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	DeletePeer(ctx context.Context, i *models.DeletePeerInput) error

	// GetPeer makes a GET request to /groups/{groupID}/peers/{peerID}
	// Gets One Specific VPC Peering Connection
	// 200: *models.Peer
	// 400: *models.BadRequest
	// 404: *models.NotFound
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetPeer(ctx context.Context, i *models.GetPeerInput) (*models.Peer, error)

	// UpdatePeer makes a PATCH request to /groups/{groupID}/peers/{peerID}
	// Update One Existing VPC Peering Connection
	// 200: *models.Peer
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 404: *models.NotFound
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	UpdatePeer(ctx context.Context, i *models.UpdatePeerInput) (*models.Peer, error)

	// GetProcesses makes a GET request to /groups/{groupID}/processes
	// Get All Processes
	// 200: *models.GetProcessesResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetProcesses(ctx context.Context, groupID string) (*models.GetProcessesResponse, error)

	// GetProcessDatabases makes a GET request to /groups/{groupID}/processes/{host}:{port}/databases
	// Get the available databases for a Atlas MongoDB Process
	// 200: *models.GetProcessDatabasesResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetProcessDatabases(ctx context.Context, i *models.GetProcessDatabasesInput) (*models.GetProcessDatabasesResponse, error)

	// GetProcessDatabaseMeasurements makes a GET request to /groups/{groupID}/processes/{host}:{port}/databases/{databaseID}/measurements
	// Get the measurements of the specified database for a Atlas MongoDB process.
	// 200: *models.GetProcessDatabaseMeasurementsResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetProcessDatabaseMeasurements(ctx context.Context, i *models.GetProcessDatabaseMeasurementsInput) (*models.GetProcessDatabaseMeasurementsResponse, error)

	// GetProcessDisks makes a GET request to /groups/{groupID}/processes/{host}:{port}/disks
	// Get the available disks for a Atlas MongoDB Process
	// 200: *models.GetProcessDisksResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetProcessDisks(ctx context.Context, i *models.GetProcessDisksInput) (*models.GetProcessDisksResponse, error)

	// GetProcessDiskMeasurements makes a GET request to /groups/{groupID}/processes/{host}:{port}/disks/{diskName}/measurements
	// Get the measurements of the specified disk for a Atlas MongoDB process.
	// 200: *models.GetProcessDiskMeasurementsResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetProcessDiskMeasurements(ctx context.Context, i *models.GetProcessDiskMeasurementsInput) (*models.GetProcessDiskMeasurementsResponse, error)

	// GetProcessMeasurements makes a GET request to /groups/{groupID}/processes/{host}:{port}/measurements
	// Get measurements for a specific Atlas MongoDB process (mongod or mongos).
	// 200: *models.GetProcessMeasurementsResponse
	// 400: *models.BadRequest
	// 401: *models.Unauthorized
	// 403: *models.Forbidden
	// 404: *models.NotFound
	// 409: *models.Conflict
	// 429: *models.TooManyRequests
	// 500: *models.InternalError
	// default: client side HTTP errors, for example: context.DeadlineExceeded.
	GetProcessMeasurements(ctx context.Context, i *models.GetProcessMeasurementsInput) (*models.GetProcessMeasurementsResponse, error)
}
