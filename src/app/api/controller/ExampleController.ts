import qs from "qs";
import BaseController from "@/fast/api/BaseController";
import CommonBll from "@/app/api/bll/CommonBll";
import { ExampleInterface } from "@/app/api/controller/ExampleInterface";

class ExampleController extends BaseController {
  /**
   * 逻辑处理层
   */
  bll: CommonBll;

  constructor() {
    super();
    this.bll = new CommonBll();
  }

  /**
   * 获取arrayList
   *
   * @param config
   */
  async getArrayList(config: ExampleInterface) {
    const url = "/api/test/getArrayList";
    const reqConfig = {
      url: this.bll.reqUrl(url),
      data: qs.stringify(config.data),
      method: this.checkMethond(config.method),
      success: config.success,
      error: config.error,
    };
    if (config.chain == true) {
      return new Promise((resolve) => {
        resolve(this.chain(reqConfig));
      });
    } else {
      this.callBlack(reqConfig);
    }
  }
}

export default ExampleController;
