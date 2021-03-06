// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// Container container
// swagger:model Container
type Container struct {

	// atlas cidr block
	AtlasCidrBlock string `json:"atlasCidrBlock,omitempty"`

	// id
	ID string `json:"id,omitempty"`

	// provider name
	ProviderName string `json:"providerName,omitempty"`

	// provisioned
	Provisioned bool `json:"provisioned,omitempty"`

	// region name
	RegionName string `json:"regionName,omitempty"`

	// vpc Id
	VpcID string `json:"vpcId,omitempty"`
}

// Validate validates this container
func (m *Container) Validate(formats strfmt.Registry) error {
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// MarshalBinary interface implementation
func (m *Container) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Container) UnmarshalBinary(b []byte) error {
	var res Container
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
