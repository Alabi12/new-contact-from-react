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
            users: [
                {
                    firstname: "Robert",
                    lastname: "Alabi",
                    email: "wolo22001@gmail.com",
                    contact: "024548752",
                    id: "158794klkj"
                },
                {
                  firstname: "Roland",
                  lastname: "Yaw",
                  email: "wolo22001@gmail.com",
                  contact: "024548752",
                  id: "158794khhj"
                },
                {
                  firstname: "Benjamin",
                  lastname: "Asibi",
                  email: "wolo22001@gmail.com",
                  contact: "024548752",
                  id: "16698794klkj"
                },

            ]
        }
    }
    addNewUser = (user) => {
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
                            <AddUserContact addUser={this.addNewUser} />
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

