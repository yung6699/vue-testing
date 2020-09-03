<template>
  <div class="home">
    <ChildComponent/>
    <button v-on:click="onClick">Toggle Child Component!</button>
    <GreetingComponent v-if="isShow"></GreetingComponent>
  </div>
</template>

<script>

import ChildComponent from '@/components/Child.vue';
export default {
  name: 'Home',
  components: {
    ChildComponent,
    GreetingComponent: null
  },

  data: () => ({
    isShow: false
  }),

  mounted() {
    console.log('start', this.$options.components['GreetingComponent'])
    setTimeout(() => {
      this.$options.components['GreetingComponent'] = lazyLoadComponent({
        componentFactory: import('@/components/Greeting.vue')
      })
      console.log('end', this.$options.components['GreetingComponent'])
    }, 5000)
  },

  methods: {
    onClick () {
      this.isShow = !this.isShow;
    }
  }
}

function lazyLoadComponent ({ componentFactory }) {
  return () => ({
    component: componentFactory
  })
}
</script>
