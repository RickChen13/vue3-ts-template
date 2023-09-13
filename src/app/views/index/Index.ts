import BaseViews from "@/fast/base/BaseView";
import { defineComponent } from "vue";
import ApiController from "@/app/api/controller/ApiController";

class Component extends BaseViews {
    constructor() {
        super();
    }

    public vue() {
        const vue = defineComponent({
            setup() {
                const api = new ApiController();
                return {
                    api
                };
            },
            created() {
                (async () => {
                    let res = await this.api.onerow({
                        data: {},
                        method: "get",
                    });
                    console.log("res", res);
                })();
            },
            methods: {},
            components: {
            },
        });
        return vue;
    }
}

export default Component;
