<template>
  <div class="space" @drop="onDrop" @dragover="onDragOver"></div>
</template>

<script>
export default {
  name: "Space",
  props: {},
  methods: {
    onDrop(e) {
      e.preventDefault();
      if (e.dataTransfer) {
        const hash = e.dataTransfer.getData("text/plain");
        console.log(JSON.parse(hash));
      }
      return false;
    },
    onDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";

      return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  background: #fafafa;
  border-right: 1px #c3c3c3 solid;
  text-align: left;
}
.side li {
  padding: 20px 10px;
  border-bottom: 1px #c3c3c3 solid;
}
.side li:last-child {
  border-bottom: none;
}
.side ul ul {
  margin-top: 20px;
  padding-left: 20px;
}
</style>
