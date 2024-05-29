const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = ({title}) => {
  // const isEdit = true;
  const [isEdit, setIsEdit] = React.useState(false); //[isEdit, setIsEdit] Array(2) изначально из эдит равно фолс

  const [updatedTask, setUpdatedTask] = React.useState(title);

const textId = React.useRef();

  if (isEdit) {
    return (
      <>
        <textarea defaultValue=''></textarea>
        <button onClick = {()=>setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    return (
      <>
        <p>Name</p>
        <button onClick = {()=>setIsEdit(true)}>Edit</button>
        <button>Delete</button>
      </>
    );
  }
};

const TaskList = () => {
    const [tasks, setTasks] = React.useState(['Task1', 'Task2', 'Task3']);
            
    return (
        <>
        {tasks.map((task, index) => ( <Task
            key = {index}
            title = {task}
            />
        ))
        }
        </>
    )
}

root.render(
<TaskList />
);
