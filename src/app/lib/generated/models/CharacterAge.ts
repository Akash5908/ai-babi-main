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
 * The new character age of the chatbot
 * @export
 * @interface CharacterAge
 */
export interface CharacterAge {
}

/**
 * Check if a given object implements the CharacterAge interface.
 */
export function instanceOfCharacterAge(value: object): value is CharacterAge {
    return true;
}

export function CharacterAgeFromJSON(json: any): CharacterAge {
    return CharacterAgeFromJSONTyped(json, false);
}

export function CharacterAgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterAge {
    return json;
}

export function CharacterAgeToJSON(json: any): CharacterAge {
    return CharacterAgeToJSONTyped(json, false);
}

export function CharacterAgeToJSONTyped(value?: CharacterAge | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

