// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// RestoreJobResponseHash restore job response hash
// swagger:model RestoreJobResponseHash
type RestoreJobResponseHash struct {

	// Name of the file that has been hashed.
	FileName string `json:"fileName,omitempty"`

	// Hash of the file.
	Hash string `json:"hash,omitempty"`

	// Hashing algorithm used to compute the hash value. If present, this value is SHA1.
	TypeName string `json:"typeName,omitempty"`
}

// Validate validates this restore job response hash
func (m *RestoreJobResponseHash) Validate(formats strfmt.Registry) error {
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// MarshalBinary interface implementation
func (m *RestoreJobResponseHash) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *RestoreJobResponseHash) UnmarshalBinary(b []byte) error {
	var res RestoreJobResponseHash
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}