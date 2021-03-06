// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"encoding/json"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/validate"
)

// RoleName role name
// swagger:model RoleName
type RoleName string

const (
	// RoleNameAtlasAdmin captures enum value "atlasAdmin"
	RoleNameAtlasAdmin RoleName = "atlasAdmin"
	// RoleNameReadWriteAnyDatabase captures enum value "readWriteAnyDatabase"
	RoleNameReadWriteAnyDatabase RoleName = "readWriteAnyDatabase"
	// RoleNameReadAnyDatabase captures enum value "readAnyDatabase"
	RoleNameReadAnyDatabase RoleName = "readAnyDatabase"
	// RoleNameBackup captures enum value "backup"
	RoleNameBackup RoleName = "backup"
	// RoleNameClusterMonitor captures enum value "clusterMonitor"
	RoleNameClusterMonitor RoleName = "clusterMonitor"
	// RoleNameDbAdmin captures enum value "dbAdmin"
	RoleNameDbAdmin RoleName = "dbAdmin"
	// RoleNameDbAdminAnyDatabase captures enum value "dbAdminAnyDatabase"
	RoleNameDbAdminAnyDatabase RoleName = "dbAdminAnyDatabase"
	// RoleNameEnableSharding captures enum value "enableSharding"
	RoleNameEnableSharding RoleName = "enableSharding"
	// RoleNameRead captures enum value "read"
	RoleNameRead RoleName = "read"
	// RoleNameReadWrite captures enum value "readWrite"
	RoleNameReadWrite RoleName = "readWrite"
)

// for schema
var roleNameEnum []interface{}

func init() {
	var res []RoleName
	if err := json.Unmarshal([]byte(`["atlasAdmin","readWriteAnyDatabase","readAnyDatabase","backup","clusterMonitor","dbAdmin","dbAdminAnyDatabase","enableSharding","read","readWrite"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		roleNameEnum = append(roleNameEnum, v)
	}
}

func (m RoleName) validateRoleNameEnum(path, location string, value RoleName) error {
	if err := validate.Enum(path, location, value, roleNameEnum); err != nil {
		return err
	}
	return nil
}

// Validate validates this role name
func (m RoleName) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateRoleNameEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
