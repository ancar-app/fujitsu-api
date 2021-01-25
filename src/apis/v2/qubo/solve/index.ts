import { ApiKey, ErrorResponse } from '../../../@types'
import { QuboRequest, QuboResponse } from '../../@types'

export type Methods = {
  post: {
    reqHeaders: ApiKey
    reqBody: QuboRequest
    resBody: QuboResponse | ErrorResponse
  }
}
