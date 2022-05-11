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
