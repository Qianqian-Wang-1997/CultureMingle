import React from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';

import { Layout, Col, Button, Row } from 'antd';

const { Header } = Layout;

const CMHeader = () => {
  return (
    <Header theme='light' className={styles.header}>
      <Row>
        <Col span={18} order={1} className={styles.headerLogo}>
          <NavLink to='/' style={{color:'black'}}>
            Culture Mingle
          </NavLink>
        </Col>
        <Col span={3} order={2}>
          <NavLink to='/login'>
            <Button className={styles.headerButton} type="primary">login</Button>
          </NavLink>
        </Col>
        <Col span={3} order={3}>
          <NavLink to='/signup'>
            <Button className={styles.headerButton}>sign up</Button>
          </NavLink>
        </Col>
      </Row>
    </Header>
  );
};

export default CMHeader;