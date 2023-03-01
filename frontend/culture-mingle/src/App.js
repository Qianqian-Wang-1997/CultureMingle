import React, { useState, useEffect } from "react";
import Home from "./components/Home"
import Navigation from "./components/Navigation";
import { DatePicker} from 'antd';
import Login from "./components/Login";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function App() {
  return (
    <div>
      <Login></Login>
    </div>

  )
}
export default App;
