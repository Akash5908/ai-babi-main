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
 * @interface UserPreferences
 */
export interface UserPreferences {
    /**
     * 
     * @type {boolean}
     * @memberof UserPreferences
     */
    displayGirls?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPreferences
     */
    displayAnime?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPreferences
     */
    displayUnlockWarning?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserPreferences
     */
    usernameUpdated?: boolean | null;
}

/**
 * Check if a given object implements the UserPreferences interface.
 */
export function instanceOfUserPreferences(value: object): value is UserPreferences {
    return true;
}

export function UserPreferencesFromJSON(json: any): UserPreferences {
    return UserPreferencesFromJSONTyped(json, false);
}

export function UserPreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPreferences {
    if (json == null) {
        return json;
    }
    return {
        
        'displayGirls': json['display_girls'] == null ? undefined : json['display_girls'],
        'displayAnime': json['display_anime'] == null ? undefined : json['display_anime'],
        'displayUnlockWarning': json['display_unlock_warning'] == null ? undefined : json['display_unlock_warning'],
        'usernameUpdated': json['username_updated'] == null ? undefined : json['username_updated'],
    };
}

export function UserPreferencesToJSON(json: any): UserPreferences {
    return UserPreferencesToJSONTyped(json, false);
}

export function UserPreferencesToJSONTyped(value?: UserPreferences | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'display_girls': value['displayGirls'],
        'display_anime': value['displayAnime'],
        'display_unlock_warning': value['displayUnlockWarning'],
        'username_updated': value['usernameUpdated'],
    };
}

