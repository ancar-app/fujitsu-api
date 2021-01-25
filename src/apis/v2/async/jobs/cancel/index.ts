import { ApiKey, ErrorResponse } from 'apis/@types'
import { JobId } from 'apis/v2/@types'
import { CanceledJob, DoneJob, WipJob } from '../@types'

export type Methods = {
  post: {
    reqHeaders: ApiKey
    reqBody: JobId
    resBody: CanceledJob | DoneJob | WipJob | ErrorResponse
  }
}
