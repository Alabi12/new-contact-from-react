import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './component/Users';
import "./App.css"
import AddUserContact from './component/AddUserContact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    addUser = (user) => {
        user.id = Math.random().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }
    DeleteUser = (id) => {
        let undeletedUser = this.state.users.filter((user => user.id !== id))
        this.setState({
            users: undeletedUser
        })
    }
    editUser = (id, updatedUser) => {
        this.setState({
            users: this.state.users.map(user => user.id === id ? updatedUser : user)
        })
    }
    render() {
        return (
            <section>
                <Container fluid className="App">
                    <Row>
                        <Col md="4">
                            <AddUserContact addUser={this.addUser} />
                        </Col>
                        <Col>
                            <Users usersData={this.state.users} DeleteUser={this.DeleteUser} editUser={this.editUser} />
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }
}

export default App;

