<template>
  <p class="content-text"></p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContentText extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-text {
  font-size: 14px;
  line-height: 20px;
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
