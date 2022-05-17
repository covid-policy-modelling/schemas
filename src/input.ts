import { CommonModelInput } from './input-common'
import { MinimalModelInput } from './input-minimal'
import { MicroMoBBHRMInput } from './input-MicroMoB'

/**
 * @title Model Input
 */
export type ModelInput =
  | CommonModelInput
  | MinimalModelInput
  | MicroMoBBHRMInput
