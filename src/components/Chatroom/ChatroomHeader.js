export default function ChatroomHeader() {
  return (
    <div className="h-[73.5px] bg-white flex">
      <div>
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

      <div className="flex flex-col flex-grow">
        <h1 className="text-blue-1">I-589 - AMARKHIL, Obaidullah [Affirmative Filling with ZHN]</h1>
        <h2>3 Participants</h2>
      </div>
    </div>
  );
}
