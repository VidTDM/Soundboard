import React, { useState } from 'react';
import './App.css';
// Components
import Nav from './Components/Navbar';
import Sound from './Components/Sound';
import AddButton from './Components/AddButton';

export default function App() {
    // Javascript
    const [sounds, setSounds] = useState([]);
    // JSX
    return (
        <>
            <Nav/>
            <div className='main'>
                <Sound name="basd"></Sound>
                <AddButton sounds={sounds} setSounds={setSounds}/>
            </div>
        </>
    );
}