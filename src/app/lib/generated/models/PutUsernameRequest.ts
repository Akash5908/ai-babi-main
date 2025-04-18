/* tslint:disable */
/* eslint-disable */
/**
 * AI Babe Public API
 * Lorem ipsum
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PutUsernameRequest
 */
export interface PutUsernameRequest {
    /**
     * 
     * @type {string}
     * @memberof PutUsernameRequest
     */
    username: string;
}

/**
 * Check if a given object implements the PutUsernameRequest interface.
 */
export function instanceOfPutUsernameRequest(value: object): value is PutUsernameRequest {
    if (!('username' in value) || value['username'] === undefined) return false;
    return true;
}

export function PutUsernameRequestFromJSON(json: any): PutUsernameRequest {
    return PutUsernameRequestFromJSONTyped(json, false);
}

export function PutUsernameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutUsernameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'],
    };
}

export function PutUsernameRequestToJSON(json: any): PutUsernameRequest {
    return PutUsernameRequestToJSONTyped(json, false);
}

export function PutUsernameRequestToJSONTyped(value?: PutUsernameRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'username': value['username'],
    };
}

