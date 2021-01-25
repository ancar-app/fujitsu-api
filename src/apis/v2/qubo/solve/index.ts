import { ApiKey, ErrorResponse } from '@apis/@types'
import { QuboRequest, QuboResponse } from '@apis/v2/@types'

export type Methods = {
  post: {
    reqHeaders: ApiKey
    reqBody: QuboRequest
    resBody: QuboResponse | ErrorResponse
  }
}
