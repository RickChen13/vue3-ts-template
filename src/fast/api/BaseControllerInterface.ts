export interface axiosReqConfig {
  url: string;
  data: any;
  headers?: any;
  timeout?: number;
  middleware?: boolean;
  method?: string;
  chain?: boolean;
  success?: Function;
  error?: Function;
}

export interface chainConfig {
  url: string;
  data: any;
  headers?: any;
  timeout?: number;
  method?: string;
  middleware?: boolean;
}

export interface callBlackConfig {
  url: string;
  data: any;
  headers?: any;
  timeout?: number;
  method?: string;
  middleware?: boolean;
  success?: Function;
  error?: Function;
}

export interface Result {
  result: boolean;
  code: number;
  msg: string;
  data: any;
}

export interface ErrResult {
  result: boolean;
  msg: string;
  needRouter?: boolean;
  router?: string;
  needMsg?: boolean;
}
