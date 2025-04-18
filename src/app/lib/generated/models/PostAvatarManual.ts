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
 * @interface PostAvatarManual
 */
export interface PostAvatarManual {
    /**
     * 
     * @type {string}
     * @memberof PostAvatarManual
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PostAvatarManual
     */
    seed: number;
    /**
     * 
     * @type {string}
     * @memberof PostAvatarManual
     */
    positivePrompt: string;
    /**
     * 
     * @type {string}
     * @memberof PostAvatarManual
     */
    baseModel: string;
    /**
     * 
     * @type {string}
     * @memberof PostAvatarManual
     */
    negativePrompt?: string | null;
}

/**
 * Check if a given object implements the PostAvatarManual interface.
 */
export function instanceOfPostAvatarManual(value: object): value is PostAvatarManual {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('seed' in value) || value['seed'] === undefined) return false;
    if (!('positivePrompt' in value) || value['positivePrompt'] === undefined) return false;
    if (!('baseModel' in value) || value['baseModel'] === undefined) return false;
    return true;
}

export function PostAvatarManualFromJSON(json: any): PostAvatarManual {
    return PostAvatarManualFromJSONTyped(json, false);
}

export function PostAvatarManualFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAvatarManual {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'seed': json['seed'],
        'positivePrompt': json['positive_prompt'],
        'baseModel': json['base_model'],
        'negativePrompt': json['negative_prompt'] == null ? undefined : json['negative_prompt'],
    };
}

export function PostAvatarManualToJSON(json: any): PostAvatarManual {
    return PostAvatarManualToJSONTyped(json, false);
}

export function PostAvatarManualToJSONTyped(value?: PostAvatarManual | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'seed': value['seed'],
        'positive_prompt': value['positivePrompt'],
        'base_model': value['baseModel'],
        'negative_prompt': value['negativePrompt'],
    };
}

