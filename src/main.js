// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './axios'

Vue.config.productionTip = false
// Vue.use(axios)

//自定义指令 el指的绑定元素
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = '#' + Math.random().toString(16).slice(2,8)
//   }
// })

Vue.directive('theme',{
  //binding可以拿到给的参数
  bind(el,binding,vnode){
    if(binding.value == 'wide') {
      el.style.maxWidth = '1260px'
    }else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }

    if(binding.arg == 'column') {
      el.style.background = '#6677cc'
      el.style.padding = '20px'
    }
  }
})
//过滤器写法
// Vue.filter('to-upperCase',function(value){
//   return value.toUpperCase()
// })

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
