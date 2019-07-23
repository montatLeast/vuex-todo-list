<template>
  <div id="app">
   
    <list-header></list-header>
    <todolist></todolist>
    <list-footer></list-footer>
  </div>
</template>

<script>
import todolist from './components/todolist.vue'
import listHeader from './components/Header.vue'
import listFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    listHeader,
    todolist,
    listFooter
  },
  created(){
    this.$store.dispatch("getAllItems");
  }
}
</script>

<style>

</style>
