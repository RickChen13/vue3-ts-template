import BaseViews from '@/fast/base/BaseView'
import { defineComponent } from 'vue'
import ApiController from '@/app/api/controller/ApiController'
import StarportTest from '@/app/components/example/starport/StarportTest.vue'
import { Starport } from 'vue-starport'

class Component extends BaseViews {
  constructor() {
    super()
  }

  public vue() {
    const vue = defineComponent({
      setup() {
        const api = new ApiController()
        ;(async () => {
          const res = await api.onerow({
            data: {},
            method: 'get'
          })
          console.log('res', res)
        })()
        return {}
      },
      created() {},
      methods: {},
      components: {
        StarportTest,
        Starport
      }
    })
    return vue
  }
}

export default Component
