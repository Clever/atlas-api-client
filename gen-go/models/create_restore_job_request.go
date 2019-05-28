// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// CreateRestoreJobRequest create restore job request
// swagger:model CreateRestoreJobRequest
type CreateRestoreJobRequest struct {

	// delivery
	// Required: true
	Delivery *RestoreJobDelivery `json:"delivery"`

	// A timestamp in the number of milliseconds that have elapsed since the UNIX epoch that represents the point in time to which your data will be restored. This timestamp must be within last 24 hours of the current time.
	PointInTimeUTCMillis string `json:"pointInTimeUTCMillis,omitempty"`

	// Unique identifier of the snapshot to restore.
	SnapshotID string `json:"snapshotId,omitempty"`
}

// Validate validates this create restore job request
func (m *CreateRestoreJobRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDelivery(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *CreateRestoreJobRequest) validateDelivery(formats strfmt.Registry) error {

	if err := validate.Required("delivery", "body", m.Delivery); err != nil {
		return err
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

// MarshalBinary interface implementation
func (m *CreateRestoreJobRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *CreateRestoreJobRequest) UnmarshalBinary(b []byte) error {
	var res CreateRestoreJobRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
