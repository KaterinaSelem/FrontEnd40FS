const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = ({ title, deleteTask }) => {
  // const isEdit = false;
  const [isEdit, setIsEdit] = React.useState(false); 

  const [updatedTask, setUpdatedTask] = React.useState(title);

  // 1. Получение абстрактной ссылки, которую впоследствии можно повесить на любой из элементов
  const textId = React.useRef();

  const handleClickSave = () => {
      setUpdatedTask(textId.current.value);
      setIsEdit(false);
  }

  if (isEdit) {
      return (
          <>
              {/* 2. Соединяем абстрактную ссылку с конкретным элементом, на который данная ссылка будет вести */}
              <textarea ref={textId} defaultValue={updatedTask}></textarea>
              {/* () => setIsEdit(false)     setIsEdit(false)        setIsEdit*/}
              <button onClick={handleClickSave}>Save</button>
          </>
      )
  } else {
      return (
          <>
              <p>{updatedTask}</p>
              <button onClick={() => setIsEdit(true)}>Edit</button>
              <button onClick={deleteTask}>Delete</button>
          </>
      )
  }
}

const TaskList = () => {
  const [tasks, setTasks] = React.useState([{ id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' }]);
  
  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  }
  
  return (
      <>
          { tasks.map((task, i) => (
              <Task
                  key={task.id}
                  title={task.title}
                  deleteTask={() => deleteTask(task.id)}
              />
          )) }
      </>
  )
}

root.render(
  <TaskList />
)