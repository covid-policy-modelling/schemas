import { CommonModelOutput } from './output-common'
import { MinimalModelOutput } from './output-minimal'

/**
 * @title Model Description
 */
export interface ModelDescription {
  /**
   * A short display name to identify the model
   */
  name: string
  /**
   * A version number identifying the version of the model used in this run.
   */
  modelVersion: string
  /**
   * A version number identifying the version of the connector used in this run.
   * This may be the same as modelVersion if development of the two is closely-linked.
   */
  connectorVersion: string
}

/**
 * @title Model Output
 */
export type ModelOutput = CommonModelOutput | MinimalModelOutput
