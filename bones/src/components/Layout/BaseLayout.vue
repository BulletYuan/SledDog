<template>
  <div class="base-layout"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseLayout extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-layout {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
