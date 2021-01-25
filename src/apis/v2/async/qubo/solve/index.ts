import { ApiKey, ErrorResponse } from 'apis/@types'
import { QuboRequest, JobId } from 'apis/v2/@types'

export type Methods = {
  post: {
    reqHeaders: ApiKey
    reqBody: QuboRequest
    resBody: JobId | ErrorResponse
  }
}
