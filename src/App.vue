<template>
  <div>
    <Header />
    <router-view/>
    <dialog-popup />
  </div>
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
