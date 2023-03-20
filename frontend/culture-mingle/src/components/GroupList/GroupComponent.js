import React, { useState, useEffect } from 'react';
import styles from './GroupComponent.module.css';
import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { HeatMapOutlined } from '@ant-design/icons';

function GroupComponent({ group }) {
    return (
        <NavLink to={`/groups/${group.id}`} style={{ color: 'black' }}>
            <div className={styles.groupLayout}>
                <Row width="100%">
                    <Col span={18} order={1} className={styles.groupDesc}>
                        <div className={styles.groupName}>{group.title}</div>
                        <div className={styles.groupDesc}>{group.description}</div>
                        <div className={styles.groupLocation}><HeatMapOutlined />{group.location}</div>
                        <div className={styles.groupAttendee}>{group.membersNo} members</div>
                    </Col>
                    <Col span={6} order={2}>
                        <img className={styles.groupImage} src="https://secure.meetupstatic.com/photos/event/1/9/d/a/clean_508926618.jpeg" alt=" " loading="lazy" />
                    </Col>
                </Row>
            </div>
        </NavLink>
    )
}
export default GroupComponent 