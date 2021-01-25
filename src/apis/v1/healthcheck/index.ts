import { ErrorResponse } from '../../@types'

export type Methods = {
  get: {
    resBody: Record<string, unknown> | ErrorResponse
  }
}
