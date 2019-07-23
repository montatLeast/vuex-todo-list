<template>
  <div class="listitem">
    <div class="list-item">
      <label  :class="{ isSelected: item1.status}"> {{idx + 1}}.</label>
      <input class="check-box" type="checkbox" name="checkbox" v-model="item1.status" />
      <!--<span :class="{ drawLine: item1.status}" @dblclick="openEdit(item1)">{{ item1.content }}</span>-->
      <input id="edit" class="edit" v-if="editable"
        v-model="editText" @keydown.enter="finishEdit(item1)" />
        <span :class="{ drawLine: item1.status}" @dblclick="openEdit(item1)" v-else>{{ item1.content }}</span>
      <button class="delete" @click="deleteSelf(item1)">×</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "listitem",
  props: {
    item1: Object,
    idx : Number
  },
  data() {
    return {
      editText: null,
      editable: false,
    };
  },
  methods: {

    openEdit(item) {
      this.editText = item.content;
      this.editable = true;
    },
    finishEdit(item) {
      let item1 = {};
      item1.id = item.id;
      item1.content = item.content;
      if (this.editText != null) {
        item1.content = this.editText;
      }
      this.editable = false;
      this.$store.dispatch("updateItem", item1);
    },
    deleteSelf(item){
      this.$store.dispatch("deleteItem", item);
    }
  }
};
</script>

<style scoped>
</style>
