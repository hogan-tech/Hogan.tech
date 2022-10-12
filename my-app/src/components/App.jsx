import React from 'react'
import { useEffect } from 'react';


export default function App({ word = "Hello World" }) {
    const words = word.split(" ")

    useEffect(() => {
        console.log("fresh render")
    }, [words])
    return (

        <>
            <h1>test useAnyKeyToRender</h1>
        </>
    )
}