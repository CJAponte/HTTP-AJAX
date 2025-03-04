import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: 0,
      name: '',
      age: 0,
      email: '',
      addFriend: false,
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        if (typeof response.data.message === 'string') {
          Promise.reject("Error: Friends not found :( ")
        }
        this.setState({ data: response.data })
      })
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  preventDefault = (e) => {
    e.preventDefault();
  }

  addFriend = (e, prevState) => {
    e.preventDefault();
    this.setState({
      addFriend: !prevState.addFriend
    })
  }

  submit = (e) => {
    e.preventDefault();
    let newID = this.state.data.length + 1;
    console.log(newID);
    this.setState({
      id: newID
    })

    const newObj = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newObj)
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(err => console.log("Couldn't update axios"))

    document.getElementById('form').reset();

  }

  delete = (id) => {
    return () => {
      console.log(id)
      axios.delete(`http://localhost:5000/friends/${id}`)
        .then(response => {
          this.setState({
            data: response.data
          })
        })
        .catch(err => console.log(err))
    }
  }

  updateFriend = (id, name, age, email) => {
    console.log(id, name, age, email)
    console.log('success!')
    axios.put(`http://localhost:5000/friends/${id}`, {
      name: name,
      age: age,
      email: email
    })
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => <Home {...props}
          change={this.handleChange}
          submit={this.submit}
          no={this.preventDefault}
          delete={this.delete}
          updateFriend={this.updateFriend}
          data={this.state.data} />}
        />
      </div>
    );
  }
}
