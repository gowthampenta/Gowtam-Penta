import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.name === updatedEvent.name ? updatedEvent : event
      )
    );
    setSelectedEvent(null);
  };

  const deleteEvent = (name) => {
    setEvents(events.filter((event) => event.name !== name));
  };

  const selectEvent = (event) => {
    setSelectedEvent(event);
    setViewDetails(true);
  };

  return (
    <div className="App">
      <h1>Event Scheduler</h1>
      {!viewDetails ? (
        <>
          <EventForm
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            updateEvent={updateEvent}
          />
          <EventList
            events={events}
            deleteEvent={deleteEvent}
            selectEvent={selectEvent}
          />
        </>
      ) : (
        <EventDetails
          event={selectedEvent}
          onBack={() => setViewDetails(false)}
        />
      )}
    </div>
  );
}

export default App;
