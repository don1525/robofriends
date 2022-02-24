import React, { Component } from 'react';
import Card from './Card.js';
import { robots } from './robots.js';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      robots.map(user => {
        return <Card robot={user}/>
      })
    );
  }
}

export default App;
