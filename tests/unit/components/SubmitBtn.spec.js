import { shallowMount } from '@vue/test-utils';
import SubmitButton from '@/components/SubmitButton.vue';

const factory = (propsData) => {
  const msg = 'submit';
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}

describe('SubmitButton.vue', () => {
  it('인증되지 않은 메세지를 표시한다.', () => {
    const wrapper = factory();
    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  })

  it('관리자 권한 메세지를 표시한다', () => {
    const wrapper = factory({ isAdmin: true })
    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  })
})
