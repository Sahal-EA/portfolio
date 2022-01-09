import React from 'react';
import './Home.css';
import logo from  "./img/logo.jpeg";
function Home() {

    //fixed Header
    window.addEventListener("scroll", function(){
        const header = document.querrySelector(".header");
        header.classList.toggle("active", window.scrollY >0)
    });

    return (
        <div className="Home" id="Home">
            
            <div className="Home__bg">
                <div className="header d__flex align__items__center pxy__30">
                <div className="logo" >

                        <img src={logo} alt=""  height={60} width={60}/>
                    </div>
                    <div className="navigation pxy__30 ">
                        <ul className="navbar d__flex">
                             <a href ="#Home"><li className="nav__items mx__15">Home</li></a>
                             <a href ="#About"><li className="nav__items mx__15">About Me</li></a>
                             <a href ="#Passion"><li className="nav__items mx__15">My Passion</li></a>
                             <a href ="#Photo"><li className="nav__items mx__15">Photos  And  Achievements</li></a>
                             <a href ="#Contact"><li className="nav__items mx__15">Contact</li></a>
                        </ul> 
                    </div>
                 </div>
                 {/*HOME CONTENT*/}
                 
                 
                 <div className= "container">
                  <div className= "home__content" >
                  <div className="row">
                   <div className="left">
                    <h1>
                      
                    </h1>
                   </div>
                   <div className="home__meta ">

                  
                      <h2 className="home__text pz__10">
                      Hey,
                      </h2> 
                      <h3 className="home__text pz__10">
                      I  AM  Sahal E A
                      </h3> 
                      <h4 className="home__text  ">
                       B-TECH Student.
                      </h4> 
                      
                    
                    
                   </div>
                  </div>
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
