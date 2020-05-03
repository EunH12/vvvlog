<template>
  <div>
    리스트
  </div>
</template>

<script>
export default {
  name: 'PokeList',
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
      console.log(res)
    }
  }
}
</script>
