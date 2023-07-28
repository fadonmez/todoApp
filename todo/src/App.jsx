import { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, desc) => {
    const newTasks = [
      ...tasks,
      {
        id: tasks.length + 1,
        title: title,
        desc: desc,
      },
    ];
    setTasks(newTasks);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const updateTask = (id, title, desc) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: title,
          desc: desc,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <Form kaydet={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} updateTask={updateTask} />
    </>
  );
}

export default App;
