import Chatroom from "./Chatroom";
import Inbox from "./Inbox";

export default function PopUp() {
  return (
    <div className="w-[734px] h-[737px] bg-white absolute rounded-lg bottom-[110px] right-[24px]">
      {/* <Inbox /> */}
      <Chatroom />
    </div>
  );
}