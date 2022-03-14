import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react/cjs/react.production.min";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  //const [tasks, setTasks] = useState(TASKS);

  const visibleTasks = TASKS; 

  function handleDeleteTask(deletedTaskText) {
    //setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
