import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)
const [error, setError] = useState('')
const [success, setSuccess] = useState('');


const navigate = useNavigate();
const location = useLocation();
console.log(location);
const from =  location.state?.from?.pathname || '/'


    const handleSignIn=(event)=>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;


signIn(email, password)
        .then((result) => {
            // Signed in 
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            setSuccess('User Login successfully complete');
            setError('')
            navigate(from, {replace: true})
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            setSuccess('')
          });
    }
    return (
        <Container className="w-25 mt-5">
            <h4>Login Now</h4>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms & condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
            Don't have an Account ?
<Link to="/register">Register </Link>

</Form.Text>
<br />
                <Form.Text className="text-success">
                  {success}
                </Form.Text>
                <Form.Text className="text-danger">
{error}
        </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;