import { ApiKey, ErrorResponse } from '@apis/@types'
import { DeletedJob, DoneJob, WipJob } from '@apis/v2/async/jobs/@types'

export type Methods = {
  get: {
    reqHeaders: ApiKey
    resBody: DoneJob | WipJob | ErrorResponse
  }
  delete: {
    reqHeaders: ApiKey
    resBody: DeletedJob | WipJob | ErrorResponse
  }
}
