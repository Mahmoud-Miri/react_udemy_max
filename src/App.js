import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 25},
            {name: "Mark", age: 30},
            {name: "Sarah", age: 35}
        ],
        otherState: "some value",
        showPersons: false
    };

    switchNameHandler = (newName) => {
        //DON't do this.  this.state.person[0].name = "Mahmoud";
        this.setState({
            persons: [
                {name: newName, age: 25},
                {name: "Mark", age: 30},
                {name: "Sarah", age: 40}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Max", age: 25},
                {name: event.target.value, age: 30},
                {name: "Sarah", age: 35}
            ]
        });

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(aPerson =>{
                        return <Person
                            name={aPerson.name}
                            age={aPerson.age}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi. I'm a React app</h1>
                <p>This is working!</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
