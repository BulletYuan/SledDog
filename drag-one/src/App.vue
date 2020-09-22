<template>
  <div id="app">
    <Side />
    <Space />
  </div>
</template>

<script>
import Side from "./components/Side.vue";
import Space from "./components/Space.vue";

export default {
  name: "App",
  components: {
    Side,
    Space,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li,
ol {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
