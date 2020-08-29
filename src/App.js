import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    persons: [
      { id: "ab1", name: "Max", age: 28 },
      { id: "ab12", name: "Manu", age: 29 },
      { id: "ab123", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };
  changeHandler = (event) => {
    const strLength = event.target.value.length;
    //console.log(strLength);
    return strLength;
  };

  nameChangedHandler = (event, id) => {
    //send in the ID and then find the index of the person
    //that matched the ID
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //Grab just that one person object eg( { id: "ab1", name: "Max", age: 28 })
    const person = { ...this.state.persons[personIndex] };
    //Grab the name of the object, in this case use target.value because its the event changing
    person.name = event.target.value;
    //set persons back to the whole array with the changed value
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        <div>
          <input onChange={(event) => this.changeHandler(event)} type="text" />
          <ValidationComponent></ValidationComponent>
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
