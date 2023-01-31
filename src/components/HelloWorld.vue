<script >

</script>

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
  
</template>

<style scoped>
#appVueBody{
    background-color:#222;
    position:relative;
    top:0px;
  }
  
  #nav{
    background-color:transparent;/* rgba(29, 35, 53, 0.952);*/
    position:relative;
    top:5px;
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
