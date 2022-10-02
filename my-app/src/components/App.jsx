import React from 'react'
import { useState } from 'react'
import ColorList from './ColorList'

const colorData = [
    { id: "1", title: "red", color: "red", rating: 5 },
    { id: "2", title: "blue", color: "blue", rating: 2 },
    { id: "3", title: "green", color: "green", rating: 4 },
]

export default function App() {
    const [colors, setColors] = useState(colorData)
    return <ColorList colors={colors} onRemoveColor={
        id => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors)
        }
    } ></ColorList>
}