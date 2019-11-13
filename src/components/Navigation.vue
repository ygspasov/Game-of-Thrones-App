<template>
  <nav>
    <radial-menu :itemSize="100" :radius="140" :angle-restriction="140">
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
  </nav>
</template>

<script>
import router from ".././router";
import { RadialMenu, RadialMenuItem } from "vue-radial-menu";

export default {
  name: "navigation",
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data() {
    return {
      items: [
        "Home",
        "Add Episode",
        "Sort By Name >",
        "Sort By Name <",
        "Sort By Season & Episode"
      ],
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
        case "Sort By Season & Episode":
          this.$emit("SortBySE");
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
  margin: auto;
  margin-top: 200px;
  background-color: white;
}
</style>
