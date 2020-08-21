import { shallowMount } from '@vue/test-utils';
import Emitter from '@/components/Emitter.vue';

describe('Emitter.vue', () => {
  it('emitEvent', () => {
    const wrapper = shallowMount(Emitter);
    wrapper.vm.emitEvent();
    console.log('wrapper.emitted()', wrapper.emitted())
    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password']);
  })
})
