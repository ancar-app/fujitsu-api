import { ApiKey, ErrorResponse } from '../../../../@types'
import { QuboRequest, JobId } from '../../../@types'

export type Methods = {
  post: {
    reqHeaders: ApiKey
    reqBody: QuboRequest
    resBody: JobId | ErrorResponse
  }
}
