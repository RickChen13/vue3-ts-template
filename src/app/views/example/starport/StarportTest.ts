import BaseViews from "@/fast/base/BaseView";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import StarportTest from "@/app/components/example/starport/StarportTest.vue";
import { Starport } from "vue-starport";
class Component extends BaseViews {
  constructor() {
    super();
  }

  public vue() {
    const vue = defineComponent({
      setup() {
        const router = useRouter();
        const goback = () => {
          router.go(-1);
        };
        return {
          goback,
        };
      },
      created() {},
      methods: {},
      components: {
        StarportTest,
        Starport,
      },
    });
    return vue;
  }
}

export default Component;
