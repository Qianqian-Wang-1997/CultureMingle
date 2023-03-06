import React, { useState, useEffect } from 'react';
import './EventComponent.css';
import { Col, Row } from 'antd';
import { normalizeDate } from '../../store/events'


function EventComponent() {
    const newDate = new Date("2023-03-12T13:00")

    return (
        <div className='event-layout'>
            <Row width="100%">
                <Col span={18} order={1} className='event-desc'>
                    <div className='event-time'>
                        {normalizeDate(newDate)}
                    </div>
                    <div className='event-name'>NVU Wealth Strategy Session NYC w/Special Guest CVO Mr. David Imonitie</div>
                    <div className='event-group'>New York Motivation & Success Meetup Group</div>
                    <div className='event-location'>New York, NY</div>
                    <div className='event-attendee'>17 attendees</div>
                </Col>
                <Col span={6} order={2}>
                    <img className='event-image' src="https://secure-content.meetupstatic.com/images/classic-events/509689972/222x125.jpg" alt=" " loading="lazy" />
                </Col>
            </Row>
        </div>
    )
}
export default EventComponent 