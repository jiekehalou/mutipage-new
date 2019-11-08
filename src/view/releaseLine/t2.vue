<template>
  <div id="main">
      {{msg}}
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'App',
  data () {
    return {
      msg: '放行sssss'
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
