import Time from '@/common/Time';
import { defineStore } from 'pinia';

type OneRowStore = {
    note: string | null;
    content: string | null;
    oneRowupdateTime: number | null;
}

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