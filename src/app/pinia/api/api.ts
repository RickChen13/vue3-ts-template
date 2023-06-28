import ApiController from '@/app/api/controller/ApiController';
import Time from '@/common/Time';
import { defineStore } from 'pinia';

type OneRowStore = {
    note: string | null;
    content: string | null;
    oneRowupdateTime: number | null;
}
const api = new ApiController();
export const onerowStore = defineStore('oneRow', {
    state: (): OneRowStore => {
        return {
            note: null,
            content: null,
            oneRowupdateTime: null,
        };
    },
    actions: {
        async getApiOneRow() {
            const res = await api.onerow({
                data: {},
                method: 'get'
            });
            if (res.result && res.data) {
                this.note = res.data.note;
                this.content = res.data.content;
                this.oneRowupdateTime = Time.microtime();
            }
        },
        async check() {
            if (this.note != null) {
                const outTime = (Time.microtime() - Number(this.oneRowupdateTime)) / 1000;
                if (outTime >= 60) {
                    this.getApiOneRow();
                }
            } else {
                this.getApiOneRow();
            }
        },
    }




});