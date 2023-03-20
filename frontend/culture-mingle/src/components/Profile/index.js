import { useState, React } from 'react';
import styles from './index.module.css';
import EventList from "../EventList/index"
import { Card, Button, Avatar } from 'antd';

const Profile = () => {
    const { Meta } = Card;
    const attendee = {
        avatar: "https://joesch.moe/api/v1/random?key=1",
        name: "Amber Wang",
        location: "Waterloo"
    }
    const [hasEvent, setHasEvent] = useState(true);
    const [hasGroup, setHasGroup] = useState(false);
    // Get user info

    return (
        <div className={styles.layout}>
            <Card>
                <Meta
                    avatar={<Avatar size={50} src={attendee.avatar} />}
                    title={attendee.name}
                    description={attendee.location} />
            </Card>
            <div className={styles.subLayout}>
                <h1 className={styles.contentTitle}>My Events</h1>
                {hasEvent ?
                    <div>
                        <EventList />
                    </div> :
                    <div className={styles.noEvent}>
                        Currently No Event
                    </div>}
            </div>
            <div className={styles.subLayout}>
                <h1 className={styles.contentTitle}>My Groups</h1>
                {hasGroup ?
                    <div>
                        <EventList />
                    </div> :
                    <div className={styles.noEvent}>
                        Currently No Group
                    </div>}
            </div>
        </div>
    )
}
export default Profile;