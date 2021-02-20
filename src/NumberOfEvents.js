import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    eventCount:  32,
    errorText:''
  }

  handleInputChanged = (event) => {

    if(parseInt(event.target.value)){
      
      const value = parseInt(event.target.value);
    
      if(value >= 1  && value <= 250){
        this.setState({ 
          eventCount: value,
          errorText:''
        });

      }
      else{
        // alert("please enter a valid number between 0 and 250");
        this.setState({
          eventCount: value,
          errorText: 'please enter a valid number between 1 and 250',
        });
      }

      this.props.updateEvents(this.props.locations, value);

   }
    else{

      this.setState({ 
        eventCount: "",
        errorText: 'please enter a valid number between 1 and 250'
      });
      
    }
  }

  render() {
    
    return(
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <label>Number of Events: </label>
        <input type="text" id="numberOfEventsInput" value={this.state.eventCount} onChange={this.handleInputChanged}/>
      </div>
    );
  }
}

export default NumberOfEvents;