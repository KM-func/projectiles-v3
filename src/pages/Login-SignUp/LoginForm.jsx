import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignupForm(props){
    return(
        <>
            <div>
                <h1>Log In</h1>
                <p>Don't have an account? <a href="/">Sign Up</a></p>
            </div>
            <Form>
                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='outline-none' type="text" placeholder="Enter name" /> 
                </Form.Group>
                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" /> 
                </Form.Group>
                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" /> 
                </Form.Group>
                <Form.Group className="mb-1" controlId="email">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" /> 
                </Form.Group>
                {/* Add the errors later on */}
                <Button variant="primary" type="submit" className='mt-3'>
                    Sign In
                </Button>
            </Form> 
        </>
    )
}