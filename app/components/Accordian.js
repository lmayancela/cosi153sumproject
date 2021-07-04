import React, {Component, useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Accordian extends Component{

    constructor(props) {
        super(props);

        this.state = {
          data: props.data,
          expanded : false,
          taskList : props.taskList,
          taskName : props.data.taskName,
          dueDate : props.data.dueDate,
          notes : props.data.notes,
          notificationTimes : props.data.notificationTimes,
          newNotificationTime : props.data.newNotificationTime,
          notificationType : props.data.notificationType,
          index: props.index,
        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }


    }





  render() {

    return (
       <View>

            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={"Gray"} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={{}}>
                <View>
                <Text> </Text>
                <View style={styles.rowContainer}>
                  <Text>Task Name: </Text>
                  <TextInput
                    style={styles.textinput}
                    //REPLACE PROPS WITH TSATE
                    placeholder={this.state.data.taskName}
                    onChangeText={text => {
                      this.setState({taskName: text});
                      // NOTE: props.object.taskName = taskName
                      // NOTE: storeData(taskList)
                    }}
                    //value = {taskName}
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text>Due Date: </Text>
                  <TextInput
                    style={styles.textinput}
                    placeholder={this.state.data.dueDate}
                    onChangeText={text => {
                      this.setState({dueDate: text});
                      this.state.taskList[this.state.index].dueDate = this.state.dueDate;
                      // NOTE: storeData(props.taskList)
                    }}
                    //value = {dueDate}
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text>Notification Type: </Text>
                  <TextInput
                    style={styles.textinput}
                    placeholder={this.state.data.notificationType}
                    onChangeText={text => {
                      this.setState({notificationType: text});
                      // NOTE: props.taskList[props.index].notificationType = notificationType;
                      // NOTE: storeData(props.taskList)
                    }}
                    //value = {notificationType}
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text>Notification Times:  </Text>
                  <Text style={styles.textinput}>{JSON.stringify(this.state.data.notificationTimes)}</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Text>New Notification Time:  </Text>
                  <TextInput
                    style={styles.textinput}
                    placeholder={this.state.data.newNotificationTime}
                    onChangeText={text => {
                      this.setState({newNotificationTime: text});
                      // NOTE: props.taskList[props.index].notificationTimes = notificationTimes;
                      // NOTE: storeData(props.taskList)
                    }}
                    //value={newNotificationTime}
                  />
                  <Button
                     title={"add"}
                     color="blue"
                     onPress = {() => {
                       const newNotificationTimes = this.state.taskList[this.state.index].notificationTimes.concat(this.state.newNotificationTime)
                       this.setState({notificationTimes: newNotificationTimes});
                       this.state.taskList[this.state.index].notificationTimes = newNotificationTimes
                       this.setState({newNotificationTime:""});
                     }}
                    />
                </View>
                <View style={styles.rowContainer}>
                  <Text>Notes:</Text>
                  <TextInput
                    style={styles.textinput}
                    placeholder={this.state.data.notes}
                    onChangeText={text => {
                      this.setState({notes: text});
                      // NOTE: props.taskList[props.index].notes = notes;
                      // NOTE: storeData(props.taskList)
                    }}
                    //value={notes}
                  />
                </View>
                <Button
                  title="save changes"
                  onPress={() => {
                    this.state.data.taskName = this.state.taskName
                    this.state.taskList[this.state.index].dueDate = this.state.dueDate
                    this.state.taskList[this.state.index].notes = this.state.notes
                    this.state.taskList[this.state.index].notificationTimes = this.state.notificationTimes
                    this.state.taskList[this.state.index].notificationType = this.state.notificationType
                    this.state.data.taskName = this.state.taskName
                    this.state.taskList[this.state.index].dueDate = this.state.dueDate
                    this.state.taskList[this.state.index].notes = this.state.notes
                    this.state.taskList[this.state.index].notificationTimes = this.state.notificationTimes
                    this.state.taskList[this.state.index].notificationType = this.state.notificationType
                    this.setState({taskList : this.state.taskList})
                }}
                />
              </View>
              <Button
                title="save changes"
                onPress={() => this.storeData(this.state.taskList) } />
              <Button
                title="delete"
                onPress={() => {
                  const newTaskList = this.state.taskList;
                  newTaskList.splice(this.state.index,1)
                  this.setState({taskList : newTaskList})
                  this.storeData(this.state.taskList)
                }}
               />
               </View>
                    }
          </View>
    )
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }


  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@task_list') //it feels weird that I rpeat this btwee this page and the task page??
      let data = null
      if (jsonValue != null) {
        data = JSON.parse(jsonValue)
        this.setState({taskList: data});
        console.log('just set task list')
      } else {
        console.log('just read a null value from Storage')
      }
    } catch (e) {
      console.log("error in getData ")
      console.dir(e)  // error reading value
    }
  }

  storeData = async (value) => {
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

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "Gray",
    },
    itemActive:{
        fontSize: 12,
        color: "Green",
    },
    itemInActive:{
        fontSize: 12,
        color: "Gray",
    },
    btnActive:{
        borderColor: "Green",
    },
    btnInActive:{
        borderColor: "Gray",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "Gray",
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: "Gray",
    },
    parentHr:{
        height:1,
        color: "White",
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: "Gray",
        width:'100%',
    },
    colorActive:{
        borderColor: "Green",
    },
    colorInActive:{
        borderColor: "Gray",
    }

});
