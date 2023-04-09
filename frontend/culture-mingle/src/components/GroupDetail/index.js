import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Col, Row, Menu } from 'antd';
import {
    AimOutlined,
    UserOutlined,
} from '@ant-design/icons';

import EventComponent from '../EventList/EventComponent';
import MemberList from '../MemberList';

const items = [
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Events',
        key: 'events',
    },
    {
        label: 'Members',
        key: 'members',
    }
];

const GroupDetail = (props) => {
    const { groupId } = useParams();
    const [host, setHost] = useState('');
    const [events, setEvents] = useState([]);
    const [current, setCurrent] = useState('about');
    // Change header status
    const onClick = e => {
        setCurrent(e.key);
    }

    // Get group data by groupId
    const [currentGroup, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(`/groups/${groupId}`);
            // Get event ids
            setEvents(response.data.events)
            setData(response.data);
        } catch (error) {
            console.error('Error fetching group data:', error);
        }

    };
    useEffect(() => {
        getData();
    }, []);


    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const eventRequests = events.map(async (item) => {
                    const response = await axios.get(`/events/${item}`);
                    return response.data;
                });
                const eventData = await Promise.all(eventRequests);
                // Do something with eventData, which is an array of responses from all the axios requests
                // console.log("events", eventData);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };
        fetchEventData();
    }, [events]);


    return (
        <div className={styles.group}>
            <div className={styles.groupHomeHeader}>
                <Row width="100%">
                    <Col span={10} order={1}>
                        <img className={styles.groupImage} src={currentGroup.logoUrl} alt=" " loading="lazy" />
                    </Col>
                    <Col span={12} order={2} className={styles.groupContent}>
                        <div className={styles.groupTitle}>
                            {currentGroup.groupName}
                        </div>
                        <div className={styles.groupDesc}>
                            <AimOutlined className={styles.icon} />
                            {currentGroup.location}
                        </div>
                        <div className={styles.groupDesc}>
                            {currentGroup.organizer ?
                                <div><UserOutlined className={styles.icon} />Host by {host}</div> :
                                <div>no host right now
                                </div>}
                        </div>
                    </Col>
                </Row>
            </div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {current == "about" ? <div className={styles.about}> {currentGroup.description} </div> : <></>}
            {current == "events" ?
                <div className={styles.events}>
                    {events && events.map(item => (
                        <EventComponent key={item.id} event={item} />
                    ))}
                    {!events ? <div className={styles.noContent}>No Event Right Now</div> : <></>}
                </div> : <></>}
            {current == "members" ?
                <div className={styles.members}>
                    {currentGroup.attendees.length == 0 ? <div className={styles.noContent}>No Memeber Right Now</div> :
                        <MemberList list={currentGroup.attendees} />}
                </div> : <></>}

        </div>
    )
};

export default GroupDetail;