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

const models = require('./index');

/**
 * HvrA provider specific input for failback.
 *
 * @extends models['ProviderSpecificFailoverInput']
 */
class HyperVReplicaAzureFailbackProviderInput extends models['ProviderSpecificFailoverInput'] {
  /**
   * Create a HyperVReplicaAzureFailbackProviderInput.
   * @member {string} [dataSyncOption] Data sync option.
   * @member {string} [recoveryVmCreationOption] ALR options to create
   * alternate recovery.
   * @member {string} [providerIdForAlternateRecovery] Provider ID for
   * alternate location
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HyperVReplicaAzureFailbackProviderInput
   *
   * @returns {object} metadata of HyperVReplicaAzureFailbackProviderInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HyperVReplicaAzureFailback',
      type: {
        name: 'Composite',
        className: 'HyperVReplicaAzureFailbackProviderInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          dataSyncOption: {
            required: false,
            serializedName: 'dataSyncOption',
            type: {
              name: 'String'
            }
          },
          recoveryVmCreationOption: {
            required: false,
            serializedName: 'recoveryVmCreationOption',
            type: {
              name: 'String'
            }
          },
          providerIdForAlternateRecovery: {
            required: false,
            serializedName: 'providerIdForAlternateRecovery',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HyperVReplicaAzureFailbackProviderInput;
