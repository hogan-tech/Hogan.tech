import React, { useReducer } from 'react';

const UserData = {
    userName: "Hogan",
    email: "hoganlin.tech@gmail.com",
    country: "Taiwan"
}

function User() {
    const [user, setUser] = useReducer(
        (user, newName) => ({ ...user, ...newName })
        , UserData);
    return (
        <div>
            <h1>{`Name: ${user.userName}`}</h1>
            <h1>{`Email: ${user.email}`}</h1>
            <h1>{`Country: ${user.country}`}</h1>
            <button onClick={setUser({userName: "Bobo"})}>Change Name to BOBO</button>
        </div>
    )
}