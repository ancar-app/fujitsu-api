import { ApiKey, ErrorResponse } from '@apis/@types'
import { JobStatusList } from './@types'

export type Methods = {
  get: {
    reqHeaders: ApiKey
    resBody: JobStatusList | ErrorResponse
  }
}
