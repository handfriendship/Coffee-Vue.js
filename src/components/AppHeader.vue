<template>
  <div class="app-header">
    <h1>Memo Application</h1>
    <p>{{total}} 개</p>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      total: 0,
    }
  },
  created() {
    console.log("AppHeader created called!");
    var vm = this;
    this.$EventBus.$on('arrLength', function(arrLength){
      console.log("AppHeader $EventBus called!");

      vm.total = arrLength;
    });
  },
  beforeMount() {
    console.log("AppHeader mounted called!");
  },
  updated() {
    console.log("AppHeader updated called!");
  },
  methods: {
    setTotal(value){
      console.log("setTotal called!");
      this.total = value;
    }
  },
  watch: {

  }
}
</script>

<style scoped>
  .app-header {
    overflow: hidden;
    padding: 52px 0 27px;
  }
  .app-header h1 {
    float: left;
    font-size: 24px;
    text-align: center;
  }
  .app-header p {
    float: right;
    padding-top: 6px;
    font-size: 18px;
    vertical-align: bottom;
  }
  .app-header p strong {
    color: #ff5a00;
  }
</style>
