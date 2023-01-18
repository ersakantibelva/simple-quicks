import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function BubbleChat({ groupChat, message }) {
  const [time, setTime] = useState("");
  const [counterUser, setCounterUser] = useState([]);

  useEffect(() => {
    if (groupChat.type === "group") {
      const counterUser = groupChat.members.slice(1);
      setCounterUser(counterUser);
    }

    const hours = message.createdDate.getHours();
    const minutes = message.createdDate.getMinutes();
    setTime(`${hours}:${minutes}`);
  }, []);

  if (message.senderName === "Claren") {
    return (
      <div className="flex justify-end">
        <div className="flex flex-col items-end gap-1">
          <div className="font-semibold #FCEED3 text-[#9B51E0]">You</div>
          <div className="flex items-start gap-1.5">
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 12 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.99984 0.666656C1.2665 0.666656 0.666504 1.26666 0.666504 1.99999C0.666504 2.73332 1.2665 3.33332 1.99984 3.33332C2.73317 3.33332 3.33317 2.73332 3.33317 1.99999C3.33317 1.26666 2.73317 0.666656 1.99984 0.666656ZM9.99984 0.666656C9.2665 0.666656 8.6665 1.26666 8.6665 1.99999C8.6665 2.73332 9.2665 3.33332 9.99984 3.33332C10.7332 3.33332 11.3332 2.73332 11.3332 1.99999C11.3332 1.26666 10.7332 0.666656 9.99984 0.666656ZM4.6665 1.99999C4.6665 1.26666 5.2665 0.666656 5.99984 0.666656C6.73317 0.666656 7.33317 1.26666 7.33317 1.99999C7.33317 2.73332 6.73317 3.33332 5.99984 3.33332C5.2665 3.33332 4.6665 2.73332 4.6665 1.99999Z"
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
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg max-w-fit ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex flex-col justify-between w-32 h-20 py-1 text-left border-gray-4">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          className="h-full px-3 text-left border-b text-blue-1 border-gray-4"
                        >
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
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

            <div className="rounded-[3px] bg-[#EEDCFF] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
              <div className="text-sm">{message.content}</div>
              <div className="text-xs">{time ? time : ""}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (groupChat.type === "group") {
    if (message.senderName === counterUser[0]) {
      return (
        <div className="flex">
          <div className="flex flex-col items-start gap-1">
            <div className="font-semibold text-[#E6A443]">
              {message.senderName}
            </div>
            <div className="flex items-start gap-1.5">
              <div className="rounded-[3px] max-w-[75%] bg-[#FCEED3] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
                <div className="text-sm">{message.content}</div>
                <div className="text-xs">{time}</div>
              </div>

              <div className="cursor-pointer">
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 12 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.99984 0.666656C1.2665 0.666656 0.666504 1.26666 0.666504 1.99999C0.666504 2.73332 1.2665 3.33332 1.99984 3.33332C2.73317 3.33332 3.33317 2.73332 3.33317 1.99999C3.33317 1.26666 2.73317 0.666656 1.99984 0.666656ZM9.99984 0.666656C9.2665 0.666656 8.6665 1.26666 8.6665 1.99999C8.6665 2.73332 9.2665 3.33332 9.99984 3.33332C10.7332 3.33332 11.3332 2.73332 11.3332 1.99999C11.3332 1.26666 10.7332 0.666656 9.99984 0.666656ZM4.6665 1.99999C4.6665 1.26666 5.2665 0.666656 5.99984 0.666656C6.73317 0.666656 7.33317 1.26666 7.33317 1.99999C7.33317 2.73332 6.73317 3.33332 5.99984 3.33332C5.2665 3.33332 4.6665 2.73332 4.6665 1.99999Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (message.senderName === counterUser[1]) {
      return (
        <div className="flex">
          <div className="flex flex-col items-start gap-1">
            <div className="font-semibold text-[#43B78D]">
              { message.senderName }
            </div>
            <div className="flex items-start gap-1.5">
              <div className="rounded-[3px] max-w-[75%] bg-[#D2F2EA] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
                <div className="text-sm">
                  { message.content }
                </div>
                <div className="text-xs">{ time }</div>
              </div>

              <div className="cursor-pointer">
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 12 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.99984 0.666656C1.2665 0.666656 0.666504 1.26666 0.666504 1.99999C0.666504 2.73332 1.2665 3.33332 1.99984 3.33332C2.73317 3.33332 3.33317 2.73332 3.33317 1.99999C3.33317 1.26666 2.73317 0.666656 1.99984 0.666656ZM9.99984 0.666656C9.2665 0.666656 8.6665 1.26666 8.6665 1.99999C8.6665 2.73332 9.2665 3.33332 9.99984 3.33332C10.7332 3.33332 11.3332 2.73332 11.3332 1.99999C11.3332 1.26666 10.7332 0.666656 9.99984 0.666656ZM4.6665 1.99999C4.6665 1.26666 5.2665 0.666656 5.99984 0.666656C6.73317 0.666656 7.33317 1.26666 7.33317 1.99999C7.33317 2.73332 6.73317 3.33332 5.99984 3.33332C5.2665 3.33332 4.6665 2.73332 4.6665 1.99999Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else if (groupChat.type === "dm" && message.senderName !== "Claren") {
    return (
      <div className="flex">
        <div className="flex flex-col items-start gap-1">
          <div className="font-semibold text-blue-1">
            { message.senderName }
          </div>
          <div className="flex items-start gap-1.5">
            <div className="rounded-[3px] max-w-[75%] bg-[#F8F8F8] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
              <div className="text-sm">
                { message.content }
              </div>
              <div className="text-xs">{ time }</div>
            </div>

            <div className="cursor-pointer">
              <svg
                width="12"
                height="4"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.99984 0.666656C1.2665 0.666656 0.666504 1.26666 0.666504 1.99999C0.666504 2.73332 1.2665 3.33332 1.99984 3.33332C2.73317 3.33332 3.33317 2.73332 3.33317 1.99999C3.33317 1.26666 2.73317 0.666656 1.99984 0.666656ZM9.99984 0.666656C9.2665 0.666656 8.6665 1.26666 8.6665 1.99999C8.6665 2.73332 9.2665 3.33332 9.99984 3.33332C10.7332 3.33332 11.3332 2.73332 11.3332 1.99999C11.3332 1.26666 10.7332 0.666656 9.99984 0.666656ZM4.6665 1.99999C4.6665 1.26666 5.2665 0.666656 5.99984 0.666656C6.73317 0.666656 7.33317 1.26666 7.33317 1.99999C7.33317 2.73332 6.73317 3.33332 5.99984 3.33332C5.2665 3.33332 4.6665 2.73332 4.6665 1.99999Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
