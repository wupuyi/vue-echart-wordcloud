<template>
  <div id="app">
    <vue-echart-wordcloud
      :chart-content="myWord"
      :textRotation="textRotation"
      :textMinSize="textMinSize"
      :chart-width="800"
      :chart-height="800"
    ></vue-echart-wordcloud>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myWord: [
        {
          name: "Sam S Club",
          value: 10000,
          itemStyle: '#FF83FA'
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
        },
        {
          name:"ercjul",
          value: 200
        }
      ],
      textRotation: [0,45],
      textMinSize: 5,
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
