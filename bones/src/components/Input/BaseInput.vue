<template>
  <input type="text" class="base-input">
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseInput extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-input {
  width: 100%;
  padding: 5px 10px;
  border: 1px #000 solid;
  border-radius: 5px;
  font-size: 14px;
  line-height: 20px;
  &.large {
    font-size: 16px;
    line-height: 24px;
    padding: 10px 30px;
  }
  &.small {
    font-size: 12px;
    line-height: 18px;
    padding: 3px 5px;
  }
}
</style>
