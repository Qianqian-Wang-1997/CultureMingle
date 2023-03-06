import React, { useState } from 'react';
import styles from './index.module.css';
import EventList from "../EventList/index"
import {
  DesktopOutlined,
  SearchOutlined,
  SmileOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  BulbOutlined
} from '@ant-design/icons';
// import { MenuProps } from 'antd';
import { Layout, Menu, theme, Col, Button, Row } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Discover Events', '1', <SearchOutlined />),
  getItem('My Events', '2', <SmileOutlined />),
  getItem('Create an Event', '3', <DesktopOutlined />),
  getItem('My Groups', '4', <UsergroupAddOutlined />),
  // getItem('Notification', '7', <BellOutlined />),
  getItem('Settings', '5', <SettingOutlined />),
  getItem('Help and Support', '6', <DesktopOutlined />),

  // getItem('User', 'sub1', <SmileOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ])
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);

  return ( 
    <Layout className={styles.homeLayout}>
      <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16 }}>
          {/* {!collapsed ? <div className='logo'>Culture Mingle</div> : <></>} */}
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout >
        <Header theme='light' className={styles.header}>
          <Row>
            <Col span={18} order={1} className={styles.headerLogo}>
              Culture Mingle
            </Col>
            <Col span={3} order={2}>
              <Button className={styles.headerButton} type="primary">login</Button>
            </Col>
            <Col span={3} order={3}>
              <Button className={styles.headerButton}>sign up</Button>
            </Col>
          </Row>
        </Header>
        <Content className={styles.contentBackground}>
          <div className={styles.content}>
            <p className={styles.contentTitle}>Upcoming Events</p>
            <EventList></EventList>
            <p className={styles.contentTitle}>Popular groups</p>
            <p className={styles.contentTitle}>Get Started</p>
          </div>
        </Content>
        <Footer className={styles.footer}>Culture Mingle ©2023 Created in Waterloo</Footer>
      </Layout>
    </Layout>

  );
};

export default Home;