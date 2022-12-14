import SignupForm from "./SignupForm";
import Trails2 from "../../assets/images/trails2.svg";
import Trails1 from "../../assets/images/trails.svg";
import Carousel from 'react-bootstrap/Carousel';
import Kanban from "../../assets/images/kanban.png"
import Overview from "../../assets/images/overview.png"
import { useState } from 'react';
import LoginForm from "./LoginForm";

<<<<<<< HEAD:src/pages/Login-SignUp/SignUp.jsx
export default function Signup(props){
    const [loginMode, setMode] = useState(false);
    const changeToLogin = (event) =>{
        event.preventDefault();
        loginMode ? setMode(false) : setMode(true);
=======
export default function LoginSignup(props){
    const [loginMode, setMode] = useState(false)
    const changeToLogin = (e) =>{

        let elements = document.getElementsByTagName("input");
        for (var i=0; i < elements.length; i++) { 
            elements[i].value = ""; 
        }
        
        e.preventDefault()
        if(loginMode === false){
            setMode(true)
        } else{
            setMode(false)
        }
>>>>>>> parent of 0d46944 (adjustments acc. to code review):src/pages/Login-SignUp/LoginSignup.jsx
    } 
    return(
        <div className="login-signup">
            <div className="carousel-container">
                {/* insert carousel here */} 
                <Carousel indicators="false">
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block"
                        src={Overview}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <h3>Overview</h3>
                                <p>See the progress of your projects in detail</p>
                            </div> 
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block"
                        src={Kanban}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <h3>Kanban View</h3>
                                <p>Manage your projects with a bird’s eye view</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item> 
                </Carousel>

                <div className="title">
                    <h1 className="logo">ProjecTiles</h1> 
                    <p>Like a silver bullet piercing through all your project management needs</p>
                </div>
                
                <img src={Trails1} alt="trails"/>
            </div>
            {/* add conditional if signup or login form appears */}
            <div className="form-container">
                <img src={Trails2} alt="trails"/> 
                <SignupForm/>
                <img src={Trails2} className="flipped" alt="trails"/>
                <p>
                    Copyright © 2022 funCoin group 
                </p>
            </div>
        </div>
    )
}