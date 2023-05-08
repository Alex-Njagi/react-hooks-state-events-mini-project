import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  console.log(tasks);
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=>(
        <Task 
          key={index}
          task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
