import BaseViews from "@/fast/base/BaseView";
import { defineComponent, getCurrentInstance } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";

class Component extends BaseViews {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      name: "Home",
      setup() {
        const proxy = getCurrentInstance();
        return {
          proxy,
        };
      },
      created() {},
      methods: {},
      components: {
        HelloWorld,
        Nav,
      },
    });
    return vue;
  }
}

export default Component;
