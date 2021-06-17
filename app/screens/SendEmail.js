import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Button, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import emailjs from 'emailjs-com';
emailjs.init("user_GjmuzdP6EsNTAhMiM9BPq")
import serialportgsm from 'serialport-gsm';

const SendEmail = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [task, setTask] = useState("")
  const [name, setName] = useState("")
  const [num, setNum] = useState("")
  let TEMPLATE_ID = 'template_11o4zg9'
  let SERVICE_ID = 'botherme_emails'

  async function sendEmail() {
    // console.log(await init("user_GjmuzdP6EsNTAhMiM9BPq"));
    const templateParams = {
      task_name: { task }.task,
      to_name: { name }.name,
      to_email: { email }.email
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  function sendText() {
    serialportgsm.list((err, result) => {
      console.log(result)
    })
  }

  return (
    <ScreenContainer>
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
        color='blue' title='Send Text'
        onPress={() => sendText()}
      />
    </ScreenContainer>
  )
}

export default SendEmail;
