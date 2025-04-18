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


import * as runtime from '../runtime';
import type {
  CharacterAge,
  ChatbotType,
  ContentType,
  GetChatbotListResponse,
  GetChatbotResponse,
  GetCustomChatbotListResponse,
  GetCustomChatbotResponse,
  GetGenerationTagsResponse,
  HTTPValidationError,
  PatchCustomChatbotRequest,
  PostChatbotResponse,
  PostCustomChatBotPayload,
  PostCustomChatbotResponse,
  Type,
  UnlockChatbotRequest,
  UnlockChatbotResponse,
} from '../models/index';
import {
    CharacterAgeFromJSON,
    CharacterAgeToJSON,
    ChatbotTypeFromJSON,
    ChatbotTypeToJSON,
    ContentTypeFromJSON,
    ContentTypeToJSON,
    GetChatbotListResponseFromJSON,
    GetChatbotListResponseToJSON,
    GetChatbotResponseFromJSON,
    GetChatbotResponseToJSON,
    GetCustomChatbotListResponseFromJSON,
    GetCustomChatbotListResponseToJSON,
    GetCustomChatbotResponseFromJSON,
    GetCustomChatbotResponseToJSON,
    GetGenerationTagsResponseFromJSON,
    GetGenerationTagsResponseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PatchCustomChatbotRequestFromJSON,
    PatchCustomChatbotRequestToJSON,
    PostChatbotResponseFromJSON,
    PostChatbotResponseToJSON,
    PostCustomChatBotPayloadFromJSON,
    PostCustomChatBotPayloadToJSON,
    PostCustomChatbotResponseFromJSON,
    PostCustomChatbotResponseToJSON,
    TypeFromJSON,
    TypeToJSON,
    UnlockChatbotRequestFromJSON,
    UnlockChatbotRequestToJSON,
    UnlockChatbotResponseFromJSON,
    UnlockChatbotResponseToJSON,
} from '../models/index';

export interface AttachmentChatbotChatbotIdAttachmentGetRequest {
    chatbotId: string;
    imageName: string;
    contentType?: ContentType | null;
}

export interface CreateChatbotChatbotPostRequest {
    displayName: string;
    systemPrompt: string;
    greetingsText: string;
    greetingsImage: Blob;
    profilePicture: Blob;
    bio: string;
    type: ChatbotType;
    characterAge: number;
    avatarName: string;
    profileVideo?: Blob | null;
}

export interface CreateCustomChatbotChatbotCustomPostRequest {
    postCustomChatBotPayload: PostCustomChatBotPayload;
}

export interface DeleteCustomChatbotChatbotCustomChatbotIdDeleteRequest {
    chatbotId: string;
}

export interface GenerationTagsChatbotChatbotIdTagsGetRequest {
    chatbotId: string;
    imageName: string;
}

export interface GetChatbotChatbotIdGetRequest {
    chatbotId: string;
}

export interface GetCustomChatbotChatbotCustomChatbotIdGetRequest {
    chatbotId: string;
}

export interface PatchChatbotChatbotIdPutRequest {
    chatbotId: string;
    displayName?: string | null;
    type?: Type | null;
    greetingsMessage?: string | null;
    greetingsImage?: Blob | null;
    profilePicture?: Blob | null;
    profileVideo?: Blob | null;
    fullBio?: string | null;
    systemPrompt?: string | null;
    characterAge?: CharacterAge | null;
}

export interface SystemPromptChatbotChatbotIdPromptGetRequest {
    chatbotId: string;
}

export interface UnlockChatbotChatbotIdUnlockPutRequest {
    chatbotId: string;
    unlockChatbotRequest: UnlockChatbotRequest;
}

export interface UpdateCustomChatbotChatbotCustomChatbotIdPatchRequest {
    chatbotId: string;
    patchCustomChatbotRequest: PatchCustomChatbotRequest;
}

export interface UpdateProfileImageChatbotChatbotIdProfileImagePutRequest {
    chatbotId: string;
    profilePicture: Blob;
}

export interface UpdateProfileVideoChatbotChatbotIdProfileVideoPutRequest {
    chatbotId: string;
    profileVideo: Blob;
}

export interface UpdateSystemPromptChatbotChatbotIdPromptPatchRequest {
    chatbotId: string;
    systemPrompt: string;
}

/**
 * 
 */
export class ChatbotApi extends runtime.BaseAPI {

    /**
     * Attachment
     */
    async attachmentChatbotChatbotIdAttachmentGetRaw(requestParameters: AttachmentChatbotChatbotIdAttachmentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling attachmentChatbotChatbotIdAttachmentGet().'
            );
        }

        if (requestParameters['imageName'] == null) {
            throw new runtime.RequiredError(
                'imageName',
                'Required parameter "imageName" was null or undefined when calling attachmentChatbotChatbotIdAttachmentGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['imageName'] != null) {
            queryParameters['image_name'] = requestParameters['imageName'];
        }

        if (requestParameters['contentType'] != null) {
            queryParameters['content_type'] = requestParameters['contentType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/attachment`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Attachment
     */
    async attachmentChatbotChatbotIdAttachmentGet(requestParameters: AttachmentChatbotChatbotIdAttachmentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.attachmentChatbotChatbotIdAttachmentGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Chatbot
     */
    async createChatbotChatbotPostRaw(requestParameters: CreateChatbotChatbotPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostChatbotResponse>> {
        if (requestParameters['displayName'] == null) {
            throw new runtime.RequiredError(
                'displayName',
                'Required parameter "displayName" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['systemPrompt'] == null) {
            throw new runtime.RequiredError(
                'systemPrompt',
                'Required parameter "systemPrompt" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['greetingsText'] == null) {
            throw new runtime.RequiredError(
                'greetingsText',
                'Required parameter "greetingsText" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['greetingsImage'] == null) {
            throw new runtime.RequiredError(
                'greetingsImage',
                'Required parameter "greetingsImage" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['profilePicture'] == null) {
            throw new runtime.RequiredError(
                'profilePicture',
                'Required parameter "profilePicture" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['bio'] == null) {
            throw new runtime.RequiredError(
                'bio',
                'Required parameter "bio" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['characterAge'] == null) {
            throw new runtime.RequiredError(
                'characterAge',
                'Required parameter "characterAge" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        if (requestParameters['avatarName'] == null) {
            throw new runtime.RequiredError(
                'avatarName',
                'Required parameter "avatarName" was null or undefined when calling createChatbotChatbotPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['displayName'] != null) {
            formParams.append('display_name', requestParameters['displayName'] as any);
        }

        if (requestParameters['systemPrompt'] != null) {
            formParams.append('system_prompt', requestParameters['systemPrompt'] as any);
        }

        if (requestParameters['greetingsText'] != null) {
            formParams.append('greetings_text', requestParameters['greetingsText'] as any);
        }

        if (requestParameters['greetingsImage'] != null) {
            formParams.append('greetings_image', requestParameters['greetingsImage'] as any);
        }

        if (requestParameters['profilePicture'] != null) {
            formParams.append('profile_picture', requestParameters['profilePicture'] as any);
        }

        if (requestParameters['profileVideo'] != null) {
            formParams.append('profile_video', requestParameters['profileVideo'] as any);
        }

        if (requestParameters['bio'] != null) {
            formParams.append('bio', requestParameters['bio'] as any);
        }

        if (requestParameters['type'] != null) {
            formParams.append('type', requestParameters['type'] as any);
        }

        if (requestParameters['characterAge'] != null) {
            formParams.append('character_age', requestParameters['characterAge'] as any);
        }

        if (requestParameters['avatarName'] != null) {
            formParams.append('avatar_name', requestParameters['avatarName'] as any);
        }

        const response = await this.request({
            path: `/chatbot/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostChatbotResponseFromJSON(jsonValue));
    }

    /**
     * Create Chatbot
     */
    async createChatbotChatbotPost(requestParameters: CreateChatbotChatbotPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostChatbotResponse> {
        const response = await this.createChatbotChatbotPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Custom Chatbot
     */
    async createCustomChatbotChatbotCustomPostRaw(requestParameters: CreateCustomChatbotChatbotCustomPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostCustomChatbotResponse>> {
        if (requestParameters['postCustomChatBotPayload'] == null) {
            throw new runtime.RequiredError(
                'postCustomChatBotPayload',
                'Required parameter "postCustomChatBotPayload" was null or undefined when calling createCustomChatbotChatbotCustomPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/chatbot/custom`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCustomChatBotPayloadToJSON(requestParameters['postCustomChatBotPayload']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostCustomChatbotResponseFromJSON(jsonValue));
    }

    /**
     * Create Custom Chatbot
     */
    async createCustomChatbotChatbotCustomPost(requestParameters: CreateCustomChatbotChatbotCustomPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostCustomChatbotResponse> {
        const response = await this.createCustomChatbotChatbotCustomPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Custom Chatbot
     */
    async deleteCustomChatbotChatbotCustomChatbotIdDeleteRaw(requestParameters: DeleteCustomChatbotChatbotCustomChatbotIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling deleteCustomChatbotChatbotCustomChatbotIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/custom/{chatbot_id}`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete Custom Chatbot
     */
    async deleteCustomChatbotChatbotCustomChatbotIdDelete(requestParameters: DeleteCustomChatbotChatbotCustomChatbotIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteCustomChatbotChatbotCustomChatbotIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generation Tags
     */
    async generationTagsChatbotChatbotIdTagsGetRaw(requestParameters: GenerationTagsChatbotChatbotIdTagsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetGenerationTagsResponse>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling generationTagsChatbotChatbotIdTagsGet().'
            );
        }

        if (requestParameters['imageName'] == null) {
            throw new runtime.RequiredError(
                'imageName',
                'Required parameter "imageName" was null or undefined when calling generationTagsChatbotChatbotIdTagsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['imageName'] != null) {
            queryParameters['image_name'] = requestParameters['imageName'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/tags`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetGenerationTagsResponseFromJSON(jsonValue));
    }

    /**
     * Generation Tags
     */
    async generationTagsChatbotChatbotIdTagsGet(requestParameters: GenerationTagsChatbotChatbotIdTagsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetGenerationTagsResponse> {
        const response = await this.generationTagsChatbotChatbotIdTagsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get
     */
    async getChatbotChatbotIdGetRaw(requestParameters: GetChatbotChatbotIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChatbotResponse>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling getChatbotChatbotIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/{chatbot_id}`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetChatbotResponseFromJSON(jsonValue));
    }

    /**
     * Get
     */
    async getChatbotChatbotIdGet(requestParameters: GetChatbotChatbotIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChatbotResponse> {
        const response = await this.getChatbotChatbotIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Custom Chatbot
     */
    async getCustomChatbotChatbotCustomChatbotIdGetRaw(requestParameters: GetCustomChatbotChatbotCustomChatbotIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCustomChatbotResponse>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling getCustomChatbotChatbotCustomChatbotIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/custom/{chatbot_id}`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCustomChatbotResponseFromJSON(jsonValue));
    }

    /**
     * Get Custom Chatbot
     */
    async getCustomChatbotChatbotCustomChatbotIdGet(requestParameters: GetCustomChatbotChatbotCustomChatbotIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCustomChatbotResponse> {
        const response = await this.getCustomChatbotChatbotCustomChatbotIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List
     */
    async listChatbotGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChatbotListResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetChatbotListResponseFromJSON(jsonValue));
    }

    /**
     * List
     */
    async listChatbotGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChatbotListResponse> {
        const response = await this.listChatbotGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * List Custom Chatbot
     */
    async listCustomChatbotChatbotCustomGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCustomChatbotListResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/custom/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCustomChatbotListResponseFromJSON(jsonValue));
    }

    /**
     * List Custom Chatbot
     */
    async listCustomChatbotChatbotCustomGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCustomChatbotListResponse> {
        const response = await this.listCustomChatbotChatbotCustomGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Patch
     */
    async patchChatbotChatbotIdPutRaw(requestParameters: PatchChatbotChatbotIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling patchChatbotChatbotIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['displayName'] != null) {
            formParams.append('display_name', requestParameters['displayName'] as any);
        }

        if (requestParameters['type'] != null) {
            formParams.append('type', new Blob([JSON.stringify(TypeToJSON(requestParameters['type']))], { type: "application/json", }));
                    }

        if (requestParameters['greetingsMessage'] != null) {
            formParams.append('greetings_message', requestParameters['greetingsMessage'] as any);
        }

        if (requestParameters['greetingsImage'] != null) {
            formParams.append('greetings_image', requestParameters['greetingsImage'] as any);
        }

        if (requestParameters['profilePicture'] != null) {
            formParams.append('profile_picture', requestParameters['profilePicture'] as any);
        }

        if (requestParameters['profileVideo'] != null) {
            formParams.append('profile_video', requestParameters['profileVideo'] as any);
        }

        if (requestParameters['fullBio'] != null) {
            formParams.append('full_bio', requestParameters['fullBio'] as any);
        }

        if (requestParameters['systemPrompt'] != null) {
            formParams.append('system_prompt', requestParameters['systemPrompt'] as any);
        }

        if (requestParameters['characterAge'] != null) {
            formParams.append('character_age', new Blob([JSON.stringify(CharacterAgeToJSON(requestParameters['characterAge']))], { type: "application/json", }));
                    }

        const response = await this.request({
            path: `/chatbot/{chatbot_id}`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Patch
     */
    async patchChatbotChatbotIdPut(requestParameters: PatchChatbotChatbotIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.patchChatbotChatbotIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * System Prompt
     */
    async systemPromptChatbotChatbotIdPromptGetRaw(requestParameters: SystemPromptChatbotChatbotIdPromptGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling systemPromptChatbotChatbotIdPromptGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/prompt`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * System Prompt
     */
    async systemPromptChatbotChatbotIdPromptGet(requestParameters: SystemPromptChatbotChatbotIdPromptGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.systemPromptChatbotChatbotIdPromptGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unlock
     */
    async unlockChatbotChatbotIdUnlockPutRaw(requestParameters: UnlockChatbotChatbotIdUnlockPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnlockChatbotResponse>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling unlockChatbotChatbotIdUnlockPut().'
            );
        }

        if (requestParameters['unlockChatbotRequest'] == null) {
            throw new runtime.RequiredError(
                'unlockChatbotRequest',
                'Required parameter "unlockChatbotRequest" was null or undefined when calling unlockChatbotChatbotIdUnlockPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/unlock`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UnlockChatbotRequestToJSON(requestParameters['unlockChatbotRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnlockChatbotResponseFromJSON(jsonValue));
    }

    /**
     * Unlock
     */
    async unlockChatbotChatbotIdUnlockPut(requestParameters: UnlockChatbotChatbotIdUnlockPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnlockChatbotResponse> {
        const response = await this.unlockChatbotChatbotIdUnlockPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Custom Chatbot
     */
    async updateCustomChatbotChatbotCustomChatbotIdPatchRaw(requestParameters: UpdateCustomChatbotChatbotCustomChatbotIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling updateCustomChatbotChatbotCustomChatbotIdPatch().'
            );
        }

        if (requestParameters['patchCustomChatbotRequest'] == null) {
            throw new runtime.RequiredError(
                'patchCustomChatbotRequest',
                'Required parameter "patchCustomChatbotRequest" was null or undefined when calling updateCustomChatbotChatbotCustomChatbotIdPatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/chatbot/custom/{chatbot_id}`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchCustomChatbotRequestToJSON(requestParameters['patchCustomChatbotRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update Custom Chatbot
     */
    async updateCustomChatbotChatbotCustomChatbotIdPatch(requestParameters: UpdateCustomChatbotChatbotCustomChatbotIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateCustomChatbotChatbotCustomChatbotIdPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Profile Image
     */
    async updateProfileImageChatbotChatbotIdProfileImagePutRaw(requestParameters: UpdateProfileImageChatbotChatbotIdProfileImagePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling updateProfileImageChatbotChatbotIdProfileImagePut().'
            );
        }

        if (requestParameters['profilePicture'] == null) {
            throw new runtime.RequiredError(
                'profilePicture',
                'Required parameter "profilePicture" was null or undefined when calling updateProfileImageChatbotChatbotIdProfileImagePut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['profilePicture'] != null) {
            formParams.append('profile_picture', requestParameters['profilePicture'] as any);
        }

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/profile-image`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update Profile Image
     */
    async updateProfileImageChatbotChatbotIdProfileImagePut(requestParameters: UpdateProfileImageChatbotChatbotIdProfileImagePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateProfileImageChatbotChatbotIdProfileImagePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Profile Video
     */
    async updateProfileVideoChatbotChatbotIdProfileVideoPutRaw(requestParameters: UpdateProfileVideoChatbotChatbotIdProfileVideoPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling updateProfileVideoChatbotChatbotIdProfileVideoPut().'
            );
        }

        if (requestParameters['profileVideo'] == null) {
            throw new runtime.RequiredError(
                'profileVideo',
                'Required parameter "profileVideo" was null or undefined when calling updateProfileVideoChatbotChatbotIdProfileVideoPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['profileVideo'] != null) {
            formParams.append('profile_video', requestParameters['profileVideo'] as any);
        }

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/profile-video`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update Profile Video
     */
    async updateProfileVideoChatbotChatbotIdProfileVideoPut(requestParameters: UpdateProfileVideoChatbotChatbotIdProfileVideoPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateProfileVideoChatbotChatbotIdProfileVideoPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update System Prompt
     */
    async updateSystemPromptChatbotChatbotIdPromptPatchRaw(requestParameters: UpdateSystemPromptChatbotChatbotIdPromptPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['chatbotId'] == null) {
            throw new runtime.RequiredError(
                'chatbotId',
                'Required parameter "chatbotId" was null or undefined when calling updateSystemPromptChatbotChatbotIdPromptPatch().'
            );
        }

        if (requestParameters['systemPrompt'] == null) {
            throw new runtime.RequiredError(
                'systemPrompt',
                'Required parameter "systemPrompt" was null or undefined when calling updateSystemPromptChatbotChatbotIdPromptPatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['systemPrompt'] != null) {
            formParams.append('system_prompt', requestParameters['systemPrompt'] as any);
        }

        const response = await this.request({
            path: `/chatbot/{chatbot_id}/prompt`.replace(`{${"chatbot_id"}}`, encodeURIComponent(String(requestParameters['chatbotId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update System Prompt
     */
    async updateSystemPromptChatbotChatbotIdPromptPatch(requestParameters: UpdateSystemPromptChatbotChatbotIdPromptPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateSystemPromptChatbotChatbotIdPromptPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
