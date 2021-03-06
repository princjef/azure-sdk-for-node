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
 * ApplyRecoveryPoint input specific to A2A provider.
 *
 * @extends models['ApplyRecoveryPointProviderSpecificInput']
 */
class A2AApplyRecoveryPointInput extends models['ApplyRecoveryPointProviderSpecificInput'] {
  /**
   * Create a A2AApplyRecoveryPointInput.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of A2AApplyRecoveryPointInput
   *
   * @returns {object} metadata of A2AApplyRecoveryPointInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'A2A',
      type: {
        name: 'Composite',
        className: 'A2AApplyRecoveryPointInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = A2AApplyRecoveryPointInput;
