import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
const {createUser} = useContext(AuthContext)

const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const [ accepted, setAccepted] = useState(false)

    const handleRegister =(event)=>{
        
event.preventDefault();
const form = event.target;
console.log(form.email.value)
const name = form.name.value;
const photoUrl = form.photo.value;
const email = form.email.value
const password = form.password.value;

        createUser(email, password,name, photoUrl)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setSuccess('Account has been created successfully')
            setError('')
        })
        .catch(error =>{
            console.log(error)
            setError(error.message);
            setSuccess('')
        })
    }

    const handleAccepted= (event)=>{
        setAccepted(event.target.checked)
        console.log(event.target.checked)
    }
    return (
        <Container className="w-25 mt-5">
        <h4>Please Register</h4>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your name" required/>

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo URL" required/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                onClick={handleAccepted}
                name="checkbox"
                 type="checkbox" 
                 label={<>Accept <Link to="/terms">Terms And Conditions</Link> </>} />
            </Form.Group>

            <Button variant="primary" disabled={!accepted} type="submit">
            Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
            Already have an Account ?
<Link to="/login">Login </Link>
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

export default Register;