import { ApiKey, ErrorResponse } from '../../../@types'
import { JobStatusList } from './@types'

export type Methods = {
  get: {
    reqHeaders: ApiKey
    resBody: JobStatusList | ErrorResponse
  }
}
