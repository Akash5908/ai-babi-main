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


/**
 * 
 * @export
 */
export const ImageGenerationQuality = {
    Low: 'low',
    High: 'high'
} as const;
export type ImageGenerationQuality = typeof ImageGenerationQuality[keyof typeof ImageGenerationQuality];


export function instanceOfImageGenerationQuality(value: any): boolean {
    for (const key in ImageGenerationQuality) {
        if (Object.prototype.hasOwnProperty.call(ImageGenerationQuality, key)) {
            if (ImageGenerationQuality[key as keyof typeof ImageGenerationQuality] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ImageGenerationQualityFromJSON(json: any): ImageGenerationQuality {
    return ImageGenerationQualityFromJSONTyped(json, false);
}

export function ImageGenerationQualityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageGenerationQuality {
    return json as ImageGenerationQuality;
}

export function ImageGenerationQualityToJSON(value?: ImageGenerationQuality | null): any {
    return value as any;
}

export function ImageGenerationQualityToJSONTyped(value: any, ignoreDiscriminator: boolean): ImageGenerationQuality {
    return value as ImageGenerationQuality;
}

