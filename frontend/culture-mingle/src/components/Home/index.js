import React, { useState } from 'react';
import './index.css';
import EventList from '../EventList/index'
import {
  DesktopOutlined,
  SearchOutlined,
  SmileOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  BulbOutlined
} from '@ant-design/icons';
// import { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
      <Layout  style={{ minHeight: '100vh' }}>
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div style={{ height: 32, margin: 16 }}>
            {/* <BulbOutlined style={{ color: 'black' }} /> */}
            {!collapsed ? <div className='logo'>Culture Mingle</div> : <></>}
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout >
          <Header theme='light' className='header'>
            Culture Mingle
          </Header>
          <Content className='background'>
            <div style={{ padding: 24, minHeight: 360}}>
              {/* <p> some program list </p> */}
              <EventList></EventList>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Culture Mingle ©2023 Created in Waterloo</Footer> */}
        </Layout>
      </Layout>

  );
};

export default Home;