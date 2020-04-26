<template>
  <div id="dialog" :class="{'dialog--view': dialogShow, [dialog.addClass]: dialog.addClass} " class="dialog">
    <div class="dialog__widget">
      <div class="dialog__wrap">
        <div v-if="dialog.title" class="dialog__title">
          {{ dialog.title }}
        </div>
        <div class="dialog__contents" v-html="dialog.contents" />
      </div>
      <div class="dialog__buttons" justify="end">
        <button v-show="!isAlert" @click="cancel">취소</button>
        <button @click="ok" class="enter">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { SET_DIALOG_CLOSE } from '@/store/dialog'
export default {
  name: 'DialogStore',
  computed: {
    ...mapState({
      dialog: ({ dialog }) => dialog,
      dialogShow: ({ dialog }) => dialog.show,
      dialogOk: ({ dialog }) => dialog.ok
    }),
    isAlert () {
      return this.dialog.type === 'alert'
    }
  },
  watch: {
    dialogShow (value) {
      setTimeout(() => {
        if (value === true) {
          document.activeElement.blur()
          document.addEventListener('keyup', this.ok, true)
          document.addEventListener('keyup', this.cancel, true)
        } else {
          document.removeEventListener('keyup', this.ok, true)
          document.removeEventListener('keyup', this.cancel, true)
        }
      }, 500)
    }
  },
  methods: {
    ...mapMutations([
      SET_DIALOG_CLOSE
    ]),
    ok (e) {
      if (e instanceof KeyboardEvent && e.code !== 'Enter') {
        return
      }
      this.SET_DIALOG_CLOSE()
      if (this.dialog.redirectUrl !== null) {
        this.$router.push(this.dialog.redirectUrl)
      } else if (this.dialog.callback !== null) {
        this.dialog.callback()
      }
    },
    cancel (e) {
      if (e instanceof KeyboardEvent && e.code !== 'Escape') {
        return
      }
      this.SET_DIALOG_CLOSE()
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/sass/global/_all.scss';
</style>
