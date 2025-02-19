import React, { Component } from "react";

import '../styles/App.css';
import HelloWorld from "../components/HelloWorld";

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person("John", 25);
  person.sayHello();
  
class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <p><HelloWorld/></p>
            </div>
        );
    }
}

export default App;
