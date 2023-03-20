import React, { useState, useEffect } from "react";
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';

import { Layout } from 'antd';
import styles from "./index"

import CMHeader from "./components/CMHeader";
import CMSider from "./components/CMSider";
import Home from "./components/Home"
import Login from "./components/Login";
import Registration from "./components/Registration"
import EventDetail from "./components/EventDetail"
import CreateEvent from "./components/CreateEvent"
import Profile from "./components/Profile"
import Groups from "./components/GroupList"

const { Content, Footer } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f7629e',
        },
      }}
    >
      <div>
        <Router>
          <Layout>
            <CMSider />
            <Layout>
              <CMHeader />
              <Content className="homeLayout">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path='/events/:eventId' element={<EventDetail />} />
                  <Route exact path='/groups' element={<Groups />} />

                  <Route exact path="/signup" element={<Registration />} />
                  <Route exact path="/createEvent" element={<CreateEvent />} />
                  <Route exact path="/members/:userId" element={<Profile />} />
                </Routes>
              </Content>
              <Footer className='footer'>Culture Mingle ©2023 Created in Waterloo</Footer>
            </Layout>
          </Layout>
        </Router>
      </div>
    </ConfigProvider>
  )
}

export default App;
