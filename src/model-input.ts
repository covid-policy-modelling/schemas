/**
 * A generalized description of the input to an epidemiological model.
 * @title Common Model Input
 */
export interface CommonModelInput {
  /**
   * The desired geographical top-level region for the simulation.
   * Connector must check this value (and subregion, if provided) and and either produce results for that geography, or return an error.
   */
  region: Region
  /**
   * Specific subregion for the simulation.
   * May be omitted
   */
  subregion?: Subregion
  /**
   * Desired parameters.
   * Connectors may choose to ignore any of these parameters if they wish.
   */
  parameters: ModelParameters
}

/**
 * @title Minimal Model Input
 */
export interface MinimalModelInput {
  p: number[]
  u0: number[]
  tspan: number[]
  dt?: number
}

/**
 * @title Model Input
 */
export type ModelInput = CommonModelInput | MinimalModelInput

/**
 * @title Model Parameters
 */
export interface ModelParameters {
  /**
   * An ISO-8601 string encoding the date of the most recent case data in the region.
   */
  calibrationDate: ISODate

  /**
   * The total number of confirmed cases in the region before the calibration date.
   */
  calibrationCaseCount: number

  /**
   * The total number of deaths in the region before the calibration date.
   */
  calibrationDeathCount: number

  /**
   * The assumed reproduction number for the virus. If this is null, then each
   * model will use its own default value.
   */
  r0: number | null

  /**
   * A list of time periods, each with a different set of interventions.
   */
  interventionPeriods: InterventionPeriod[]
}

/**
 * @title Intervention Period
 */
export interface InterventionPeriod {
  /**
   * An ISO-8601 string encoding the date that these interventions begin.
   */
  startDate: ISODate

  /**
   * The level of social distancing in the region.
   */
  socialDistancing?: Intensity

  /**
   * The level of school closure in the region.
   */
  schoolClosure?: Intensity

  /**
   * The level to which individuals with symptoms self-isolate.
   */
  caseIsolation?: Intensity

  /**
   * The level to which entire households self-isolate when one member
   * of the household has symptoms.
   */
  voluntaryHomeQuarantine?: Intensity

  /**
   * The estimated reduction in population contact resulting from
   * all of the above interventions. Some models require this generalized
   * parameter instead of the individual interventions.
   */
  reductionPopulationContact: number
}

/**
 * @title ISO Date
 * @examples ["2020-03-06"]
 */
export type ISODate = string

/**
 * @title Region
 * @examples ["US"]
 */
export type Region = string

/**
 * @title Subregion
 * @examples ["US-AK"]
 */
export type Subregion = string

/**
 * @title Intensity
 */
export enum Intensity {
  Aggressive = 'aggressive',
  Moderate = 'moderate',
  Mild = 'mild',
}
