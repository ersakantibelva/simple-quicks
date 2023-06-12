import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MyTasksDropdown() {
  return (
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
  );
}
