import BaseViews from '@/fast/base/BaseView';
import { defineComponent } from 'vue';
import StarportTest from '@/app/components/example/starport/StarportTest.vue';
import { Starport } from 'vue-starport';
import { onerowStore } from '@/app/pinia/api/api';
import { storeToRefs } from 'pinia';

class Component extends BaseViews {
    constructor() {
        super();
    }

    public vue() {
        const vue = defineComponent({
            setup() {
                const onerow_store = onerowStore();
                onerow_store.check();
                const { note } = storeToRefs(onerow_store);
                return {
                    note,
                };
            },
            created() { },
            methods: {},
            components: {
                StarportTest,
                Starport
            }
        });
        return vue;
    }
}

export default Component;
