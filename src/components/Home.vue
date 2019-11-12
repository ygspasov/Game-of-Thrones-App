
<template>
  <div class="page-container">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      menuVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>