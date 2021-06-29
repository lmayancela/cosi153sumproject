import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ScreenContainer from '../components/ScreenContainer';

//TBH i DONT know if passing just the object through would update it in hte list, so im passing the list and the {props.index} of th eitem in
// const mph2fps = (mph) => mph*5280/3600

const EditableTask = (props) => {
    //use context so dont have to load for each page??
    const [dueDate, setDueDate] = useState(""); //blank date?
    const [notificationType, setNotificationType] = useState([]); //keeping this as general rather than per task for now
    const [notificationTimes, setNotificationTimes] = useState("");
    const [notes, setNotes] = useState("");
    const [taskName, setTaskName] = useState("");
    const [reactionText, setReactionText] = useState("");
    const [taskList,setTaskList]= useState([])

    //passes through the list and the task, changes the attributes of the specific task, and resaves the json list in aync

    //data will be loaded in main task list editing screen and each task will be passed through this component

    useEffect(() => {getData()}
               ,[])

               const getData = async () => {
                     try {
                       // the '@profile_info' can be any string
                       //it feels weird that I rpeat this btwee this page and the task page??
                       //maybe I can use this one component to have a task page with blank values on the form page...
                       const jsonValue = await AsyncStorage.getItem('@task_List')
                       let data = null
                       if (jsonValue!=null) {
                         data = JSON.parse(jsonValue)
                         setTaskList(data)
                         console.log('just set task list')
                       } else {
                         //wait why is the if a list and the else is individual items
                         console.log('just read a null value from Storage')
                         //setInfo({})
                         //setName("")
                         //setEmail("")
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
          await AsyncStorage.setItem('@todo_list', jsonValue)
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

  return (
  <ScreenContainer>
  <View>
  <Text style={styles.headerText}>Create a Reminder</Text>
  <Text> </Text>
  <View style={styles.rowContainer}>
    <Text>Task Name: {props.object.taskName}</Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.object.taskName}
      onChangeText={text => {
        setTaskName(text)
        props.object.taskName = taskName;
        storeData(taskList)
      }}
      value = {taskName}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Due Date: </Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.object.dueDate}
      onChangeText={text => {
        setDueDate(text)
        props.object.dueDate = dueDate;
        storeData(taskList)
      }}
      value = {dueDate}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Notification Type: </Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.object.notificationType}
      onChangeText={text => {
        setNotificationType(text)
        props.object.notificationType = notificationType;
        storeData(taskList)
      }}
      value = {notificationType}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Notification Times</Text> //make frequeny match up with type?? set individually?
    <TextInput
      style={styles.textinput}
      placeholder={props.object.notificationTimes}
      onChangeText={text => {
        setNotificationTimes(text)
        props.object.notificationTimes =notificationTimes;
        storeData(taskList)
      }}
      value={notificationTimes}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Notes:</Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.object.taskNotes}
      onChangeText={text => {
        setNotes(text)
        props.object.notes = notes;
        storeData(taskList)
      }}
      value={notes}
    />
  </View>
  <View>

          <Text>{props.reactionText}</Text>
          </View>
        </View>
      </ScreenContainer>
      );
    }

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default EditableTask;
