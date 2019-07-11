// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// ReplicationSpecEntry replication spec entry
// swagger:model ReplicationSpecEntry
type ReplicationSpecEntry struct {

	// id
	ID string `json:"id,omitempty"`

	// num shards
	NumShards int64 `json:"numShards,omitempty"`

	// regions config
	RegionsConfig *RegionsConfig `json:"regionsConfig,omitempty"`
}

// Validate validates this replication spec entry
func (m *ReplicationSpecEntry) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateRegionsConfig(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ReplicationSpecEntry) validateRegionsConfig(formats strfmt.Registry) error {

	if swag.IsZero(m.RegionsConfig) { // not required
		return nil
	}

	if m.RegionsConfig != nil {

		if err := m.RegionsConfig.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("regionsConfig")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *ReplicationSpecEntry) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ReplicationSpecEntry) UnmarshalBinary(b []byte) error {
	var res ReplicationSpecEntry
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
