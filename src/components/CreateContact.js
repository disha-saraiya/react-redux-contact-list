import React from 'react';
import {Form, Button, Col} from 'react-bootstrap'; 


function CreateContact(){
    return(
    <div className = "form_container">

            <Form.Row>

            <Col>
            <Form.Group >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name"/>
            {/* <Form.Control.Feedback type = "invalid" > {errors.title} </Form.Control.Feedback> */}
            </Form.Group>
            </Col>

            <Col>
            <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name"/>
            {/* <Form.Control.Feedback type = "invalid" > {errors.title} </Form.Control.Feedback> */}
            </Form.Group>
            </Col>

            </Form.Row>

            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@example.com"/>
            {/* <Form.Control.Feedback type = "invalid" > {errors.title} </Form.Control.Feedback> */}
            </Form.Group>

            <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number"/>
            {/* <Form.Control.Feedback type = "invalid" > {errors.title} </Form.Control.Feedback> */}
            </Form.Group>

            <Button variant="primary" type="submit" >
                Create contact
            </Button>
    </div>
    )
}

export default CreateContact; 