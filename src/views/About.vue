<template>
  <div class="about">
    자기소개<br>
    <button @click="dialogComponenAlert" class="openDialog">DialogComponent / 알럿형태</button><br>
    <button @click="dialogComponenConfirm" class="openDialog">DialogComponent / 컨펌형태</button><br>
    <button @click="dialogSlotAlert" class="openDialog">DialogSlot / 알럿형태</button><br>
    <button @click="dialogSlotConfirm" class="openDialog">DialogComponent / 컨펌형태</button><br>
    <button @click="dialogStoreAlert" class="openDialog">DialogStore / 알럿형태</button><br>
    <button @click="dialogStoreConfirm" class="openDialog">DialogStore / 컨펌형태</button><br>

    <DialogComponent
      :dialogShow="dialogComponentData.dialogShow"
      :isAlert="dialogComponentData.isAlert"
      :title="dialogComponentData.title"
      :contents="dialogComponentData.contents"
      @dialogComponentOk="dialogComponentOk"
      @dialogComponentCancel="dialogComponentCancel"
    />
    <DialogSlot
      :title="dialogSlottData.titleCheck"
      :dialogShow="dialogSlottData.dialogShow"
    >
      <template slot="title">
        {{dialogSlottData.title}}
      </template>
      {{dialogSlottData.contents}}
      <template slot="button">
        <button @click="dialogSlotOk" class="enter">확인</button>
      </template>
    </DialogSlot>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_DIALOG_OPEN } from '@/store/dialog'
import DialogSlot from '@/components/dialog/slot'
export default {
  name: 'About',
  components: {
    DialogSlot
  },
  data () {
    return {
      dialogComponentData: {
        dialogShow: false,
        isAlert: true,
        title: null,
        contents: ''
      },
      dialogSlottData: {
        dialogShow: false,
        title: null,
        titleCheck: false,
        contents: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_DIALOG_OPEN
    }),
    dialogComponenAlert () {
      this.dialogComponentData.title = '알럿형태'
      this.dialogComponentData.isAlert = true
      this.dialogComponentData.contents = '컴포넌트 형'
      this.dialogComponentData.dialogShow = true
    },
    dialogComponenConfirm () {
      this.dialogComponentData.title = null
      this.dialogComponentData.contents = '컴포넌트 형 컨펌'
      this.dialogComponentData.isAlert = false
      this.dialogComponentData.dialogShow = true
    },
    dialogComponentOk () {
      this.dialogComponentData.dialogShow = false
      console.log('확인')
    },
    dialogComponentCancel () {
      this.dialogComponentData.dialogShow = false
      console.log('취소')
    },
    dialogSlotAlert () {
      this.dialogSlottData.titleCheck = true
      this.dialogSlottData.title = '알럿형태'
      this.dialogSlottData.contents = '슬롯형'
      this.dialogSlottData.dialogShow = true
    },
    dialogSlotConfirm () {
      this.dialogSlottData.titleCheck = true
      this.dialogSlottData.title = '컨펌형태'
      this.dialogSlottData.contents = '슬롯형'
      this.dialogSlottData.dialogShow = true
    },
    dialogSlotOk () {
      this.dialogSlottData.dialogShow = false
      console.log('확인')
    },
    dialogSlotCancel () {
      this.dialogSlottData.dialogShow = false
      console.log('취소')
    },
    dialogStoreAlert () {
      this.SET_DIALOG_OPEN({
        contents: '스토어 사용 다이얼로그 알럿111111',
        type: 'alert',
        addClass: 'tet',
        callback: () => {
          console.log('확인')
        }
      })
    },
    dialogStoreConfirm () {
      this.$store.commit(SET_DIALOG_OPEN, {
        title: '스토어',
        contents: '컨펌형태',
        type: 'confirm'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .openDialog {
    display: inline-block;
    width: 300px;
    padding: 10px;
    margin: 5px;
    background: #eee;
    border-radius: 15px;
  }
</style>
