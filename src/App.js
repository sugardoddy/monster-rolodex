
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.components'
class App extends Component
{
  constructor(){
    super();

    this.state = {
      people : [],
      searchField: ''
    }
  }

  componentDidMount ()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({people:users}));
  }

  render() {
    return (
      <div className="App">
      <input type='search' placeholder='search people' onChange={e => this.setState({ searchField : e.target.value}, () => console.log(this.state))} />
      <CardList people = {this.state.people} />
      </div>
    );
  }
}


export default App;
