<template>
  <div id="homeContent">
    <div id="childContent">
      <div id="grandChild">
        <h4>okorie Ifeanyichukwu</h4>
        <h2>Electrical Engineering </h2>
        <h2>Student &</h2>
        <h3 id="otherInterest">VueJs Developer</h3>
        <a></a><button>Hire me</button>
      </div>
      <img src="../images/transparent background3.png"/>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 #homeContent{
  position:relative;
  background-color:rgba(29, 35, 53, 0.952);
  height:70vh;
  display: flex;
  border-radius:10px;
  border-top:2px solid #fff;
  text-align: left;
  padding:1% 4% 1% 4%;
  
  margin-top:50px;
 }
 #childContent{
  background-color:rgba(7, 10, 20, 0.952);
  position:relative;
  margin:auto;
  width:80%;
  height:80%;
  border-radius:10px;
  display:contents;
  ;
 }
 #childContent h4{
  color:brown;
  margin-left:5%;
  margin-top:50px;
  font-size: 2vw;
 }
 #grandChild h2{
  color:#fff;
  margin-left:5%;
  font-size:4vw;
 }
 #grandChild h3{
  color:#fff;
  margin-left:5%;
  font-size:4vw;
 }
 #grandChild{
  background-color:rgba(29, 35, 53, 0.952);
  position: relative;
  display: block;
  width:55%;
  max-height:350px;
  margin-top:6vw;
 }
 
img{
  position: relative;
  margin-top:2vw;
  width:50%;
  margin-right:5px;
  height:400px;
  max-height: 100%;
  overflow:hidden;
}

 #grandChild button{
  color: #ccc;
  margin-left:5%;
  margin-top:2px;
  font-size:80%;
  background-color: brown;

}


@media only screen and (max-width:300px ){
  img{
  position: relative;
  margin-top:2vw;
  margin-right:28px;
  width:50%;
  height:400px;
  max-height: 100%;
  overflow:hidden;
}

  }
</style>