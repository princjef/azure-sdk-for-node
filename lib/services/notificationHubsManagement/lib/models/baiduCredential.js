/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the BaiduCredential class.
 * @constructor
 * Description of a NotificationHub BaiduCredential.
 * @member {object} [properties] Gets or sets properties of NotificationHub
 * BaiduCredential.
 * 
 * @member {string} [properties.baiduApiKey] Get or Set Baidu Api Key.
 * 
 * @member {string} [properties.baiduEndPoint] Get or Set Baidu Endpoint.
 * 
 * @member {string} [properties.baiduSecretKey] Get or Set Baidu Secret Key
 * 
 */
function BaiduCredential() {
}

/**
 * Defines the metadata of BaiduCredential
 *
 * @returns {object} metadata of BaiduCredential
 *
 */
BaiduCredential.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BaiduCredential',
    type: {
      name: 'Composite',
      className: 'BaiduCredential',
      modelProperties: {
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Composite',
            className: 'BaiduCredentialProperties'
          }
        }
      }
    }
  };
};

module.exports = BaiduCredential;