import React, { useState } from "react";

const EventList = ({ events, deleteEvent, selectEvent }) => {
  const [filterDate, setFilterDate] = useState("");

  const filteredEvents = filterDate
    ? events.filter((event) => event.date === filterDate)
    : events;

  return (
    <div>
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>
            <h3>{event.name}</h3>
            <p>
              {event.date} at {event.time}
            </p>
            <p>{event.description}</p>
            <button onClick={() => selectEvent(event)}>Edit</button>
            <button onClick={() => deleteEvent(event.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
