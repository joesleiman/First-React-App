import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        persons: [
            {name: 'Joe', age: 27},
            {name: 'Chady', age: 35},
            {name: 'Margot', age: 40},
        ],
        username: 'Joe'
    }

    switchNameHandler = () => {
        console.log("switch handler");
    }

    manipulateState = (event) => {
      this.setState({
            username : event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, i'm react app</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <UserInput username={this.state.username} changed={this.manipulateState}/>
                <UserOutput username={this.state.username}/>

            </div>
        );
    }
}

export default App;
