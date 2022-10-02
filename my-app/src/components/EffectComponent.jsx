import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function EffectComponent() {
    console.log("render components");
    const [value, setValue] = useState(0)
    useEffect(() => {
        setData()
    }, [])
    
    const setData = () => {
        console.log(value)
        setValue(value + 1)
    }
    return (
        <>
            <button onClick={setData}></button>
            {console.log("render JSX")}
        </>
    )
}