import React, { useState, useEffect } from "react";
import { ConfigProvider } from 'antd';

import Home from "./components/Home"
import Navigation from "./components/Navigation";
import { DatePicker} from 'antd';
import Login from "./components/Login";
import Registration from "./components/Registration";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

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
      <Login></Login>
    </div>
</ConfigProvider>
  )
}

export default App;
