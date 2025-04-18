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
import type { LikedPostImage } from './LikedPostImage';
import {
    LikedPostImageFromJSON,
    LikedPostImageFromJSONTyped,
    LikedPostImageToJSON,
    LikedPostImageToJSONTyped,
} from './LikedPostImage';
import type { GeneratedImages } from './GeneratedImages';
import {
    GeneratedImagesFromJSON,
    GeneratedImagesFromJSONTyped,
    GeneratedImagesToJSON,
    GeneratedImagesToJSONTyped,
} from './GeneratedImages';

/**
 * 
 * @export
 * @interface GetGalleryResponse
 */
export interface GetGalleryResponse {
    /**
     * 
     * @type {Array<LikedPostImage>}
     * @memberof GetGalleryResponse
     */
    liked: Array<LikedPostImage>;
    /**
     * 
     * @type {Array<GeneratedImages>}
     * @memberof GetGalleryResponse
     */
    generated: Array<GeneratedImages>;
}

/**
 * Check if a given object implements the GetGalleryResponse interface.
 */
export function instanceOfGetGalleryResponse(value: object): value is GetGalleryResponse {
    if (!('liked' in value) || value['liked'] === undefined) return false;
    if (!('generated' in value) || value['generated'] === undefined) return false;
    return true;
}

export function GetGalleryResponseFromJSON(json: any): GetGalleryResponse {
    return GetGalleryResponseFromJSONTyped(json, false);
}

export function GetGalleryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetGalleryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'liked': ((json['liked'] as Array<any>).map(LikedPostImageFromJSON)),
        'generated': ((json['generated'] as Array<any>).map(GeneratedImagesFromJSON)),
    };
}

export function GetGalleryResponseToJSON(json: any): GetGalleryResponse {
    return GetGalleryResponseToJSONTyped(json, false);
}

export function GetGalleryResponseToJSONTyped(value?: GetGalleryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'liked': ((value['liked'] as Array<any>).map(LikedPostImageToJSON)),
        'generated': ((value['generated'] as Array<any>).map(GeneratedImagesToJSON)),
    };
}

