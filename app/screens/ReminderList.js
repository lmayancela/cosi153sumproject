//ReminderList component
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from "react-native";
import ScreenContainer from '../components/ScreenContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReminderList = ({ navigation }) => {
  const [taskList,setTaskList]= useState([])
  const [reminderListText,setReminderListText]= useState([])
  const [taskListIndex,setTaskListIndex]= useState(0)

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      //it feels weird that I rpeat this btwee this page and the task page??
      //maybe I can use this one component to have a task page with blank values on the form page...
      const jsonValue = await AsyncStorage.getItem('@task_list')
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

    render(){

    	var tasks = [];

    	for(let i = 0; i < taskList.length; i++){
    		tasks.push(
    			<View key = {i}>
    				<EditableTask object={taskList[i]} index={i}/>
    			</View>
    		)
    	}

    	return (
    		<View>
    			<View>
    				<View><Text>Your Tasks:</Text></View>
    			</View>

    			{ tasks }
    		</View>
    	)
    }



export default ReminderList;
