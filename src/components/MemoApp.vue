<template>
  <div class="memo-app">
    <memo-form v-on:register="addMemo"/>
    <ul class="memo-list" v-for="(memo, index) in memos">
      <memo v-bind:propsdata="memo" :key="memo.id"
        @delMemo="delMemo" @update="updateMemo"/>
    </ul>
  </div>
</template>

<script>
import Memo from './Memo';
import MemoForm from './MemoForm';
import axios from 'axios';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})

export default {
  name: 'MemoApp',
  components: {
    Memo,
    MemoForm,
  },
  data() {
    return {
      memos: [],
    }
  },
  created() {
    console.log("MemoApp => created called!");
    memoAPICore.get('/')
      .then(res => {
        this.memos = res.data;
        console.log("this.memo : ", this.memos);
      })
      .catch(error => {
        console.log("MemoApp => created => error occured");
      });
  },
  methods: {
    addMemo: function(value){
      // console.log("value : ", value);
      console.log("MemoApp => addMemo Called!");
      console.log("MemoApp => addMemo value : ", value);
      // this.memos.push(value);
      // localStorage.setItem(value.title, value);
      this.$EventBus.$emit('arrLength', this.memos.length);

      memoAPICore.post('/', value).then(res => {
        console.log("res : ", res);
        console.log("res.data : ", res.data);
        console.log("MemoApp => memos : ", this.memos);
        this.memos.push(res.data);
      })
    },
    delMemo: function(id){
      console.log("id : ", id);
      var targetIndex = this.memos.findIndex(v => v.id === id);
      memoAPICore.delete(`${id}`).then(res => {
        this.memos.splice(targetIndex, 1);
      }).catch(error => {
        console.log("failed");
      })

      // this.storeMemo(id);
    },
    storeMemo: function(id){
      console.log("MemoApp => storeMemo called!");
      // localStorage.clear();
      // for(memo in this.memos){
      //   localStorage.setItem(memo.id, memo);
      // }
    },
    updateMemo: function(newContent, id){
      // console.log("updateMemo called!");
      var targetIndex = this.memos.findIndex(element => element.id === id);
      memoAPICore.put(`/${id}`, {...this.memos[targetIndex], content:newContent})
        .then(res => {
          this.memos.splice(targetIndex, 1, {...this.memos[targetIndex], content:newContent});
        });
    },
  }
}
</script>

<style scoped>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
</style>
