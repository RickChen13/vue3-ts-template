import BaseViews from "@/base/BaseView"
import { defineComponent, getCurrentInstance } from "vue"
import Nav from "@/components/Nav.vue"

class Component extends BaseViews {
    constructor() {
        super()
    }

    public vue() {
        const vue = defineComponent({
            name: "About",
            setup() {
                const proxy = getCurrentInstance();
                return {
                    proxy,
                };
            },
            created() { },
            methods: {},
            components: {

                Nav,
            },
        })
        return vue
    }
}

export default Component