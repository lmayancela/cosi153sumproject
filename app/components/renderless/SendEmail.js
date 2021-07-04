import React, { useState } from "react";
import { Text, Button, TextInput } from 'react-native';
import Twitter from 'twitter';
import emailjs from 'emailjs-com';
// Local imports
import ScreenContainer from '../components/ScreenContainer';
import Clock from '../components/Clock';

emailjs.init("user_GjmuzdP6EsNTAhMiM9BPq")


const SendEmail = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [handle, setHandle] = useState("")
  const [task, setTask] = useState("")
  const [name, setName] = useState("")
  const [num, setNum] = useState("")
  const [time, setTime] = useState("");
  let TEMPLATE_ID = 'template_11o4zg9'
  let SERVICE_ID = 'botherme_emails'

  // let client = new Twitter({   // TODO: This info should be imported from config for security reasons
  //   consumer_key: 'BMSjdsHWhAi3iw3YT8IkaeGnJ',
  //   consumer_secret: '1AfJIv7n1WsGlVoOfcMX5pq6CQtIm6tTKHQpCqYxQljdA9M6fw',
  //   bearer_token: 'AAAAAAAAAAAAAAAAAAAAAHveQwEAAAAA700c%2Bi42tfXKe%2BMVvoz8RRR2KO0%3Dt5dMF7dt4BtMYmkzrFi4ulYPNW8zLqnOZ5JLRtlaVXKZViqUWD',
  // });

  // const postTweet = () => {
  //   let params = {
  //     type: 'message_create',
  //     message_create: {
  //       target: {
  //         recipient_id: 'LisandroMayanc1',
  //       },
  //       message_data: {
  //         text: task,
  //       },
  //     },
  //   }
  //
  //   client.post('statuses/update', { status: 'I am a tweet' }, function (error, data, response) {
  //     if (error) throw error;
  //     console.log(data);  // Tweet body.
  //     console.log(response);  // Raw response object.
  //   });
  // }

  // const twitter_params = {
  //   api_key: 'BMSjdsHWhAi3iw3YT8IkaeGnJ',
  //   api_key_secret: '1AfJIv7n1WsGlVoOfcMX5pq6CQtIm6tTKHQpCqYxQljdA9M6fw',
  //   bearer_token: 'AAAAAAAAAAAAAAAAAAAAAHveQwEAAAAA700c%2Bi42tfXKe%2BMVvoz8RRR2KO0%3Dt5dMF7dt4BtMYmkzrFi4ulYPNW8zLqnOZ5JLRtlaVXKZViqUWD',
  // }

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
    null
  )
}

export default SendEmail;
