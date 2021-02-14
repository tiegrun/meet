import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";

class App extends Component {

  state = {
    events: [],
    // events: (Object.values({ mockData }))[0]
    locations: [],
    numberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;

    getEvents().then((events) => {

      const showEvents = events.slice(0, this.state.numberOfEvents)
      
      if (this.mounted) {

        this.setState({ 
          events: showEvents, 
          locations: extractLocations(events),
        });
        // console.log(React.version);
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    
    getEvents().then((events) => {
      
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);

      const eventsByCount = events.slice(0, eventCount);  
      
        if(locationEvents === events){

          this.setState({
          events: eventsByCount,
         
          numberOfEvents: eventCount
        })

        }
         else if(locationEvents.length === 0){

          this.setState({
            events: eventsByCount,
           
            numberOfEvents: eventCount
          })

         }
       
       else {
        const locationEventsByCount = locationEvents.slice(0, eventCount); 
        this.setState({
          events: locationEventsByCount,
          
          numberOfEvents: eventCount
        })
       }
    });
  }

  render() {
    
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents} locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;