export type BinaryPolynomialTerm = {
  coefficient: number
  polynomials: number[]
}

export type BinaryPolynomial = {
  terms: BinaryPolynomialTerm[]
}

export type QuboMatrixQuboArray = {
  qubo_row: number[]
}

export type QuboMatrix = {
  qubo: QuboMatrixQuboArray[]
}

export type QuboRequest = {
  fujitsuDA2PT?: FujitsuDA2PTSolverParameters
  fujitsuDA2?: FujitsuDA2SolverParameters
  fujitsuDA2MixedMode?: FujitsuDA2MixedModeSolverParameters
  binary_polynomial?: BinaryPolynomial
  qubo_matrix?: QuboMatrix
}

export type QuboResponse = {
  qubo_solution: QuboSolutionList
  solver_input_parameters: SolverInputeParameters
}

export type SolverInputeParameters = {
  job_id: string
  timeout: string
  solver_name: 'FujitsuDA2' | 'FujitsuDA2PT' | 'FujitsuDA2MixedMode'
} & (
  | Partial<FujitsuDA2PTSolverParameters>
  | Partial<FujitsuDA2SolverParameters>
  | Partial<FujitsuDA2MixedModeSolverParameters>
)

export type FujitsuDA2PTSolverParameters = {
  number_iterations?: number
  number_replicas: number
  offset_increase_rate?: number
  maximum_replica_temperature?: number
  solution_mode: 'COMPLETE' | 'QUICK'
  guidance_config?: { [key: string]: boolean }
}

export type FujitsuDA2SolverParameters = {
  expert_mode: boolean
  number_iterations?: number
  number_runs?: number
  offset_increase_rate?: number
  temperature_decay?: number
  temperature_interval?: number
  temperature_mode?: 'EXPONENTIAL' | 'INVERSE' | 'INVERSE_ROOT'
  temperature_start?: number
  solution_mode: 'COMPLETE' | 'QUICK'
  guidance_config?: { [key: string]: boolean }
}

export type FujitsuDA2MixedModeSolverParameters = {
  number_iterations?: number
  number_runs?: number
  offset_increase_rate?: number
  temperature_decay?: number
  temperature_interval?: number
  temperature_mode?: 'EXPONENTIAL' | 'INVERSE' | 'INVERSE_ROOT'
  temperature_start?: number
  solution_mode: 'COMPLETE' | 'QUICK'
  guidance_config?: { [key: string]: boolean }
}

export type QuboSolution = {
  energy: number
  frequency: number
  configuration: { [key: number]: boolean }
}

export type QuboSolutionList = {
  result_status: boolean
  solutions: QuboSolution[]
  timing: SolverTiming
}

export type SolverTiming = {
  cpu_time: number
  queue_time: number
  solve_time: number
  total_elapsed_time: number
  detailed: {
    anneal_time: number
  }
}

export type FujitsuSolverParameters = {
  fujitsuDA2: FujitsuDA2SolverParameters
  fujitsuDA2PT: FujitsuDA2PTSolverParameters
  fujitsuDA2MixedMode: FujitsuDA2MixedModeSolverParameters
}

export type FujitsuSolverType = keyof FujitsuSolverParameters

export type JobId = {
  job_id: string
}
