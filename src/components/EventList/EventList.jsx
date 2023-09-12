import { Box, Text, Button } from '@radix-ui/themes';
import EventItem from '../EventItem/EventItem';
import { useState } from "react"

export default function EventList({ eventList, onChange }) {
    const [newEvent, setNewEvent] = useState('');

    const handleAddEvent = () => {
        if (newEvent) {
            const newEvents = [...eventList, { title: newEvent }];
            onChange(newEvents);
            setNewEvent('');
        }
    };

    return (
        <Box className="eventsList" style={{ width: '300px', margin: '0 auto' }}>
            {eventList.map((event, index) => (
                <EventItem key={index} {...event} />
            ))}
            <textarea
                className='Textarea'
                type="text"
                placeholder="New Event"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
            />
            <Button type="button" onClick={handleAddEvent}>Add Event</Button>
        </Box>
    );
}
