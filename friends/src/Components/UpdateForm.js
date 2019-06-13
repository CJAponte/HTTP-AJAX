import React from 'react';
import './form.css'

const UpdateForm = (props) => {
    return (
        <div>
            <form className="updateForm">
                <div className="exitButtonUpdate" onClick={props.exitForm} >X</div>
                <h1>Update Your friend!</h1>
                <div className="inputSection">
                    <input onChange={props.change} id='name' type='text' placeholder='name'></input>
                    <input onChange={props.change} id='age' type='number' placeholder='age'></input>
                    <input onChange={props.change} id='email' type='email' placeholder='email'></input>
                </div>
                <button onClick={props.update}>Update Friend</button>
            </form>
        </div>
    )
};

export default UpdateForm;

