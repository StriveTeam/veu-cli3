import cusComponents from './components/index'
export default {
  install (vue) {
    /** 添加自定义组件 */
    cusComponents.forEach(com => {
      vue.component(com.name, com.component)
    })
  }
}
