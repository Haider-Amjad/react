import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
constructor(){
  super();
  this.state={
    monsters:  [ ],
    searchField:''
  };

}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users }));
}

handlechange = (e) => {
  this.setState({searchField:e.target.value})
}

  render() {
const {monsters,searchField } =this.state;
const filteredMonster= monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
<div className="App">
<h1>Monster Rolodex</h1>
  <SearchBox 
  placeholder='Search Monsters'
  handlechange={this.handlechange}
  />
  <CardList monsters={filteredMonster}></CardList>
      
    </div>

    )
  }
}

export default App;
