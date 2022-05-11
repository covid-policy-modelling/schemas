import { CommonModelInput } from './input-common'
import { ModelDescription } from './output'

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
 * The output contains a number of time series which represent predicted metrics about the epidemic.
 * Three kinds of metrics are reported:
 * - **Current values** - These metrics (e.g. `Mild`, `Critical`) represent the current number of patients in a given condition, on a particular date. For example, the `Critical` value at a given timestamp represents the number of patients in critical condition on that day.
 * - **Cumulative values** - These metrics (e.g. `cumMild`, `cumCritical`) represent the total number of people who have been afflicted with a given condition since the beginning of the epidemic. For example, the `cumCritical` value at a given timestamp represents the total number of people who had been in critical condition due to the virus any time leading up to that day.
 * - **Incidence values** - The `incDeath` metric represents the number of patients who died of the virus on a given day.
 * Each output is an array corresponding to the `extent` specified above (i.e. with the same length as `timestamps`).
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
