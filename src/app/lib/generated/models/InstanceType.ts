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
export const InstanceType = {
    Automatic1111: 'automatic1111',
    Tgi: 'tgi',
    Comfy: 'comfy'
} as const;
export type InstanceType = typeof InstanceType[keyof typeof InstanceType];


export function instanceOfInstanceType(value: any): boolean {
    for (const key in InstanceType) {
        if (Object.prototype.hasOwnProperty.call(InstanceType, key)) {
            if (InstanceType[key as keyof typeof InstanceType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function InstanceTypeFromJSON(json: any): InstanceType {
    return InstanceTypeFromJSONTyped(json, false);
}

export function InstanceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstanceType {
    return json as InstanceType;
}

export function InstanceTypeToJSON(value?: InstanceType | null): any {
    return value as any;
}

export function InstanceTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): InstanceType {
    return value as InstanceType;
}

