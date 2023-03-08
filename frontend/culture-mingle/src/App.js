import React, { useState, useEffect } from "react";
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home"
import Login from "./components/Login";
import EventDetail from "./components/EventDetail"

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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/events/:eventId" element={<EventDetail />} />
            {/* <Route exact path="/signup" element={<Signup />} /> */}
          </Routes>
        </Router>
      </div>
    </ConfigProvider>
  )
}

export default App;
