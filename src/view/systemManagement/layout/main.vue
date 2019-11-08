<template>
  <div id="main">
      {{msg}}
      <router-link to="/Test">Test</router-link>
    <router-link to="/Test2">Test2</router-link>
    <router-link to="/Test3">Test3</router-link>
     <router-view/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'App',
  data () {
    return {
      msg: '系统管理main 3个'
    }
  },
  mounted(){
    console.log('echarts',echarts)

  }
}
</script>

<style lang="less" scoped>
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
