import React from 'react';

export default function Button({ children }) {
    return (
        <button
            onClick={ () => window.alert(children) }>
                Say { children }
        </button>
    );
}
