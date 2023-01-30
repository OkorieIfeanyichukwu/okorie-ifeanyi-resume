<template>
  <div id="CVBody">
    <div id="resumeBody">
      <div id="gridLeft">
        <div id="profilePix"><br/>
            <section id="pix">
                <img src="../assets/img/transparent1.png"/>
            </section>
            <br/>
        </div>
        <div id="paddingLeft">
            <article class="headUnderline">
                <h2>Contact Me</h2>
                <hr/>
                <section class="content">
                    <div class="leftGridLeft">
                    <font-awesome-layers>
                        <font-awesome-icon icon="fa-solid fa-circle" />
                        <font-awesome-icon icon="fa-solid fa-phone" style="color:white;" transform="shrink-5"/>
                    </font-awesome-layers>
                    </div>
                    <div class="rightGridLeft">
                        <h6>+2349032173147</h6>
                    </div>

                </section>
                <section class="content">
                    <div class="leftGridLeft">
                        <!-- Add the style and icon you want using the String format -->
                    <font-awesome-icon icon="fa-solid fa-user-tie" flip />
                    </div>
                    <div class="rightGridLeft">
                        <h6>+2349032173147</h6>
                    </div>

                </section>
            </article>
            
        </div>
        
        
      </div>
      <div id="gridRight">
        <div id="right-column">
            <h1 id="name">Ifeanyichukwu Okorie</h1>
            <h3 id="course">Electrical Engineering Student</h3>
            <h4 id="side">& VueJS Developer</h4>
        </div> 
        <div id="right-column2">
            <article class="container2">
                <section class="iconsndate">
                    <!-- Add the style and icon you want using the String format -->
                    <font-awesome-icon icon="fa-solid fa-user " size="2x" class="icons" shake />   
                </section>
                <section class="describe">
                    <h2>About Me</h2>
                    <p class="description">Detail-oriented and resourceful Engineer looking for a
                    position as a junior Electrical Engineer at XYZ
                    company. Looking forward to leveraging my working
                    knowledge in Proteus, MATLAB, programming and
                    electronics troubleshooting to help with your
                    upcoming projects.</p>
                </section>
            </article>
            <article class="container2">
                <section class="iconsndate">
                     <!-- Add the style and icon you want using the String format -->
                    <font-awesome-icon icon="fa-solid fa-user-tie" size="2x" flip class="icons" />
                    <h4>2019-present</h4>
                </section>
                <section class="describe">
                    <h2>Experience</h2>
                    <h3>Freelance Engineer | Installation,
                    Troubleshooting And Repair Engineer</h3>
                    <p class="description">Installed automatic gate controller.</p>
                    <p class="description">Troubleshot for electrical faults in water filtration and
                    pumping system.</p>
                    <p class="description">Traced electrical wiring and conduit path under-roof
                    for a Sound system</p>
                    <p class="description">Traced for Car Battery discharge while vehicle is off.
                    </p>
                    <p class="description">Repaired faults in electrical fence</p>
                    <p class="description">And More.</p>
                </section>
            </article>
            <article class="container2">
                <section class="iconsndate">
                    <h4>10-28/08/2019</h4>
                </section>
                <section class="describe">
                    
                    <h3>Megawatts Nigeria Limited | Intern Engineer
                    On Site</h3>
                    <p class="description">I supervised the refurbishment of a building's
                    electrical installations and replacements.
                    I ensured a safe working environment and that the
                    technicians observe the basic electrical installation
                    rules and guidelines..</p>
                    <p class="description">Role : : Part of the team to provide 5 volts power supply
                    for the project</p>
                </section>
            </article>
            <article class="container2">
                <section class="iconsndate">
                    <!-- Add the style and icon you want using the Array format -->
                    <font-awesome-icon :icon="['fas', 'graduation-cap']" size="2x" bounce class="icons" />
                    <h4>2016-present</h4>
                </section>
                <section class="describe">
                    <h2>Education</h2>
                    <h3>University Of Lagos | BSc Electrical
                    Engineering</h3>
                    <p class="description">Pursuing with a current CGPA of 4.33</p>
                    <p class="description">Interested in Power, Electronics and control systems</p>
                    
                </section>
            </article>

            

            
            <article class="container2">
                <div class="iconsndate">
                    <!-- Add the style and icon you want using the String format -->
                    <font-awesome-icon icon="fa-solid fa-person-chalkboard" beat size="2x" class="icons" />
                    <h4>5-29/06/2022</h4>
                </div>
                <section class="describe">
                    <h2>Projects</h2>
                    <h3>Personal Project | Design And Construction Of
                    Remote Controller</h3>
                    <p class="description">A six channel wireless controller utilizing Arduino as
                    the microcontroller and nRF24l01 as the
                    communication module between the transmitter and
                    receiver.
                    The controller is capable of controlling locomotive
                    devices wirelessly up to a distance of 1000meters
                    apart with a power amplifier attached to the nRF24
                    communication module..</p>
                    <p class="description">My Role : Personal Project.</p>
                </section>
            </article>
            <article class="container2">
                <section class="iconsndate">
                    <h4>10-24/09/2019</h4>
                </section>
                <section class="describe">
                    
                    <h3>UNILAG Engineering Faculty | Audible Water
                    Detector</h3>
                    <p class="description">The circuit detects the water level in a tank. The LED
                    indicators informs the different water position and
                    notifies with a beep when tank is full.</p>
                    <p class="description">My Role : Soldering the electronic component to the
                    vero board.</p>
                </section>
            </article>

            <article class="container2">
                <section class="iconsndate">
                    <h4>10-28/08/2019</h4>
                </section>
                <section class="describe">
                    
                    <h3>UNILAG Engineering Faculty | Visitor's Pass System</h3>
                    <p class="description">The system operates with a card which allows a visitor access 
                    to a door within a specified period of time and denies access at any other time.</p>
                    <p class="description">Role : : Part of the team to provide 5 volts power supply
                    for the project</p>
                </section>
            </article>
            
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#CVBody{
  position:relative;
  background-color:rgba(29, 35, 53, 0.952);
  height:80vh;
  display: flex;
  border-radius:10px;
  border-top:2px solid #fff;
  border-bottom:2px solid #fff;
  text-align: left;
  padding:0% 2% 0% 2%;
  margin-top:10px;

}

#resumeBody{
  Position:relative;
  background-color:red;
  width:100%;
  margin:0px auto 0px auto;
  min-height:100%;
  max-height:100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 35% 65%;
  
}
#gridLeft{
border:2px solid black;
background-color: rgb(209, 189, 189);
border-radius:10px;
padding:0;

}
#gridRight{
  background-color: #bbb;
  border-radius:20px;
}




#right-column{
    background:#000111;
    padding:10px 0px 15px 12%;
    }

#right-column h1{
    color:#fff;
    font-size: 3vw;
    text-align:left;
}
#right-column h3{
    color:#fff;
    font-size: 2vw;
    text-align:left;
}
#right-column h4{
    color:#fff;
    text-align:left;
    font-size: 1.5vw;
}
.container2{
        position: relative;
        height: auto;
        padding:5% 0%;
        text-align:center;
        display:grid;
        grid-template-columns: 30% 70%;
    }
.container2 .iconsndate{
    background-color: #bbb;
    }
.container2 .describe{
    display:block;
    text-align:left;
}
.description{
    color:#333;
}
.icons{
    position:relative;
    top:8px;
}
.iconsndate h4{
    margin-top:28px;
    font-size:1.7vw;
}


@media only screen and (max-width:800px){
  #resumeBody{
  Position:relative;
  background-color:blue;
  width:85%;
  margin:0px auto 0px auto;
  max-height:100%;
  min-height:100%;
  overflow-y: scroll;  
  display: grid;
  grid-template-columns: 35% 65%;
  
}
.iconsndate h4{
    margin-top:28px;
    font-size:2.1vw;
}
}
@media only screen and (max-width:700px){
  #resumeBody{
  Position:relative;
  background-color:blue;
  width:90%;
  margin:0px auto 0px auto;
  max-height:100%;
  min-height:100%;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 35% 65%;
  
}
}
@media only screen and (max-width:600px){
  #resumeBody{
  Position:relative;
  background-color:blue;
  width:100%;
  margin:0px auto 0px auto;
  max-height:100%;
  min-height:100%;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 35% 65%;
  
}
}

/* styles for the left grid */

#profilePix{
    background-color:red;
    width:100%;
    max-width: 100%;
    position:relative;
    display: block;
    margin-top:0px;
    
}

#pix{
    background-color: aqua;
    position:relative;
    width:50%;
    height:13.5vw;
    overflow:hidden;
    border-radius:80%;
    margin:auto;
}


#pix img{
    position:relative;
    border:1px solid #333;
    width:100%;
    height:100%;
}


#paddingLeft{
    position:relative;
    padding-left:10%;
}

.headUnderline{
    background-color:blue;
}
h2{
    font-size:2vw;
    font-weight: 900;
}


hr{
    background-color:#000;
    height:5px;
}

.content{
    display: grid;
    grid-template-columns: 15% 85%;
    padding:0px;
}

.leftGridLeft{
    background-color:green;
}
.rightGridLeft{
    background-color:pink;
}
.rightGridLeft h6{
    background-color:orange;
    margin:0px;
}



@media only screen and (max-width:900px){
    #profilePix{
    background-color:red;
    width:100%;
    max-width: 100%;
    position:relative;
    display: block;
    margin-top:0px;
    
}

#pix{
    background-color: aqua;
    position:relative;
    width:50%;
    height:14.5vw;
    overflow:hidden;
    border-radius:80%;
    margin:auto;
}

}

@media only screen and (max-width:700px){
    #profilePix{
    background-color:red;
    width:100%;
    max-width: 100%;
    position:relative;
    display: block;
    margin-top:0px;
    
}

#pix{
    background-color: aqua;
    position:relative;
    width:50%;
    height:16vw;
    overflow:hidden;
    border-radius:80%;
    margin:auto;
}

}
@media only screen and (max-width:500px){
    #profilePix{
    background-color:red;
    width:100%;
    max-width: 100%;
    position:relative;
    display: block;
    margin-top:0px;
    
}

#pix{
    background-color: aqua;
    position:relative;
    width:50%;
    height:17vw;
    overflow:hidden;
    border-radius:80%;
    margin:auto;
}

}
</style>