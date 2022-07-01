import BaseViews from "@/fast/base/BaseView";
import { defineComponent, getCurrentInstance, ref } from "vue";

import EventBus from "@/fast/plugins/mitt/EventBus";

class Component extends BaseViews {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      name: "b",
      setup() {
        const proxy = getCurrentInstance();
        let str = ref("");
        return {
          proxy,
          str,
        };
      },
      created() {
        this.EventBusHandler();
      },
      methods: {
        EventBusHandler() {
          EventBus.on("emitANumber", (data: any) => {
            this.str = data;
          });
        },
      },
      components: {},
    });
    return vue;
  }
}

export default Component;
