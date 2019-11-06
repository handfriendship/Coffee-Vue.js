<template>
  <li class="memo-item">
    <strong>{{ propsdata.title }}</strong>
    <p v-on:dblclick="handleDblClick">
      <template v-if="EditingId!==propsdata.id">{{propsdata.content}}</template>
      <input v-else
              type="text"
              ref="content"
              :value="propsdata.content"
              v-on:keydown.enter="updateMemo"
              v-on:blur="blurMemo"
              />
    </p>
    <button>
      <i class="fas fa-times" v-on:click="delMemo"></i>
    </button>
  </li>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapState} from 'vuex';

export default {
  props: {
    propsdata: {
      type: Object,
    },
    EditingId: {
      type: Number,
    }
  },
  data(){
    return {
      changedData: ''
    }
  },
  methods: {
    delMemo: function(){
      this.$emit('delMemo', this.propsdata.id);
    },
    handleDblClick: function(){
      // this.$store.commit('isclickedFalse');
      // this.$nextTick(function(){
      //   this.$refs.content.focus();
      // });
      this.$store.commit('setEditingId', this.propsdata.id);
      this.$nextTick(function(){
        if(this.EditingId === this.propsdata.id){
          this.$refs.content.focus();
        }
      })
    },
    updateMemo: function(e){
      console.log("Memo => updateMemo called!");
      var id = this.propsdata.id;
      var content = e.target.value.trim();
      if(content.length <= 0){
        return false;
      }
      this.$emit('update', {id, content});
      // this.$store.commit('isclickedFalse');
      // this.$store.commit('setEditingId', id);
    },
    blurMemo: function(){
      // this.$store.commit('isclickedTrue');
      if(this.EditingId === this.propsdata.id){
        this.$store.commit('resetEditingId');
      }
    }
  },
  watch: {
    propsdata: function(){
      // console.log("watch detects something related to propsdata");
      // console.log("propsdata : ", this.propsdata);
      // this.$store.commit('isclickedTrue');
      console.log("watch => propsdata : ", this.propsdata.id);
      this.$store.commit('resetEditingId');
    },
    EditingId: function(){
      console.log("watch => EditingId : ", this.EditingId);

    }
  },
  computed: {
    // ...mapState([
    //   'EditingId',
    // ]),
  }
}
</script>

<style scoped>
  .memo-item {
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    padding: 24px;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    list-style: none;
  }
  .memo-item input[type="text"] {
    border: 1px solid #ececec;
    font-size: inherit;
  }
  .memo-item button {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e5e5;
    border: 0;
  }
  .memo-item strong {
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: normal;
    word-break: break-all;
  }
  .memo-item p {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    color: #666;
  }
  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
  }
  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
  }
</style>
