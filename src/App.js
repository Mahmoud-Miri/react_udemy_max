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

      return (
          <div className="App">
              <h1>Hi. I'm a React app</h1>
              <p>This is working!</p>
              <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
              {/*wrapping the div inside {} allows us to use simple JS code; ternary operator here.*/}
              {this.state.showPersons ?
                  <div>
                      <Person
                          name={this.state.persons[0].name}
                          age={this.state.persons[0].age}/>

                      <Person name={this.state.persons[1].name}
                              age={this.state.persons[1].age}
                              click={this.switchNameHandler.bind(this, "Paria")}
                              changed={this.nameChangedHandler}
                      >My Hobbies: Racing</Person>

                      <Person name={this.state.persons[2].name}
                              age={this.state.persons[2].age}/>
                </div> : null
              }
          </div>
      );
    }
}

export default App;
