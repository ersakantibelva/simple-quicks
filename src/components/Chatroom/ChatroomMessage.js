import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ChatroomMessage() {
  return (
    <div className="flex flex-col h-full gap-4 mt-3 ml-5 mr-3 overflow-y-auto scrollbar">
      {/* You Bubble Chat */}
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
                  <div className="py-1 w-32 h-20 text-left flex flex-col text-left border-gray-4 justify-between">
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
                          className="text-blue-1 text-left px-3 border-b border-gray-4 h-full"
                        >
                          Edit
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
              <div className="text-sm">
                No worries. It will be completed ASAP. I've asked him yesterday.
              </div>
              <div className="text-xs">19:32</div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Bubble Chat */}
      <div className="flex">
        <div className="flex flex-col items-start gap-1">
          <div className="font-semibold text-[#E6A443]">Mary Hilda</div>
          <div className="flex items-start gap-1.5">
            <div className="rounded-[3px] max-w-[75%] bg-[#FCEED3] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
              <div className="text-sm">
                Hello Obaidullah, I will be your case advisor for case #029290.
                I have assigned some homework for you to fill. Please keep up
                with the due dates. Should you have any questions, you can
                message me anytime. Thanks.
              </div>
              <div className="text-xs">19:32</div>
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

      <div className="flex justify-end">
        <div className="flex flex-col items-end gap-1">
          <div className="font-semibold #FCEED3 text-[#9B51E0]">You</div>
          <div className="flex items-start gap-1.5">
            <div className="cursor-pointer">
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
                  <div className="py-1 w-32 h-20 text-left flex flex-col text-left border-gray-4 justify-between">
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
                          className="text-blue-1 text-left px-3 border-b border-gray-4 h-full"
                        >
                          Edit
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

            <div className="rounded-[3px] bg-[#EEDCFF] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
              <div className="text-sm">
                No worries. It will be completed ASAP. I've asked him yesterday.
              </div>
              <div className="text-xs">19:32</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-start gap-1">
          <div className="font-semibold text-[#43B78D]">
            Obaidullah Amarkhil
          </div>
          <div className="flex items-start gap-1.5">
            <div className="rounded-[3px] max-w-[75%] bg-[#D2F2EA] p-2.5 w-full flex flex-col text-left text-gray-2 gap-3">
              <div className="text-sm">
                Morning, I'll try to do them. Thanks
              </div>
              <div className="text-xs">19:32</div>
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

      {/* New Messages Button */}
      <div className="w-32 mx-auto bg-[#E9F3FF] px-3 py-2 font-semibold rounded-[5px] text-blue-1">
        New Message
      </div>
      {/* New Messages Border */}
      <div className="flex items-center gap-2.5">
        <div className="w-full">
          <hr className="border-[#EB5757]"></hr>
        </div>
        <div className="flex-shrink-0 text-[#EB5757] font-semibold">
          New Messages
        </div>
        <div className="w-full">
          <hr className="border-[#EB5757]"></hr>
        </div>
      </div>
      {/* Day Border */}
      <div className="flex items-center gap-2.5">
        <div className="w-full">
          <hr className="border-gray-2"></hr>
        </div>
        <div className="flex-shrink-0 font-semibold text-gray-2">
          Today June 09, 2021
        </div>
        <div className="w-full">
          <hr className="border-gray-2"></hr>
        </div>
      </div>
      {/* Loader */}
      <div className="w-full h-[55px] gap-4 items-center flex p-3.5 bg-[#E9F3FF] rounded-[5px]">
        <div>Loader</div>
        <div className="text-sm font-semibold text-gray-2">
          Please wait while we connect you with one of our team ...
        </div>
      </div>
    </div>
  );
}
