import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        nextItemId: 0,
        items_show: [],
        items_all: [],
        status: ""
    },
    mutations: {
        initAllItems(state, allItems) {
            state.items_all = Array.from(allItems);
            state.items_show = Array.from(allItems);
        },
        addItem(state, nextItem) {
            state.items_show.push(nextItem);
            state.items_all.push(nextItem);
        },
        showByItemStatus(state, msg) {
            if (msg === "All") {
                state.items_show = Array.from(state.items_all);
            } else if (msg === "Active") {
                state.items_show = state.items_all.filter(i => i.status === false);
            } else {
                state.items_show = state.items_all.filter(i => i.status === true);
            }
        },
        updateItem(state, item) {
            let i_selected = state.items_all.find(i => i.id === item.id);
            i_selected.content = item.content;
            window.console.log(i_selected);
        }
        ,
        deleteItem(state, item) {
            let i_selected = state.items_all.find(i => i.id === item.id);
            let idx_1 = state.items_show.indexOf(i_selected);
            state.items_show.splice(idx_1, 1);
            window.console.log(idx_1);
            let idx_2 = state.items_all.indexOf(i_selected);
            state.items_all.splice(idx_2, 1);
        }
    },
    actions: {
        addItem(context, nextContent) {
            let item = {
                content: nextContent,
                status: false
            }
            axios.post("http://localhost:8082/todoItems", item)
                .then(function (response) {
                    window.console.log(response);
                    context.commit('addItem', response.data);
                })
                .catch(function (error) {
                    alert("请不要输入重复值！");
                    window.console.log(error);
                });
        },
        getAllItems(context) {
            axios.get("http://localhost:8082/todoItems")
                .then(function (response) {
                    window.console.log(response);
                    context.commit('initAllItems', response.data);
                })
                .catch(function (error) {
                    window.console.log(error);
                });
        },
        updateItem(context, item) {
            axios.put('http://localhost:8082/todoItems/'+ item.id, item)
                .then(function (response) {
                    window.console.log(response);       
                    context.commit('updateItem', response.data);
                    
                })
                .catch(function (error) {
                    alert("请不要输入重复值！");
                    window.console.log(error);
                });
        },
        deleteItem(context, item){
            axios.delete('http://localhost:8082/todoItems/'+ item.id)
            .then(function (response) {
                window.console.log(response);
                context.commit('deleteItem', response.data);
            })
            .catch(function (error) {
                window.console.log(error);
            });
        }

    }
})