import React, { useState, useEffect } from 'react';
import EventComponent from './EventComponent';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function EventList() {
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        fetch('http://localhost:8080/events', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => {
                console.log(resp);
                console.log('======success=======');
            })
            .catch(err => {
                console.log('======failure=======');
                console.log(err);
            });
    })

    return (
        <div>
            {/* {data.hits.map(item => (
                console.log(item.title)
                ))} */}
            <NavLink to="/events/:eventId" style={{ color: 'black' }}>
                <EventComponent></EventComponent>
            </NavLink>
            <EventComponent></EventComponent>
        </div>
    )
}
export default EventList 