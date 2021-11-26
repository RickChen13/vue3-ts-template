import sysConf from "@/config/sysConf.json"

class Config {
    /**
     * 获取默认请求域名
     * 
     * @returns 
     */
    static getSysUrl() {
        return sysConf.hostUrl
    }

    /**
     * 获取默认存放Token
     * 
     * @returns 
     */
    static getSysTokenName() {
        return sysConf.tokenName
    }
}

export default Config