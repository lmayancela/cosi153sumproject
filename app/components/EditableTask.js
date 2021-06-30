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

    var taskList = props.taskList

    //const [taskList,setTaskList]= useState([])

    //passes through the list and the task, changes the attributes of the specific task, and resaves the json list in aync

    //data will be loaded in main task list editing screen and each task will be passed through this component

    /*useEffect(() => {getData()}
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
               }*/

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
    <ScreenContainer>
    <View>
    {/*<Text style={styles.headerText}>CType of index {(typeof props.index)} value {props.index}</Text>
    <Text style={styles.headerText}>CType of object{(typeof props.object)} value {JSON.stringify(props.object)}</Text>
    <Text style={styles.headerText}>CType of [1,2,3,4]{(typeof [1,2,3,4])} value {JSON.stringify([1,2,3,4])}</Text>
    <Text style={styles.headerText}>CType of taskList{(typeof props.taskList)} value {JSON.stringify(props.taskList)}</Text>
    <Text style={styles.headerText}>CType of taskList[props.index]{(typeof props.taskList[props.index])} value {JSON.stringify(props.taskList[props.index])}</Text>
    */}
      <Text> </Text>
      <View style={styles.rowContainer}>
        <Text>Task Name: </Text>
        <TextInput
          style={styles.textinput}
          placeholder={props.object.taskName}
          onChangeText={text => {
            setTaskName(text)
            // NOTE: props.object.taskName = taskName
            // NOTE: storeData(taskList)
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
            props.taskList[props.index].dueDate = dueDate;
            // NOTE: storeData(props.taskList)
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
            setNotificationType(text + " ")
            // NOTE: props.taskList[props.index].notificationType = notificationType;
            // NOTE: storeData(props.taskList)
          }}
          value = {notificationType}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Notification Times</Text>
        <TextInput
          style={styles.textinput}
          placeholder={props.object.notificationTimes}
          onChangeText={text => {
            setNotificationTimes(text)
            // NOTE: props.taskList[props.index].notificationTimes = notificationTimes;
            // NOTE: storeData(props.taskList)
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
            // NOTE: props.taskList[props.index].notes = notes;
            // NOTE: storeData(props.taskList)
          }}
          value={notes}
        />
      </View>
      <Button
        title="save changes"
        onPress={() => {
          props.object.taskName = taskName
        props.taskList[props.index].dueDate = dueDate
        props.taskList[props.index].notes = notes
        props.taskList[props.index].notificationTimes = notificationTimes
         props.taskList[props.index].notificationType = notificationType
      }}
      />
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

export default TipCalculator;
