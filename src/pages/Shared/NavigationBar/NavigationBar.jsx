import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../../provider/AuthProvider';
import { useContext } from 'react';

const NavigationBar = () => {
    const { user  , logOut} = useContext(AuthContext)


    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error.message))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link to="/" className="me-4">Home</Link>

                            <Link className="me-4">About</Link>
                            <Link>Career</Link>

                        </Nav>
                        <Nav>


                            {user && <FaUserCircle className="me-3" style={{ fontSize: '2rem' }}></FaUserCircle>}





                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="primary">Logout</Button>
                                    :

                                    <Link to="/login">  <Button variant="primary">Login</Button> </Link>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;