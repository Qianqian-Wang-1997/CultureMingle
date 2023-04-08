import React, { useState, useEffect } from 'react';
import styles from './EventComponent.module.css';
import { Col, Row } from 'antd';
import { normalizeDate } from '../../store/events'
import { NavLink } from 'react-router-dom';


function EventComponent({ event }) {
    // console.log(event)
    return (
        <NavLink to={`/events/${event.id}`} style={{ color: 'black' }}>
            <div className={styles.eventLayout}>
                <Row width="100%">
                    <Col span={18} order={1} className={styles.eventDesc}>
                        <div className={styles.eventTime}>
                            {normalizeDate(event.time)}
                        </div>
                        <div className={styles.eventName}>{event.title}</div>
                        {/* <div className={styles.eventGroup}>{event.group.groupName}</div> */}
                        <div className={styles.eventLocation}>{event.location}</div>
                        <div className={styles.eventAttendee}>5 attendees</div>
                    </Col>
                    <Col span={6} order={2}>
                        <img className={styles.eventImage} src="https://secure-content.meetupstatic.com/images/classic-events/509689972/222x125.jpg" alt=" " loading="lazy" />
                    </Col>
                </Row>
            </div>
        </NavLink>
    )
}
export default EventComponent 