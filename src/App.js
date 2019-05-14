import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
    state = {
        persons: [
            {id: "id1", name: "Max", age: 25},
            {id: "id2", name: "Mark", age: 30},
            {id: "id3", name: "Sarah", age: 35}
        ],
        otherState: "some value",
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        //Since we don't want to change state directly (since a Person is a ref.)
        // we create a copy of the person using the spread operator with the person
        //object. ... copies everything to the new object
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

    };

    deletePersonHandler = (personIndex) => {
        //don't do: const newPersons = this.state.persons;
        //use vanilla JS slice() to get a new (shallow) copy
        // const newPersons = this.state.persons.slice();
        //Or use ES6 Spread operator ...
        const newPersons = [...this.state.persons];

        //FYI, we are not changing a const here. Arrays are of reference type
        //and here we are not changing the pointer; we are changing the value
        //it points to.
        newPersons.splice(personIndex, 1);
        this.setState({persons: newPersons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((aPerson, index) =>{
                        return <Person
                            click={()=>this.deletePersonHandler(index)}
                            name={aPerson.name}
                            age={aPerson.age}
                            key={aPerson.id}
                            changed={(event)=>this.nameChangedHandler(event, aPerson.id)}
                        />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi. I'm a React app</h1>
                    <p className={classes.join(" ")}>This is working!</p>
                    <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
