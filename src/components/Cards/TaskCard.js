import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function TaskCard({ task }) {
  const [openDetail, setOpenDetail] = useState(false);
  const [dueAlert, setDueAlert] = useState("");
  const [editDesc, setEditDesc] = useState(false);
  const [taskInput, setTaskInput] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    completed: false,
    dueDate: task.dueDate,
  });

  const handleButtonDetail = () => {
    if (openDetail) setOpenDetail(false);
    else setOpenDetail(true);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newTaskInput = {
      ...taskInput,
      [name]: value,
    };

    setTaskInput(newTaskInput);
  };

  const handleOnChangeDate = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e.code);
    
  }

  useEffect(() => {
    const today = new Date();
    const dueAlertcalc = Math.floor(
      (task.dueDate - today) / (1000 * 3600 * 24)
    );

    if (dueAlertcalc >= 0 && dueAlertcalc < 3) {
      setDueAlert(`${dueAlertcalc} Days Left`);
    } else if (dueAlertcalc < 0) {
      setDueAlert("Past Due Date");
    }

    if (!task.title) setOpenDetail(true);
  }, []);

  return (
    <div className="flex py-[22px] items-start">
      <div className="w-[18px] h-[18px] mr-[22.5px]">
        {task.completed ? (
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
        ) : (
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
        )}
      </div>

      <div className="flex flex-col flex-grow gap-[13px]">
        <div className="flex items-start justify-between w-full gap-5">
          <div
            className={`${
              task.title
                ? `${
                    task.completed ? "line-through text-gray-3" : "text-gray-2"
                  }`
                : "hidden"
            } font-semibold w-[356px]`}
          >
            {task.title}
          </div>
          {!task.title && (
            <input
              onChange={handleOnChange}
              value={taskInput.title}
              name="title"
              type="text"
              className="h-10 w-[380px] border-gray-3 border rounded-[5px] placeholder:text-gray-2 p-2.5 outline-none"
              placeholder="Type Task Style"
            />
          )}
          {!task.completed && (
            <div className="text-sm text-[#EB5757]">{dueAlert}</div>
          )}
          <div className="text-sm text-gray-2">
            {task.dueDate ? task.dueDate.toLocaleDateString("en-GB") : ""}
          </div>
        </div>

        {openDetail ? (
          <>
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
              <div className="h-[40px] rounded-[5px] p-3 text-gray-2 border border-gray-3 flex">
                <input
                  type="date"
                  onChange={handleOnChangeDate}
                  value={task.dueDate.toLocaleDateString("fr-CA")}
                  className="appearance-none"
                />
              </div>
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
              {
                !editDesc ?
                <div
                  onClick={() => setEditDesc(!editDesc)}
                  className="leading-tight text-gray-2"
                >
                  {task.description ? task.description : "No Description"}
                </div>
                :
                <textarea 
                  onKeyUp={handleSubmit}
                  name="description"
                  value={taskInput.description}
                  onChange={handleOnChange}
                  className="border border-gray-5 rounded-[5px] w-full p-1 outline-none"
                />
              }
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="px-2.5 pt-1.5">
        {openDetail ? (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleButtonDetail}
          >
            <path
              d="M8.825 0.912476L5 4.72914L1.175 0.912476L0 2.08748L5 7.08747L10 2.08748L8.825 0.912476Z"
              fill="#4F4F4F"
            />
          </svg>
        ) : (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleButtonDetail}
          >
            <path
              d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
              fill="#4F4F4F"
            />
          </svg>
        )}
      </div>

      <div className="px-2.5">
        <Menu as="div" className="relative">
          <Menu.Button className="items-start justify-center text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
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
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-[126px] ring-1 ring-black ring-opacity-5 focus:outline-none h-[43px] border border-gray-3">
              <div className="flex flex-col justify-between w-full h-full py-1 text-left border-gray-4">
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
                      className="text-[#EB5757] text-left px-3 h-full"
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
