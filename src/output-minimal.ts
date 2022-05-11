import { MinimalModelInput } from './input-minimal'
import { ModelDescription } from './output'

/**
 * @title Minimal Model Output
 */
export interface MinimalModelOutput {
  metadata: MinimalModelInput
  model: ModelDescription
  /**
   * Vector of times at which the model is run
   */
  t: number[]
  /**
   * Matrix of states
   */
  u: number[][]
  /**
   * Optional vector of outputs
   */
  outputs?: number[]
}
