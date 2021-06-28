import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

//TBH i DONT know if passing just the object through would update it in hte list, so im passing the list and the index of th eitem in
// const mph2fps = (mph) => mph*5280/3600

const EditableTask = (props) => {

  const CreateReminder = ({ navigation }) => {
    //use context so dont have to load for each page??
    const [taskDueDate, setTaskDueDate] = useState(""); //blank date?
    const [notificationType, setNotificationType] = useState([]); //keeping this as general rather than per task for now
    const [notificationFrequency, setNotificationFrequency] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskNotes, setTaskNotes] = useState("");
    const [task, setTask] = useState({taskName:'', taskDueDate:'', notificationType:'', notificationFrequency:''});
    const [reactionText, setReactionText] = useState("");
    const [previousTaskName, setPreviousTaskName] = useState("");
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

  return (
  <ScreenContainer>
  <View>
  <Text style={styles.headerText}>Create a Reminder</Text>
  <Text> </Text>
  <View style={styles.rowContainer}>
    <Text>Task Name: </Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.taskNotes}
      onChangeText={text => {
        setTaskName(text);
      }}
      value = {taskName}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Due Date: </Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.taskDueDate}
      onChangeText={text => { setTaskDueDate(text) }}
      value = {taskDueDate}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Notification Type: </Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.notificationType}
      onChangeText={text => { setNotificationType(text) }}
      value = {notificationType}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Notification Frequency</Text> //make frequeny match up with type?? set individually?
    <TextInput
      style={styles.textinput}
      placeholder={props.notificationFrequency}
      onChangeText={text => { setNotificationFrequency(text) }}
      value={notificationFrequency}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text>Notes:</Text>
    <TextInput
      style={styles.textinput}
      placeholder={props.taskNotes}
      onChangeText={text => { setTaskNotes(text) }}
      value={taskNotes}
    />
  </View>
    <Button
       title={"Add Item"}
       onPress = {() => {
         //do i have to declare a new task?
         setTask({'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes})
         //i use a seperate step to make the task as opposed to what we did in class bc I thik  its cleaer
         //SEARCH FOR TASK WITH REVIOUS NAME AND DELETE
         setTaskList(taskList.concat(
           {'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes}))
        setReactionText("Task successfully Updated!!")
         setTaskName("")
         setTaskDueDate("")
         setNotificationType("")
         setNotificationFrequency("")
         setTaskNotes("")
       }}
       />
    </View>
    <Text>{props.reactionText}</Text>
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

export default TipCalculator;
