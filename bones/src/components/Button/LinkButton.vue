<template>
  <a class="link-button"></a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LinkButton extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link-button {
  text-decoration: underline;
  padding-bottom: 5px;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  display: inline-block;
  cursor: pointer;
  &.block {
    width: 100%;
    text-align: center;
    display: block;
  }
  &.large {
    font-size: 16px;
    line-height: 24px;
  }
  &.small {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
