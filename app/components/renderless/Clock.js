import React, { useState, useEffect } from "react";
import NotificationController from './NotificationController'
import { TimeContext } from '../../contexts/TimeContext';

const Clock = (props, children) => {
  let today = new Date();
  // const [time,setTime] = useState(new Date().toLocaleString());
  let currtime = today.getHours() + ":" + today.getMinutes()
  // const [currtime, setCurrTime] = useState(today.getHours() + ":" + today.getMinutes());

  useEffect(() => {
        let interval = setInterval(() => {
          tick()
        }, 60000)
        return () => {
            clearInterval(interval);
        }
    }, []);

  function tick() {
    today = new Date()
    // setCurrTime(today.getHours() + ":" + today.getMinutes())
    currtime = today.getHours() + ":" + today.getMinutes()
  }

  return(
    <NotificationController />
  );
}

export default Clock;
