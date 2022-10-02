import React from 'react'
import { useRef } from 'react'


export default function Form() {
    const usernameRef = useRef();
    const passwordRef = useRef();
const submit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(`username: ${username}`)
    console.log(`password: ${password}`)
}
    return <>
        <form onSubmit={submit}>
            <input type="text" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" password={passwordRef} />
            <button>submit</button>
        </form>
    </>
}