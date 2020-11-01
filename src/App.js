
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';

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
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1> Monster Rolodex</h1>
      <SearchBox placeholder ='search monsters' handleChange={e => this.setState({ searchField : e.target.value}, () => console.log(this.state))}/>
      <CardList people = {filteredPeople} />
      </div>
    );
  }
}


export default App;
