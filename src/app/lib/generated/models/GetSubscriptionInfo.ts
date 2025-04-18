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
import type { BillingPeriod } from './BillingPeriod';
import {
    BillingPeriodFromJSON,
    BillingPeriodFromJSONTyped,
    BillingPeriodToJSON,
    BillingPeriodToJSONTyped,
} from './BillingPeriod';

/**
 * 
 * @export
 * @interface GetSubscriptionInfo
 */
export interface GetSubscriptionInfo {
    /**
     * 
     * @type {string}
     * @memberof GetSubscriptionInfo
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubscriptionInfo
     */
    redirectUrl: string;
    /**
     * 
     * @type {number}
     * @memberof GetSubscriptionInfo
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof GetSubscriptionInfo
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof GetSubscriptionInfo
     */
    renewalDate: string;
    /**
     * 
     * @type {number}
     * @memberof GetSubscriptionInfo
     */
    remainingTokens: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetSubscriptionInfo
     */
    canceled: boolean;
    /**
     * 
     * @type {BillingPeriod}
     * @memberof GetSubscriptionInfo
     */
    billingPeriod: BillingPeriod | null;
}



/**
 * Check if a given object implements the GetSubscriptionInfo interface.
 */
export function instanceOfGetSubscriptionInfo(value: object): value is GetSubscriptionInfo {
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('redirectUrl' in value) || value['redirectUrl'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('renewalDate' in value) || value['renewalDate'] === undefined) return false;
    if (!('remainingTokens' in value) || value['remainingTokens'] === undefined) return false;
    if (!('canceled' in value) || value['canceled'] === undefined) return false;
    if (!('billingPeriod' in value) || value['billingPeriod'] === undefined) return false;
    return true;
}

export function GetSubscriptionInfoFromJSON(json: any): GetSubscriptionInfo {
    return GetSubscriptionInfoFromJSONTyped(json, false);
}

export function GetSubscriptionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSubscriptionInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'displayName': json['display_name'],
        'redirectUrl': json['redirect_url'],
        'price': json['price'],
        'currency': json['currency'],
        'renewalDate': json['renewal_date'],
        'remainingTokens': json['remaining_tokens'],
        'canceled': json['canceled'],
        'billingPeriod': BillingPeriodFromJSON(json['billing_period']),
    };
}

export function GetSubscriptionInfoToJSON(json: any): GetSubscriptionInfo {
    return GetSubscriptionInfoToJSONTyped(json, false);
}

export function GetSubscriptionInfoToJSONTyped(value?: GetSubscriptionInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'display_name': value['displayName'],
        'redirect_url': value['redirectUrl'],
        'price': value['price'],
        'currency': value['currency'],
        'renewal_date': value['renewalDate'],
        'remaining_tokens': value['remainingTokens'],
        'canceled': value['canceled'],
        'billing_period': BillingPeriodToJSON(value['billingPeriod']),
    };
}

