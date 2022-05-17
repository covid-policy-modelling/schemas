import { MicroMoBBHRMInput } from './input-MicroMoB'

/**
 * @title Output for MicroMoB model with Beverton-Holt aquatic mosquito model and
 * Ross-Macdonald adult mosquito model.
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
