import { shallowMount, config } from '@vue/test-utils';
import Bilingual from '@/components/Bilingual.vue';
import translations from "@/utils/translations";

let locale = 'en';
config.mocks['$t'] = (msg) => translations[locale][msg]
describe('Bilingual.vue', () => {
  it('Bilingual 컴포넌트 렌더링', () => {
    const wrapper = shallowMount(Bilingual);
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('Hello world!')
  })
})
