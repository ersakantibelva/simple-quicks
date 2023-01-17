import { useDispatch, useSelector } from "react-redux";
import { POPUP_CLOSETASK, POPUP_OPENPOPUP, POPUP_OPENTASK, QUICK_CLOSEQUICK } from "../../store/actionType";

export default function TaskButton() {
  const { quickOpen, taskOpen, popupOpen } = useSelector((state) => state)
  const dispatch = useDispatch()
  
  const handleTaskButton = () => {
  if(!taskOpen) {
    dispatch({ type: POPUP_OPENTASK })
    dispatch({ type: POPUP_OPENPOPUP })
  }
  }

  return (
    <div onClick={handleTaskButton} className={`absolute bottom-[31px] flex flex-col gap-3 right-[214px] items-center ${quickOpen && !taskOpen ? "" : "hidden"}`}>
      {
        !popupOpen &&
        <div className="text-white">Task</div>
      }
      <div className="w-[60px] h-[60px] bg-gray-6 rounded-full flex items-center">
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.11114 0.666687H23.1111C24.3334 0.666687 25.3334 1.66669 25.3334 2.88891V17.3334C25.3334 18.5556 24.3334 19.5556 23.1111 19.5556H3.11114C1.88892 19.5556 0.888916 18.5556 0.888916 17.3334V2.88891C0.888916 1.66669 1.88892 0.666687 3.11114 0.666687ZM3.11114 2.88891V17.3334H12V2.88891H3.11114ZM23.1111 17.3334H14.2222V2.88891H23.1111V17.3334ZM22 6.7778H15.3334V8.44446H22V6.7778ZM15.3334 9.55558H22V11.2222H15.3334V9.55558ZM22 12.3334H15.3334V14H22V12.3334Z"
            fill="#F8B76B"
          />
        </svg>
      </div>
    </div>
  );
}
