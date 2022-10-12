import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '..';
import Color from './Color'


export default function ColorList() {
    const { colors } = useContext(ColorContext);
    if (!colors.length) return <div>No colors</div>;
    return (
        <div style={{ padding: 100 }}>
            {colors.map(color => <Color key={color.id} {...color} />)}
        </div>
    )
}