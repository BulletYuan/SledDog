<template>
  <button class="base-button"></button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-button {
  padding: 10px 30px;
  display: inline-block;
  border: 1px #000 solid;
  border-radius: 5px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  &.block {
    width: 100%;
    text-align: center;
    padding: 0;
    display: block;
  }
  &.large {
    font-size: 16px;
    line-height: 24px;
    padding: 30px 50px;
  }
  &.small {
    font-size: 12px;
    line-height: 18px;
    padding: 5px 10px;
  }
}
</style>
