import BaseViews from "@/fast/base/BaseView";
import { defineComponent, getCurrentInstance } from "vue";

import A from "./a/a.vue";
import B from "./b/b.vue";

class Component extends BaseViews {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      name: "EVentBus",
      setup() {
        const proxy = getCurrentInstance();
        return {
          proxy,
        };
      },
      created() {},
      methods: {},
      components: {
        A,
        B,
      },
    });
    return vue;
  }
}

export default Component;
