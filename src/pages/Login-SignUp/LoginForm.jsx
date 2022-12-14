import { useState } from "react";
import { Form , Field } from "react-final-form"; 
import EyeOpen from "../../assets/images/eye_open.svg";
import EyeClosed from "../../assets/images/eye_closed.svg"; 
import { Link } from "react-router-dom"; 

export default function LoginForm(props){
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) =>{ 
        console.log(e);
    }
    const validate = values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is Required';
        } else if(!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){ 
            errors.email = 'Invalid Email';
        } 
        if (!values.password) { 
            errors.password = 'Password is Required';
        }  
        return errors
    }
    const checkErrors = (id, error) => {
        console.log(error)
        if(error){
            document.getElementById(id).style.borderColor = "#D74444";
        } else if(error === undefined){
            document.getElementById(id).style.borderColor = "#8B8C93";
        }
    }
    
    const togglePassword = (e) => {
        if(e.target.id === "toggle-password"){
            if(e.target.classList.contains("eye-open")){
                e.target.classList.remove("eye-open");
                e.target.classList.add("eye-closed"); 
            } else {
                e.target.classList.remove("eye-closed");
                e.target.classList.add("eye-open");
            }
            showPassword === false ? setShowPassword(true) : setShowPassword(false)
    }
    return(
        <div className='form-div'>
            <div className='form-header'>
                <h2>Log In </h2>
                <p>Don't have an account? <Link to="/signup"> Sign Up</Link></p>
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
                                <input {...input} type={showPassword? "text" : "password"} id="confirmPassword" placeholder="Password" />
                                <button id="toggle-confirm-password" type="button" className="eye-open" onClick={togglePassword}>
                                    {/* <img src={showPassword ? EyeClosed : EyeOpen} alt="show/hide password icon"/> */}
                                </button>
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