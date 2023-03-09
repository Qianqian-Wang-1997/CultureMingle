import React, { useState, useEffect } from 'react';
import styles from './EventComponent.module.css';
import { Col, Row } from 'antd';
import { normalizeDate } from '../../store/events'


function EventComponent() {
    const newDate = new Date("2022-01-23T13:00")

    return (
        <div className={styles.eventLayout}>
            <Row width="100%">
                <Col span={18} order={1} className={styles.eventDesc}>
                    <div className={styles.eventTime}>
                        {normalizeDate(newDate)}
                    </div>
                    <div className={styles.eventName}>Join the celebration of Spring Festival !</div>
                    <div className={styles.eventGroup}>UWaterloo Chinese Students Group</div>
                    <div className={styles.eventLocation}>Student Life Centre, 200 University Ave W, Waterloo, ON N2L 3G1</div>
                    <div className={styles.eventAttendee}>5 attendees</div>
                </Col>
                <Col span={6} order={2}>
                    <img className={styles.eventImage} src="https://secure-content.meetupstatic.com/images/classic-events/509689972/222x125.jpg" alt=" " loading="lazy" />
                </Col>
            </Row>
        </div>
    )
}
export default EventComponent 