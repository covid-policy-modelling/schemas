import { CommonModelInput, MinimalModelInput } from './model-input'

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
 * @title Common Model Output
 */
export interface CommonModelOutput {
  metadata: CommonModelInput
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
    metrics: SeverityMetrics
  }
}

/**
 * @title Minimal Model Output
 */
export interface MinimalModelOutput {
  metadata: MinimalModelInput
  model: ModelDescription
  /**
   * a vector of times at which the model is run
   */
  t: number[]
  /**
   * a matrix of states
   */
  u: number[][]
  /**
   * an optional vector of outputs
   */
  outputs?: number[]
}

/**
 * @title Model Output
 */
export type ModelOutput = CommonModelOutput | MinimalModelOutput

/**
 * Each output below is an array corresponding to the `extent` specified above (i.e. with the same length as `timestamps`).
 * Other than for `R` all numbers must be integers.
 * Not all output parameters may be appropriate for your model.
 * All keys (except `R`) in the `aggregate` object are required however.
 * If a particular metric is not supported an array of zeros can be given.
 * For `R`, if your model does not produce this, you can simply omit the key.
 * @title Severity Metrics
 */
export interface SeverityMetrics {
  /**
   * Current number of mild cases on this day
   */
  Mild: number[]

  /**
   * Current number of influenza-like illness cases on this day (assume represents GP demand)
   */
  ILI: number[]

  /**
   * Current number of Severe Acute Respiratory Illness cases on this day (assume represents hospital demand)
   */
  SARI: number[]

  /**
   * Current number of critical cases on this day (assume represents ICU demand)
   */
  Critical: number[]

  /**
   * Current number of critical cases on this day who are well enough to leave the ICU but still need a hospital bed
   */
  CritRecov: number[]

  /**
   * Number of deaths occurring on this day
   */
  incDeath: number[]

  /**
   * Total number of mild cases since the beginning of the epidemic
   */
  cumMild: number[]

  /**
   * Total number of influenza-like illnesses since the beginning of the epidemic
   */
  cumILI: number[]

  /**
   * Total number of severe acute respiratory illnesses since the beginning of the epidemic
   */
  cumSARI: number[]

  /**
   * Total number of critical cases since the beginning of the epidemic
   */
  cumCritical: number[]

  /**
   * Total number of patients recovered from critical cases since the beginning of the epidemic
   */
  cumCritRecov: number[]

  /**
   * R-number on this day
   */
  R?: number[]
}
