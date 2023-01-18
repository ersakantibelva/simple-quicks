import { useSelector } from "react-redux";
import ChatroomFooter from "./ChatroomFooter";
import ChatroomHeader from "./ChatroomHeader";
import ChatroomMessage from "./ChatroomMessage";

export default function Chatroom() {
  const { groupChatOpen } = useSelector((state) => state)

  if(groupChatOpen) {
    return (
      <div className="flex flex-col w-full h-full">
        <ChatroomHeader />
        <ChatroomMessage />
        <ChatroomFooter />
      </div>
    )
  }
}