export interface onerowRequest {
    data: {};
    method?: "post" | "get";
}

export interface onerowResult {
    result: boolean;
    code: number;
    msg: string;
    data?: {
        uuid: string;
        note: string;
        content: string;
    };
    dev?: any;
}
