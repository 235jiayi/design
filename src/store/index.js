import { createStore } from 'vuex'
const setLocalUser = (state) => {
  const { login } = state
  const loginString = JSON.stringify(login)
  localStorage.login = loginString
}
const getLocalUser = () => {
  if (localStorage.login)
    return JSON.parse(localStorage.login)
  return {}
}
const setLocalList = (state) => {
  const { list } = state
  const listString = JSON.stringify(list)
  localStorage.list = listString
}
const getLocalList = () => {
  if (localStorage.list)
    return JSON.parse(localStorage.list)
  return {}
}
export default createStore({
  state: {
    login: getLocalUser(),
    list: getLocalList()
  },
  getters: {
  },
  mutations: {
    Login(state, payload) {
      state.login = payload
      setLocalUser(state)
    },
    Commend(state, payload) {
      state.list.push(payload)
      setLocalList(state)
    },
    Init(state, payload) {
      state.list = [];
      setLocalList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
