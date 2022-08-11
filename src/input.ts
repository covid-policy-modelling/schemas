import { CommonModelInput } from './input-common'
import { MinimalModelInputBatch } from './input-minimal'
import { MicroMoBBHRMInputBatch } from './input-MicroMoB'

/**
 * @title Model Input
 */
export type ModelInput =
  | CommonModelInput
  | MinimalModelInputBatch
  | MicroMoBBHRMInputBatch
