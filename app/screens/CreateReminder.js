//CreateReminder screen
import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
=======
import Form from './Form'
>>>>>>> main

//Notes:
//cant scrool down in browser (text can get cut off)
//make it so theres a error if yuo try to submit a task without a task Name
//make the tasks sort by due date?

//I DONT KNOW IF WE CAN USE THE PROPS FINCTIONALITY AND THE NAVIGATION AT THE SAME TIME
//but also this page seems to be working properly?
const CreateReminder = ({ navigation }) => {
  const [taskDueDate, setTaskDueDate] = useState(""); //blank date?
  const [notificationType, setNotificationType] = useState([]); //keeping this as general rather than per task for now
  const [notificationFrequency, setNotificationFrequency] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskNotes, setTaskNotes] = useState("");
  const [task, setTask] = useState({taskName:'', taskDueDate:'', notificationType:'', notificationFrequency:''});
  const [taskList, setTaskList] = useState([]);

  const [reactionText, setReactionText] = useState("");

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
          await AsyncStorage.setItem('@task_list', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }


  const renderTask = ({item}) => {
      return (
        <View>
             <Text>Task: {item.taskName} </Text> //make bold
             <Text> Due Date: {item.taskDueDate} </Text>
             <Text> Notifcation Type: {item.notificationType} </Text>
             <Text> Notification Frequency: {item.notificationFrequency} </Text>
             <Text> Notes: {item.taskNotes} </Text>
        </View> //make about to edit by clicking on fields? have task details expand/shrink?
      )
    }

  return (
    <ScreenContainer>
<<<<<<< HEAD
    <ScrollView>
      <Text style={styles.headerText}>Create a Reminder</Text>
      <Text> </Text>
      <View style={styles.rowContainer}>
        <Text>What is the task you want to complete?</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {
            setTaskName(text);
            setReactionText("");
          }}
          value = {taskName}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>When should your task be done by?</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => { setTaskDueDate(text) }}
          value = {taskDueDate}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>How would you like to be notified?</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => { setNotificationType(text) }}
          value = {notificationType}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>How often would you like to be notified?</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => { setNotificationFrequency(text) }}
          value={notificationFrequency}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>(Optional) Notes about your task:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => { setTaskNotes(text) }}
          value={taskNotes}
        />
      </View>
      <View> //for some reason stores the first but not secind entry in memeory (though it does for the other fielfs)
        <Button
           title={"Add Item"}
           onPress = {() => {
             //do i have to declare a new task?
             //setTask({'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes})
             //i use a seperate step to make the task as opposed to what we did in class bc I thik  its cleaer
             setTaskList(taskList.concat(
               {'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes}))
            storeData(taskList);
            setReactionText("Task " + taskName + " successfully added!!")
             setTaskName("")
             setTaskDueDate("")
             setNotificationType("")
             setNotificationFrequency("")
             setTaskNotes("")
             storeData(taskList);

             setTaskList(taskList.concat(
               {'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes}))
            storeData(taskList);
            setReactionText("Task " + taskName + " successfully added!!")
             setTaskName("")
             setTaskDueDate("")
             setNotificationType("")
             setNotificationFrequency("")
             setTaskNotes("")
             storeData(taskList);
           }}
           />
      <Text> </Text>
      </View>
      <Text> </Text>
      {reactionText}
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.headerText}>Your Tasks:</Text>
      <FlatList
        data={taskList}
        renderItem={renderTask}
        keyExtractor={item => item.taskName} //i dont know what this line does
      />
      <Text>

       todoItems is {JSON.stringify(taskList)}
       </Text>
      </ScrollView>
=======
      <Text>Create a Reminder</Text>
      <Form></Form>
>>>>>>> main
    </ScreenContainer>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    alignItems: 'left',
    justifyContent: 'left',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  todoItem:{
    justifyContent:'left',
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#aaa',
    fontSize: 16,
    padding:10,
    color: 'blue'
  },

});

=======
>>>>>>> main
export default CreateReminder;
