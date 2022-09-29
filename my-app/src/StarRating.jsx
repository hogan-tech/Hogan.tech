import React from 'react'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const Star = ({ selected = true, onSelect = f => f }) => (
    <FaStar color={selected ? 'red' : 'gray'} onCLick={onSelect}></FaStar>
)

const createArray = length => [...Array(length)];

export function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(3)
    return <div>
        {createArray(totalStars).map((n, i) => 
<Star 
    key={i} 
    selected={selectedStars > i} 
    onSelect={() => setSelectedStars(i + 1)} />
)}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </div>
}


