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
  width: 100%;
  height: 100%;
  display: grid;
  display: -ms-grid;
}
</style>
