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
    background-color:rgba(7, 10, 20, 0.952);
    position:relative;
    top:0px;
  }
  
  #nav{
    background-color:transparent;/* rgba(29, 35, 53, 0.952);*/
    position:relative;
    top:100px;
    z-index:10;
  }
  #nav .links{
    
    position:relative;
    display: inline-flex;
    color:#ccc;
    padding:3px;
    margin:3px 10px 3px 10px;
    
  }
  #navContent{
    
    position:relative;
    border-radius: 5px;
    z-index:9;
  }
  #footerComp{
    background-color:rgba(7, 10, 20, 0.952);
    position:fixed;
    color:brown;
    width:100%;
    height:100px;
    margin: 30px auto;
  }

  @media only screen and (max-width:300px ){
    #nav .links{
    position:relative;
    display: inline-flex;
    color:#ccc;
    padding:3px;
    margin:3px 1px 3px 1px;
    
  }

  }
    

</style>
