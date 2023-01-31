<template>
  <div id="wholeBody">
    <div id="hello">
      <hello-world/>
    </div>
    <div id="footerComp">
      <footerComp/>
  </div>
  
  </div>
  
    
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import footerComp from './components/footerComp.vue'
export default {
  name:'App',
  components:{
    HelloWorld,
   footerComp
  },
}
  
</script>


<style scoped>
</style>
