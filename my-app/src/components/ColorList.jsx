import React from 'react'
import Color from './Color'

export default function ColorList({ colors = [], onRemoveColor = f => f }) {
    if (!colors.length) return <div>No colors</div>;
    return (
        <div style={{ padding: 100 }}>
            {colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} />)}
        </div>
    )
}