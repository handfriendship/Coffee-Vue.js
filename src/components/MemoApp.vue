<template>
  <div class="memo-app">
    <memo-form />
    <ul class="memo-list" v-for="(memo, index) in memos">
      <memo v-bind:propsdata="memo" :propsindex="index" @delMemo="delMemo"/>
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
  beforeCreate() {
    console.log("beforeCreate called!");
  },
  created() {
    console.log("MemoApp created called!");
    this.$EventBus.$on('register', (value) => {
      // console.log("EventBus Called!");
      this.memos.push(value);
      localStorage.setItem(value.title, value);
      this.$EventBus.$emit('arrLength', this.memos.length);
      console.log("memos: ", this.memos);
      console.log("localStorage : ", localStorage);
    });

  },
  updated() {
    console.log("MempApp updated called!");
  },
  methods: {
    accept: function(){
      this.memos.push()
    },
    delMemo: function(index){
      // console.log("MemoApp delMemo called!");
      console.log("index : ", index);

      var localKey = this.memos[index].title;
      this.memos.splice(index, 1);
      localStorage.removeItem(localKey);
      this.$EventBus.$emit('arrLength', this.memos.length);

      console.log("memos: ", this.memos);
      console.log("localStorage : ", localStorage);
    }
  }
}
</script>

<style scoped>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
</style>
