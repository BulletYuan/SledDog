<template>
  <h1 class="title-text">{{content}}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TitleText extends Vue {
  @Prop() content:string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-text {
  display: inline-block;
  font-size: 22px;
  line-height: 28px;
  &.large {
    font-size: 24px;
    line-height: 32px;
  }
  &.small {
    font-size: 20px;
    line-height: 26px;
  }
  &.block {
    width: 100%;
    display: block;
  }
}
</style>
