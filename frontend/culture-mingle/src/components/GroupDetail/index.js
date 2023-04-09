import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
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
        // icon: <MailOutlined />,
    },
    {
        label: 'Events',
        key: 'events',
        // icon: <AppstoreOutlined />
    },
    {
        label: 'Members',
        key: 'members',
        // icon: <SettingOutlined />
    },
    // {
    //     label: (
    //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //             More Link
    //         </a>
    //     ),
    //     key: 'alipay',
    // },
];

const GroupDetail = (props) => {
    const [current, setCurrent] = useState('about');
    const onClick = e => {
        setCurrent(e.key);
    }

    const currentGroup = {
        id: "64054850f2668452e1757032",
        groupName: "Join the celebration of Spring Festival !",
        description: "The day before the Chinese New Year usually accompanied with a dinner feast, consisting of special meats are served at the tables, as a main course for the dinner and as an offering for the New Year. This meal is comparable to Thanksgiving dinner in the U.S. and remotely similar to Christmas dinner in other countries with a high percentage of Christians.\nIn northern China, it is customary to make jiaozi, or dumplings, after dinner to eat around midnight. Dumplings symbolize wealth because their shape resembles a Chinese sycee. In contrast, in the South, it is customary to make a glutinous new year cake (niangao) and send pieces of it as gifts to relatives and friends in the coming days. Niangao literally means \"new year cake\" with a homophonous meaning of \"increasingly prosperous year in year out\".\nAfter dinner, some families may visit local temples hours before midnight to pray for success by lighting the first incense of the year; however in modern practice, many households held parties to celebrate. Traditionally, firecrackers were lit to ward evil spirits when the household doors sealed, and are not to be reopened until dawn in a ritual called \"opening the door of fortune\". A tradition of staying up late on Chinese New Year's Eve is known as shousui, which is still practised as it is thought to add on to one's parents' longevity.\nCome celebrate the Spring Festival with us, regardless of your origin! Let's write spring couplets, craft rabbit lanterns, and prepare a dinner feast together in the Student Life Center. We look forward to seeing you on Friday!",
        time: "2022-01-23T05:00:00.000+0000",
        location: "Waterloo, ON",
        organizer: "Ryan Cham",
        attendees: [],
        group: null,
        logoUrl: "https://secure.meetupstatic.com/photos/event/1/9/d/a/clean_508926618.jpeg"

    }
    const events = [{
        id: "642da479430684ddf5459796",
        title: "Culture Mingle Presentation",
        description: "Let's do it!",
        venue: "E7",
        host: "Some people",
        time: "2023-04-19T00:08:00.000+0000",
        imageUrls: [],
        group: null,
        attendees: []
    },
    {
        id: "642f1d42e99c8f7344d46461",
        title: "Short Hike Waterloo Region",
        description: "The Laurel Trail begins at Waterloo City Centre and runs both east and west from here. This trail offers more than eight kilometres (five miles) of trail along the Laurel Creek. It runs through uptown Waterloo - where you may want to stop for food, shopping or a visit to the Waterloo Public Square - and Waterloo Park, the jewel of the city. \n Please bring water and snack, message me if you have any questions!",
        venue: "100 Father David Bauer Dr, Waterloo, ON N2L 2Y4",
        host: null,
        time: "2023-04-15T00:00:00.000+0000",
        imageUrls: [],
        group: null,
        attendees: []
    }]
    // const [events, setEvent] = useState([]);
    // const getEvent = async () => {
    //   const { event } = await axios.get("/events");
    //   setEvent(events);
    // };
    // useEffect(() => {
    //   getEvent();
    // }, []);

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
                            <UserOutlined className={styles.icon} />
                            Host by {currentGroup.organizer}
                            {/* TODO: GET organizer's info */}
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
            {currentGroup.attendees.length==0 ? <div className={styles.noContent}>No Memeber Right Now</div> : 
            <MemberList list={currentGroup.attendees} />} 
            </div> : <></>}

        </div>
    )
};

export default GroupDetail;