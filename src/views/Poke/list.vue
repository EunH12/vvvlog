<template>
  <div>
    <table>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Url</th>
      </tr>
      <template v-for="(item, index) in lists">
        <tr :key="index" @click="goDetail(item.id)">
          <td>{{ index+1 }}</td>
          <td>{{ item.version.name }}</td>
          <td>{{ item.version.url }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PokeList',
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
      const reList = res.data.game_indices.map((item) => {
        return {
          ...item,
          id: item.version.url.split('https://pokeapi.co/api/v2/version/')[1].split('/')[0]
        }
      })
      this.lists = reList
    },
    goDetail (id) {
      this.$router.push({
        name: 'Poke_detail',
        params: { id: id, hidden: 'test' },
        query: { test: 'query' }
      })
    }
  }
}
</script>
