//CreateReminder screen
import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const renderTask = ({item}) => {
      return (
        <View>
             <Text>Task: {item.taskName} </Text>
             <Text> Due Date: {item.taskDueDate} </Text>
             <Text> Notifcation Type: {item.notificationType} </Text>
             <Text> Notification Frequency: {item.notificationFrequency} </Text>
             <Text> Notes: {item.taskNotes} </Text>
        </View> //make about to edit by clicking on fields? have task details expand/shrink?
      )
    }

  return (
    <ScreenContainer>
    <View>
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
      <View>
        <Button
           title={"Add Item"}
           onPress = {() => {
             //do i have to declare a new task?
             setTask({'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes})
             //i use a seperate step to make the task as opposed to what we did in class bc I thik  its cleaer
             setTaskList(taskList.concat(
               {'taskName':taskName, 'taskDueDate':taskDueDate, 'notificationType':notificationType, 'notificationFrequency':notificationFrequency, 'taskNotes':taskNotes}))
            setReactionText("Task " + taskName + " successfully added!!")
             setTaskName("")
             setTaskDueDate("")
             setNotificationType("")
             setNotificationFrequency("")
             setTaskNotes("")
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
      </View>
    </ScreenContainer>
  );
}

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

export default CreateReminder;
