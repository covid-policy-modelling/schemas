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
 * @title Model Parameters
 */
export interface ModelParameters {
  /**
   * An ISO-8601 string encoding the date of the most recent case data in the region.
   * Some models such as `CovidSim` require you to provide some information about recorded cases in the region, in order to calibrate the model.
   * The web-interface provides this information automatically, based on recorded case data downloaded daily from various international data sources.
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
   * The assumed [_reproduction number_](https://en.wikipedia.org/wiki/Basic_reproduction_number) for the virus.
   * If this is null, then each model will use its own default value.
   */
  r0: number | null

  /**
   * A list of time periods, each with a different set of interventions.
   * Policy interventions are specified as a series of _intervention periods_, each with a certain set of interventions that are in place.
   * For example, case isolation and social distancing may be instituted first, followed by school closure a week later, followed by a relaxation of all guidelines after several months.
   * **Note** - In order to specify that _all_ interventions end on a certain date, there should be a _final_ intervention period that starts on that date, has no interventions specified, and has `reductionPopulationContact` set to zero.
   */
  interventionPeriods: InterventionPeriod[]
}

/**
 * Each intervention period is specified by a `startDate`, a set of interventions (`socialDistancing`, `caseIsolation`, `voluntaryHomeQuarantine`, and `schoolClosure`), and an estimate of the overall effect of these interventions (`reductionPopulationContact`).
 * This overall estimate is needed because some models do not simulate the effects of individual interventions.
 * The strictness of each intervention is specified roughly, as one of `mild`, `moderate`, or `aggressive`.
 * Each model connector is responsible for interpreting this distinction in a way that works for the particular model.
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
   * The level to which entire households self-isolate when one member of the household has symptoms.
   */
  voluntaryHomeQuarantine?: Intensity

  /**
   * The estimated reduction in population contact resulting from all of the above interventions.
   * Some models require this generalized parameter instead of the individual interventions.
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
