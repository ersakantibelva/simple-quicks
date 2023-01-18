import { useDispatch } from "react-redux";
import { openGroupChat } from "../../store/actionCreator";

export default function GroupChatCard({ groupChat, idx }) {
  const dispatch = useDispatch()

  const handleOpenChatRoom = () => {
    console.log('masuk');
    dispatch(openGroupChat(groupChat))
  }
  return (
    <>
      <div onClick={handleOpenChatRoom} className="w-full h-16 my-[22px] flex gap-[17px] cursor-pointer">
        <div className="h-full w-[51px]">
          {groupChat.type === "group" ? (
            <div className="relative">
              <div className="absolute left-0 flex mx-auto w-[34px] h-[34px] bg-gray-5 rounded-full items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                    fill="black"
                    fill-opacity="0.54"
                  />
                </svg>
              </div>

              <div className="absolute left-[17px] flex mx-auto w-[34px] h-[34px] bg-blue-1 rounded-full items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-0 flex mx-auto w-[34px] h-[34px] bg-blue-1 rounded-full text-center text-white justify-center">
                { groupChat.name[0] }
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full h-full text-left">
          <div className="flex w-full gap-4">
            <div className="font-semibold text-blue-1">
              { groupChat.name }
            </div>
            <div className="flex-shrink-0 text-sm text-gray-2">
              January 1, 2021 19:10
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-2">
            Cameron Phillips:
          </div>
          <div className="flex items-center justify-between text-sm text-gray-2">
            <h1>Please check this out!</h1>
            <div className="w-2.5 h-2.5 bg-[#EB5757] rounded-full"></div>
          </div>
        </div>
      </div>

      <hr className="border-gray-3"></hr>
    </>
  );
}
