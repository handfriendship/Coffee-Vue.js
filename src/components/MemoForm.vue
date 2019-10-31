<template>
  <div class="memo-form">
    MemoForm.vue
    <form>
      <fieldset>
        <input type="text" class="memo-form__title-form"
          placeholder="Enter the title " v-model="title" />
        <input type="text" class="memo-form__content_form"
          placeholder="Enter the content " v-model="content"/>
        <button type="reset">Reset</button>
        <button type="submit" v-on:click="register">Register</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data (){
    return {
      title: '', content: '',
      memoObj: { },
    }
  },
  created() {
    console.log("MemoForm created");
    // this.memoObj.title = this.title;
    // this.memoObj.content = this.content;
  },
  methods: {
    register: function(e){
      e.preventDefault();
      // console.log("memoObj : ", this.memoObj);
      this.$EventBus.$emit('register', this.memoObj);
      this.memoObj = {};
    }
  },
  watch: {
    title(data) {
      this.memoObj.title = data;
    },
    content: function(data){
      this.memoObj.content = data;
    },
  }
}
</script>

<style scoped>
  .memo-form {
    margin-bottom: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
  }
  .memo-form form fieldset div {
    position: relative;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
  .memo-form form fieldset div button[type="reset"] {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 16px;
    background: none;
  }
  .memo-form form fieldset button[type="submit"] {
    float: right;
    width: 96px;
    padding: 12px 0;
    border-radius: 4px;
    background-color: #ff5a00;
    color: #fff;
    font-size: 16px;
  }
  .memo-form form fieldset .memo-form__title-form {
    width: 100%;
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 26px;
  }
  .memo-form form fieldset .memo-form__content-form {
    width: 100%;
    height: 66px;
    font-size: 14px;
    line-height: 22px;
    vertical-align: top;
  }
  .memo-form input:focus {
    outline: none;
  }
</style>
