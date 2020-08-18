import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';

describe('FormSubmitter.vue', () => {
  it('제출했을 때 알림이 나타난다.', async () => {
    const wrapper = shallowMount(FormSubmitter);
    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.");
  })
})
