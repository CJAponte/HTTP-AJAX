import React from 'react';
import UpdateForm from './UpdateForm';
import './form.css'


export default class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateStatus: false,
            name: '',
            age: 0,
            email: ''
        }
    }

    updateFriendHandler = (e) => {
        e.preventDefault();
        const id = this.props.id
        this.props.updateFriend(id, this.state.name, this.state.age, this.state.email);
        this.setState({
            updateStatus: !this.state.updateStatus
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    updateHandler = (e) => {
        e.preventDefault();
        this.setState({
            updateStatus: !this.state.updateStatus
        })
    }

    exitForm = (e) => {
        this.setState({
            updateStatus: !this.state.updateStatus
        })
    }

    render() {
        return (
            <div className="friend-card">
                <div className="exitButton" onClick={this.props.delete(this.props.id)}>X</div>
                <p><strong>Name:</strong> {this.props.friend.name}</p>
                <p><strong>Age:</strong> {this.props.friend.age} years old.</p>
                <p><strong>E-mail:</strong> <p onClick={this.props.no} href='#'>{this.props.friend.email}</p></p>
                <div className="updateBtn" onClick={this.updateHandler}>Update</div>

                {this.state.updateStatus ? <UpdateForm update={this.updateFriendHandler} change={this.inputHandler} exitForm={this.exitForm} /> : null}
            </div>
        )
    }
};



