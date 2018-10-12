import React, { Component } from 'react';
import PeopleCard from './components/PeopleCard';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: []
    }
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(r => r.json())
    .then(res => this.setState({people: res.people}))
  }

  render(){
    let people = this.state.people
    return(
      <div>
        {people && people.length ? (
          people.map(person => <PeopleCard key={person.name} person={person}/>)
        ) : (
          "Nothing here"
        )}
      </div>
    );
  }
}

export default App;
