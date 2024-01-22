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

import { exists, mapValues } from '../runtime'
import type { Artifact } from './Artifact'
import {
  ArtifactFromJSON,
  ArtifactFromJSONTyped,
  ArtifactToJSON,
} from './Artifact'
import type { Pagination } from './Pagination'
import {
  PaginationFromJSON,
  PaginationFromJSONTyped,
  PaginationToJSON,
} from './Pagination'

/**
 *
 * @export
 * @interface TaskArtifactsListResponse
 */
export interface TaskArtifactsListResponse {
  /**
   *
   * @type {Array<Artifact>}
   * @memberof TaskArtifactsListResponse
   */
  artifacts: Array<Artifact>
  /**
   *
   * @type {Pagination}
   * @memberof TaskArtifactsListResponse
   */
  pagination: Pagination
}

/**
 * Check if a given object implements the TaskArtifactsListResponse interface.
 */
export function instanceOfTaskArtifactsListResponse(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'artifacts' in value
  isInstance = isInstance && 'pagination' in value

  return isInstance
}

export function TaskArtifactsListResponseFromJSON(
  json: any
): TaskArtifactsListResponse {
  return TaskArtifactsListResponseFromJSONTyped(json, false)
}

export function TaskArtifactsListResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TaskArtifactsListResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    artifacts: (json['artifacts'] as Array<any>).map(ArtifactFromJSON),
    pagination: PaginationFromJSON(json['pagination']),
  }
}

export function TaskArtifactsListResponseToJSON(
  value?: TaskArtifactsListResponse | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    artifacts: (value.artifacts as Array<any>).map(ArtifactToJSON),
    pagination: PaginationToJSON(value.pagination),
  }
}
