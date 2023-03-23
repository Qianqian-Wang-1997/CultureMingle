import React, { useState, useEffect } from 'react';
import GroupComponent from './GroupComponent';
import axios from 'axios';

function GroupList({ groupList }) {
    // const [data, setData] = useState([]);
    // const getData = async () => {
    //   const { data } = await axios.get("/events");
    //   setData(data);
    // };
    // useEffect(() => {
    //   getData();
    // }, []);
    const data = [
      {
          id: "64054850f2668452e1757032",
          title: "KW Events Movies and Food",
          time: "2023-03-05T01:00:00.000+0000",
          location: "Kitchener, ON",
          description: "A warm welcome 🥰👋In this group you will find events in KW to movie nights (at the cinema), restaurant visits or social activities like bowling, museum visits, walks, short or day trips (e.g. Niagara Falls, Mennonite Tour), special events of the city (e.g. Christmas Market) and much more. Ideas from members are more than welcome!",
          membersNo: "259"
      }
    ]
    return (
        <div>
            {data && data.map(item => (
                <GroupComponent key={item.id} group={item} />
            ))}
        </div>
    )
}
export default GroupList 