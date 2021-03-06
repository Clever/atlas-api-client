// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// Forbidden forbidden
// swagger:model Forbidden
type Forbidden struct {

	// error code
	ErrorCode int64 `json:"error,omitempty"`

	// message
	Message string `json:"detail,omitempty"`

	// reason
	Reason string `json:"reason,omitempty"`

	// unused
	Unused string `json:"message,omitempty"`
}

// Validate validates this forbidden
func (m *Forbidden) Validate(formats strfmt.Registry) error {
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// MarshalBinary interface implementation
func (m *Forbidden) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Forbidden) UnmarshalBinary(b []byte) error {
	var res Forbidden
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
