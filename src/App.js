import "./App.css";
import InboxButton from "./components/Button/InboxButton";
import QuicksButton from "./components/Button/QuicksButton";
import TaskButton from "./components/Button/TaskButton";
import PopUp from "./components/PopUp";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen bg-[#262626]">
        <QuicksButton />

        <InboxButton />

        <TaskButton />

        <PopUp />
      </div>
    </div>
  );
}

export default App;
