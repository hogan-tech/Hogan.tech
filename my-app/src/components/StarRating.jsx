import React from 'react'
import { FaStar } from 'react-icons/fa'

const Star = ({ selected = true, onSelect = f => f }) => (
    <FaStar color={selected ? 'red' : 'gray'} onCLick={onSelect}></FaStar>
)

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
    return <div>
        {createArray(totalStars).map((n, i) =>
            <Star
                key={i}
                selected={selectedStars > i}
               />
        )}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </div>
}


