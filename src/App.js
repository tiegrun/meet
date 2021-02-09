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
          // numberOfEvents: 5
        });
        // console.log('dasasasasasa')
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
        console.log("if", "locationEvents", locationEvents)
        }
         else if(locationEvents.length === 0){

          this.setState({
            events: eventsByCount,
           
            numberOfEvents: eventCount
          })

          console.log("else if -----", locationEvents);
         
         }
       
       else {
        const locationEventsByCount = locationEvents.slice(0, eventCount); 
        this.setState({
          events: locationEventsByCount,
          
          numberOfEvents: eventCount
        })
        console.log("locationEvents", locationEvents)
       }
    });

   
  }

  render() {
    
    console.log("events count - ------", this.state.numberOfEvents)

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