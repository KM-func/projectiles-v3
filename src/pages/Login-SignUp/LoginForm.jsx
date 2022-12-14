import { useState } from "react";
import { Form , Field } from "react-final-form";
 
export default function LoginForm(props){
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (event) =>{ 
        console.log(event);
    }
    const validate = values => {
        const errors = {};
        if (!values.email){
          errors.email = "Email is Required";
        } else if(!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){ 
            errors.email = "Invalid Email";
        } 
        if (!values.password){ 
            errors.password = "Password is Required";
        }  
        return errors;
    }
    const checkErrors = (id, error) => {
        console.log(error);
        error ? document.getElementById(id).style.borderColor = "#D74444" :  document.getElementById(id).style.borderColor = "#8B8C93";
    }
    
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
        }
    } 
    return(
        <div className="form-div">
            <div className="form-header">
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
                        <div className="mb-3" onBlur={event => checkErrors("email", meta.error)} onChange={event => checkErrors("email", meta.error)} onClick={event => checkErrors("email", meta.error)}>
                            <label>Email</label>
                            <input {...input} type="email" id="email" placeholder="Email" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={event => checkErrors("password", meta.error)} onChange={event => checkErrors("password", meta.error)} onClick={event => checkErrors("password", meta.error)}>
                            <label>Password</label>
                            <div className="password-div"> 
                                <input {...input} type={showPassword? "text" : "password"} id="password" placeholder="Password" />
                                <button id="toggle-password" type="button" className="eye-open" onClick={togglePassword}>
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