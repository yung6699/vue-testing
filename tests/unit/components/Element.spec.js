import { shallowMount, mount } from "@vue/test-utils";
import Parent from '@/components/Parent'
import Child from '@/components/Child'
import ParentWithManyChildren from '@/components/ParentWithManyChildren'

describe('Element find Test', function () {
  it('find method test', () => {
    const wrapper = shallowMount(Parent, {
      data () {
        return { showSpan: true }
      }
    });
    expect(wrapper.find("span").isVisible()).toBe(true);
  })

  it('find method test', async () => {
    const wrapper = shallowMount(Parent);
    expect(wrapper.findComponent(Child).exists()).toBe(false);
    wrapper.setData({ showChild: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(Child).exists()).toBe(true);
  })

  it("다수의 자식을 렌더한다", () => {
    const wrapper = shallowMount(ParentWithManyChildren)
    expect(wrapper.findAllComponents(Child).length).toBe(3)
  })
});
