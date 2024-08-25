import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/react-side-project/">Cat Facts</Link>
                </li>
                <li>
                    <Link to="/react-side-project/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
