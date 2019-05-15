import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi. I'm a React app</h1>
            <p>This is working!</p>
            <button onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;