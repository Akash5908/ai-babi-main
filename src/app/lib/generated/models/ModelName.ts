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
export const ModelName = {
    LustifySdxlnsfwV40Alpha: 'lustifySDXLNSFW_v40Alpha',
    PrefectPonyXlV40: 'prefectPonyXL_v40',
    BigLustV15: 'bigLust_v15',
    LustifySdxlnsfwEndgame: 'lustifySDXLNSFW_endgame',
    LustifySdxlnsfwEndgameDmd2: 'lustifySDXLNSFW_endgameDMD2',
    WildcardxXlponyWildcardxXlponyv1: 'wildcardxXLPONY_wildcardxXLPONYV1'
} as const;
export type ModelName = typeof ModelName[keyof typeof ModelName];


export function instanceOfModelName(value: any): boolean {
    for (const key in ModelName) {
        if (Object.prototype.hasOwnProperty.call(ModelName, key)) {
            if (ModelName[key as keyof typeof ModelName] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ModelNameFromJSON(json: any): ModelName {
    return ModelNameFromJSONTyped(json, false);
}

export function ModelNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelName {
    return json as ModelName;
}

export function ModelNameToJSON(value?: ModelName | null): any {
    return value as any;
}

export function ModelNameToJSONTyped(value: any, ignoreDiscriminator: boolean): ModelName {
    return value as ModelName;
}

