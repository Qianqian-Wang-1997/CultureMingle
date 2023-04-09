import React, { useState } from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import {
  DesktopOutlined,
  SearchOutlined,
  SmileOutlined,
  SettingOutlined,
  ScheduleOutlined,
  PicRightOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}


const { Sider } = Layout;

const CMSider = () => {
  const [collapsed, setCollapsed] = useState(true);
  const userLoginStatus = localStorage.getItem("userId");
  const items = [
    getItem(<NavLink to="/" >Discover Events</NavLink>, '1', <SearchOutlined />,),
    getItem(<NavLink to="/groups" >More Groups</NavLink>, '2', <SmileOutlined />,),
    userLoginStatus && getItem(<NavLink to="/createEvent" >Create an Event</NavLink>, '3', <ScheduleOutlined />),
    userLoginStatus && getItem(<NavLink to="/createGroup" >Create an Group</NavLink>, '4', <PicRightOutlined />)
  ];
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