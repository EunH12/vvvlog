<template>
  <button
    :title="text"
    class="click-button"
    :class="dynamicClass"
    :style="dynamicStyle"
    :disabled="disabled"
    @click="click"
  >
    <template>
      {{ buttonIconStyle.iconStyle === 'textEnd' ? text : '' }}
      <div
        v-if="buttonIconStyle.iconName !== null"
        :class="{
          [`${buttonIconStyle.iconType}__icon-part`]: true,
          [buttonIconStyle.iconStyle]: buttonIconStyle.iconStyle
        }"
      >
        <svg-icons
          :content="buttonIconStyle.iconName"
          :size="buttonIconStyle.iconSize"
          title="switch"
        />
      </div>
      {{ buttonIconStyle.iconStyle !== 'textEnd' ? text : '' }}
    </template>
  </button>
</template>

<script>
export default {
  name: 'ClickButton',
  components: {},
  props: {
    /** 버튼명 */
    text: {
      type: String,
      default: null
    },
    /** 버튼 가로사이즈 default 100%, `px`로 작성 */
    width: {
      type: String,
      default: null
    },
    /** 버튼 높이 사이즈 default 50px, `px`로 작성 */
    height: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 버튼 스타일 지정
     *
     * 배경색 옵션 `black, grey, lightgrey, error-color(red), white`
     *
     * 배경 형태 옵션 `outline` , 글자색옵션 `black-font`
     *
     * 배경색 + 배경형태 + 글자색 조합 해서 사용
    */
    backgroundType: {
      type: String,
      default: 'base'
    },
    /**
     * 버튼에 아이콘 추가시 사용
     *
     * - iconType : `sideIcon`양끝아이콘, `textIcon`글자 옆 아이콘
     *
     * - iconName: 아이콘 모양 svg에 있는 아이콘만 사용가능
     *
     * - iconStyle: 아이콘 위치
     *
     * sideIcon 일때 기본은 오른쪽 왼쪽은 `left`추가,
     * textIcon 일때 기본은 텍스트 앞, 끝에 두고싶을 때 `textEnd`추가
     *
     * - iconSize: 아이콘 사이즈 지정
    */
    buttonIconStyle: {
      type: Object,
      default: () => {
        return {
          iconType: null,
          iconName: null,
          iconStyle: null,
          iconSize: 14
        }
      }
    },
    /** 버튼에 지정되지 않은 컬러 사용 시 `#028ee6` */
    backgroundColor: {
      type: String,
      default: null
    },
    /** 버튼 왼쪽에 인풋박스 추가시 */
    buttonLeftInput: {
      type: Boolean,
      default: false
    },
    /** 버튼 왼쪽정렬 */
    isSide: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dynamicClass () {
      return {
        [this.backgroundType]: true,
        [this.buttonIconStyle.iconType]: this.buttonIconStyle.iconType,
        'button-left-input': this.buttonLeftInput,
        'click-button--side': this.isSide
      }
    },
    dynamicStyle () {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.backgroundColor
      }
    }
  },
  methods: {
    click () {
      /**
       * click event
       * @type {Event}
       */
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.click-button {
  position: relative;
  display: block;
  width: 100%;
  height: $base-button-height;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  border-radius: $base-border-radius;
  color: $white;
  fill: $white;
  stroke: $white;
  transition-duration: 0.3s;
  line-height: 0.8 !important;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.base {
    background: $base-color;
  }
  &.grey {
    background: $grey-light1;
  }
  &.lightgrey {
    background: $grey-light4;
  }
  &.black {
    background: $black;
  }
  &.white {
    background: $white;
    color: $base-color;
    fill: $base-color;
    stroke: $base-color;
  }
  &.error-color {
    background: $error-color;
  }
  &.black-font {
    color: $black;
    fill: $black;
    stroke: $black;
  }
  &.white-font {
    color: $white;
    fill: $white;
    stroke: $white;
  }
  /* 테두리버튼 */
  &.outline {
    color: $base-color;
    fill: $base-color;
    stroke: $base-color;
    background: $white;
    border: 1px solid $base-color;
    &.grey {
      color: $grey-light1;
      fill: $grey-light1;
      stroke: $grey-light1;
      background: $white;
      border: 1px solid $grey-light1;
    }
    &.lightgrey {
      color: $grey-light4;
      fill: $grey-light4;
      stroke: $grey-light4;
      background: $white;
      border: 1px solid $grey-light4;
    }
    &.black {
      color: $black;
      fill: $black;
      stroke: $black;
      background: $white;
      border: 1px solid $black;
    }
    &.error-color {
      color: $error-color;
      fill: $error-color;
      stroke: $error-color;
      background: $white;
      border: 1px solid $error-color;
    }
    &.black-font {
      color: $black;
      fill: $black;
      stroke: $black;
    }
    &.white-font {
      color: $white;
      fill: $white;
      stroke: $white;
    }
    &.gradient-border {
      @include gradient-border;
    }
  }
  /* 양쪽 아이콘 */
  &.sideIcon {
    padding: 0 30px;
  }
  /*버튼 내부 아이콘 */
  .sideIcon {
    &__icon-part {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translate(0, -50%);
      &.left {
        right: auto;
        left: 10px;
      }
    }
  }
  /* 텍스트옆 아이콘 */
  .textIcon {
    &__icon-part {
      display: inline-block;
      vertical-align: text-bottom;
      &.left {
        margin-left: 5px;
      }
    }
  }
  /* 동그라미버튼 */
  &.circle {
    border-radius: 50%;
  }
  /* 내부 다중텍스트 */
  &.button-flex {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    .price {
      font-weight: 500;
    }
  }
  /* 왼쪽에 인풋 있을 때*/
  &.button-left-input {
    border-radius: 0 $base-border-radius $base-border-radius 0;
    height: $base-input-height;
  }
  &.gradient-background {
    background: $gradient-dark
  }
  /* input*/
  &--input {
    height: $base-input-height;
  }
  &--side {
    text-align: left;
    padding-left: 12px !important;
  }
}
.search-form {
  .click-button--input {
    border: 1px solid $grey-light7;
    color: $black;
    background: $white;
    fill: $black;
    stroke: $black;
  }
}
</style>
