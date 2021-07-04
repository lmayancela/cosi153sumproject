//ReminderList component
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import EditableTask from '../components/EditableTask';
import Accordian from '../components/Accordian';

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


    function renderAccordians() {
      var i = 0;
      const items = [];
      for (let i = 0; i<taskList.length; i++) {
          items.push(
              <Accordian title = {taskList[i].taskName}
                  taskList = {taskList}
                  data = {taskList[i]}
                 index = {i}
              />
          );
      }
      return items;
  }




  return (
    <ScrollView>
      <Button
        title="clear all data"
        onPress={() => {
          clearAll()
        }}
      />
      <View style={styles.container}>
        { renderAccordians() }
      </View>
      <Button
        title="save changes"
        onPress={() => {
          setTaskList(taskList) //idk about this here
          storeData(taskList)
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,

  }
});


export default ReminderList;
