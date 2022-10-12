import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import UseAnyKeyRender from './components/Increment';
import Increment from './components/Increment';
import { createContext } from 'react';


const colorData = [
    { id: "1", title: "red", color: "red", rating: 5 },
    { id: "2", title: "blue", color: "blue", rating: 2 },
    { id: "3", title: "green", color: "green", rating: 4 },
]


export const ColorContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ColorContext.Provider value={{colorData}} >
    <Increment />
</ColorContext.Provider>
);
