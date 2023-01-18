import { useSelector } from "react-redux";
import ChatroomFooter from "./ChatroomFooter";
import ChatroomHeader from "./ChatroomHeader";
import ChatroomMessage from "./ChatroomMessage";

export default function Chatroom() {
  const { groupChatOpen, groupChat } = useSelector((state) => state)
  
  if(groupChatOpen) {
    return (
      <div className="flex flex-col w-full h-full">
        <ChatroomHeader groupChat={groupChat} />
        <ChatroomMessage groupChat={groupChat} />
        <ChatroomFooter groupChat={groupChat} />
      </div>
    )
  }
}