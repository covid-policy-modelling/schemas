import * as input from './model-input'
import * as output from './model-output'

export { input, output }

/**
 * @title Request Input
 */
export interface RequestInput {
  id: string | number
  models: Model[]
  configuration: input.ModelInput
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
