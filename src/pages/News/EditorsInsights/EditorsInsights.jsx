import React from 'react';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendar, FaCalendarAlt, FaCalendarDay } from 'react-icons/fa';
import moment from 'moment/moment';


const EditorsInsights = () => {
    return (
        <div className="mt-4">
            <h4>Editor Insights</h4>
              <Row xs={1} md={2} lg={3} className="g-4">
    
        <Col >
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text  className="d-flex align-items-center">
              <FaCalendar></FaCalendar>
              <p className="mt-3 ms-2">{moment().format("MMM D YY")}</p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    
        <Col >
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text  className="d-flex align-items-center">
           <FaCalendarAlt></FaCalendarAlt>
           <p className="mt-3 ms-2">{moment().format("MMM D YY")}</p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text className="d-flex align-items-center">
             <FaCalendarDay></FaCalendarDay>  
                         <p className="mt-3 ms-2">{moment().format("MMM D YY")}</p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </div>
    );
};

export default EditorsInsights;