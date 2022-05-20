import { ModelInput } from './input'

/**
 * @title Request Input
 */
export interface RequestInput {
  /**
   * used to allow callbacks to identify a particular request
   */
  id: string | number
  models: Model[]
  configuration: ModelInput
  /**
   * URL (e.g. of the web interface) which will be notified as the simulation status changes
   */

  callbackURL: string | null
}

export type CompressedRequestInput = RequestInput & {
  configuration?: ModelInput
  /**
   * Compressed representation of the configuration.
   * It should be stringified, gzipped, then base64 encoded.
   * @contentEncoding base64
   * @contentMediaType application/gzip
   */
  configurationCompressed?: string
}

/**
 * @title Run Status
 */
export enum RunStatus {
  Pending = 'pending',
  InProgress = 'in-progress',
  Complete = 'complete',
  Unsupported = 'unsupported',
  Failed = 'failed',
}

/**
 * @title Run Output
 */
export interface RunOutput {
  modelSlug: string
  status: RunStatus
  resultsLocation: string
  exportLocation: string
  workflowRunID?: string
}

/**
 * @title Model
 */
export interface Model {
  slug: string
  imageURL: string
}
