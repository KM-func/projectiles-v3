import { Form , Field } from "react-final-form";
import { useState } from "react"; 
import {invalid_chars, email_pattern} from "../../constants/constants.js"
import { Link } from "react-router-dom";

export default function SignupForm(props){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    const togglePassword = (event) => { 
        if(event.target.id === "toggle-password"){
            if(event.target.classList.contains("eye-open")){
                event.target.classList.remove("eye-open");
                event.target.classList.add("eye-closed"); 
            } else {
                event.target.classList.remove("eye-closed");
                event.target.classList.add("eye-open");
            }
            showPassword === false ? setShowPassword(true) : setShowPassword(false)
        } else {
            if(event.target.classList.contains("eye-open")){
                event.target.classList.remove("eye-open");
                event.target.classList.add("eye-closed");
            } else {
                event.target.classList.remove("eye-closed");
                event.target.classList.add("eye-open");
            }
            showConfPassword === false ? setShowConfPassword(true) : setShowConfPassword(false)
        }
    } 

    const onSubmit = (event) =>{
        // console.log(event);
    }
    const validate = values => {
        const errors = {};
        if(!values.name){
            errors.name = "Name is Required";
        } else if(values.name.match(invalid_chars)){
            errors.name = "Cannot contain special characters or numbers";
        }
        if (!values.email) {
          errors.email = "Email is Required";
        } else if(!values.email.match(email_pattern)){
            errors.email = "Invalid Email";
        }
        if (!values.password) { 
            errors.password = "Password is Required";
        }
        if(!values.confirmPassword){
            errors.confirmPassword = "Please confirm password";
        } else if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    } 
    const checkErrors = (id, error) => {
        console.log(error);
        error ? document.getElementById(id).style.borderColor = "#D74444" :  document.getElementById(id).style.borderColor = "#8B8C93";
    }
    return(
        <div className="form-div">
            <div className="form-header">
                <h2>Sign Up </h2>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
            <Form 
            onSubmit={ onSubmit }
            validate={ validate }
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name">
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={event => checkErrors("name", meta.error)} onChange={event => checkErrors("name", meta.error)} onClick={event => checkErrors("name", meta.error)}>
                            <label>Name</label>
                            <input {...input} type="text" id="name"  placeholder="Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="email">
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={event => checkErrors("email", meta.error)} onChange={event => checkErrors("email", meta.error)} onClick={event => checkErrors("email", meta.error)}>
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
                                <button id="toggle-password" className="eye-open" type="button" onClick={togglePassword}>
                                </button>
                            </div>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="confirmPassword" >
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={e => checkErrors("confirmPassword", meta.error)} onChange={e => checkErrors("confirmPassword", meta.error)} onClick={e => checkErrors("confirmPassword", meta.error)} >
                            <label>Confirm Password</label>
                            <div className="password-div"> 
                                <input {...input} type={showConfPassword? "text" : "password"} id="confirmPassword" placeholder="Password" />
                                <button id="toggle-confirm-password" type="button" className="eye-open" onClick={togglePassword}>
                                </button>
                            </div>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <button type="submit">Sign Up</button>
                </form>
                
            )}/>

        </div>
    )
}