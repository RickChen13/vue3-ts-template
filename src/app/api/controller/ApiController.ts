import qs from 'qs';
import BaseController from '@/fast/api/BaseController';
import ApiBll from '@/app/api/bll/ApiBll';
import { type onerowRequest, type onerowResult } from './ApiInterface';

class ExampleController extends BaseController {
    /**
     * 逻辑处理层
     */
    protected bll: ApiBll;

    constructor() {
        super();
        this.bll = new ApiBll();
    }

    /**
     * 获取天气
     *
     * @param config
     */
    async onerow(config: onerowRequest): Promise<onerowResult> {
        const url = '/v1/onerow';
        const result: onerowResult = await this.request({
            url: this.bll.reqUrl(url),
            data: qs.stringify(config.data),
            method: config.method
        });
        return new Promise((resolve) => {
            resolve(result);
        });
    }
}

export default ExampleController;
