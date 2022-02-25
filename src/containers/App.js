import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField:'',
      robots: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data => this.setState({robots: data}))
    .catch(err => console.log(err))
  }

  setSearch = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const { searchField, robots } = this.state;
    const filteredRobots = robots.filter(users => {
      return users.name.toLowerCase().includes(searchField.toLowerCase(), 0)})

    return !robots.length ? 
      <h1 className='tc'>Loading...</h1>
    : 
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox setSearch={this.setSearch}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>    
  }
}

export default App;
