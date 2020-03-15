import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export const baseRouter = [
  {
    path: '/',
    name:ShowBlogs,
    component:ShowBlogs
  },
  {
    path: '/add',
    name:AddBlog,
    component:AddBlog
  },
  {
    path: '/blog/:id',
    name:SingleBlog,
    component:SingleBlog
  }
]

export default new Router({
  routes: baseRouter,
  mode:'history'
})
