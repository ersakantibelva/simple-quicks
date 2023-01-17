export default function ChatroomHeader() {
  return (
    <div className="h-[73.5px] flex border-b border-gray-4 gap-[18px] items-center px-[21px]">
      <div className="w-[24px] justify-self-end">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
            fill="#333333"
          />
        </svg>
      </div>

      <div className="flex flex-col flex-grow text-left">
        <h1 className="font-semibold text-blue-1">
          I-589 - AMARKHIL, Obaidullah [Affirmative Filling with ZHN]
        </h1>
        <h2 className="text-xs text-gray-1">3 Participants</h2>
      </div>

      <div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
}
