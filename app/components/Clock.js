import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  TextInput
} from 'react-native';

const Clock = (props) => {
  let today = new Date();
  // const [time,setTime] = useState(new Date().toLocaleString());
  let currtime = today.getHours() + ":" + today.getMinutes();
  // const [currtime, setCurrTime] = useState(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());

  useEffect(() => {
        let interval = setInterval(() => {
          console.log("Time at tick:" + currtime);
          tick()
          console.log('A minute has passed');
        }, 60000)
        return () => {
            clearInterval(interval);
        }
    }, []);

  function tick() {
    today = new Date()
    console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    currtime = today.getHours() + ":" + today.getMinutes();
    props.parentCallback(currtime);
  }

  return(
    <Text> Clock is running: {currtime} </Text>
  )
}

export default Clock;
