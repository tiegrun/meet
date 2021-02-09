import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    eventCount:  32
    
  }

  handleInputChanged = (event) => {
    const value = parseInt(event.target.value);
    
    if(value >= 1  && value <= 250){
      this.setState({ 
        eventCount: value 
      });

    }
    else{
      alert("please enter a valid number between 0 and 250")
    }
    
    this.props.updateEvents(this.props.locations, value);
    
  }

  render() {
    
    // const {locations} = 
    // console.log(this.props.locations);
    return(
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input type="text" id="numberOfEventsInput" value={this.state.eventCount} onChange={this.handleInputChanged}/>
      </div>
    );
  }
}

export default NumberOfEvents;