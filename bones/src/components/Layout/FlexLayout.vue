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
  display: flex;
  display: -webkit-flex;

  &.flex-justify {
    &-start {
      justify-content: flex-start;
      -ms-flex-pack: start;
    }
    &-end {
      justify-content: flex-end;
      -ms-flex-pack: end;
    }
    &-center {
      justify-content: center;
      -ms-flex-pack: center;
    }
    &-around {
      justify-content: space-around;
      -ms-flex-pack: distribute;
    }
    &-between {
      justify-content: space-between;
      -ms-flex-pack: justify;
    }
  }
  &.flex-align {
    &-start {
      align-items: flex-start;
      -ms-flex-align: start;
    }
    &-end {
      align-items: flex-end;
      -ms-flex-align: end;
    }
    &-center {
      align-items: center;
      -ms-flex-align: center;
    }
    &-stretch {
      align-items: stretch;
      -ms-flex-align: stretch;
    }
  }
  &.flex-direction {
    &-column {
      flex-direction: column;
      -ms-flex-direction: column;
    }
    &-column-reverse {
      flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
    }
    &-row {
      flex-direction: row;
      -ms-flex-direction: row;
    }
    &-row-reverse {
      flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
    }
  }
  &.flex-wrap {
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    &-reverse {
      flex-wrap: wrap-reverse;
      -ms-flex-wrap: wrap-reverse;
    }
  }
}
</style>
