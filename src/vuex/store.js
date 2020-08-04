import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//注册Vuex
Vue.use(Vuex)

//状态
const  state = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')),
  userList: []
}

//mutations 主要用来操作 state
const mutations = {
  //保存用户数据
  SAVE_USERINFO(state,userInfo){
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
    state.userInfo = userInfo
  },
  //获取全局的用户数据
  GET_USERLIST (state, userlist){
    state.userList = userlist;
  }
}

//定义action 异步的 主要是 commit mutations 由mutations来改变状态
const actions = {
  GET_USERLIST ({ commit }) {
   return new Promise((resolve, reject) => {
     axios.get('http://localhost:8081/getuserlist').then(response => {
       commit('GET_USERLIST',response.data)
       resolve();
     })
   })
  }
}




//创建store仓库暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions
})

