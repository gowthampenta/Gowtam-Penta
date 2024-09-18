import React from "react";
import "../App.css";
const EventDetails = ({ event, onBack }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>
        {event.date} at {event.time}
      </p>
      <p>{event.description}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default EventDetails;
