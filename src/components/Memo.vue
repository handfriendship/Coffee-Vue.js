<template>
  <li class="memo-item">
    <strong>{{ propsdata.title }} // {{propsindex}}</strong>
    <p >
      <template></template>
      <input v-model="propsContent"/>
    </p>
    <button>
      <i class="fas fa-times" v-on:click="delMemo"></i>
    </button>

  </li>

</template>

<script>


export default {
  name: 'Memo',
  props: ['propsdata', 'propsindex'],
  data(){
    return {
      msg: 'Hello World', propsContent: this.propsdata.content,
    }
  },
  watch: {

  },
  methods: {
    delMemo: function(){
      this.$emit('delMemo', this.propsindex);
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
