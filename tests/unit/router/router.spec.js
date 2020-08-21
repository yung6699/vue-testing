import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import NestedRoute from "@/views/NestedRoute.vue"
import routes from '@/router/routes.js';

const localVue = createLocalVue()
localVue.use(VueRouter);

jest.mock("@/views/NestedRoute.vue", () => ({
  name: "NestedRoute",
  render: h => h("div")
}))

describe('', () => {
  it('라우팅을 통해서 자식 컴포넌트를 렌더한다.', async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue,
      router
    })
    router.push("/nested-route")
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)
  })
})
