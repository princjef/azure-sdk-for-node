/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Subnet class.
 * @constructor
 * Subnet in a VirtualNework resource
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource
 * 
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated
 * 
 * @member {string} [addressPrefix] Gets or sets Address prefix for the subnet.
 * 
 * @member {object} [networkSecurityGroup] Gets or sets the reference of the
 * NetworkSecurityGroup resource
 * 
 * @member {string} [networkSecurityGroup.etag] Gets a unique read-only string
 * that changes whenever the resource is updated
 * 
 * @member {array} [networkSecurityGroup.securityRules] Gets or sets Security
 * rules of network security group
 * 
 * @member {array} [networkSecurityGroup.defaultSecurityRules] Gets or sets
 * Default security rules of network security group
 * 
 * @member {array} [networkSecurityGroup.networkInterfaces] Gets collection of
 * references to Network Interfaces
 * 
 * @member {array} [networkSecurityGroup.subnets] Gets collection of
 * references to subnets
 * 
 * @member {string} [networkSecurityGroup.resourceGuid] Gets or sets resource
 * guid property of the network security group resource
 * 
 * @member {string} [networkSecurityGroup.provisioningState] Gets or sets
 * Provisioning state of the PublicIP resource Updating/Deleting/Failed
 * 
 * @member {object} [routeTable] Gets or sets the reference of the RouteTable
 * resource
 * 
 * @member {string} [routeTable.etag] Gets a unique read-only string that
 * changes whenever the resource is updated
 * 
 * @member {array} [routeTable.routes] Gets or sets Routes in a Route Table
 * 
 * @member {array} [routeTable.subnets] Gets collection of references to
 * subnets
 * 
 * @member {string} [routeTable.provisioningState] Gets or sets Provisioning
 * state of the resource Updating/Deleting/Failed
 * 
 * @member {array} [ipConfigurations] Gets array of references to the network
 * interface IP configurations using subnet
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * PublicIP resource Updating/Deleting/Failed
 * 
 */
function Subnet() {
  Subnet['super_'].call(this);
}

util.inherits(Subnet, models['SubResource']);

/**
 * Defines the metadata of Subnet
 *
 * @returns {object} metadata of Subnet
 *
 */
Subnet.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Subnet',
    type: {
      name: 'Composite',
      className: 'Subnet',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        },
        addressPrefix: {
          required: false,
          serializedName: 'properties.addressPrefix',
          type: {
            name: 'String'
          }
        },
        networkSecurityGroup: {
          required: false,
          serializedName: 'properties.networkSecurityGroup',
          type: {
            name: 'Composite',
            className: 'NetworkSecurityGroup'
          }
        },
        routeTable: {
          required: false,
          serializedName: 'properties.routeTable',
          type: {
            name: 'Composite',
            className: 'RouteTable'
          }
        },
        ipConfigurations: {
          required: false,
          serializedName: 'properties.ipConfigurations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'IPConfigurationElementType',
                type: {
                  name: 'Composite',
                  className: 'IPConfiguration'
                }
            }
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Subnet;