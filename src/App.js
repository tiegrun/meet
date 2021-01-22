import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>test</h1>
        <EventList />
      </div>
    );
  }
}

export default App;