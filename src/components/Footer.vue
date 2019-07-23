<template>
  <div class="listFooter">
    <div class="buttons">
      <button class="selector" @click="getState('All')">ALL</button>
      <button class="selector" @click="getState('Active')">Active</button>
      <button class="selector" @click="getState('Complete')">Complete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "listFooter",
  data() {
    return {
        
    };
  },
  methods: {
    getState(msg) {
      this.$store.commit("showByItemStatus", msg);
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
