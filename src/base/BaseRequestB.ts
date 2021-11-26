import router from '@/router'
import { ElMessage } from "element-plus"
import Token from "@/common/Token"
import Config from "@/library/Config"

abstract class BaseRequestB {
    Token: Token

    /**
     * 构造函数
     */
    constructor() {
        this.Token = new Token()
    }

    /**
     * url处理
     * 
     * @param url
     */
    reqUrl(url: string) {
        const requestUrl = `${Config.getSysUrl()}${url}`
        return requestUrl
    }

    /**
     * 请求前对发送的数据进行处理
     * 
     * @param data 
     */
    reqSetData(data: any) {
        return data
    }

    /**
     * 请求前对发送的数据进行设置token
     * 
     * @param data 
     * @returns 
     */
    reqSetToken(data: any) {
        const token = this.Token.getToken(Config.getSysTokenName())
        if (token == '') {
            setTimeout(async () => {
                ElMessage({
                    type: "error",
                    duration: 2000,
                    message: "登录已失效。",
                })
            }, 0)
            router.push('/')
            // 抛出异常，停止代码执行
            throw new Error("预期之内的错误：未登录。")
        }
        data.token = token
        return data
    }
}

export default BaseRequestB