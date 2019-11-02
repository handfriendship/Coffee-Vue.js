<template>
  <div class="memo-app">
    <memo-form v-on:register="register"/>
    <ul class="memo-list" v-for="(memo, index) in memos">
      <memo v-bind:propsdata="memo" :key="memo.id"
        @delMemo="delMemo" @update="updateMemo"/>
    </ul>
  </div>
</template>

<script>
import Memo from './Memo';
import MemoForm from './MemoForm';

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
  methods: {
    register: function(value){
      // console.log("value : ", value);
      // console.log("EventBus Called!");
      this.memos.push(value);
      localStorage.setItem(value.title, value);
      this.$EventBus.$emit('arrLength', this.memos.length);
    },
    accept: function(){
      this.memos.push()
    },
    delMemo: function(id){
      console.log("id : ", id);
      var targetIndex = this.memos.findIndex(v => v.id === id);
      this.memos.splice(targetIndex, 1);
      this.storeMemo();
    },
    storeMemo: function(){
      localStorage.clear();
      for(memo in this.memos){
        localStorage.setItem(memo.id, memo);
      }
    },
    updateMemo: function(newContent, id){
      console.log("updateMemo called!");
      var targetIndex = this.memos.findIndex(element => element.id === id);
      console.log()
      this.memos.splice(targetIndex, 1, {...this.memos[targetIndex], content:newContent});
      this.storeMemo();
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
