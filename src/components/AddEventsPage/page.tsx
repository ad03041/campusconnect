import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEvents.css';

const AddEventPage: React.FC = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [submitterName, setSubmitterName] = useState('');  // New state for submitter's name
  const [contactInfo, setContactInfo] = useState('');      // New state for contact info

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event Added:', {
      eventName,
      eventDate,
      eventTime,
      eventDescription,
      submitterName,
      contactInfo,
    });

    navigate('/');
  };

  return (
    <div className="add-event-page">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Time</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            value={submitterName}
            onChange={(e) => setSubmitterName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Information</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Email or phone number"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Event</button>
      </form>
    </div>
  );
};

export default AddEventPage;