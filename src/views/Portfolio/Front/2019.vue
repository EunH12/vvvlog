<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    return {
      user: '',
      list: [],
      contents: ''
    }
  },
  mounted () {
    this.user = Cookies.get('user')
    this.getGuestBoardList()
  },
  methods: {
    getGuestBoardList () {
      this.$axios.get('/guestBoard.json').then((res) => {
        const modifyAdd = res.data.map((item) => {
          return {
            ...item,
            editType: false
          }
        })
        this.list = modifyAdd
      })
    }
  }
}
</script>
