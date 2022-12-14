import { useState } from "react";
<<<<<<< HEAD
import { Form , Field } from "react-final-form"; 
import EyeOpen from "../../assets/images/eye_open.svg";
import EyeClosed from "../../assets/images/eye_closed.svg"; 
import { Link } from "react-router-dom"; 
=======
import { Form , Field } from "react-final-form";
import EyeOpen from "../../assets/images/eye_open.svg";
import EyeClosed from "../../assets/images/eye_closed.svg";
>>>>>>> parent of 0d46944 (adjustments acc. to code review)

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
<<<<<<< HEAD
        if(e.target.id === "toggle-password"){
            if(e.target.classList.contains("eye-open")){
                e.target.classList.remove("eye-open");
                e.target.classList.add("eye-closed"); 
            } else {
                e.target.classList.remove("eye-closed");
                e.target.classList.add("eye-open");
            }
            showPassword === false ? setShowPassword(true) : setShowPassword(false)
=======
        e.preventDefault();
        if(showPassword === false){
            setShowPassword(true);
        } else{
            setShowPassword(false);
>>>>>>> parent of 0d46944 (adjustments acc. to code review)
        }
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
<<<<<<< HEAD
                                <input {...input} type={showPassword? "text" : "password"} id="confirmPassword" placeholder="Password" />
                                <button id="toggle-password" type="button" className="eye-open" onClick={togglePassword}> 
                                </button>
=======
                                <input {...input} type={showPassword? "text" : "password"} id="password" placeholder="Password" />
                                <a href="/" onClick={togglePassword}><img src={showPassword ? EyeClosed : EyeOpen} alt="show/hide password icon"/> </a>
>>>>>>> parent of 0d46944 (adjustments acc. to code review)
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