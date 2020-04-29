<template>
  <div id="app">
    <div class="container">
      <ContentText :content="html"/>
    </div>
    <div class="container">
      <SubTitleText :content="html"/>
    </div>
    <div class="container">
      <TitleText :content="html"/>
    </div>
    <div class="container">
      <BaseButton :content="html"/>
    </div>
    <div class="container">
      <LinkButton :content="html"/>
    </div>
    <div class="container">
      <BaseInput :content="html"/>
    </div>
    <div class="container">
      <MultipleInput :content="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLayout from "./components/Layout/BaseLayout.vue";
import FlexLayout from "./components/Layout/FlexLayout.vue";
import GridLayout from "./components/Layout/GridLayout.vue";

import ContentText from "./components/Text/ContentText.vue";
import SubTitleText from "./components/Text/SubTitleText.vue";
import TitleText from "./components/Text/TitleText.vue";

import BaseButton from "./components/Button/BaseButton.vue";
import LinkButton from "./components/Button/LinkButton.vue";

import BaseInput from "./components/Input/BaseInput.vue";
import MultipleInput from "./components/Input/MultipleInput.vue";

@Component({
  components: {
    BaseLayout,
    FlexLayout,
    GridLayout,

    ContentText,
    SubTitleText,
    TitleText,

    BaseButton,
    LinkButton,

    BaseInput,
    MultipleInput
  }
})
export default class App extends Vue {
  html = "hello world!";
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .container {
    margin-bottom: 20px;
    * {
      // padding: 0;
      // margin: 0;
      // border: none;
      // outline: none;
      box-sizing: border-box;
    }
  }
}
</style>
