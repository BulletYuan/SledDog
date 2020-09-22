<template>
  <div class="side-menu">
    <ul v-for="menu of menus" :key="menu.id">
      <li :draggable="menu.children?false:true" @dragstart="onDragStart($event,menu)">
        <template v-if="menu.children">
          <a>{{menu.label}}</a>
          <SideMenu :menus="menu.children" />
        </template>
        <template v-else>{{menu.label}}</template>
      </li>
    </ul>
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue";

export default {
  name: "SideMenu",
  components: {
    SideMenu,
  },
  props: {
    menus: Array,
  },
  methods: {
    onDragStart(e, menu) {
      if (menu.children) return;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", JSON.stringify(menu));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-menu li {
  padding: 20px 10px;
  border-bottom: 1px #c3c3c3 solid;
}
.side-menu li:last-child {
  border-bottom: none;
}
.side-menu ul ul {
  margin-top: 20px;
  padding-left: 20px;
}
</style>
