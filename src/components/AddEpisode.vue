<template>
  <div id="addForm">
    <md-field>
      <md-icon>event</md-icon>
      <label>Title</label>
      <md-input v-model="title"></md-input>
    </md-field>
    <md-field>
      <md-icon>event</md-icon>
      <label>Season</label>
      <md-input v-model="season"></md-input>
    </md-field>

    <md-field>
      <md-icon>event</md-icon>
      <label>Episode</label>
      <md-input v-model="episode"></md-input>
    </md-field>

    <md-field>
      <md-icon>event</md-icon>
      <label>Date</label>
      <md-input v-model="date"></md-input>
    </md-field>

    <md-field>
      <md-icon>event</md-icon>
      <label>Time</label>
      <md-input v-model="time"></md-input>
    </md-field>

    <md-field>
      <label>Learn more</label>
      <md-textarea v-model="description"></md-textarea>
      <md-icon>learnmore</md-icon>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "addepisode",
  data: () => ({
    date: null,
    voice: null,
    description: null,
    season: null,
    episode: null,
    title: null,
    time: null
  })
};
</script>

<style lang="scss" scoped>
.md-field:last-child {
  margin-bottom: 40px;
}
#addForm {
  max-width: 500px;
  margin: 0 auto;
}
</style>
