export type onerowRequest = {
  data: {}
  method?: 'post' | 'get'
}

export type onerowResult = {
  result: boolean
  code: number
  msg: string
  data?: {
    uuid: string
    note: string
    content: string
  }
  dev?: any
}
