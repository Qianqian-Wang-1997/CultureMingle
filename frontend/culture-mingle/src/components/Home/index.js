import React, { useState } from 'react';
import styles from './index.module.css';
import EventList from "../EventList/index"
import { NavLink } from 'react-router-dom';

import { Layout, Menu, Col, Button, Row } from 'antd';

const { Content } = Layout;


const Home = () => {

  return (
    <Content className={styles.contentBackground}>
      <div className={styles.content}>
        <p className={styles.contentTitle}>Upcoming Events</p>
        <EventList></EventList>
        <p className={styles.contentTitle}>Popular groups</p>
        <p className={styles.contentTitle}>Get Started</p>
      </div>
    </Content>
  );
};

export default Home;