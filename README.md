# vue-echart-wordcloud

> 'vue和echarts文字云组件'

## 安装

``` bash

npm install --save vue-echart-wordcloud

```

## 使用

在`main.js`中注册

``` javascript
// 引入
import Vue from 'Vue'
import echartWordcloud from 'vue-echart-wordcloud'

Vue.use(echartWordcloud)

// 组件中使用
<vue-echart-wordcloud></vue-echart-wordcloud>

```

## 配置

```html

<vue-echart-wordcloud
    :chart-content="myWord"
    :chart-width="800"
    :chart-height="300"
></vue-echart-wordcloud>

```

### Props说明

|参数|作用|类型|必填|
|-----|-----|-----|-----|
|chart-content|文字云的内容|Array|必填|
|chart-width|文字云宽度|Number|必填|
|chart-height|文字云高度|Number|必填|

#### data数据格式

```javascript

[
    {
        // name为文字云内容
        name: "Sam S Club",
        // value为文字云权重
        value: 10000,
        // itemStyle是该文字颜色
        itemStyle: '#FF83FA'
    },
    {
        name: "Sam S Club",
        value: 10000,
        
    },
    {
        name: "Macys",
        value: 618,
        itemStyle: '#FFD700'
    },
    {
        name: "Amy Schumer",
        value: 4386,
        itemStyle: '#836FFF'
    }
]

```

## License

MIT
