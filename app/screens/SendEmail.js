import React, { useState } from "react";
import { Text, Button, TextInput } from 'react-native';
import Twitter from 'twitter';
import emailjs from 'emailjs-com';
// Local imports
import ScreenContainer from '../components/ScreenContainer';
import Clock from '../components/Clock';

emailjs.init("user_GjmuzdP6EsNTAhMiM9BPq")
// import serialportgsm from 'serialport-gsm';
const sampleData = new Map();
sampleData.set('9:9', [{
  email: 'lmayancela08@gmail.com',
  task: 'apply for jobs'
}])
sampleData.set('9:2', [{
  email: 'lmayancela08@gmail.com',
  task: 'buy groceries'
}])
sampleData.set('9:30', [{
  email: 'lmayancela08@gmail.com',
  task: 'do laundry',
  name: 'Lisandro'
}, {
  email: 'arisrivaapple@brandeis.edu',
  task: 'go on a walk',
  name: 'Aris'
}])


const SendEmail = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [handle, setHandle] = useState("")
  const [task, setTask] = useState("")
  const [name, setName] = useState("")
  const [num, setNum] = useState("")
  const [time, setTime] = useState("");
  let TEMPLATE_ID = 'template_11o4zg9'
  let SERVICE_ID = 'botherme_emails'

  let client = new Twitter({   // TODO: This info should be imported from config for security reasons
    consumer_key: 'BMSjdsHWhAi3iw3YT8IkaeGnJ',
    consumer_secret: '1AfJIv7n1WsGlVoOfcMX5pq6CQtIm6tTKHQpCqYxQljdA9M6fw',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAHveQwEAAAAA700c%2Bi42tfXKe%2BMVvoz8RRR2KO0%3Dt5dMF7dt4BtMYmkzrFi4ulYPNW8zLqnOZ5JLRtlaVXKZViqUWD',
  });

  const postTweet = () => {
    let params = {
      type: 'message_create',
      message_create: {
        target: {
          recipient_id: 'LisandroMayanc1',
        },
        message_data: {
          text: task,
        },
      },
    }

    client.post('statuses/update', { status: 'I am a tweet' }, function (error, data, response) {
      if (error) throw error;
      console.log(data);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  }

  // const twitter_params = {
  //   api_key: 'BMSjdsHWhAi3iw3YT8IkaeGnJ',
  //   api_key_secret: '1AfJIv7n1WsGlVoOfcMX5pq6CQtIm6tTKHQpCqYxQljdA9M6fw',
  //   bearer_token: 'AAAAAAAAAAAAAAAAAAAAAHveQwEAAAAA700c%2Bi42tfXKe%2BMVvoz8RRR2KO0%3Dt5dMF7dt4BtMYmkzrFi4ulYPNW8zLqnOZ5JLRtlaVXKZViqUWD',
  // }

  const timeCallback = (new_time) => {
    console.log("Setting time to: " + new_time);
    setTime(new_time);
    if (sampleData.has(new_time)) {
      let reminders = sampleData.get(new_time)
      reminders.forEach(reminder => sendEmail(reminder))
    }
  }

  async function sendEmail(reminder) {
    console.log("Sending email for reminder");
    const templateParams = {
      task_name: reminder.task,
      to_name: reminder.name,
      to_email: reminder.email
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <ScreenContainer>
      <Clock parentCallback={timeCallback} />
      <Text>Curr time is: {time} </Text>
      <Text>Enter an email address</Text>
      <TextInput onChangeText={text => { setEmail(text) }} />
      <Text>Enter a task</Text>
      <TextInput onChangeText={text => { setTask(text) }} />
      <Text>Enter the person's name</Text>
      <TextInput onChangeText={text => { setName(text) }} />
      <Text>Enter the person's number</Text>
      <TextInput onChangeText={text => { setNum(text) }} />
      <Button
        color='red' title='Send Email'
        onPress={() => sendEmail()}
      />
      <Button
        color='blue' title='Post Tweet'
        onPress={() => postTweet()}
      />

      {/* <Button
        color='blue' title='Send Text'
        onPress={() => sendText()}
      /> */}
    </ScreenContainer>
  )
}

export default SendEmail;
