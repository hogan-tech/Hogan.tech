import React, { createContext, useState } from 'react'

const colorData = [
    { id: "1", title: "red", color: "red", rating: 5 },
    { id: "2", title: "blue", color: "blue", rating: 2 },
    { id: "3", title: "green", color: "green", rating: 4 },
]

const ColorContext = createContext();

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);
    return (
        <ColorContext.Provider value={{ colors, setColors }}>
            {children}
        </ColorContext.Provider>
    )
}