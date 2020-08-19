import { shallowMount } from '@vue/test-utils';
import NumberRender from '@/components/NumberRender.vue';

describe('Greeting.vue', () => {
  it('짝수를 렌더링 한다.', () => {
    const wrapper = shallowMount(NumberRender, {
      propsData: { even: true }
    });

    expect(wrapper.text()).toBe("2, 4, 6, 8");
    expect(wrapper.vm.numbers).toBe("2, 4, 6, 8");
    expect(wrapper.vm.numbersFn()).toBe("2, 4, 6, 8");
    console.log(wrapper.vm.numbers)
    console.log(wrapper.vm.numbersFn())
  })

  it('홀수를 렌더링 한다.', () => {
    const localThis = { even: false };
    expect(NumberRender.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
    expect(NumberRender.computed.numbers()).toBe("1, 3, 5, 7, 9")
  })
})
