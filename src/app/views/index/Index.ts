import BaseViews from '@/fast/base/base.view';
import { defineComponent } from 'vue';

class Component extends BaseViews {
    constructor() {
        super();
    }

    public vue() {
        const vue = defineComponent({
            setup() { },
            created() { },
            methods: {},
            components: {}
        });
        return vue;
    }
}

export default Component;
