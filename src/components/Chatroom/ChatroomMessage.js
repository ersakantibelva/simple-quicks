import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BubbleChat from "./BubbleChat";

export default function ChatroomMessage({ groupChat }) {
  
  return (
    <div className="flex flex-col h-full gap-4 mt-3 ml-5 mr-3 overflow-y-auto scrollbar">
      {
        groupChat.Messages.map((message, idx) => {
          return <BubbleChat groupChat={groupChat} message={message} />
        })
      }
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
