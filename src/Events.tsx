import React from 'react';
import { useMatrix } from './matrixClient';
import './Events.css';

interface EventsProps {
  username: string;
  password: string;
}

function Events({username, password}: EventsProps) {
  const events = useMatrix(username, password);


  return (<div className='events'>
    {events.map(({ event, sender }: any) => (
      <div key={event.event_id}>{sender.name}: {event.content.body}</div>
    ))}
  </div>);
}
export default Events;