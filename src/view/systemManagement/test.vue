<template>
  <div id="main">
      {{msg}}
  </div>
</template>

<script>
import echarts from 'echarts'
import lodash from 'lodash'
export default {
  name: 'App',
  data () {
    return {
      msg: '系统管理test1'
    }
  },
  mounted(){
    console.log('echarts',echarts)
    console.log('lodash',lodash)
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
