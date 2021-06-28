//CreateReminder screen

import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenContainer from '../components/ScreenContainer';
import styles from '../config/styles';

const CreateReminder = ({ navigation }) => {
  const [reactionText, setReactionText] = useState("");
  const [taskName,setTaskName] = useState("")
  const [dueDate,setDueDate] = useState("")
  const [notificationType,setNotificationType] = useState("")
  const [notificationTimes,setNotificationTimes] = useState("")
  const [notes,setNotes] = useState("")
  const [taskList,setTaskList]= useState([])

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@task_list')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setTaskList(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@task_list', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


  const renderTodoItem = ({item}) => {
    return (
      <View style={{border:'thin solid red'}}>
        <Text style={styles.todoItem}>
           <Text>{item.taskName} by </Text>
           <Text> {item.dueDate} </Text>
           <Text> notification types: {item.notificationType} </Text>
           <Text> notification times: {item.notificationTimes} </Text>
           <Text> notes: {item.notes} </Text>
        </Text>
      </View>
    )
  }


  return (
    <ScreenContainer>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headerText}> ToDo List </Text>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter todo item here"
          onChangeText={text => {
               setTaskName(text);
             }}
          value = {taskName}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter due date"
          onChangeText={text => {
               setDueDate(text);
             }}
          value = {dueDate}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter notification type"
          onChangeText={text => {
               setNotificationType(text);
             }}
          value = {notificationType}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter notification times"
          onChangeText={text => {
               setNotificationTimes(text);
             }}
          value = {notificationTimes}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter notes"
          onChangeText={text => {
               setNotes(text);
             }}
          value = {notes}
        />
      </View>
      <View>
        <Button
           title={"add"}
           color="blue"
           onPress = {() => {
             const newTaskList =
               taskList.concat(
                 {'taskName':taskName,
                 'dueDate':dueDate,
                 'notificationType':notificationType,
                 'notificationTimes':notificationTimes,
                 'notes':notes,
               })
             setTaskList(newTaskList)
             storeData(newTaskList)
             setTaskName("")
             setDueDate("")
             setNotificationType("")
             setNotificationTimes("")
             setNotes("")
           }}
           />
      </View>
      <FlatList
        data={taskList}
        renderItem={renderTodoItem}
        keyExtractor={item => item.date}
      />
    </View>
    </ScrollView>
    </ScreenContainer>
  );
}


export default CreateReminder;
