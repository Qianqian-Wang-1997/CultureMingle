import React, { useState, useEffect } from "react";
import { ConfigProvider } from 'antd';

import Home from "./components/Home"
import Navigation from "./components/Navigation";

function App() {
  
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#50a8e8',
      },
    }}
  >
    <div>
      {/* <Navigation></Navigation> */}
      <Home></Home>
    </div>
</ConfigProvider>
  )
}

export default App;
