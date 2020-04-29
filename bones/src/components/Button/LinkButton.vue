<template>
  <!-- <a class="link-button">{{content}}</a> -->
  <button class="link-button">{{content}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LinkButton extends Vue {
  @Prop() content: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link-button {
  background: none;
  text-decoration: none;
  padding-bottom: 3px;
  border: none;
  border-bottom: 1px #000 solid;
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
