import { Box, Text, Button } from '@radix-ui/themes';
import EventItem from '../EventItem/EventItem';
import { useState} from "react"

export default function EventList(eventList) {
   
   const [events, setEvents] = useState([
  ]);

  const [newEvent, setNewEvent] = useState('');

  const handleAddEvent = () => {
    if (newEvent) {
      setEvents([...events, { title: newEvent }]);
      setNewEvent('');
    }
  };

  return (
    <Box className="eventsList" style={{ width: '300px', margin: '0 auto' }}>
    <h2>Todays Events</h2>
      {events.map((event, index) => (
        <EventItem key={index} {...event} />
      ))}
      <textarea
      className='Textarea'
        type="text"
        placeholder="New Event"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
      />
      <Button onClick={handleAddEvent}>Add Event</Button>
    </Box>
  ); 
}