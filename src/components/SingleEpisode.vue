<template>
  <div>
    <p>{{episode.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    episode: { type: Object, required: true }
  }
};
</script>

<style>
</style>