import React, { useState } from 'react';

function Header() {
    const [message, setMessage] = useState('Click the button...');

    const handleClick = () => {
        setMessage('You clicked the button!');
    }

    return (
        <div>
            <h1>Elise's Demo React Project</h1>
            <p>{message}</p>
            <button onClick={handleClick}>Click Me</button>
            <br></br>
        </div>
    );
}

export default Header;
