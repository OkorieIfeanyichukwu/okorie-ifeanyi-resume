<template>
  <div id="homeContent">
    <div id="childContent">
      <div id="grandChild">
        <h4>okorie Ifeanyichukwu</h4>
        <h2>Electrical Engineering </h2>
        <h2>Student &</h2>
        <h3 id="otherInterest">VueJs Developer</h3>
        <button>Hire me</button>
      </div>
      
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
  background-color: blanchedalmond;
  height:78vh;
  border-radius:10px;
  display:flex;
  text-align: left;
 }
 #childContent{
  background-color:green;
  position:relative;
  margin:auto;
  width:80%;
  height:80%;
  border-radius:10px;
 }
 #childContent h4{
  background-color: yellow;
  margin-left:5%;
  margin-top:50px;
 }
 #grandChild h2{
  background-color: yellow;
  margin-left:5%;
  font-size:3vw;
 }
 #grandChild h3{
  background-color: red;
  margin-left:5%;
  font-size:3vw;
 }
 #grandChild{
  background-color: blue;
  position: fixed;
  display: block;
  width:70%;
  max-height:300px;
 }
 #grandChild button{
  color: pink;
  margin-left:5%;
  margin-top:3%;
  font-size:80%;

}

</style>