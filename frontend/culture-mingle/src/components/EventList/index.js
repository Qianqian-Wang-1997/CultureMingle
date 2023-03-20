import React, { useState, useEffect } from 'react';
import EventComponent from './EventComponent';
import axios from 'axios';

function EventList({ eventList }) {
    const [data, setData] = useState([]);
    const getData = async () => {
      const { data } = await axios.get("/events");
      setData(data);
      console.log(data[0])
    };
    useEffect(() => {
      getData();
    }, []);

    return (
        <div>
            {data && data.map(item => (
                <EventComponent key={item.id} event={item} />
            ))}
        </div>
    )
}
export default EventList 