//ReminderList component
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList, ScrollView } from "react-native";
import EditableTask from '../components/EditableTask';
import ScreenContainer from '../components/ScreenContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReminderList = ({ navigation }) => {
  const [taskList, setTaskList] = useState([])
  const [reminderListText, setReminderListText] = useState([])  //unused?
  const [taskListIndex, setTaskListIndex] = useState(0)         //unused?

  useEffect(() => { getData() }, [])

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      //it feels weird that I rpeat this btwee this page and the task page??
      //maybe I can use this one component to have a task page with blank values on the form page...
      const jsonValue = await AsyncStorage.getItem('@task_list')
      let data = null
      if (jsonValue != null) {
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
    } catch (e) {
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


  return (
    <ScrollView>
      <Text>hiiii</Text>
      <Text>test</Text>
      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <View>
          <Text>{index}</Text>
          <EditableTask
            object={item}
            index={index}
          />
          <Button
          title="delete"
          onPress={() => {
               console.log('list before splice:' + {taskList} + 'to be removed: ' + {item}.taskName)
               const newTaskList = taskList;
               newTaskList.splice(index,1)
               setTaskList(newTaskList)
               storeData(taskList)
               navigation.navigate("ReminderList", {
                 name: "List of All Reminders Screen"
               })
               console.log('list after splice:' + {taskList})
             }}
             />
         </View>
       )}
        keyExtractor={item => item.id}
      />
      <Text> {JSON.stringify(taskList)}</Text>
    </ScrollView>
  );
}



export default ReminderList;
