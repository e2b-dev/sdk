/* tslint:disable */
/* eslint-disable */
/**
 * Agent Protocol
 * Specification of the API protocol for communication with an agent.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Total number of items.
     * @type {number}
     * @memberof Pagination
     */
    totalItems: number;
    /**
     * Total number of pages.
     * @type {number}
     * @memberof Pagination
     */
    totalPages: number;
    /**
     * Current_page page number.
     * @type {number}
     * @memberof Pagination
     */
    currentPage: number;
    /**
     * Number of items per page.
     * @type {number}
     * @memberof Pagination
     */
    pageSize: number;
}

/**
 * Check if a given object implements the Pagination interface.
 */
export function instanceOfPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalItems" in value;
    isInstance = isInstance && "totalPages" in value;
    isInstance = isInstance && "currentPage" in value;
    isInstance = isInstance && "pageSize" in value;

    return isInstance;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalItems': json['total_items'],
        'totalPages': json['total_pages'],
        'currentPage': json['current_page'],
        'pageSize': json['page_size'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total_items': value.totalItems,
        'total_pages': value.totalPages,
        'current_page': value.currentPage,
        'page_size': value.pageSize,
    };
}

