import React, { useState } from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import {
  DesktopOutlined,
  SearchOutlined,
  SmileOutlined,
  TeamOutlined,
  SettingOutlined,
  ScheduleOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const userId = "382472338"
const items = [
  getItem(<NavLink to="/" >Discover Events</NavLink>, '1', <SearchOutlined />,),
  getItem(<NavLink to="/groups" >More Groups</NavLink>, '2', <SmileOutlined />,),

  getItem(<NavLink to="/createEvent" >Create an Event</NavLink>, '3', <ScheduleOutlined />),
  getItem(<NavLink to="/createGroup" >Start a Group</NavLink>, '4', <TeamOutlined />),
  getItem('Settings', '5', <SettingOutlined />),
  getItem('Help and Support', '6', <DesktopOutlined />),
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