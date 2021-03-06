import VueEchartWordcloud from "./VueEchartWordcloud.vue";

const comment = {
    install: function (Vue) {
        Vue.component(VueEchartWordcloud.name, VueEchartWordcloud);
    }
}

// global 情况下自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}

// 导出模块
export default comment;