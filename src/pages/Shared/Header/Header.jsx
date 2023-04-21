import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
<div className="text-center mt-5">

<img src={logo} alt="" />
            <p className="text-secondary">Journalism Without Fear or Favour</p>
            <p className="text-bold">{moment().format("dddd, MMMM D, YYYY")}</p>
</div>
<div className="d-flex bg-light">
<Button variant="danger">Latest</Button>
<Marquee speed={50} className="font-bold">
  I can be a React component, multiple React components, or just some text.
</Marquee>
</div>
<Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
         
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="primary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;