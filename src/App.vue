<template>
  <div id="appVueBody">
    <div id="nav">
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/myCV">My CV</router-link>
      <router-link class="links" to="/myBlog">Blog posts</router-link>
      <router-link class="links" to="/projects">Projects</router-link>
    </div>
    <div id="navContent">
      <router-view></router-view>
    </div>
    
  </div>
  <div id="footerComp">
      <footerComp/>
  </div>
  
    
</template>

<script>
import footerComp from './components/footerComp.vue'
export default {
  name:'App',
  components:{
   footerComp
  },
}
  
</script>


<style scoped>
  #appVueBody{
    background-color:rgba(96, 101, 117, 0.952);
    position:relative;
    top:0px;
  }
  
  #nav{
    background-color: rgb(151, 66, 66);
    position:relative;
    top:5px;
  }
  #nav .links{
    border:2px solid red;
    position:relative;
    display: inline-flex;
    color:green;
    padding:3px;
    margin:3px;
  
  }
  #navContent{
    background-color: aqua;
    position:relative;
    border-radius: 5px;
  }
  #footerComp{
    background-color:rgba(29, 35, 53, 0.952);
    position:fixed;
    border:2px solid red;
    color:brown;
    bottom:0;
    width:100%;
    height:50px;
  }
</style>
