<template>
  <div class="grid-layout"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GridLayout extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-layout {
  width: 100%;
  height: 100%;
  display: grid;
  display: -ms-grid;

  &.grid-justify-container {
    &-start {
      justify-content: start;
    }
    &-end {
      justify-content: end;
    }
    &-center {
      justify-content: center;
    }
    &-stretch {
      justify-content: stretch;
    }
    &-around {
      justify-content: space-around;
    }
    &-between {
      justify-content: space-between;
    }
  }
  &.grid-align-container {
    &-start {
      align-content: start;
    }
    &-end {
      align-content: end;
    }
    &-center {
      align-content: center;
    }
    &-stretch {
      align-content: stretch;
    }
    &-around {
      align-content: space-around;
    }
    &-between {
      align-content: space-between;
    }
  }
  &.grid-justify-item {
    &-start {
      justify-items: start;
    }
    &-end {
      justify-items: end;
    }
    &-center {
      justify-items: center;
    }
    &-stretch {
      justify-items: stretch;
    }
  }
  &.grid-align-item {
    &-start {
      align-items: start;
    }
    &-end {
      align-items: end;
    }
    &-center {
      align-items: center;
    }
    &-stretch {
      align-items: stretch;
    }
  }
}
</style>
