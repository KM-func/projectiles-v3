
import Form from 'react-bootstrap/Form';

export default function SignupForm(props){

    const passwordVisibility = (e) =>{
        e.preventDefault(); 
        
        var x = document.getElementById("password");
        var show_eye = document.getElementById("show_eye");
        var hide_eye = document.getElementById("hide_eye");
        hide_eye.classList.remove("d-none");
        if (x.type === "password") {
          x.type = "text";
          show_eye.style.display = "none";
          hide_eye.style.display = "block";
        } else {
          x.type = "password";
          show_eye.style.display = "block";
          hide_eye.style.display = "none";
        } 
    }

    return( 
        <div className='form-div'>
            <div className='form-header'>
                <h2>Sign Up</h2>
                <p>Already have an account? <a href="/">Log In</a></p>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='outline-none' type="text" placeholder="Enter name" /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" /> 
                </Form.Group>
                {/* Add the errors later on */}
                <button variant="primary" type="submit" className='mt-3'>
                    Sign In
                </button>
            </Form> 
        </div> 
    )
}