// import Form from 'react-bootstrap/Form';
import { Form , Field } from "react-final-form";

export default function SignupForm(props){ 
    // const passwordVisibility = (e) =>{
    //     e.preventDefault(); 
        
    //     var x = document.getElementById("password");
    //     var show_eye = document.getElementById("show_eye");
    //     var hide_eye = document.getElementById("hide_eye");
    //     hide_eye.classList.remove("d-none");
    //     if (x.type === "password") {
    //       x.type = "text";
    //       show_eye.style.display = "none";
    //       hide_eye.style.display = "block";
    //     } else {
    //       x.type = "password";
    //       show_eye.style.display = "block";
    //       hide_eye.style.display = "none";
    //     } 
    // }
    
    // return( 
    //     <div className='form-div'>
    //         <div className='form-header'>
    //             <h2>Sign Up</h2>
    //             <p>Already have an account? <a onClick={props.changeToLogin} href="/">Log In</a></p>
    //         </div>
    //         <Form onSubmit={props.handleSubmit}>
    //             <Form.Group className="mb-3" controlId="name">
    //                 <Form.Label>Name</Form.Label>
    //                 <Form.Control className='outline-none' type="text" placeholder="Enter name" /> 
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="email">
    //                 <Form.Label>Email</Form.Label>
    //                 <Form.Control type="email" placeholder="Enter email" /> 
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="password">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control type="password" placeholder="Enter Password" /> 
    //             </Form.Group>
    //             <Form.Group className="mb-3" controlId="confirm-password">
    //                 <Form.Label>Confirm Password</Form.Label>
    //                 <Form.Control type="password" placeholder="Confirm Password" /> 
    //             </Form.Group>
    //             {/* Add the errors later on */}
    //             <button variant="primary" type="submit" className='mt-3'>
    //                 Sign In
    //             </button>
    //         </Form> 
    //     </div> 
    // )
    const onSubmit = (e) =>{
        // debugger
        console.log(e)
    }
    const validate = values => {
        const errors = {}
        if(!values.name){
            errors.name = "Name is Required"
        } else if(values.name.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/)){
            errors.name = "Cannot contain special characters or numbers"
        }
        if (!values.email) {
          errors.email = 'Email is Required'
            // 
        } else if(!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
            errors.email = 'Invalid Email'
        }else if (values.email !== "") {
            // document.getElementById("email").style.borderColor = "#4E4F56"
        }
        if (!values.password) {
            // document.getElementById("password").style.borderColor = "red"
            errors.password = 'Password is Required'
        } 
        else if(values.password !== "") {
            // document.getElementById("password").style.borderColor = "#4E4F56"
        }
        if(!values.confirmPassword){
            errors.confirmPassword = 'Please confirm password'
        }
        else if(values.confirmPassword !== values.password){
            errors.confirmPassword = 'Passwords do not match'
        }
        return errors
    } 
    const checkErrors = (id, error) => {
        console.log(error)
        if(error){
            document.getElementById(id).style.borderColor = "#D74444";
        } 
        else if(error === undefined){
            document.getElementById(id).style.borderColor = "#8B8C93" 
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
                        <div className="mb-3"  onChange={e => checkErrors("name", meta.error)} onClick={e => checkErrors("name", meta.error)}>
                            <label>Name</label>
                            <input {...input} type="text" id="name"  placeholder="Name" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="email">
                        {({ input, meta }) => (
                        <div className="mb-3"  onChange={e => checkErrors("email", meta.error)} onClick={e => checkErrors("email", meta.error)}>
                            <label>Email</label>
                            <input {...input} type="email" id="email" placeholder="Email" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({ input, meta }) => (
                        <div className="mb-3" onChange={e => checkErrors("password", meta.error)} onClick={e => checkErrors("password", meta.error)}>
                            <label>Password</label>
                            <input {...input} type="password" id="password" placeholder="Password" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="confirmPassword" >
                        {({ input, meta }) => (
                        <div className="mb-3" onChange={e => checkErrors("confirmPassword", meta.error)} onClick={e => checkErrors("confirmPassword", meta.error)} >
                            <label>Confirm Password</label>
                            <input {...input} type="password" id="confirmPassword" placeholder="Confirm password" />
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