import { ModelInput } from './input'
import { CommonModelOutput } from './output-common'
import { MinimalModelOutput } from './output-minimal'
import { MicroMoBBHRMOutput } from './output-MicroMoB'

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

export interface Metrics {
  [key: string]: number[]
}

export interface StructuredModelOutput {
  metadata: ModelInput
  model: ModelDescription
  time: {
    /**
     * An ISO-8601 string encoding the date that each timeseries begins.
     */
    t0: string

    /**
     * The timestamps that correspond to every series of metrics.
     * Each value is a number of days after `t0`.
     */
    timestamps: number[]

    /**
     * The minimum and maximum timestamps for the series of reported metrics.
     * Each value is a number of days after `t0`.
     */
    extent: [number, number]
  }

  aggregate: {
    metrics: Metrics
  }
}

/**
 * @title Model Output
 */
export type ModelOutput =
  | CommonModelOutput
  | MinimalModelOutput
  | MicroMoBBHRMOutput
