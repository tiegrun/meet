import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from './mock-data';

class App extends Component {

  constructor() {
    super();
 
    this.state = {
      events: (Object.values({ mockData }))[0]
      
    }
  }

  // componentDidMount(){

  // }

  render() {
    return (
      <div className="App">
        <CitySearch/>
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;