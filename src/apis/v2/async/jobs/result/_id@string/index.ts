import { ApiKey, ErrorResponse } from '../../../../../@types'
import { DeletedJob, DoneJob, WipJob } from '../../@types'

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
