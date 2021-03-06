// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// GetProcessDatabaseMeasurementsResponse get process database measurements response
// swagger:model GetProcessDatabaseMeasurementsResponse
type GetProcessDatabaseMeasurementsResponse struct {

	// database name
	DatabaseName string `json:"databaseName,omitempty"`

	// end
	End strfmt.DateTime `json:"end,omitempty"`

	// granularity
	Granularity Granularity `json:"granularity,omitempty"`

	// group Id
	GroupID string `json:"groupId,omitempty"`

	// host Id
	HostID string `json:"hostId,omitempty"`

	// links
	Links []*Link `json:"links"`

	// measurements
	Measurements []*Measurement `json:"measurements"`

	// process Id
	ProcessID string `json:"processId,omitempty"`

	// start
	Start strfmt.DateTime `json:"start,omitempty"`
}

// Validate validates this get process database measurements response
func (m *GetProcessDatabaseMeasurementsResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateGranularity(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateLinks(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateMeasurements(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *GetProcessDatabaseMeasurementsResponse) validateGranularity(formats strfmt.Registry) error {

	if swag.IsZero(m.Granularity) { // not required
		return nil
	}

	if err := m.Granularity.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("granularity")
		}
		return err
	}

	return nil
}

func (m *GetProcessDatabaseMeasurementsResponse) validateLinks(formats strfmt.Registry) error {

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

func (m *GetProcessDatabaseMeasurementsResponse) validateMeasurements(formats strfmt.Registry) error {

	if swag.IsZero(m.Measurements) { // not required
		return nil
	}

	for i := 0; i < len(m.Measurements); i++ {

		if swag.IsZero(m.Measurements[i]) { // not required
			continue
		}

		if m.Measurements[i] != nil {

			if err := m.Measurements[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("measurements" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *GetProcessDatabaseMeasurementsResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *GetProcessDatabaseMeasurementsResponse) UnmarshalBinary(b []byte) error {
	var res GetProcessDatabaseMeasurementsResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
