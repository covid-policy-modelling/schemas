import { MicroMoB_BH_RM_Input } from './input-MicroMoB'
import { ModelDescription } from './output'

/**
 * @title Minimal Model Output
 */
export interface MicroMoB_BH_RM_Output {
  metadata: MicroMoB_BH_RM_Input
  model: ModelDescription
  /**
   * Vector of times at which the model is run
   */
  t: number[]
  /**
   * Array (patches, days, MYZ)
   */
  MYZ: number[][][]
}