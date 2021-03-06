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
 * Used for getting PHP error logging flag.
 *
 * @extends models['ProxyOnlyResource']
 */
class SitePhpErrorLogFlag extends models['ProxyOnlyResource'] {
  /**
   * Create a SitePhpErrorLogFlag.
   * @member {string} [localLogErrors] Local log_errors setting.
   * @member {string} [masterLogErrors] Master log_errors setting.
   * @member {string} [localLogErrorsMaxLength] Local log_errors_max_len
   * setting.
   * @member {string} [masterLogErrorsMaxLength] Master log_errors_max_len
   * setting.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SitePhpErrorLogFlag
   *
   * @returns {object} metadata of SitePhpErrorLogFlag
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SitePhpErrorLogFlag',
      type: {
        name: 'Composite',
        className: 'SitePhpErrorLogFlag',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          localLogErrors: {
            required: false,
            serializedName: 'properties.localLogErrors',
            type: {
              name: 'String'
            }
          },
          masterLogErrors: {
            required: false,
            serializedName: 'properties.masterLogErrors',
            type: {
              name: 'String'
            }
          },
          localLogErrorsMaxLength: {
            required: false,
            serializedName: 'properties.localLogErrorsMaxLength',
            type: {
              name: 'String'
            }
          },
          masterLogErrorsMaxLength: {
            required: false,
            serializedName: 'properties.masterLogErrorsMaxLength',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SitePhpErrorLogFlag;
