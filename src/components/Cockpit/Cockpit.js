import React, {useEffect} from 'react';

const cockpit = (props) => {
    useEffect(() => {
        console.log("Cockpit.js useEffect")
        setTimeout(() => {
            console.log("Data saved to cloud!");
        }, 1000);
        return (
            () => {
                console.log("Cockpit.js cleanup")
            }
        );
    }, []);

    //like useSate, you can have as many useEffect as you need

    return (
        <div>
            <h1>Hi. I'm a React app</h1>
            <p>This is working!</p>
            <button onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;