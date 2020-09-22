<template>
  <div class="side">
    <SideMenu :menus="menus" />
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue";
import { request } from "../utils/common.js";

export default {
  name: "Side",
  components: {
    SideMenu,
  },
  props: {},
  data: () => {
    return {
      menus: [],
    };
  },
  methods: {},
  mounted() {
    request({
      url: "./data/menus.json",
    })
      .then((res) => {
        this.menus = res.data;
      })
      .catch((err) => {
        console.error(err);
        this.menus = [];
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side {
  width: 320px;
  padding: 0 10px;
  height: 100vh;
  background: #fafafa;
  border-right: 1px #c3c3c3 solid;
  text-align: left;
}
</style>
