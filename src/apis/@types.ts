export type ErrorResponse = {
  error: {
    code: ErrorCode
    title: string
    message: string
  }
}

export const ErrorCode = {
  BAD_REQUEST: '400',
  UNAUTHORIZED: '401',
  NOT_FOUND: '404',
  LENGTH_REQUIRED: '411',
  SERVER_ERROR: '500',
} as const

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode]

export type ApiKey = {
  'X-Api-Key': string
}
