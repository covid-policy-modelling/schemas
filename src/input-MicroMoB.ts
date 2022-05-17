/**
 * @title Input for MicroMoB model with Beverton-Holt aquatic mosquito model and
 * Ross-Macdonald adult mosquito model.
 */
export interface MicroMoBBHRMInput {
  /**
   * Number of patches
   */
  p: number[]
  /**
   * Number of time steps
   */
  tmax: number[]
  /**
   * Update the aquatic mosquito model stochastically or deterministically?
   */
  aqua_stochastic: boolean[]
  /**
   * Proportion of immature stages which mature and emerge as adults each day
   * (rows correspond to patches and columns to days)
   */
  aqua_molt: number[][]
  /**
   * Aquatic daily survival probability
   * (rows correspond to patches and columns to days)
   */
  aqua_surv: number[][]
  /**
   * Carrying capacity
   * (rows correspond to patches and columns to days)
   */
  aqua_K: number[][]
  /**
   * Initial number of immature mosquitoes (length should equal number of
   * patches)
   */
  aqua_L: number[]
  /**
   * Update the adult mosquito model stochastically or deterministically?
   */
  adult_stochastic: boolean[]
  /**
   * Blood feeding rate
   */
  adult_f: number[]
  /**
   * Human blood feeding fraction
   */
  adult_q: number[]
  /**
   * the extrinsic incubation period (can be either length 1, 365, or equal to
   * tmax)
   */
  adult_eip: number[]
  /**
   * Adult daily survival probability
   * (rows correspond to patches and columns to days)
   */
  adult_p: number[][]
  /**
   * mosquito dispersal matrix (rows must sum to 1)
   */
  adult_psi: number[][]
  /**
   * number of eggs laid per oviposition
   */
  adult_nu: number[]
  /**
   *  total mosquito density per patch (length should equal number of patches)
   */
  adult_M: number[]
  /**
   * infected mosquito density per patch (length should equal number of patches)
   */
  adult_Y: number[]
  /**
   * infectious mosquito density per patch (length should equal number of patches)
   */
  adult_Z: number[]
}
