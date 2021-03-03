import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';

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
        // console.log(this.events);
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

   showStatus = (online) => {

    const connectionStatus = document.querySelector('#connectionStatus');
  
    if (online) {
      connectionStatus.innerText = `You're online ! 😄`;
      connectionStatus.style.background = "green";
      connectionStatus.style.color = "white";
    } 
    else {
      connectionStatus.innerText = `You are offline, please connect to the Internet to get updated events !!! 😢`;
      connectionStatus.style.background = "red";
      connectionStatus.style.color = "white";
    }
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return {city, number};
    })
    return data;
  };
  
  render() {
    window.addEventListener('load', () => {
      // 1st, we set the correct status when the page loads
      navigator.onLine ? this.showStatus(true) : this.showStatus(false);
    
      // now we listen for network status changes
      window.addEventListener('online', () => {
        this.showStatus(true);
      });
    
      window.addEventListener('offline', () => {
        this.showStatus(false);
      });
    });
    
    return (
      <div className="App">
        <div id="connectionStatus"></div>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} locations={this.state.locations}/>
        <h4>Events in each city</h4>

        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events}/>

          <ResponsiveContainer height={400} >
            <ScatterChart width={800} height={250}
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        
        <EventList events={this.state.events}/>
        
      </div>
    );
  }
}

export default App;