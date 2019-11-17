<template>
  <div class="search">
    <md-field>
      <label>Search Episode</label>
      <md-input
        v-model="search"
        @input="$emit('searchInput', search)"
      ></md-input>
    </md-field>
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

<style scoped>
.search .md-field {
  width: 250px;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 5px 10px;
}
.search label {
  text-align: center;
  width: 100%;
}
</style>
