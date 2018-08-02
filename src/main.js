import Vue from 'vue'
import App from './App.vue'
// import echartWordcloud from './index'
import VueEchartWordcloud from 'vue-echart-wordcloud'

Vue.use(VueEchartWordcloud)

new Vue({
  el: '#app',
  render: h => h(App)
})
