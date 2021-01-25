import { QuboResponse } from '@apis/v2/@types'

export const JobStatus = {
  DONE: 'Done',
  RUNNING: 'Running',
  WAITING: 'Waiting',
  CANCELED: 'Canceled',
  ERROR: 'Error',
  DELETED: 'Deleted',
} as const

export type JobStatus = typeof JobStatus[keyof typeof JobStatus]

export type JobStatusInfo = {
  job_id: string
  job_satus: JobStatus
  start_time: string
}

export type JobStatusList = {
  job_status_list: JobStatusInfo[]
}

export type DoneJob = { status: 'Done' } & QuboResponse

export type DeletedJob = { status: 'Deleted' } & QuboResponse

export type WipJob = { status: 'Running' | 'Waiting' }

export type CanceledJob = { status: 'Canceled' }
