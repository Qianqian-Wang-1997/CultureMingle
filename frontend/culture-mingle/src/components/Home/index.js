import React from 'react';
import styles from './index.module.css';
import EventList from "../EventList/index"

import { Layout } from 'antd';

const { Content } = Layout;


const Home = () => {
  return (
    <Content className={styles.contentBackground}>
      <div className={styles.content}>
        <p className={styles.contentTitle}>Upcoming Events</p>
        <EventList />
        <p className={styles.contentTitle}>Popular groups</p>
        <p className={styles.contentTitle}>Get Started</p>
      </div>
    </Content>
  );
};

export default Home;