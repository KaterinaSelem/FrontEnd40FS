import { useState, useRef, FC } from "react";

interface ITaskProps {
  title:string, 
  del : () => void 
}

const Task: FC <ITaskProps> = ({ title, del }) => {
//const Task = ({ title, del }: ITaskProps) => {
//в функциях типизируем что они принимают и что возвращают
    const [isEdit, setIsEdit] = useState<boolean>(false); 
    const [updatedTask, setUpdatedTask] = useState<string>(title);
    const textId = useRef<HTMLTextAreaElement>(null);//null ожидает получить useRef (ref)
    const handleClickSave = () => {
      setUpdatedTask(textId.current!.value);//можно  написать if() ДАПИСАТЬ ПО ЛЕКЦИИ !-игнорирует проверку на null или undefined, 
      //?-проверяет, но в положительном случае возвращает undefined
      setIsEdit(false);
    };
    if (isEdit) {
        return (
          <div style={{ margin: '0 auto'}}>
            
          
           <p className='d-flex justify-content-center mt-2'> <textarea ref={textId} defaultValue={updatedTask}></textarea></p>
           <div className="d-flex justify-content-center mb-5">
            <button className="btn btn-success" onClick={handleClickSave}>
              Save
            </button>
          </div>
          </div>
        );
      } else {
        return (
          <div className="border border-primary-subtle w-50" style={{ margin: '0 auto'}}>
            <p className='mt-2'>{updatedTask}</p>
            <div className='d-flex justify-content-center mb-5'>
              <button className="btn btn-warning" onClick={() => setIsEdit(true)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={del}>
                Delete
              </button>
            </div>
          </div>
        );
      }
    };

    export default Task;