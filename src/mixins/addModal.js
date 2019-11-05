// 添加编辑页面公用数据模型
export default {
  props: {
    propsData: {
      type: Object
    }
  },
  data () {
    return {
      button: {
        loading: false, // 确定按钮状态
        text: '确定' // 按钮默认文字
      },
      loading: false,
      saveLoading: false,
      loadingText: null
    }
  },
  methods: {
    onCancel () {
      this.$emit('close')
    }
  }
}
