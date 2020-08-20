import Vuex from 'vuex';
import { createLocalVue, shallowMount } from "@vue/test-utils";
import ComponentWithButtons from "@/components/ComponentWithButtons";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ComponentWithButtons", () => {
  it('버튼을 클릭했을 때 뮤테이션을 커밋한다.', async () => {
    const mutations = { testMutation: jest.fn() }
    const state = { msg: '' }
    const store = new Vuex.Store({ state, mutations });
    // store.commit = jest.fn()
    const wrapper = shallowMount(ComponentWithButtons, {
      store, localVue
    })

    wrapper.find('.commit').trigger('click');
    await wrapper.vm.$nextTick();
    // expect(store.commit).toHaveBeenCalledWith('testMutation', { msg: 'Test Commit'})
    expect(mutations.testMutation).toHaveBeenCalledWith(state, { msg: 'Test Commit'})
  })

  it("버튼을 클릭했을 때 액션을 디스패치 한다", async () => {
    const mockStore = { dispatch: jest.fn() }
    const wrapper = shallowMount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    })

    wrapper.find(".dispatch").trigger("click")
    await wrapper.vm.$nextTick()

    expect(mockStore.dispatch).toHaveBeenCalledWith("testAction" , { msg: "Test Dispatch" })
  })

  it("버튼을 클릭했을 때 namespaced 액션을 디스패치한다", async () => {
    const store = new Vuex.Store()
    store.dispatch = jest.fn()

    const wrapper = shallowMount(ComponentWithButtons, {
      store, localVue
    })

    wrapper.find(".namespaced-dispatch").trigger("click")
    await wrapper.vm.$nextTick()

    expect(store.dispatch)
      .toHaveBeenCalledWith('namespaced/very/deeply/testAction', { msg: "Test Namespaced Dispatch" })
  })
})
