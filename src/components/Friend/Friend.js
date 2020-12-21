import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, id} = props.friend;
    const FriendStyle = {
        border: '2px solid red',
        borderRadius:'5px',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        width: '300px',
    }
    return (
        <div style={FriendStyle} >
            <h2>Name: {name}</h2>
            <Link to={`/friend/${id}`} >
                <button>Show Detail of Id-{id}</button>
            </Link>
        </div>
    );
};

export default Friend;