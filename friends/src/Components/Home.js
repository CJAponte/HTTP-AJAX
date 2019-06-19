import React from 'react';
import Form from './Form';
import Friend from './Friend';


const Home = (props) => {
    return (
        <div>
            <h1>Friends List!</h1>

            <Form change={props.change} submit={props.submit} />

            {props.data.map(item => (
                <Friend
                    no={props.no}
                    delete={props.delete}
                    id={item.id}
                    key={item.id}
                    friend={item}
                    updateStatus={props.updateStatus}
                    updateFriend={props.updateFriend} />
            ))}

        </div>
    )
};

export default Home;