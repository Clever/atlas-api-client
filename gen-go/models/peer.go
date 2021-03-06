// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// Peer peer
// swagger:model Peer
type Peer struct {

	// accepter region name
	AccepterRegionName string `json:"accepterRegionName,omitempty"`

	// aws account Id
	AwsAccountID string `json:"awsAccountId,omitempty"`

	// connection Id
	ConnectionID string `json:"connectionId,omitempty"`

	// container Id
	ContainerID string `json:"containerId,omitempty"`

	// error state name
	ErrorStateName PeerErrorState `json:"errorStateName,omitempty"`

	// id
	ID string `json:"id,omitempty"`

	// route table cidr block
	RouteTableCidrBlock string `json:"routeTableCidrBlock,omitempty"`

	// status name
	StatusName PeerStatus `json:"statusName,omitempty"`

	// vpc Id
	VpcID string `json:"vpcId,omitempty"`
}

// Validate validates this peer
func (m *Peer) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateErrorStateName(formats); err != nil {
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

func (m *Peer) validateErrorStateName(formats strfmt.Registry) error {

	if swag.IsZero(m.ErrorStateName) { // not required
		return nil
	}

	if err := m.ErrorStateName.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("errorStateName")
		}
		return err
	}

	return nil
}

func (m *Peer) validateStatusName(formats strfmt.Registry) error {

	if swag.IsZero(m.StatusName) { // not required
		return nil
	}

	if err := m.StatusName.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("statusName")
		}
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *Peer) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Peer) UnmarshalBinary(b []byte) error {
	var res Peer
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
