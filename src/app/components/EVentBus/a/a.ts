import BaseViews from "@/fast/base/BaseView";
import { defineComponent, getCurrentInstance, ref } from "vue";

import EventBus from "@/fast/plugins/mitt/EventBus";

class Component extends BaseViews {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      name: "a",
      setup() {
        const proxy = getCurrentInstance();
        let number = ref(0);
        return {
          proxy,
          number,
        };
      },
      created() {},
      mounted() {},
      methods: {
        emitANumber() {
          this.number += 1;
          EventBus.emit("emitANumber", this.number);
        },
      },
      components: {},
    });
    return vue;
  }
}

export default Component;
