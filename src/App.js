import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen bg-[#262626] text-white">
        <div className="w-[68px] h-[68px] bg-blue-1 rounded-full absolute bottom-[27px] right-[24px] flex items-center mx-0">
          <svg
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="absolute flex items-center flex-col gap-[12px] bottom-[31px] right-32">
          <div className="text-white">Inbox</div>
          <div className="w-[60px] h-[60px] bg-gray-6 rounded-full flex items-center">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.4443 0.110657H1.9999C1.38879 0.110657 0.888794 0.610657 0.888794 1.22177V16.7773L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22177C17.5555 0.610657 17.0555 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41103L3.75547 10.7661L3.11103 11.4106V2.3328H15.3332ZM19.7777 4.55512H21.9999C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7773V14.5551H19.7777V4.55512Z"
                fill="#8885FF"
              />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-[31px] flex flex-col gap-3 right-[214px] items-center">
        <div className="text-white">Task</div>
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
      </div>
    </div>
  );
}

export default App;
