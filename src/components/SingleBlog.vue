<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <ul>
      <li v-for='(category,index) in blog.categories' :key='index'>
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data () {
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    var that = this
    // this.$axios.get('https://jsonplaceholder.typicode.com/posts/'
    this.$axios.get('https://my-vuedemo-bc07d.firebaseio.com/posts/'
    + this.id +'.json')
    .then(function(data){
      console.log(data)
      that.blog = data.data;
    })
  }
}
</script>


<style scoped>
#single-blog{
    max-width:960px;
    margin:0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>