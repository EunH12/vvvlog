<template>
  <div>
    {{ user }}
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <template v-if="item.editType">
          <input type="text" v-model="item.content" />
        </template>
        <template v-else>
          {{item.content}}
        </template>
        <span v-if="user === item.writer">
          <button @click="editItem(item)">수정</button>
          <button @click="deleteItem(index)">삭제</button>
        </span>
      </li>
    </ul>
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
      this.api.get('/guestBoard.json').then((res) => {
        const modifyAdd = res.data.map((item) => {
          return {
            ...item,
            editType: false
          }
        })
        this.list = modifyAdd
      })
    },
    editItem (item) {
      item.editType = !item.editType
    },
    deleteItem (i) {
      this.list.splice(i, 1)
    }
  }
}
</script>
