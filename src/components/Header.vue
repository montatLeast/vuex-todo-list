<template>
  <div class="listHeader">
    <div>
      <h1 id="title">Vue To Do List</h1>
      <i id="intro">Simple Todo List with adding and filter by diff status</i>
    </div>
    <input id="input_item" type="text" v-model="nextItem" />
    <button id="button_add" @click="addNewItem">Add</button>
  </div>
</template>

<script>


export default {
  name: "listHeader",
  data() {
    return {
      nextItem: ""
    };
  },
  methods: {
    addNewItem() {
      this.$store.dispatch("addItem", this.nextItem);
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
