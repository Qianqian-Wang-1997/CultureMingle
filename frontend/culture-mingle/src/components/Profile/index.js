import { useState, React } from 'react';
import styles from './index.module.css';
import EventList from "../EventList/index"
import GroupList from "../GroupList/index"
import { Card, Button, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
const Profile = () => {
    const { Meta } = Card;
    const attendee = {
        userId:localStorage.getItem("userId"),
        userEmail:localStorage.getItem("userEmail"),
        username: localStorage.getItem("userName"),
        avatar: "https://joesch.moe/api/v1/random?key=1",
        location: "Waterloo"
    }
    const [hasEvent, setHasEvent] = useState(false);
    const [hasGroup, setHasGroup] = useState(true);
    // Get user info

    return (
        <div className={styles.layout}>
            <Card>
                <Meta
                    avatar={<Avatar size={50} src={attendee.avatar} />}
                    title={attendee.username}
                    description={[
                        <div className={styles.userDescription}>
                            <p>Email: {attendee.userEmail}</p>
                            <p>Location: {attendee.location}</p>
                         </div>
                       ]} >
                </Meta>
            </Card>
            <div className={styles.subLayout}>
                <h1 className={styles.contentTitle}>My Events</h1>
                {hasEvent ?
                    <div>
                        <EventList />
                    </div> :
                    <div className={styles.noEvent}>
                        Currently No Event! Click here to <NavLink to="/">Discover More Event</NavLink>, 
                        or <NavLink to="/createEvent">Create your own Event!</NavLink>
                    </div>}
            </div>
            <div className={styles.subLayout}>
                <h1 className={styles.contentTitle}>My Groups</h1>
                {hasGroup ?
                    <div>
                        <GroupList />
                    </div> :
                    <div className={styles.noEvent}>
                        Currently No Group! Click here to <NavLink to="/groups">Find more interesting Groups!</NavLink>
                    </div>}
            </div>
        </div>
    )
}
export default Profile;