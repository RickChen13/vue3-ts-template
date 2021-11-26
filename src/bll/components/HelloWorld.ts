import BaseComponent from "@/base/BaseComponent"
import { defineComponent, getCurrentInstance } from "vue"

class Component extends BaseComponent {
    constructor() {
        super()
    }

    public vue() {
        const vue = defineComponent({
          name: "Index",
          setup() {
            const proxy = getCurrentInstance();
            return {
              proxy,
            };
          },
          created() {},
          methods: {},
          components: {
            
          },
          props: {
            msg: String
          },
        })
        return vue
    }
}

export default Component