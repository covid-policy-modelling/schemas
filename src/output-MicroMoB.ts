import { MicroMoBBHRMInput } from './input-MicroMoB'

/**
 * @title Minimal Model Output
 */
export interface MicroMoBBHRMOutput {
  metadata: MicroMoBBHRMInput
  /**
   * Vector of times at which the model is run
   */
  t: number[]
  /**
   * Array (patches, days, MYZ)
   */
  MYZ: number[][][]
}
