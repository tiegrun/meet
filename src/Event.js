import React, { Component } from "react";


class Event extends Component {

  constructor() {
    super();
 
    this.state = {
      showDetails: false,
      query: 'Munich',
      suggestions: []
    }
  }

  handleShowDetails = () => {

    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }

  };

  render() {
    
    const EventItem = this.props.events.map(((item)=>{
      [item.summary].join(" ");
      return item.summary;
    }));

    const EventDescript = this.props.events.map(((item)=>{
      [item.description].join(" ");
      return item.description;
    }))


    return (
      <div className="event">
        <div className="eventOverview">
          <p className="eventName">
            {EventItem}
          </p>         
          <button className="detailsBtn" onClick={() => this.handleShowDetails()}>
            show details
          </button>
        </div>

        {this.state.showDetails && (
          <div className="eventDetails">
            <p className="eventDetailsDescription">
              {EventDescript}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;