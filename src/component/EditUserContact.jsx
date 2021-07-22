import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


class EditUserContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: props.userInfo.firstname,
            lastname: props.userInfo.lastname,
            email: props.userInfo.email,
            contact: props.userInfo.contact,
            id: props.userInfo.id
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            contact: ""
        });
        this.props.closeModal()
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicfirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Enter first name" 
                    name="firstname" value={this.state.firstname} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiclastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Enter last name" 
                    name="lastname" value={this.state.lastname} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email adddress" 
                    name="email" value={this.state.email} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter phone number" 
                    name="contact" 
                    value={this.state.contact} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default EditUserContact;
