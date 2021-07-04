import React, { useState, useEffect, useContext } from "react";
import { Text, View, FlatList } from 'react-native';
import { TimeContext } from '../../contexts/TimeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import emailjs from 'emailjs-com';
emailjs.init("user_GjmuzdP6EsNTAhMiM9BPq")

const NotificationController = (props) => {
  const [data, setData] = useState([])
  let today = new Date();
  let currtime = today.getHours() + ":" + today.getMinutes()
  let sendList = []
  let TEMPLATE_ID = 'template_11o4zg9'
  let SERVICE_ID = 'botherme_emails'

  useEffect(() => {
        let interval = setInterval(() => {
          today = new Date()
          currtime = today.getHours() + ":" + today.getMinutes()
          getData()
        }, 60000)
        return () => {
            clearInterval(interval);
        }
    }, []);

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem('@task_list')
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        setData(data)
        console.log('Retrieved Data in notification controller')
        checkTimes(data)
      } else {
        console.log('just read a null value from Storage')
      }


    } catch(e) {
      console.log("error in getData ")
      console.dir(e)
      // error reading value
    }
  }

  const checkTimes = (reminder_list) => {
    console.log("Time is: " + currtime);
    reminder_list.forEach((item, i) => {
      item.notificationTimes.forEach((notifTime, i) => {
        if(notifTime == currtime){
          const reminder_data = {
            task: item.taskName,
            name: 'Lisandro',
            email: 'lmayancela08@gmail.com',
            notes: item.notes
          }
          sendList.push(reminder_data)
        }
      });
    });
    sendReminders()
  }

  const sendReminders = () => {
    sendList.forEach((reminder, i) => {
      sendEmail(reminder)
    });

  }

  async function sendEmail(reminder) {
    console.log("Sending email for reminder: " + JSON.stringify(reminder));
    const templateParams = {
      task_name: reminder.task,
      to_name: reminder.name,
      to_email: reminder.email,
      task_notes: reminder.notes
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        sendList = []
      }, function (error) {
        console.log('FAILED...', error);
        sendList = []
      });
  }

  const renderTodoItem = ({item}) => {
    return (
      <View style={{border:'thin solid red'}}>
        <Text>
           <Text>{item.taskName} by </Text>
           <Text> {item.dueDate} </Text>
           <Text> notification types: {item.notificationType} </Text>
           <Text> notification times: {item.notificationTimes} </Text>
           <Text> notes: {item.notes} </Text>
        </Text>
      </View>
    )
  }

  return(
    <View>
      <Text> Current Time: {currtime} </Text>
      <FlatList //TRY PARDE INT OR CHECK TYOE FOR INDEX
        data={data}
        renderItem={renderTodoItem}
        keyExtractor={item => item.dueDate}
      />
    </View>
  );
}

export default NotificationController;
