// import { useState } from 'react';
// import Button from 'react-bootstrap/Button'; 
// import { Form , Field } from "react-final-form";

// export default function LoginForm(props){ 
//     // add states here
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("")
//     // add form validator here
//     const emailValidator = (_email) =>{
        
//         if(_email === ""){
//             document.getElementById("email-error-msg").innerText = "Email cannot be empty"
//         } else if(!_email.includes("@") || !_email.includes("@")){
//             document.getElementById("email-error-msg").innerText = "please enter a valid email"
//         }
//          else{
//             setEmail(_email);
//             document.getElementById("email-error-msg").innerText = "";
//         }
//     }
//     const passwordValidator = (_password) =>{
//         if(_password === ""){
//             document.getElementById("password-error-msg").innerText = "Password cannot be empty"
//         } else if(_password.length < 8){
//             document.getElementById("password-error-msg").innerText = "Invalid Password"
//         }
//          else{
//             setPassword(_password)
//             document.getElementById("password-error-msg").innerText = "";
//         }
//     }

//     return(
//         <div className='form-div'>
//              <div className='form-header'>
//                 <h2>Log In </h2>
//                 <p>Don't have an account? <a onClick={props.changeToLogin} href="/">Sign Up</a></p>
//             </div>
//             <Form onSubmit={(formObj) => {
//                 console.log( formObj )
//             }}>
//                 {({handleSubmit}) => (
//                     <form onSubmit={props.handleSubmit}> 
//                         {/* <label>Email</label> */}
//                         <Field name="email"> 
//                             {({ input }) => (
//                                     <input 
//                                         name='name'
//                                         id="email"
//                                         onChange={e =>{emailValidator(e.target.value)}} 
//                                         type="email" placeholder="Enter email"
//                                         {...input}
//                                         required />  
//                             )} 
//                         </Field>
//                         {/* <p id='email-error-msg' className='error-msg'></p> 
//                         <label>Password</label> */}
//                         <Field name="password">
                            
//                             {({ input }) => (
//                                     <input
//                                         name='password'
//                                         id="password" 
//                                         onChange={e =>{passwordValidator(e.target.value)}}
//                                         type="password" placeholder="Enter Password"
//                                         {...input}
//                                         required/>
//                             )}
                            
//                         </Field>
//                         {/* <p id='password-error-msg' className='error-msg'></p> */}
//                         {/* Add the errors later on */}
//                         <button variant="primary" type="submit" className='mt-3'>
//                             Log In
//                         </button>
//                     </form> 
//                 )} 
//             </RForm>
            
//         </div>
//     )
// }

import { useState } from "react";
import { Form , Field } from "react-final-form";
import EyeOpen from "../../assets/images/eye_open.svg"
import EyeClosed from "../../assets/images/eye_closed.svg"

export default function LoginForm(props){
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) =>{
        // debugger
        console.log(e)
    }
    const validate = values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Email is Required'
            // 
        } else if(!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){ 
            errors.email = 'Invalid Email'
        } 
        if (!values.password) { 
            errors.password = 'Password is Required'
        }  
        return errors
    }
    const checkErrors = (id, error) => {
        console.log(error)
        if(error){
            document.getElementById(id).style.borderColor = "#D74444";
        } else if(error === undefined){
            document.getElementById(id).style.borderColor = "#8B8C93" 
        }
    }
    
    const togglePassword = (e) => {
        e.preventDefault()
        if(showPassword === false){
            setShowPassword(true)
        } else{
            setShowPassword(false)
        }
    }
    return(
        <div className='form-div'>
            <div className='form-header'>
                <h2>Log In </h2>
                <p>Don't have an account? <a onClick={props.changeToLogin} href="/">Sign Up</a></p>
            </div>
            <Form 
            onSubmit={ onSubmit }
            validate={ validate }
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email">
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={e => checkErrors("email", meta.error)} onChange={e => checkErrors("email", meta.error)} onClick={e => checkErrors("email", meta.error)}>
                            <label>Email</label>
                            <input {...input} type="email" id="email" placeholder="Email" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={e => checkErrors("password", meta.error)} onChange={e => checkErrors("password", meta.error)} onClick={e => checkErrors("password", meta.error)}>
                            <label>Password</label>
                            <div className="password-div"> 
                                <input {...input} type={showPassword? "text" : "password"} id="password" placeholder="Password" />
                                <a href="/" onClick={togglePassword}><img src={showPassword ? EyeClosed : EyeOpen} alt="show/hide password icon"/> </a>
                            </div>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <button type="submit">Log In</button>
                </form> 
            )}/> 
        </div>
    )
}