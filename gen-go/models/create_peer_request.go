// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// CreatePeerRequest create peer request
// swagger:model CreatePeerRequest
type CreatePeerRequest struct {

	// accepter region name
	AccepterRegionName string `json:"accepterRegionName,omitempty"`

	// aws account Id
	AwsAccountID string `json:"awsAccountId,omitempty"`

	// container Id
	ContainerID string `json:"containerId,omitempty"`

	// provider name
	ProviderName string `json:"providerName,omitempty"`

	// route table cidr block
	RouteTableCidrBlock string `json:"routeTableCidrBlock,omitempty"`

	// vpc Id
	VpcID string `json:"vpcId,omitempty"`
}

// Validate validates this create peer request
func (m *CreatePeerRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// MarshalBinary interface implementation
func (m *CreatePeerRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *CreatePeerRequest) UnmarshalBinary(b []byte) error {
	var res CreatePeerRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
