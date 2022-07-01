import BaseViews from "@/fast/base/BaseView";
import { defineComponent, getCurrentInstance, computed } from "vue";
import Nav from "@/app/components/Nav/Nav.vue";
import HelloWorld from "@/app/components/HelloWorld/HelloWorld.vue";
import EventBus from "@/app/components/EVentBus/EVentBus.vue";

class Component extends BaseViews {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      name: "Home",
      setup() {
        const proxy: any = getCurrentInstance();
        return {
          proxy,
        };
      },
      data() {
        return {
          params: {
            name: "rick",
            fristName: "chen",
          },
          name: "rick",
        };
      },
      created() {},
      methods: {},
      components: {
        HelloWorld,
        Nav,
        EventBus,
      },
      provide() {
        return {
          params: computed(() => this.params),
        };
      },
    });
    return vue;
  }
}

export default Component;
