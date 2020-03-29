<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type='text' v-model='search' placeholder="搜索...">
    <div class='single-blog' v-for='(blog,index) in filteredBlogs' :key='index' >
       <router-link :to="'/blog/' + blog.id">
           <h2 v-rainbow>{{blog.title | to-upperCase}}</h2>
       </router-link> 
        <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      blogs:[],
      search:''
    }
  },
  created(){
    var that = this
    //本地json文件只能放在static文件中
    // this.$axios.get('./../static/posts.json')
    this.$axios.get('https://my-vuedemo-bc07d.firebaseio.com/posts.json')
    .then(function(data){
      console.log(data)
      console.log(data.data)
      return data.data
      // that.blogs = data.data.slice(0,10);
      // console.log(that.blogs)
    })
    .then(function(data){
      var blogsArray = []
      for(let key in data){
        console.log(data[key])
        data[key].id = key
        blogsArray.push(data[key])
      }
      console.log(blogsArray)
      that.blogs = blogsArray
    })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },
  filters:{
      'to-upperCase':function(value){
          return value.toUpperCase()
      }
      //ES6写法
    //   toUpperCase(value){
    //       return value.toUpperCase()
    //   }
  },
  directives:{
      'rainbow':{
        bind(el,binding,vnode){
            el.style.color = '#' + Math.random().toString(16).slice(2,8)
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs{
    max-width:800px;
    margin:0 auto;
}

.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background: #eee;
    border:1px dotted #aaa;
}

#show-blogs a{
    color:#444;
    text-decoration: none;
}

input[type='text']{
    padding:8px;
    width:100%;
    box-sizing:border-box;
}
</style>
