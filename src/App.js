import "./App.css";

import React, { useState } from "react";

const tacksList = [
  { taskName: "task 1", id: 1, minutes: "10" },
  { taskName: "task 2", id: 2, minutes: "12" },
];

function App() {
  const [tasks, setTasks] = useState(tacksList);
  const [newTask, setNewTask] = useState("");
  const [minutes, setMinutes] = useState("0");

  tasks.map((item) => console.log(item));

  return (
    <>
      <header className='App-header'>
        <div>Todo list</div>
        <div>
          <input type='text' onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder='Enter task' />
          <input type='text' onChange={(e) => setMinutes(e.target.value)} value={minutes} placeholder='0' />
          <button
            onClick={() => {
              if (newTask.length > 0) {
                setTasks([{ taskName: newTask, id: Math.random(), minutes: minutes }, ...tasks]);
                setNewTask("");
                setMinutes("0");
              }
            }}>
            ADD
          </button>
        </div>
      </header>

      <ol>
        {tasks.map((item) => (
          <li key={item.id} className='task-list'>
            {item.taskName} : {item.minutes}
            <button
              onClick={() => {
                setTasks(tasks.filter((el) => el.id !== item.id));
              }}>
              X
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
