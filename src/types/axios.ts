export const API_CODE = {
  USER_NO_AUTH: -1,
}

export interface Result {
  code: number
  msg: string
  data: any
  count: number | undefined
  page: number | undefined
  limit: number | undefined
}
