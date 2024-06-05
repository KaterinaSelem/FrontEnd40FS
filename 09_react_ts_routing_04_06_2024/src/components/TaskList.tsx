import { useEffect, useState } from 'react';
import Task from './Task';

interface ITaskJson {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  
}

const TaskList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json(); // tasks downloaded from server
        setTasks(data.slice(0, 10).map((e: ITaskJson) => e.title)); //but its arr of objects with map we itarate objects and name only Title from each
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []); //[newTask] можно передать те значения при изменении которых должен запуститься эффект(функция) - updating

  const deleteTask = (i:number) => {
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
    setNewTask('');
  };

  return (
    <>
      <h2 className='text-center'>ToDo List</h2>
      <div style = {{margin: '0 auto'}} className='w-50 d-flex'>
        <input
          className='form-control'
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button style = {{width: 'fit-content'}} className='btn btn-primary w-25' onClick={addTask}>
          Add Task
        </button>
      </div>
      {tasks.map((task, i) => (
        <Task key={Math.random()}
        title={task}
        del = {() => deleteTask(i)} />
      ))}
    </>
  );
};

export default TaskList;
