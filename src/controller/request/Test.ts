import qs from "qs"
import BaseRequestC from "@/base/BaseRequestC"
import TestBll from "@/bll/controller/request/Test"
import {
	GetArrayList,
} from "@/interface/controller/request/Test"

class Test extends BaseRequestC {
	/**
	 * 默认逻辑处理层
	 * @var TestBll
	 */
	bll: TestBll

	constructor() {
		super()
		this.bll = new TestBll()
	}

	/**
	 * 获取arrayList
	 * 
	 * @param config 
	 */
	async getArrayList(config: GetArrayList) {
		const url = "/api/test/getArrayList"
		const reqConfig = {
			url: this.bll.reqUrl(url),
			data: qs.stringify(config.data),
			method: this.checkMethond(config.method),
			success: config.success,
			error: config.error,
		}
		if (config.chain == true) {
			return new Promise((resolve) => {
				resolve(this.chain(reqConfig))
			})
		} else {
			this.callBlack(reqConfig)
		}
	}

	/**
	 * 获取arrayList
	 * 
	 * @param config 
	 */
	async arrayList(config: GetArrayList) {
		const url = "/api/test/getArrayList"
		const reqConfig = {
			url: this.bll.reqUrl(url),
			data: qs.stringify(this.bll.reqSetToken(config.data)),
			method: this.checkMethond(config.method),
			success: config.success,
			error: config.error,
		}
		if (config.chain == true) {
			return new Promise((resolve) => {
				resolve(this.chain(reqConfig))
			})
		} else {
			this.callBlack(reqConfig)
		}
	}
}

export default Test