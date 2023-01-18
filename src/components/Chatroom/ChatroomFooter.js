export default function ChatroomFooter() {
  return (
    <div className="px-5 py-[11px] mb-2 flex Justify-self-end h-[70px] gap-[13px] w-full">
      <input
      className="w-full h-full border border-gray-3 placeholder-gray-1 text-sm rounded-[5px] px-4"
      placeholder="Type a new message"
      >
      </input>

      <div className="w-[76px] text-sm flex items-center text-white rounded-[5px] bg-blue-1">
        <h1 className="w-full font-semibold text-center">Send</h1>
      </div>

    </div>
  )
}