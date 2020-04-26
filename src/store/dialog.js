export const SET_DIALOG_OPEN = 'SET_DIALOG_OPEN'
export const SET_DIALOG_CLOSE = 'SET_DIALOG_CLOSE'

export const state = () => ({
  show: false,
  title: '제목',
  contents: '컨텐츠',
  redirectUrl: null,
  type: 'alert', // alert, confirm
  callback: null,
  addClass: null
})
export const mutations = {
  [SET_DIALOG_OPEN] (state, { title, contents, type, callback, addClass }) {
    state.show = true
    state.title = title
    state.contents = contents
    state.type = type
    state.addClass = addClass
    state.callback = !callback ? null : callback
  },
  [SET_DIALOG_CLOSE] (state) {
    state.show = false
  }
}
export default {
  state,
  mutations
}
