import React from 'react';
import EventComponent from './EventComponent';
import { NavLink } from 'react-router-dom';

function EventList() {
    return (
        <div>
            <NavLink to="/events/:eventId">
                <EventComponent></EventComponent>
            </NavLink>
            <EventComponent></EventComponent>
        </div>
    )
}
export default EventList 