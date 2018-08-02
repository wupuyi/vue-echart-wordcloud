import VueEchartWordcloud from "./components/VueEchartWordcloud";

const echartWordcloud = {
  install (Vue, options) {
    Vue.component(VueEchartWordcloud.name, VueEchartWordcloud);
  }
}

// global 情况下自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(echartWordcloud)
}

// 导出模块
export default echartWordcloud;