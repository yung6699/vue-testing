import Vuex from 'vuex';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import ComponentWithVuex from "@/components/ComponentWithVuex.vue";
import store from "@/store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ComponentWithVuex Real Store Test", () => {
  it('실제 Vuex 스토어를 사용해서 username을 랜더한다.', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue
    });
    expect(wrapper.find(".username").text()).toBe("Real");
    expect(wrapper.find(".fullname").text()).toBe("Andddy Yoon");
  })
})
