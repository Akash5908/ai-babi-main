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
import type { UserPreferences } from './UserPreferences';
import {
    UserPreferencesFromJSON,
    UserPreferencesFromJSONTyped,
    UserPreferencesToJSON,
    UserPreferencesToJSONTyped,
} from './UserPreferences';

/**
 * 
 * @export
 * @interface PatchUserRequest
 */
export interface PatchUserRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchUserRequest
     */
    username?: string | null;
    /**
     * 
     * @type {UserPreferences}
     * @memberof PatchUserRequest
     */
    preferences?: UserPreferences | null;
}

/**
 * Check if a given object implements the PatchUserRequest interface.
 */
export function instanceOfPatchUserRequest(value: object): value is PatchUserRequest {
    return true;
}

export function PatchUserRequestFromJSON(json: any): PatchUserRequest {
    return PatchUserRequestFromJSONTyped(json, false);
}

export function PatchUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchUserRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'] == null ? undefined : json['username'],
        'preferences': json['preferences'] == null ? undefined : UserPreferencesFromJSON(json['preferences']),
    };
}

export function PatchUserRequestToJSON(json: any): PatchUserRequest {
    return PatchUserRequestToJSONTyped(json, false);
}

export function PatchUserRequestToJSONTyped(value?: PatchUserRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'username': value['username'],
        'preferences': UserPreferencesToJSON(value['preferences']),
    };
}

