<template>
  <div id="app">
    <radial-menu
      style="margin: auto; margin-top: 300px; background-color: white"
      :itemSize="100"
      :radius="150"
      :angle-restriction="100"
    >
      <radial-menu-item
        v-for="(item, index) in items"
        :key="index"
        style="background-color: white"
        @click="() => handleClick(item)"
      >
        <span>{{ item }}</span>
      </radial-menu-item>
    </radial-menu>
    <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>
  </div>
</template>

<script>
import router from ".././router";
import { RadialMenu, RadialMenuItem } from "vue-radial-menu";

export default {
  name: "app",
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data() {
    return {
      items: ["Home", "Add Episode", "Sort By Name >", "Sort By Name <"],
      lastClicked: "Navigate!"
    };
  },
  methods: {
    handleClick(item) {
      this.lastClicked = item;
      switch (item) {
        case "Home":
          router.push({ path: "/" });
          break;
        case "Add Episode":
          router.push({ path: "/addepisode" });
          break;
        case "Sort By Name >":
          this.$emit("SortByNameAsc");
          break;
        case "Sort By Name <":
          this.$emit("SortByNameDes");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.vue-radial-menu-wrapper {
  margin: 150px auto auto;
}
</style>
