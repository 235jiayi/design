import { createStore } from 'vuex'
const setLocalUser = (state) => {
  const { user } = state
  const userString = JSON.stringify(user)
  localStorage.user = userString
}
const getLocalUser = () => {
  if (localStorage.user) return JSON.parse(localStorage.user)
  return {}
}
const setLocalList = (state) => {
  const { list } = state
  const listString = JSON.stringify(list)
  localStorage.list = listString
}
const getLocalList = () => {
  if (localStorage.list) return JSON.parse(localStorage.list)
  return {}
}
const setLocalRember = (state) => {
  const { rember } = state
  const remberString = JSON.stringify(rember)
  localStorage.rember = remberString
}
const getLocalRember = () => {
  if (localStorage.rember) return JSON.parse(localStorage.rember)
  return false
}
export default createStore({
  state: {
    user: getLocalUser(),
    list: getLocalList(),
    rember: getLocalRember()
  },
  getters: {},
  mutations: {
    Register(state, payload) {
      state.user.login = payload.login
      state.user.register = payload.register
      state.user.username = payload.username
      state.user.password = payload.password
      setLocalUser(state)
    },
    Commend(state, payload) {
      state.list.push(payload)
      setLocalList(state)
    },
    Init(state, payload) {
      state.list = []
      setLocalList(state)
    },
    Login(state, payload) {
      state.user.login = true
      setLocalUser(state)
    },
    Logout(state, payload) {
      state.user.login = false
      setLocalUser(state)
    },
		Rember(state, payload) {
			state.rember = payload
			console.log(payload)
      setLocalRember(state)
    }
  },
  actions: {},
  modules: {}
})
