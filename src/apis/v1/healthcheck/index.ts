import { ErrorResponse } from '@apis/@types'

export type Methods = {
  get: {
    resBody: Record<string, unknown> | ErrorResponse
  }
}
