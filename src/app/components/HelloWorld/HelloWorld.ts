import BaseComponent from "@/fast/base/BaseComponent";
import { defineComponent, getCurrentInstance, inject } from "vue";

class Component extends BaseComponent {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      name: "Index",

      setup() {
        let params: any = inject("params");
        const proxy: any = getCurrentInstance();
        if (params.value.name == "rick") {
          console.log("params.name", params.value.name);
          params.name = "ricky";
        }
        return {
          proxy,
          params,
        };
      },

      methods: {},
      components: {},
      props: {
        msg: String,
      },
    });
    return vue;
  }
}

export default Component;
