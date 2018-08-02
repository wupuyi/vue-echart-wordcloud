import Vue from 'vue'
import App from './App.vue'
import echartWordcloud from './index'

Vue.use(echartWordcloud)

new Vue({
  el: '#app',
  render: h => h(App)
})
