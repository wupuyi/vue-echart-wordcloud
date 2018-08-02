<template>
  <div id="app">
    <vue-echart-wordcloud
      :chart-content="myWord"
      :chart-width="800"
      :chart-height="300"
    ></vue-echart-wordcloud>
  </div>
</template>

<script>
import VueEchartWordcloud from "./components/VueEchartWordcloud";
export default {
  name: "app",
  data () {
    return {
      msg: "Welcome to Your Vue.js App",
      myWord: [
        {
          name: "Sam S Club",
          value: 10000
        },
        {
          name: "Macys",
          value: 618
        },
        {
          name: "Amy Schumer",
          value: 4386
        },
        {
          name: "Jurassic World",
          value: 4055
        },
        {
          name: "Charter Communications",
          value: 2467
        },
        {
          name: "Chick Fil A",
          value: 2244
        },
        {
          name: "Planet Fitness",
          value: 1898
        },
        {
          name: "Pitch Perfect",
          value: 1484
        },
        {
          name: "Express",
          value: 1112
        },
        {
          name: "Home",
          value: 965
        },
        {
          name: "Johnny Depp",
          value: 847
        },
        {
          name: "Lena Dunham",
          value: 582
        },
        {
          name: "Lewis Hamilton",
          value: 555
        },
        {
          name: "KXAN",
          value: 550
        },
        {
          name: "Mary Ellen Mark",
          value: 462
        },
        {
          name: "Farrah Abraham",
          value: 366
        },
        {
          name: "Rita Ora",
          value: 360
        },
        {
          name: "Serena Williams",
          value: 282
        },
        {
          name: "NCAA baseball tournament",
          value: 273
        },
        {
          name: "Point Break",
          value: 265
        }
      ]
    };
  },
  components: {
    VueEchartWordcloud
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
