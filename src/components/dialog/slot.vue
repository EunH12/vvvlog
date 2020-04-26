<template>
  <div :class="{'dialog--view': dialogShow}" class="dialog dialog-component">
    <div class="dialog__widget">
      <div class="dialog__wrap">
        <div v-if="title" class="dialog__title">
          <slot name="title" />
        </div>
        <div class="dialog__contents">
          <slot />
        </div>
      </div>
      <div class="dialog__buttons" justify="end">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogSlot',
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/sass/global/_all.scss';
</style>
