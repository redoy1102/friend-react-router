import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    const FriendStyle = {
        border: '2px solid red',
        borderRadius:'5px',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        width: '300px',
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div  style={FriendStyle}>
            <h1>{friend.name}</h1>
            <h2>{friend.username}</h2>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <p>{friend.website}</p>
        </div>
    );
};

export default FriendDetail;