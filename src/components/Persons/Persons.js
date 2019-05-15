import React from 'react';
import Person from "./Person/Person";

const persons = (props) => props.persons.map((aPerson, index) =>{
        return <Person
            click={()=>props.clicked(index)}
            name={aPerson.name}
            age={aPerson.age}
            key={aPerson.id}
            changed={(event)=>props.changed(event, aPerson.id)}
        />
    });

export default persons;