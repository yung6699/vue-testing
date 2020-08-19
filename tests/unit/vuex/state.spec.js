import Vuex from 'vuex';
import Vue from 'vue';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import ComponentWithVuex from "@/components/ComponentWithVuex.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: "alice",
    firstName: 'Andy',
    lastName: 'Yoon'
  },

  getters: {
    fullName: (state) => `${state.firstName} ${state.lastName}`
  }
})


describe("ComponentWithVuex", () => {
  it('실제 Vuex 스토어를 사용해서 username을 랜더한다.', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue
    });
    expect(wrapper.find(".username").text()).toBe("alice");
  })

  it('실제 Vuex 스토어를 사용해서 username을 랜더한다. 02', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: {
            username: "test",
            firstName: 'Andy',
            lastName: 'Yoon'
          },

          getters: {
            fullName: "Andy Yoon"
          }
        }
      }
    });
    console.log(wrapper.html())
    console.log(wrapper.vm.fullName)
    expect(wrapper.find(".username").text()).toBe("test");
  })

  it('실제 Vuex 스토어를 사용해서 fullname을 랜더한다.', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue
    });

    expect(wrapper.find(".fullname").text()).toBe("Andy Yoon");
  })
})
