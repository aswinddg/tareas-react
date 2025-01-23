import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();
import { tasks as data } from "../data/tasks";


export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
