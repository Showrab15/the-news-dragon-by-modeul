import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import bg1 from '../../../assets/bg1.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className="mb-2"> <FaGoogle></FaGoogle>  Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with GitHub</Button>

      <div className="mt-5">
        <h4>Find Us On </h4>
      <ListGroup >
      <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Tweeter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone></QZone>
      <div >
        <div style={{ backgroundImage: `url(${bg1})`  }}>
        <img  style={{background: 'rgba(5, 0, 29, 0.8)'}}src={bg} alt="" />

        </div>
      </div>
        </div>
    );
};

export default RightNav;