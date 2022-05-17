import { CommonModelInput } from './input-common'
import { MinimalModelInput } from './input-minimal'
import { MicroMoB_BH_RM_Input } from './input-MicroMoB'

/**
 * @title Model Input
 */
export type ModelInput = CommonModelInput | MinimalModelInput | MicroMoB_BH_RM_Input
