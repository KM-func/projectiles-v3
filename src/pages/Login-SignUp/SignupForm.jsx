import { Form , Field } from "react-final-form";
import { useState } from "react";
import EyeOpen from "../../assets/images/eye_open.svg"
import EyeClosed from "../../assets/images/eye_closed.svg"

export default function SignupForm(props){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault()
        if(showPassword === false){
            setShowPassword(true);
        } else{
            setShowPassword(false);
        }
    }
    const toggleConfPassword = (e) => {
        e.preventDefault()
        if(showConfPassword === false){
            setShowConfPassword(true);
        } else{
            setShowConfPassword(false);
        }
    }

    const onSubmit = (e) =>{
        console.log(e);
    }
    const validate = values => {
        const errors = {};
        if(!values.name){
            errors.name = "Name is Required";
        } else if(values.name.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/)){
            errors.name = "Cannot contain special characters or numbers";
        }
        if (!values.email) {
          errors.email = 'Email is Required';
        } else if(!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
            errors.email = 'Invalid Email';
        }
        if (!values.password) { 
            errors.password = 'Password is Required';
        }
        if(!values.confirmPassword){
            errors.confirmPassword = 'Please confirm password';
        } else if(values.confirmPassword !== values.password){
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    } 
    const checkErrors = (id, error) => {
        console.log(error);
        if(error){
            document.getElementById(id).style.borderColor = "#D74444";
        } 
        else if(error === undefined){
            document.getElementById(id).style.borderColor = "#8B8C93";
        }
    }
    return(
        <div className='form-div'>
            <div className='form-header'>
                <h2>Sign Up </h2>
                <p>Already have an account? <a onClick={props.changeToLogin} href="/">Log in</a></p>
            </div>
            <Form 
            onSubmit={ onSubmit }
            validate={ validate }
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="name">
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={e => checkErrors("name", meta.error)} onChange={e => checkErrors("name", meta.error)} onClick={e => checkErrors("name", meta.error)}>
                            <label>Name</label>
                            <input {...input} type="text" id="name"  placeholder="Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
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
                    <Field name="confirmPassword" >
                        {({ input, meta }) => (
                        <div className="mb-3" onBlur={e => checkErrors("confirmPassword", meta.error)} onChange={e => checkErrors("confirmPassword", meta.error)} onClick={e => checkErrors("confirmPassword", meta.error)} >
                            <label>Confirm Password</label>
                            <div className="password-div"> 
                                <input {...input} type={showConfPassword? "text" : "password"} id="confirmPassword" placeholder="Password" />
                                <a href="/" onClick={toggleConfPassword}><img src={showConfPassword ? EyeClosed : EyeOpen} alt="show/hide password icon"/> </a>
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