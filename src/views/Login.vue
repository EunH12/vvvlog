<template>
  <div>
    <dl>
      <dd>
        <v-text-field
          type="text"
          label="아이디"
          v-model="params.id"
        />
      </dd>
      <dd>
        <v-text-field
          type="password"
          label="password"
          v-model="params.password"
        />
      </dd>
    </dl>
    <v-btn color="primary" @click="submit">Submit</v-btn>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    return {
      params: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.params.id === '') {
        alert('id를 입력해주세요')
        return
      }
      if (this.params.password === '') {
        alert('비밀번호를 입력해주세요')
        return
      }
      this.loginIdCheck()
    },
    loginIdCheck () {
      this.$axios.get('users.json').then((res) => {
        console.log(res.data)
        const result = res.data.filter(el => el.id === this.params.id)
        if (result.length > 0) {
          if (result[0].pw !== this.params.password) {
            alert('비밀번호를 확인해주세요')
          } else {
            Cookies.set('user', this.params.id)
            this.$router.push({ name: 'Home' })
          }
        } else {
          alert('아이디를 확인해주세요')
        }
      })
    }
  }
}
</script>
