import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';
import flushPromises from "flush-promises"

let url = '';
let data = '';

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve();
    })
  }
}

describe('FormSubmitter.vue', () => {
  it('제출했을 때 알림이 나타난다.', async () => {
    const wrapper = shallowMount(FormSubmitter);
    wrapper.find("[data-username]").setValue("alice");
    wrapper.find(".form02").trigger("submit.prevent");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.");
  })

  it('제출했을 때 알림이 나타난다. 02', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    });
    // wrapper.setData({ username: 'alice' })
    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    await flushPromises()
    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.");
    expect(url).toBe("/api/v1/register")
    expect(data).toEqual({ username: "alice" });
  })
})
