import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendar, FaCalendarAlt, FaCalendarDay } from 'react-icons/fa';
import moment from 'moment/moment';
const LeftNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h4>All Category</h4>

            <div style={{
                boxSizing: ' border-box',

                width: '200px',
                height: '50px',
                background: '#E7E7E7',
                border: '1px solid #E7E7E7',
                borderRadius: '5px',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '30px',
                textAlign: 'center',
                alignItems: 'center'
            }}>
                <h4 className="d-flex justify-content-center text-center mt-2"> National News</h4>

            </div>

            <div className="mt-4">
                {
                    catagories.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`}>
                                {category.name}
                            </Link>
                        </p>)
                }
            </div>


<div>
<Row xs={1} md={1} lg={1} className="g-4">
    
    <Col >
      <Card
      >
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          <Card.Text className="d-flex ">
            <p>sports</p>
         <FaCalendarAlt className="mt-2 ms-4"></FaCalendarAlt>  

                     <p className="  ms-2">{moment().format("MMM D YY")}</p>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col >
      <Card>
        <Card.Img variant="top" src={second} />
        <Card.Body>
          <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          <Card.Text className="d-flex ">
            <p>sports</p>
         <FaCalendarAlt className="mt-2 ms-4"></FaCalendarAlt>  

                     <p className="  ms-2">{moment().format("MMM D YY")}</p>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col >
      <Card>
        <Card.Img variant="top" src={third} />
        <Card.Body>
          <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          <Card.Text className="d-flex ">
            <p>sports</p>
         <FaCalendarAlt className="mt-2 ms-4"></FaCalendarAlt>  

                     <p className="  ms-2">{moment().format("MMM D YY")}</p>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
</div>
        </div>
    );
};

export default LeftNav;