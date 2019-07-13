// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// RegionsConfig regions config
// swagger:model RegionsConfig
type RegionsConfig struct {

	// u s e a s t 1
	USEAST1 *RegionsConfigEntry `json:"US_EAST_1,omitempty"`

	// u s e a s t 2
	USEAST2 *RegionsConfigEntry `json:"US_EAST_2,omitempty"`

	// u s w e s t 1
	USWEST1 *RegionsConfigEntry `json:"US_WEST_1,omitempty"`

	// u s w e s t 2
	USWEST2 *RegionsConfigEntry `json:"US_WEST_2,omitempty"`
}

// Validate validates this regions config
func (m *RegionsConfig) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateUSEAST1(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateUSEAST2(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateUSWEST1(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if err := m.validateUSWEST2(formats); err != nil {
		// prop
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *RegionsConfig) validateUSEAST1(formats strfmt.Registry) error {

	if swag.IsZero(m.USEAST1) { // not required
		return nil
	}

	if m.USEAST1 != nil {

		if err := m.USEAST1.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("US_EAST_1")
			}
			return err
		}
	}

	return nil
}

func (m *RegionsConfig) validateUSEAST2(formats strfmt.Registry) error {

	if swag.IsZero(m.USEAST2) { // not required
		return nil
	}

	if m.USEAST2 != nil {

		if err := m.USEAST2.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("US_EAST_2")
			}
			return err
		}
	}

	return nil
}

func (m *RegionsConfig) validateUSWEST1(formats strfmt.Registry) error {

	if swag.IsZero(m.USWEST1) { // not required
		return nil
	}

	if m.USWEST1 != nil {

		if err := m.USWEST1.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("US_WEST_1")
			}
			return err
		}
	}

	return nil
}

func (m *RegionsConfig) validateUSWEST2(formats strfmt.Registry) error {

	if swag.IsZero(m.USWEST2) { // not required
		return nil
	}

	if m.USWEST2 != nil {

		if err := m.USWEST2.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("US_WEST_2")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *RegionsConfig) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *RegionsConfig) UnmarshalBinary(b []byte) error {
	var res RegionsConfig
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
