<template>
  <div class="flex-layout"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FlexLayout extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-layout {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
}
</style>
