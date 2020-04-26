<template>
  <div :class="{'dialog--view': dialogShow}" class="dialog dialog-component">
    <div class="dialog__widget">
      <div class="dialog__wrap">
        <div v-if="title" class="dialog__title">
          {{ title }}
        </div>
        <div class="dialog__contents" v-html="contents" />
      </div>
      <div class="dialog__buttons" justify="end">
        <button v-show="!isAlert" @click="cancel">취소</button>
        <button @click="ok" class="enter">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogComponent',
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    },
    isAlert: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null
    },
    contents: {
      type: String,
      default: ''
    }
  },
  methods: {
    ok () {
      this.$emit('dialogComponentOk')
    },
    cancel () {
      this.$emit('dialogComponentCancel')
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/sass/global/_all.scss';
</style>
