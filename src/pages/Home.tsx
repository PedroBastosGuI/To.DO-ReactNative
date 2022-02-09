import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask={
      id: new Date().getTime(),
      title:newTaskTitle,
      done: false,
    }

    setTasks(oldvalue => [...oldvalue, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks  = tasks.map(tasks => ({...tasks}));
    
    const foundItem = updatedTasks.find(item => item.id === id);

    if(!foundItem) return;

    foundItem.done = !foundItem.done;

    setTasks(updatedTasks);

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const FilterTask = tasks.filter(tasks => tasks.id !== id);
    setTasks(FilterTask);



  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})