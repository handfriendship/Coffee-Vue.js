<template>
  <div class="memo-app">
    EditingId : {{EditingId}}<br/>
    <memo-form v-on:register="addMemo"/>
    <ul class="memo-list" v-for="(memo, index) in memos">
      <memo v-bind:propsdata="memo" :key="memo.id" v-bind:EditingId="EditingId"
        @delMemo="deleteMemo" @update="editMemo"/>
    </ul>
  </div>
</template>

<script>
import Memo from './Memo';
import MemoForm from './MemoForm';
import axios from 'axios';
import {mapGetters} from 'vuex';
import {mapActions, mapState} from 'vuex';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})
export default {
  name: 'MemoApp',
  components: {
    Memo,
    MemoForm,
  },
  created() {
    this.fetchMemos();
  },
  methods: {
    updateMemo: function(payload){
      var {id, content} = payload;
      this.$store.dispatch('editMemo', {id, content});
    },
    ...mapActions([
      'fetchMemos', 'deleteMemo', 'addMemo','editMemo'
    ]),
  },
  computed: {
    ...mapGetters([
      'getLength', 'getMemos'
    ]),
    ...mapState([
      'memos', 'EditingId'
    ])
  }
}
</script>

<style scoped>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
</style>
