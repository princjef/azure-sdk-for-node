/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Vaults
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the KeyVaultManagementClient.
 */
export interface Vaults {


    /**
     * Create or update a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the server belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {object} parameters Parameters to create or update the vault
     *
     * @param {string} parameters.location The supported Azure location where the
     * key vault should be created.
     *
     * @param {object} [parameters.tags] The tags that will be assigned to the key
     * vault.
     *
     * @param {object} parameters.properties Properties of the vault
     *
     * @param {uuid} parameters.properties.tenantId The Azure Active Directory
     * tenant ID that should be used for authenticating requests to the key vault.
     *
     * @param {object} parameters.properties.sku SKU details
     *
     * @param {string} parameters.properties.sku.name SKU name to specify whether
     * the key vault is a standard vault or a premium vault. Possible values
     * include: 'standard', 'premium'
     *
     * @param {array} [parameters.properties.accessPolicies] An array of 0 to 16
     * identities that have access to the key vault. All identities in the array
     * must use the same tenant ID as the key vault's tenant ID.
     *
     * @param {string} [parameters.properties.vaultUri] The URI of the vault for
     * performing operations on keys and secrets.
     *
     * @param {boolean} [parameters.properties.enabledForDeployment] Property to
     * specify whether Azure Virtual Machines are permitted to retrieve
     * certificates stored as secrets from the key vault.
     *
     * @param {boolean} [parameters.properties.enabledForDiskEncryption] Property
     * to specify whether Azure Disk Encryption is permitted to retrieve secrets
     * from the vault and unwrap keys.
     *
     * @param {boolean} [parameters.properties.enabledForTemplateDeployment]
     * Property to specify whether Azure Resource Manager is permitted to retrieve
     * secrets from the key vault.
     *
     * @param {boolean} [parameters.properties.enableSoftDelete] Property to
     * specify whether the 'soft delete' functionality is enabled for this key
     * vault. It does not accept false value.
     *
     * @param {string} [parameters.properties.createMode] The vault's create mode
     * to indicate whether the vault need to be recovered or not. Possible values
     * include: 'recover', 'default'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Vault>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, vaultName: string, parameters: models.VaultCreateOrUpdateParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Vault>>;

    /**
     * Create or update a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the server belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {object} parameters Parameters to create or update the vault
     *
     * @param {string} parameters.location The supported Azure location where the
     * key vault should be created.
     *
     * @param {object} [parameters.tags] The tags that will be assigned to the key
     * vault.
     *
     * @param {object} parameters.properties Properties of the vault
     *
     * @param {uuid} parameters.properties.tenantId The Azure Active Directory
     * tenant ID that should be used for authenticating requests to the key vault.
     *
     * @param {object} parameters.properties.sku SKU details
     *
     * @param {string} parameters.properties.sku.name SKU name to specify whether
     * the key vault is a standard vault or a premium vault. Possible values
     * include: 'standard', 'premium'
     *
     * @param {array} [parameters.properties.accessPolicies] An array of 0 to 16
     * identities that have access to the key vault. All identities in the array
     * must use the same tenant ID as the key vault's tenant ID.
     *
     * @param {string} [parameters.properties.vaultUri] The URI of the vault for
     * performing operations on keys and secrets.
     *
     * @param {boolean} [parameters.properties.enabledForDeployment] Property to
     * specify whether Azure Virtual Machines are permitted to retrieve
     * certificates stored as secrets from the key vault.
     *
     * @param {boolean} [parameters.properties.enabledForDiskEncryption] Property
     * to specify whether Azure Disk Encryption is permitted to retrieve secrets
     * from the vault and unwrap keys.
     *
     * @param {boolean} [parameters.properties.enabledForTemplateDeployment]
     * Property to specify whether Azure Resource Manager is permitted to retrieve
     * secrets from the key vault.
     *
     * @param {boolean} [parameters.properties.enableSoftDelete] Property to
     * specify whether the 'soft delete' functionality is enabled for this key
     * vault. It does not accept false value.
     *
     * @param {string} [parameters.properties.createMode] The vault's create mode
     * to indicate whether the vault need to be recovered or not. Possible values
     * include: 'recover', 'default'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Vault} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Vault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Vault} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: models.VaultCreateOrUpdateParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Vault>;
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: models.VaultCreateOrUpdateParameters, callback: ServiceCallback<models.Vault>): void;
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: models.VaultCreateOrUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Vault>): void;


    /**
     * Deletes the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the vault belongs.
     *
     * @param {string} vaultName The name of the vault to delete
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vaultName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the vault belongs.
     *
     * @param {string} vaultName The name of the vault to delete
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, vaultName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, vaultName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, vaultName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Gets the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the vault belongs.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Vault>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, vaultName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Vault>>;

    /**
     * Gets the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the vault belongs.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Vault} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Vault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Vault} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vaultName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Vault>;
    get(resourceGroupName: string, vaultName: string, callback: ServiceCallback<models.Vault>): void;
    get(resourceGroupName: string, vaultName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Vault>): void;


    /**
     * The List operation gets information about the vaults associated with the
     * subscription and within the specified resource group.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the vault belongs.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.top] Maximum number of results to return.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<VaultListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: { top? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VaultListResult>>;

    /**
     * The List operation gets information about the vaults associated with the
     * subscription and within the specified resource group.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which
     * the vault belongs.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.top] Maximum number of results to return.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {VaultListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {VaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link VaultListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string, options?: { top? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.VaultListResult>;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.VaultListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: { top? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VaultListResult>): void;


    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<DeletedVaultListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listDeletedWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedVaultListResult>>;

    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {DeletedVaultListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {DeletedVaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link DeletedVaultListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listDeleted(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedVaultListResult>;
    listDeleted(callback: ServiceCallback<models.DeletedVaultListResult>): void;
    listDeleted(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedVaultListResult>): void;


    /**
     * Gets the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {string} location The location of the deleted vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<DeletedVault>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getDeletedWithHttpOperationResponse(vaultName: string, location: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedVault>>;

    /**
     * Gets the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {string} location The location of the deleted vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {DeletedVault} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {DeletedVault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link DeletedVault} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getDeleted(vaultName: string, location: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedVault>;
    getDeleted(vaultName: string, location: string, callback: ServiceCallback<models.DeletedVault>): void;
    getDeleted(vaultName: string, location: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedVault>): void;


    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key
     * vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    purgeDeletedWithHttpOperationResponse(vaultName: string, location: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key
     * vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    purgeDeleted(vaultName: string, location: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    purgeDeleted(vaultName: string, location: string, callback: ServiceCallback<void>): void;
    purgeDeleted(vaultName: string, location: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * The List operation gets information about the vaults associated with the
     * subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.top] Maximum number of results to return.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ResourceListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { top? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListResult>>;

    /**
     * The List operation gets information about the vaults associated with the
     * subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.top] Maximum number of results to return.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ResourceListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ResourceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ResourceListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { top? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListResult>;
    list(callback: ServiceCallback<models.ResourceListResult>): void;
    list(options: { top? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListResult>): void;


    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key
     * vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginPurgeDeletedWithHttpOperationResponse(vaultName: string, location: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key
     * vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginPurgeDeleted(vaultName: string, location: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginPurgeDeleted(vaultName: string, location: string, callback: ServiceCallback<void>): void;
    beginPurgeDeleted(vaultName: string, location: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * The List operation gets information about the vaults associated with the
     * subscription and within the specified resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<VaultListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VaultListResult>>;

    /**
     * The List operation gets information about the vaults associated with the
     * subscription and within the specified resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {VaultListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {VaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link VaultListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.VaultListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.VaultListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VaultListResult>): void;


    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<DeletedVaultListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listDeletedNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedVaultListResult>>;

    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {DeletedVaultListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {DeletedVaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link DeletedVaultListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listDeletedNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedVaultListResult>;
    listDeletedNext(nextPageLink: string, callback: ServiceCallback<models.DeletedVaultListResult>): void;
    listDeletedNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedVaultListResult>): void;


    /**
     * The List operation gets information about the vaults associated with the
     * subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ResourceListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListResult>>;

    /**
     * The List operation gets information about the vaults associated with the
     * subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ResourceListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ResourceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ResourceListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.ResourceListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListResult>): void;
}
