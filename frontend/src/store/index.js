import { createStore } from 'vuex'
import authApi from '@/api/authApi'
import postApi from '@/api/postApi'

export default createStore({
  state: {
    rut: null,
    remember_me: false
  },
  mutations: {
    loggin(state, { rut }) {
      state.rut = rut
      state.remember_me = true
    }
  },
  actions: {
    async loggin(context) {
      const remember_me = '1'
      const [rut, password] = arguments[1]
      const { data } = await authApi([rut, password, remember_me])
      if (data.message === "success login") {
        console.log("we did it");
        this.commit('loggin', {
          rut
        })
        return true
      } else {
        return data.message
      }
    },
    async getPost() {
      const min = 0
      const maxAmount = 15000000
      const maxStatus = 1
      const posts = await postApi()
      const postModified = posts.map((post) => ({
        ...post,
        'amount': Math.floor(Math.random() * (maxAmount - min)) + min,
        'status': Math.floor(Math.random() * (maxStatus - min)) + min
      }))
      return postModified
    },
  },
  modules: {
  }
})
