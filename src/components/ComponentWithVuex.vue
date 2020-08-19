<template>
  <div>
    <div class="username">
      {{ username }}
    </div>
    <div class="fullname">
      {{ fullName }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComponentWithVuex",

    data() {
      return {
        username: this.$store.state.username
      }
    },
    computed: {
      fullName () {
        return this.$store.getters.fullName
      }
    }
  }
</script>
