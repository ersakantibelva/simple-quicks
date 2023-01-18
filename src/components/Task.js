import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/actionCreator.js";
import { TASK_ADDTASKS } from "../store/actionType.js";
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
        console.log(data);
      })
    }
  }, [popupOpen, taskOpen])

  if (popupOpen && taskOpen) {
    return (
      <div className={`flex flex-col w-full h-full`}>
        {/* Header Task */}
        <div className="h-fit flex pl-[114px] pt-[18px] justify-between pr-[23px]">
          <Menu as="div" className="relative">
            <Menu.Button className="justify-center w-[118px] px-4 py-2 text-sm font-medium text-gray-2 bg-transparent rounded-md focus:outline-none h-10 flex items-center border-gray-3 border">
              <div className="w-full font-semibold">My Tasks</div>
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
                  fill="#4F4F4F"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 origin-top-right bg-white border rounded-md shadow-lg max-w-fit ring-1 ring-black ring-opacity-5 border-gray-3 focus:outline-none">
                <div className="flex flex-col justify-between w-[288px] h-20 py-1 text-left border-gray-4">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        // onClick={}
                        // className={classNames(
                        //   active
                        //     ? "bg-gray text-gray-300"
                        //     : "text-gray-400",
                        //   "block px-4 py-2 text-sm"
                        // )}
                        className="h-full px-3 font-semibold text-left border-b text-gray-2 border-gray-3"
                      >
                        Personal Errands
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        // onClick={}
                        // className={classNames(
                        //   active
                        //     ? "bg-gray text-gray-300"
                        //     : "text-gray-400",
                        //   "block px-4 py-2 text-sm"
                        // )}
                        className="h-full px-3 font-semibold text-left text-gray-2"
                      >
                        Urgent To-Do
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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
          {/* 1st */}
          {/* <div className="flex py-[22px] items-start">
            <div className="w-[18px] h-[18px] mr-[22.5px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z"
                  fill="#828282"
                />
              </svg>
            </div>
  
            <div className="flex flex-col flex-grow gap-[13px]">
              <div className="flex items-start justify-between w-full gap-5">
                <div className="font-semibold text-gray-2 w-[356px]">
                  Close off Case #012920- RODRIGUES, Amiguel
                </div>
                <div className="text-sm text-[#EB5757]">2 Days Left</div>
                <div className="text-sm text-gray-2">12/06/2021</div>
              </div>
  
              <div className="flex items-center gap-5">
                <div className="h-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99181 0.666626C4.39181 0.666626 0.666809 4.39996 0.666809 8.99996C0.666809 13.6 4.39181 17.3333 8.99181 17.3333C13.6001 17.3333 17.3335 13.6 17.3335 8.99996C17.3335 4.39996 13.6001 0.666626 8.99181 0.666626ZM9.0003 15.6666C5.31697 15.6666 2.33364 12.6833 2.33364 8.99996C2.33364 5.31662 5.31697 2.33329 9.0003 2.33329C12.6836 2.33329 15.667 5.31662 15.667 8.99996C15.667 12.6833 12.6836 15.6666 9.0003 15.6666ZM8.16681 4.83329H9.41681V9.20829L13.1668 11.4333L12.5418 12.4583L8.16681 9.83329V4.83329Z"
                      fill="#2F80ED"
                    />
                  </svg>
                </div>
                <input
                  type="date"
                  className="h-[40px] rounded-[5px] p-3 text-gray-2 border border-gray-3 appearance-none"
                />
              </div>
  
              <div className="flex gap-5">
                <div>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                      fill="#2F80ED"
                    />
                  </svg>
                </div>
                <div className="leading-tight text-gray-2">
                  Closing off this case since this application has been cancelled.
                  No one really understand how this case could possibly be
                  cancelled. The options and the documents within this document
                  were totally a guaranteed for a success!
                </div>
              </div>
            </div>
  
            <div className="px-2.5 pt-1.5">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
  
            <div className="px-2.5 pt-2">
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
  
          <hr className="border-gray-3"></hr> */}
  
          {/* 2nd */}
          {/* <div className="flex py-[22px] items-start">
            <div className="w-[18px] h-[18px] mr-[22.5px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z"
                  fill="#828282"
                />
              </svg>
            </div>
  
            <div className="flex flex-col flex-grow gap-[13px]">
              <div className="flex items-start justify-between w-full gap-5">
                <div className="font-semibold text-gray-2 w-[356px]">
                  Set up documentation report for several Cases : Case 145443,
                  Case 192829 and Case 182203
                </div>
                <div className="text-sm text-[#EB5757]">2 Days Left</div>
                <div className="text-sm text-gray-2">12/06/2021</div>
              </div>
  
              <div className="flex items-center gap-5">
                <div className="h-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.99181 0.666626C4.39181 0.666626 0.666809 4.39996 0.666809 8.99996C0.666809 13.6 4.39181 17.3333 8.99181 17.3333C13.6001 17.3333 17.3335 13.6 17.3335 8.99996C17.3335 4.39996 13.6001 0.666626 8.99181 0.666626ZM9.0003 15.6666C5.31697 15.6666 2.33364 12.6833 2.33364 8.99996C2.33364 5.31662 5.31697 2.33329 9.0003 2.33329C12.6836 2.33329 15.667 5.31662 15.667 8.99996C15.667 12.6833 12.6836 15.6666 9.0003 15.6666ZM8.16681 4.83329H9.41681V9.20829L13.1668 11.4333L12.5418 12.4583L8.16681 9.83329V4.83329Z"
                      fill="#2F80ED"
                    />
                  </svg>
                </div>
                <input
                  type="date"
                  className="h-[40px] rounded-[5px] p-3 text-gray-2 border border-gray-3 appearance-none"
                />
              </div>
  
              <div className="flex gap-5">
                <div>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                      fill="#2F80ED"
                    />
                  </svg>
                </div>
                <div className="text-gray-2">
                  All Cases must include all payment transactions, all documents
                  and forms filled. All conversations in comments and messages in
                  channels and emails should be provided as well in.
                </div>
              </div>
            </div>
  
            <div className="px-2.5 pt-1.5">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
  
            <div className="px-2.5 pt-2">
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
  
          <hr className="border-gray-3"></hr> */}
  
          {/* 3rd, checked */}
          {/* <div className="flex py-[22px] items-start">
            <div className="w-[18px] h-[18px] mr-[22.5px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM13.58 4.58L14.99 6L6.99 14L2.99 10.01L4.41 8.6L6.99 11.17L13.58 4.58Z"
                  fill="#828282"
                />
              </svg>
            </div>
  
            <div className="flex flex-col flex-grow gap-[13px]">
              <div className="flex items-start justify-between w-full gap-5">
                <div className="font-semibold text-gray-2 w-[356px] line-through">
                  Contact Mr Caleb - video conference?
                </div>
                <div className="text-sm text-gray-2">12/06/2021</div>
              </div>
            </div>
  
            <div className="px-2.5 pt-1.5">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.825 0.912476L5 4.72914L1.175 0.912476L0 2.08748L5 7.08747L10 2.08748L8.825 0.912476Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
  
            <div className="px-2.5 pt-2">
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
  
          <hr className="border-gray-3"></hr> */}
        </div>
      </div>
    );
  }
}
