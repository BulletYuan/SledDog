<template>
  <h3 class="sub-title-text"></h3>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SubTitleText extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sub-title-text {
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  &.large {
    font-size: 20px;
    line-height: 28px;
  }
  &.small {
    font-size: 16px;
    line-height: 20px;
  }
  &.block {
    width: 100%;
    display: block;
  }
}
</style>
