import sdk from 'matrix-js-sdk';
import { useEffect, useState } from 'react';
const client = sdk.createClient('https://matrix.org');

export function useMatrix(username: string, password: string) {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    client.login("m.login.password", { user: username, password })
    .then(() => {
      client.on("Room.timeline", function (event: any) {
        console.log(event)
        setEvents(events => [...events, event]);
      });
      client.startClient();
    })

    return () => {
      client.stopClient();
    }
  }, [username, password])

  return events
}