import BaseViews from '@/fast/base/BaseView';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import StarportTest from '@/app/components/example/starport/StarportTest.vue';
import { Starport } from 'vue-starport';
import EventBus from '@/app/plugins/mitt/EventBus';
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
                const { content } = storeToRefs(onerow_store);

                const router = useRouter();
                const goback = () => {
                    router.go(-1);
                };
                const back = () => {
                    EventBus.emit('back');
                };
                return {
                    goback,
                    back,
                    content,
                };
            },
            created() {
                EventBus.on('back', this.goback);
            },
            methods: {},
            beforeRouteLeave() {
                EventBus.off('back', this.goback);
            },
            components: {
                StarportTest,
                Starport
            }
        });
        return vue;
    }
}

export default Component;
