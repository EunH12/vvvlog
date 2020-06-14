<template>
  <div>
    11
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      items: []
    }
  },
  created () {
    this.items = this.$router.options.routes
  }
}
</script>

<style lang="sass">
</style>
