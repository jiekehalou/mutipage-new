<template>
  <div id="main">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '运行限制main'
    }
  },
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
