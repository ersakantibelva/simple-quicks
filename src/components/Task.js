import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/actionCreator.js";
import { TASK_ADDTASKS } from "../store/actionType.js";
import MyTasksDropdown from "./Dropdown/MyTasksDropdown.js";
import TaskCard from "./Cards/TaskCard.js";

export default function Task() {
  const { popupOpen, taskOpen, tasks } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleButtonNewTask = () => {
    const lastId = tasks[tasks.length - 1].id
    const newTask = {
      id: lastId + 1,
      title: '',
      description: '',
      completed: false,
      dueDate: new Date()
    }

    dispatch({
      type: TASK_ADDTASKS,
      payload: newTask
    })

  }

  useEffect(() => {
    if(popupOpen && taskOpen) {
      dispatch(fetchTodos())
      .then((data) => {
        console.log('data in useEffect >>>', data);
      })
    }
  }, [popupOpen, taskOpen])

  if (popupOpen && taskOpen) {
    return (
      <div className={`flex flex-col w-full h-full`}>
        {/* Header Task */}
        <div className="h-fit flex pl-[114px] pt-[18px] justify-between pr-[23px]">
          <MyTasksDropdown />
          <div onClick={handleButtonNewTask} className="h-10 w-[98px] flex items-center bg-blue-1 text-sm text-white rounded-[5px] text-center">
            <h1 className="w-full">New Task</h1>
          </div>
        </div>
  
        {/* Task List */}
        <div className="flex flex-col overflow-y-auto mb-5 ml-[29px] mr-[13px] pr-[25px] justify-between scrollbar">
          {
            tasks.map((task, idx) => {
              return (
              <>
                <TaskCard task={task} idx={idx} key={task.id} />
                <hr className="border-gray-3"></hr>
              </>
              )
            })
          }
        </div>
      </div>
    );
  }
}
