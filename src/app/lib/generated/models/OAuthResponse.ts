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
 * @interface OAuthResponse
 */
export interface OAuthResponse {
    /**
     * The redirect URL for the OAuth
     * @type {string}
     * @memberof OAuthResponse
     */
    redirectUrl: string;
}

/**
 * Check if a given object implements the OAuthResponse interface.
 */
export function instanceOfOAuthResponse(value: object): value is OAuthResponse {
    if (!('redirectUrl' in value) || value['redirectUrl'] === undefined) return false;
    return true;
}

export function OAuthResponseFromJSON(json: any): OAuthResponse {
    return OAuthResponseFromJSONTyped(json, false);
}

export function OAuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'redirectUrl': json['redirect_url'],
    };
}

export function OAuthResponseToJSON(json: any): OAuthResponse {
    return OAuthResponseToJSONTyped(json, false);
}

export function OAuthResponseToJSONTyped(value?: OAuthResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'redirect_url': value['redirectUrl'],
    };
}

