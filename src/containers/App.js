import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'

const App = () => {
  
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
      .catch(err => console.log(err))
  }, [])

  const setSearch = (event) => {
    setSearchField(event.target.value)
  }
  
  const filteredRobots = robots.filter(users => {
    return users.name.toLowerCase().includes(searchField.toLowerCase(), 0)})

  return !robots.length ? 
    <h1 className='tc'>Loading...</h1>
  : 
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox setSearch={setSearch}/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>    
}

export default App;
