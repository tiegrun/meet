import React, { Component } from "react";
import { mockData } from './mock-data';

class Event extends Component {

  constructor() {
    super();
 
    this.state = {
      showDetails: false,
      
    }
  }

  handleShowDetails = () => {

    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } 
    else {
      this.setState({ showDetails: false });
    }

  };

  render() {
  
    const eventMakeArray = (Object.values({ mockData }))[0];
    
    const allEventNames = eventMakeArray.map((item) => {
      [item.summary].join(" ");
      return item.summary;
    })

    const eventExample = eventMakeArray.find(x => x.id === '4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z').summary;

    const description = eventMakeArray.map((item) => {
      [item.description].join(" ");
      return item.description;
    })

    const location = eventMakeArray.map((item) => {
      [item.location].join(" ");
      return item.location;
    })

    const timeZone = eventMakeArray.map((item) => {
      [item.start].join(" ");
      return item.start.timeZone;
    })   
    
    const startDateTime = eventMakeArray.map((item) => {
      [item.start].join(" ");
      return item.start.dateTime;
    }) 

    // const eventName = allEventNames.map((singleEvent) =>
    //   <li key={singleEvent}>
    //     {singleEvent}
    //     <button className="detailsBtn" onClick={() => this.handleShowDetails()}>
    //       show details
    //     </button>
    //    </li>
    // );

    return (
      <div className="event">
        <div className="eventOverview">
          <ul className="eventName">
            <li>
              {eventExample}
              <button className="detailsBtn" onClick={() => this.handleShowDetails()}>
                show details
              </button>
            </li>
            {/* {eventExample}
            <button className="detailsBtn" onClick={() => this.handleShowDetails()}>
          show details
        </button> */}
            <li>
              {this.state.showDetails && (
                <div className="eventDetails">
                  <p className="eventDetailsDescription">
                    {/* {EventDescript} */}
                    Description - {description}
                    <br></br>
                    <br></br>
                      Location - {location}
                    <br></br>
                    <br></br>
                      Time Zone - {timeZone}
                    <br></br>
                    <br></br>
                    Start Date - {startDateTime}
                  </p>
                </div>
              )}
              <hr></hr>
            </li>
          </ul>         
        </div> 
      </div>
    );
  }
}

export default Event;