import React from 'react'
import { useState } from 'react';


export default function Form() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submit = (e) => {
        e.preventDefault();
        console.log(`username: ${username}`)
        console.log(`password: ${password}`)
    }
    return <>
        <form onSubmit={submit}>
            <input type="text" placeholder="username" onChange={event => setUsername(event.target.value)} />
            <input type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
            <button>submit</button>
        </form>
    </>
}