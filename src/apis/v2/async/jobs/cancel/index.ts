import { ApiKey, ErrorResponse } from '../../../../@types'
import { JobId } from '../../../@types'
import { CanceledJob, DoneJob, WipJob } from '../@types'

export type Methods = {
  post: {
    reqHeaders: ApiKey
    reqBody: JobId
    resBody: CanceledJob | DoneJob | WipJob | ErrorResponse
  }
}
