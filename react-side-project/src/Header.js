import React, { useState } from 'react';

function Header() {
    const [message, setMessage] = useState('Click the button...');

    const handleClick = () => {
        setMessage('You clicked the button!');
    }

    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This is my first React component.</p>

            <p>{message}</p>
            <button onClick={handleClick}>Click Me</button>
            <br></br>
        </div>
    );
}

export default Header;
