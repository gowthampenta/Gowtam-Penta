import React, { useState } from "react";

const EventForm = ({ addEvent, selectedEvent, updateEvent }) => {
  const [event, setEvent] = useState(
    selectedEvent || { name: "", date: "", time: "", description: "" }
  );

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      updateEvent(event);
    } else {
      addEvent(event);
    }
    setEvent({ name: "", date: "", time: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={event.name}
        onChange={handleChange}
        placeholder="Event Name"
        required
      />
      <input
        type="date"
        name="date"
        value={event.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={event.time}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={event.description}
        onChange={handleChange}
        placeholder="Event Description"
        required
      ></textarea>
      <button type="submit">
        {selectedEvent ? "Update Event" : "Add Event"}
      </button>
    </form>
  );
};

export default EventForm;
