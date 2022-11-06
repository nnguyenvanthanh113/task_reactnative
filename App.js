import { StatusBar } from 'expo-status-bar';
// import reactDom from 'react-dom';
import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  //delete
  const handleDeleteTask = (index, item) => {
    Alert.alert(
      "ban co muon xoa ?",
      `${index}` + `  ` + `${item}`,
      [
        {
          text: "OK", onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          }
        },
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel"
        },

      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index, item)}>
              </Task>;
            })
          }

        </ScrollView>
      </View>
      <Form addTask={handleAddTask}></Form>
    </View>
  );
}

export default App;

