// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"encoding/json"
	"strconv"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// RestoreJob restore job
// swagger:model RestoreJob
type RestoreJob struct {

	// Unique identifier of the cluster the restore job represents.
	ClusterID string `json:"clusterId,omitempty"`

	// Timestamp in ISO 8601 date and time format in UTC when the restore job was requested.
	Created string `json:"created,omitempty"`

	// delivery
	Delivery *RestoreJobResponseDelivery `json:"delivery,omitempty"`

	// Indicates whether the restored snapshot data is encrypted.
	EncryptionEnabled bool `json:"encryptionEnabled,omitempty"`

	// Unique identifier of the project that owns the restore job.
	GroupID string `json:"groupId,omitempty"`

	// If the corresponding delivery.url has been downloaded, each document in this array is a mapping of a restore file to a hashed checksum. This array is present only after the file is downloaded.
	Hashes []*RestoreJobResponseHash `json:"hashes"`

	// Unique identifier of the restore job.
	ID string `json:"id,omitempty"`

	// One or more links to sub-resources and/or related resources.
	Links []*Link `json:"links"`

	// KMIP master key ID used to encrypt the snapshot data (only if encryptionEnabled is true for the snapshot).
	MasterKeyUUID string `json:"masterKeyUUID,omitempty"`

	// Unique identifier of the snapshot to restore.
	SnapshotID string `json:"snapshotId,omitempty"`

	// Current status of the job.
	StatusName string `json:"statusName,omitempty"`

	// timestamp
	Timestamp SnapshotTimestamp `json:"timestamp,omitempty"`
}

// Validate validates this restore job
func (m *RestoreJob) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDelivery(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateHashes(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateLinks(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateStatusName(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *RestoreJob) validateDelivery(formats strfmt.Registry) error {

	if swag.IsZero(m.Delivery) { // not required
		return nil
	}

	if m.Delivery != nil {

		if err := m.Delivery.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("delivery")
			}
			return err
		}
	}

	return nil
}

func (m *RestoreJob) validateHashes(formats strfmt.Registry) error {

	if swag.IsZero(m.Hashes) { // not required
		return nil
	}

	for i := 0; i < len(m.Hashes); i++ {

		if swag.IsZero(m.Hashes[i]) { // not required
			continue
		}

		if m.Hashes[i] != nil {

			if err := m.Hashes[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("hashes" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *RestoreJob) validateLinks(formats strfmt.Registry) error {

	if swag.IsZero(m.Links) { // not required
		return nil
	}

	for i := 0; i < len(m.Links); i++ {

		if swag.IsZero(m.Links[i]) { // not required
			continue
		}

		if m.Links[i] != nil {

			if err := m.Links[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("links" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

var restoreJobTypeStatusNamePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["FINISHED","IN_PROGRESS","BROKEN","KILLED"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		restoreJobTypeStatusNamePropEnum = append(restoreJobTypeStatusNamePropEnum, v)
	}
}

const (
	// RestoreJobStatusNameFINISHED captures enum value "FINISHED"
	RestoreJobStatusNameFINISHED string = "FINISHED"
	// RestoreJobStatusNameINPROGRESS captures enum value "IN_PROGRESS"
	RestoreJobStatusNameINPROGRESS string = "IN_PROGRESS"
	// RestoreJobStatusNameBROKEN captures enum value "BROKEN"
	RestoreJobStatusNameBROKEN string = "BROKEN"
	// RestoreJobStatusNameKILLED captures enum value "KILLED"
	RestoreJobStatusNameKILLED string = "KILLED"
)

// prop value enum
func (m *RestoreJob) validateStatusNameEnum(path, location string, value string) error {
	if err := validate.Enum(path, location, value, restoreJobTypeStatusNamePropEnum); err != nil {
		return err
	}
	return nil
}

func (m *RestoreJob) validateStatusName(formats strfmt.Registry) error {

	if swag.IsZero(m.StatusName) { // not required
		return nil
	}

	// value enum
	if err := m.validateStatusNameEnum("statusName", "body", m.StatusName); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *RestoreJob) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *RestoreJob) UnmarshalBinary(b []byte) error {
	var res RestoreJob
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
