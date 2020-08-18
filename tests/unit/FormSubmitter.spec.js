import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';

describe('FormSubmitter.vue', () => {
  it('제출했을 때 알림이 나타난다.', () => {
    const wrapper = shallowMount(FormSubmitter);
    wrapper.find("[data-username]")
  })
})
