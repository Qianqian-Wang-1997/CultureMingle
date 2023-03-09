import React, { useState, useEffect } from "react";
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout} from 'antd';
import styles from "./index"

import CMHeader from "./components/CMHeader";
import CMSider from "./components/CMSider";
import Home from "./components/Home"
import Login from "./components/Login";
import Registration from "./components/Registration"
import EventDetail from "./components/EventDetail"

const { Footer } = Layout;

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
          <Layout className='homeLayout'>
            <CMSider></CMSider>
            <Layout>
              <CMHeader ></CMHeader>
              {/* <Content className={styles.contentBackground}>
                <div className={styles.content}> */}
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/events/:eventId" element={<EventDetail />} />
                    <Route exact path="/signup" element={<Registration />} />
                  </Routes>
                {/* </div>
              </Content> */}
              <Footer className='footer'>Culture Mingle ©2023 Created in Waterloo</Footer>
            </Layout>
          </Layout>
        </Router>

      </div>
    </ConfigProvider>
  )
}

export default App;
