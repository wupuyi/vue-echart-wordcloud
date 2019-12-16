<template>
  <div class="chart-container">
    <div
      class="chart"
      :style="setChartContainer"
    >
    </div>
  </div>
</template>

<script>
import echarts from "echarts/echarts";
import "echarts/chart/wordCloud";
export default {
  name: 'vue-echart-wordcloud',
  mounted () {
    this.editChartData();
    console.log(this.chartContent);
    this.drawChart();
  },
  methods: {
    drawChart () {
      // 初始化echarts实例
      let myChart = echarts.init(document.querySelector('.chart'));
      // 配置选项
      let charCloudOption = {
        itemStyle: {
          normal: {
            color: function () {
              let color = "";
              switch (colorType) {
                case 0 : {
                  let r = Math.floor(Math.random() * 225);
                  let g = Math.floor(Math.random() * 225);
                  let b = Math.floor(Math.random() * 225);
                  color = "rgb(" + r + "," + g + "," + b + ")";
                  break;
                }
                case 1 : {
                  color = this.wordsColor;
                  break;
                }
                default: {
                  break;
                }
              }
              return color;
            }
          }
        },
        series: [{
          // 文字云名称
          name: 'word cloud',
          // 图表类型
          type: 'wordCloud',
          // 文字云大小
          size: ['100%', '100%'],
          textRotation: this.textRotation,
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: this.textMinSize
          },
          data: this.chartContent
        }]
      };
      myChart.setOption(charCloudOption);
    },
    createItemStyle (color) {
      return {
        normal: {
          color: color==undefined?'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
              ].join(',') + ')':color
        }
      }
    },
    editChartData () {
      this.chartContent.forEach(item => {
        if (item.itemStyle) {
          let color = item.itemStyle;
          item.itemStyle = this.createItemStyle(color);
        }
      })
    }
  },
  computed: {
    setChartContainer () {
      return `width: ${this.chartWidth}px; height: ${this.chartHeight}px`;
    }
  },
  props: {
    // 文字云的宽度
    chartWidth: {
      type: Number,
      required: true
    },
    // 文字云的高度
    chartHeight: {
      type: Number,
      required: true
    },
    // 文字云的内容
    chartContent: {
      type: Array,
      required: true
    },
    textRotation:{
      type: Array,
      default: [-90,-45,0,45,90]
    },
    textMinSize:{
      type: Number,
      default: 12
    },
    // 文字云的文字的颜色
    wordsColor: {
      type: String
    },
    // 文字云的加载颜色的方案，0-随机颜色（此时词云组件的wordsColor不起作用），1-统一颜色（按照wordsColor颜色加载）
    colorType: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  background-color: transparent;
}
</style>
