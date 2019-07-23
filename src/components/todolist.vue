<template>
  <div class="todolist">
    <ol>
    <li is="listitem" v-for="(item,index) in itemShow" :class="{even : index%2==0}" 
    v-bind:key="index" v-bind:item1="item" v-bind:idx="index"></li>
    </ol>
  </div>
</template>

<script>
import listitem from "./list-item.vue";

export default {
  name: "todolist",
  components: {
    listitem
  },
  computed: {
    itemShow(){
      return this.$store.state.items_show;
    }
  }
};
</script>

<style scoped>
@import url(../../public/static/css/all.css);
</style>
