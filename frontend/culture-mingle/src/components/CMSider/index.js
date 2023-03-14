import React, { useState } from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import {
  DesktopOutlined,
  SearchOutlined,
  SmileOutlined,
  UsergroupAddOutlined,
  SettingOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}

const items = [
  getItem(<NavLink to="/" >Discover Events</NavLink>, '1', <SearchOutlined />,),
  getItem('My Events', '2', <SmileOutlined />),
  getItem('Create an Event', '3', <DesktopOutlined />),
  getItem('My Groups', '4', <UsergroupAddOutlined />),
  getItem('Settings', '5', <SettingOutlined />),
  getItem('Help and Support', '6', <DesktopOutlined />),
  // getItem('Notification', '7', <BellOutlined />),
  // getItem('User', 'sub1', <SmileOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ])
];
const { Sider } = Layout;

const CMSider = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.sider}>
      <Sider theme='light' collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        >
        <div style={{ height: 32, margin: 16 }} />
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items} >
        </Menu>
      </Sider>
    </div>
  );
};

export default CMSider;