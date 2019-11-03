<template>
  <li class="memo-item">
    <strong>{{ propsdata.title }}</strong>
    <p v-on:dblclick="handleDblClick">
      <template v-if="!isclicked">{{propsdata.content}}</template>
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

export default {
  props: {
    propsdata: {
      type: Object,
    }
  },
  created(){
  },
  updated(){
    // console.log("this.isclicked : ", this.isclicked);
    // var vm = this;
    // if(this.isclicked === true){
    //   console.log("if called!");
    //   this.setisclicked().then(function(){
    //     console.log("this.isclicked : ", vm.isclicked);
    //   }, function(error){
    //     console.log(error);
    //   })
    // } else {
    //   console.log("else called!");
    // }
  },
  data(){
    return {
      msg: 'Hello World', changedData: '', isclicked: false, keyEvent: {keyup: this.enterkey},

    }
  },
  methods: {
    delMemo: function(){
      this.$emit('delMemo', this.propsdata.id);
    },
    handleDblClick: function(){
      // console.log("handleDblClick called!");
      this.isclicked = true;
      // console.log("this.$refs.content: ", this.$refs.content);
      this.$nextTick(function(){
        // console.log("in nextTick");
        this.$refs.content.focus();
        // console.log("this.$refs.content: ", this.$refs.content);
      });
    },
    setisclicked: function(){
      // console.log("setisclicked called!");
      var vm = this;
      return new Promise(function(resolve, reject) {
        vm.isclicked = false;
        resolve(vm.isclicked);
        reject("Error");
      });
    },
    updateMemo: function(e){
      var content = e.target.value.trim();
      if(content.length <= 0){
        return false;
      }
      this.$emit('update', content, this.propsdata.id);
      this.isclicked = false;
    },
    blurMemo: function(){
      this.isclicked = false;
    }
  },
  watch: {
    propsdata: function(){
      // console.log("watch detects something related to propsdata");
      // console.log("propsdata : ", this.propsdata);
      this.isclicked = false;
    }
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
