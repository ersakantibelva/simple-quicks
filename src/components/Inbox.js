export default function Inbox() {
  return (
    <>
      <div className="h-8 mt-5 mx-[34px] rounded-[5px] border-gray-3 p-2.5 border">
        <div className="flex items-center justify-between w-full h-full px-12 text-gray-1">
          <h1 className="text-xs">Search</h1>
          <div>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-8 my-1">
        {/* 1st Message */}
        <div className="w-full h-16 my-[22px] flex gap-[17px]">
          <div className="h-full w-[51px]">
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
          </div>

          <div className="flex flex-col w-full h-full text-left">
            <div className="flex w-full gap-4">
              <div className="font-semibold text-blue-1">
                109220-Naturalization
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

        {/* 2nd Message */}
        <div className="w-full h-16 my-[22px] flex gap-[17px]">
          <div className="h-full w-[51px]">
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
          </div>

          <div className="flex flex-col w-full h-full text-left">
            <div className="flex w-full gap-4">
              <div className="font-semibold text-blue-1">
                Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up
                - Brief Service ]
              </div>
              <div className="flex-shrink-0 text-sm text-gray-2">
                02/06/2021 10:45
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-2">Ellen:</div>
            <div className="flex items-center justify-between text-sm text-gray-2">
              <h1>Hey, please read.</h1>
            </div>
          </div>
        </div>

        <hr className="border-gray-3"></hr>

        {/* 3rd Message */}
        <div className="w-full h-16 my-[22px] flex gap-[17px]">
          <div className="h-full w-[51px]">
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
          </div>

          <div className="flex flex-col w-full h-full text-left">
            <div className="flex w-full gap-4">
              <div className="font-semibold text-blue-1">
                8405-Diana SALAZAR MUNGUIA
              </div>
              <div className="flex-shrink-0 text-sm text-gray-2">
                01/06/2021 12:19
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-2">
              Cameron Phillips:
            </div>
            <div className="flex items-center justify-between text-sm text-gray-2">
              <h1>
                I understand your initial concerns and thats very valid,
                Elizabeth. But you ...
              </h1>
            </div>
          </div>
        </div>

        <hr className="border-gray-3"></hr>

        {/* 4th Message */}
        <div className="w-full h-16 my-[22px] flex gap-[17px]">
          <div className="h-full w-[51px]">
            <div className="relative">
              <div className="absolute left-0 flex mx-auto w-[34px] h-[34px] bg-blue-1 rounded-full text-center text-white justify-center">
                F
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full text-left">
            <div className="flex w-full gap-4">
              <div className="font-semibold text-blue-1">FastVisa Support</div>
              <div className="flex-shrink-0 text-sm text-gray-2">
                01/06/2021 12:19
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-2">
              <h1>Hey there! Welcome to your inbox.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
