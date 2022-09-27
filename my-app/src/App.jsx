import React from 'react'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const Star = ({ selected = true }) => (
    <FaStar color={selected ? 'red' : 'gray'}></FaStar>
)

const createArray = length => [...Array(length)];

export default function App({ totalStar = 5 }) {
    const [selectedStars] = useState(3)
    return createArray(totalStar).map((n, i) =>
        <Star key={i} selected={selectedStars > i} />)
}