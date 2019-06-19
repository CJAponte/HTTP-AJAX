import React from 'react';
import './form.css'

const Form = (props) => {
  return (
    <form>
      <h1>Add a New Friend!</h1>
      <div className="inputSection">
        <input onChange={props.change} id='name' type='text' placeholder='name'></input>
        <input onChange={props.change} id='age' type='number' placeholder='age'></input>
        <input onChange={props.change} id='email' type='email' placeholder='email'></input>
        <button onClick={props.submit}>Add Friend</button>
      </div>
    </form>
  )
};

export default Form;

