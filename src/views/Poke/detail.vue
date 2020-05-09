<template>
  <div>
    <ul>
      <li v-for="(item, index) in lists" :key="index">
        name: {{item.name}}<br>
        languageName: {{item.language.name}}<br>
        languageUrl: {{item.language.url}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PokeDetail',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await this.$axios.get(`https://pokeapi.co/api/v2/version/${this.$route.params.id}`)
      this.lists = res.data.names
    }
  }
}
</script>
