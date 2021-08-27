import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect }  from 'react-redux';
import User from './User';


const Users = (props) => {
 
    return (
        <>
    <h1 className="heading2">Form Output</h1>
        <Container className="Users">    
            <Row>
                {props.usersData.map((user) => {
                    return <User userInfo={user} 
                    key={user.id} 
                    DeleteUser={props.DeleteUser} 
                    editUser={props.editUser}/>
                })}
            </Row>
        </Container>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        users : state.users,
    }
}

export default connect(mapStateToProps)(Users);

