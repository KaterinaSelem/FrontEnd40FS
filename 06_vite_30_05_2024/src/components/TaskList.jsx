import { useEffect, useState } from "react";
import Task from "./Task";


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

useEffect (() => {
    const fetchTasks = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json(); // tasks downloaded from server
            setTasks(data.slice(0, 10).map(e => e.title)); //but its arr of objects with map we itarate objects and name only Title from each
        } catch (error) {
            console.log(error);
        }
    }
    fetchTasks();
}, []) //[newTask] можно передать те значения при изменении которых должен запуститься эффект(функция) - updating

  const deleteTask = (i) => {

    const tasksCopy = [...tasks];
  
    tasksCopy.splice(i, 1);
   
    setTasks(tasksCopy);
  };
  const addTask = () => {
    if (newTask.trim()) {
      const tasksCopy = [...tasks]; 
      tasksCopy.push(newTask); 
      setTasks(tasksCopy); 
    }
    setNewTask(""); 
  };

return<>
    <h2>ToDo List</h2>
        <div>
           
            <input value = {newTask} onChange = {(event) => setNewTask(event.target.value)}/>
            <button onClick = {addTask}>Add Task</button>
        </div>
            { tasks.map((task, i) => (
                <Task
                    key={Math.random()}
                    title={task}
                    remove={()=>deleteTask(i)}
                   
                />
            )) }
</>
}

export default TaskList;