<template>
  <v-app>
    <Header />
    <v-content>
      <router-view/>
    </v-content>
    <dialog-popup />
  </v-app>
</template>

<script>
import DialogPopup from '@/components/dialog/store'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header,
    DialogPopup
  },
  data: () => ({
    //
  })
}
</script>
