import React from 'react';
import { Link } from 'react-router5';

function Menu() {
    return (
        <ul>
            <li>
                <Link routeName='home'>Home</Link>
            </li>

            <li>
                <Link routeName='react'>React</Link>
            </li>
        </ul>
    );
}

export default Menu;
