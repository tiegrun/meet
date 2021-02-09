import React, { Component } from "react";
import './Event.css';

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const infoEvent = this.props.event

    // console.log("this one" , infoEvent.summary)

    return (
      
      <div className="event">
        <div className="eventOverview">
          <p className="eventName">
            Event Name - {infoEvent.summary}
            <br></br>
            City  - {infoEvent.location}
          </p>
          <button className="detailsBtn"onClick={() => this.handleShowDetails()}>
            show details
          </button>
        </div>

        {this.state.showDetails && (
          <div className="eventDetails">
            <p className="eventDetailsDescription">
              {infoEvent.description}
            </p>
            <p className="eventDateTime">
              Start Time - {infoEvent.start.dateTime}
              <br></br>
              End Time - {infoEvent.end.dateTime}
            </p>
            <p className="eventTimeZone">
              Time Zone - {infoEvent.start.timeZone}
            </p>
            <hr></hr>
          </div>
        )}

      </div>
    );
  }
}

export default Event;