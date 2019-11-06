<template>
  <div class="app-header">
    <h1>Memo Application</h1>
    <p>{{getLength}} 개</p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {
      total: 0,
    }
  },
  created() {

  },
  // beforeMount() {
  //   console.log("AppHeader mounted called!");
  // },
  // updated() {
  //   console.log("AppHeader updated called!");
  // },
  computed: {
    ...mapGetters([
      'getLength'
    ])
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
