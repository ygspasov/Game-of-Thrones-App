<template>
  <md-content class="md-elevation-3">
    <img :src="episode.image.medium" alt />

    <h4>{{episode.name}}</h4>
    <span>Season: {{episode.season}}</span> |
    <span>Episode: {{episode.number}}</span>
    <p>Date: {{episode.airdate | formatDate}}</p>
    <p>Time: {{episode.airtime}}</p>

    <p>Summary: {{episode.airtime}}</p>
  </md-content>
</template>

<script>
export default {
  props: {
    episode: { type: Object, required: true }
  }
};
</script>

<style scoped>
.md-content {
  width: 200px;
  margin: 24px;
  padding: 10px;
}
</style>