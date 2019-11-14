<template>
  <div class="search">
    <input type="text" v-model="search" @input="$emit('searchInput', search)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style>
input {
  height: 40px;
  width: 250px;
  border: 1px solid #eee;
  font-size: 20px;
  padding: 5px 10px;
}
</style>
