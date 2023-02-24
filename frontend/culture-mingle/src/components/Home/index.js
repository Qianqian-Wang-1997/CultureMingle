import React, { useState } from 'react';
//import './index.css';
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

// function show

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}>
          <BulbOutlined style={{color: 'white'}}/>
         { !collapsed ? <div style={{ color: 'white', display: 'inline-block', font: 'icon' }}>Culture Mingle</div> : <></>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '20px 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            I dont want to do this
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Culture Mingle ©2023 Created in Waterloo</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;