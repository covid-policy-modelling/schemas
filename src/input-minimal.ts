/**
 * @title Minimal Model Input Batch
 */
export type MinimalModelInputBatch = MinimalModelInput | MinimalModelInput[]

/**
 * @title Minimal Model Input
 */
export interface MinimalModelInput {
  /**
   * Vector of model parameters
   */
  p: number[]
  /**
   * Vector of initial conditions
   */
  u0: number[]
  /**
   * Timespan over which to simulate the model
   */
  tspan: number[]
  /**
   * Optional time interval at which to compute the states.
   */
  dt?: number
}
