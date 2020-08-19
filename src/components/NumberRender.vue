<template>
  <div>
    {{ numbers }}
  </div>
</template>

<script>
  export default {
    name: "NumberRender",
    props: {
      even: {
        type: Boolean,
        required: true
      }
    },

    methods: {
      numbersFn () {
        const evens = [];
        const odds = [];

        for (let i = 1; i < 10; i++) {
          if (i % 2 === 0) {
            evens.push(i)
          } else {
            odds.push(i)
          }
        }
        return this.even === true ? evens.join(", ") : odds.join(", ")
      }
    },

    computed: {
      numbers () {
        const evens = [];
        const odds = [];

        for (let i = 1; i < 10; i++) {
          if (i % 2 === 0) {
            evens.push(i)
          } else {
            odds.push(i)
          }
        }
        return this.even === true ? evens.join(", ") : odds.join(", ")
      }
    }
  }
</script>
