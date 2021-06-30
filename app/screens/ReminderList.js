//ReminderList component
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import EditableTask from '../components/EditableTask';
import styles from '../config/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ReminderList = ({ navigation }) => {
  const [taskList, setTaskList] = useState([])
  const [reminderListText, setReminderListText] = useState([])  //unused?
  const [taskListIndex, setTaskListIndex] = useState(0)         //unused?

  useEffect(() => { getData() }, [])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@task_list') //it feels weird that I rpeat this btwee this page and the task page??
      let data = null
      if (jsonValue != null) {
        data = JSON.parse(jsonValue)
        setTaskList(data)
        console.log('just set task list')
      } else {
        console.log('just read a null value from Storage')
      }
    } catch (e) {
      console.log("error in getData ")
      console.dir(e)  // error reading value
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
      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <View>
            {/*<Text>{JSON.stringify(index)}</Text>
            <Text>type of index: {(typeof {index})}</Text>
            <Text>item: {JSON.stringify({item}.item)}</Text*/}
            <EditableTask object={{item}.item} index={parseInt(JSON.stringify(index))} taskList={taskList}/>
            <Button
              title="save changes"
              onPress={() => {
                storeData(taskList)
              }}
            />
            <Button
              title="delete"
              onPress={() => {
                const newTaskList = taskList;
                newTaskList.splice(index,1)
                setTaskList(newTaskList)
                storeData(taskList)
                navigation.navigate("ReminderList", {
                  name: "Reminders List"
                })
              }}
             />
          </View>
       )}
      keyExtractor={item => item.id}
      />
      {/*<Text> {JSON.stringify(taskList)}</Text>*/}
    </ScrollView>
  );
}



export default ReminderList;
