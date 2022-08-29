import React from "react";

function ChatBox() {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="flex-1 max-w-screen-lg mx-auto p-10">
        <ul className="grid grid-cols-6 grid-rows-6 gap-10 grid-flow-col">
          {/* left column */}
          <li className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg shadow-xl lr1">
            <div className="h-24 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 profilesvg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </li>
          {/* left colum 2nd row */}
          <li className="bg-gradient-to-r from-violet-500 to-fuchsia-500 row-span-4 bg-teal-400 rounded-lg shadow-xl lr2">
            <div className="h-24 grid place-items-center py-36">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 py-2 homesvg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 py-2 messagesvg "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 py-2 notificationsvg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 py-2 settingsvg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </li>
          {/* left colum 3rd row */}
          <li className=" bg-teal-400 rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 lr3">
            <div className="h-24 grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 logoutsvg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </li>

          {/* MIDDLE COLUMN */}

          <li className="row-span-1 col-span-2 bg-gray-700 rounded-lg shadow-xl mr1">
            <div className="h-24 ml-6 grid place-items-center">
              <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div class="relative searchfield">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block p-4 pl-10 w-full text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent placeholder-white"
                    placeholder="Search... "
                    required
                  />
                </div>
              </form>
            </div>
          </li>

          <li className="row-span-2 col-span-2 bg-gray-700 rounded-lg shadow-xl mr2">
            <div className="h-24 groupsection ">
              <div className="grid grid-cols-1 mt-2 p-2">
                <div className="text-white text-xl ">Groups</div>
              </div>
              <div className="grid grid-cols-5 grid-rows-1 grid-flow-col mt-6 border-solid border-b-2 pl-2 ml-3 rounded-lg group1">
                <div className="group">
                  <div className="h-8 grid place-items-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-start-2 col-end-4 text-md text-white ">
                  Apple Inc.
                </div>
                <div className="col-start-2 col-end-5 text-xs text-white ">
                  Sample group message..
                </div>
                <div className="col-start-4 col-end-6 text-xs pt-2">
                  <p className="text-gray-600 pl-11">09.02 p.m.</p>
                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 animate-ping-gray rounded-full bg-green-600 opacity-50 w-1 ">

                </div>
              </div>
              {/* <div class="grid grid-rows-3 grid-flow-col gap-4 mt-2">
                <div>
                    Groups
                </div>
                <div class="grid grid-rows-1 grid-flow-col">
                <div>Jobs Pic</div>
                <div>Steve Jobs</div>
                <div>09.00 p.m.</div>
                <div class="grid grid-rows-1 grid-flow-col">
                    <div>Message</div>
                    <div>Notification</div>
                </div>
                </div>
                <div>Steve Wozniak</div>
              </div> */}
            </div>
          </li>

          <li className="row-span-3 col-span-2 bg-gray-700 rounded-lg shadow-xl mr3">
            <div className="h-24 ml-2">
              <div className="grid grid-cols-1 mt-2 p-2">
                <div className="text-white text-xl ">People</div>
              </div>
              <div className="grid grid-cols-5 grid-rows-1 grid-flow-col mt-6 border-solid border-b-2 pl-2 ml-3 rounded-lg people1">
                <div className="group">
                  <div className="h-8 grid place-items-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-start-2 col-end-4 text-md text-white ">
                  Steve Jobs
                </div>
                <div className="col-start-2 col-end-5 text-xs text-white ">
                  Sample people message..
                </div>
                <div className="col-start-4 col-end-6 text-xs pt-2">
                  <p className="text-gray-600 pl-11">09.02 p.m.</p>
                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 animate-ping-gray  rounded-full bg-green-600 opacity-50 w-1 ">
                   
                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 "></div>
              </div>
              <div className="grid grid-cols-5 grid-rows-1 grid-flow-col mt-6 border-solid border-b-2 pl-2 ml-3 rounded-lg people2">
                <div className="group">
                  <div className="h-8 grid place-items-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-start-2 col-end-4 text-md text-white ">
                  Tim Cook
                </div>
                <div className="col-start-2 col-end-5 text-xs text-white ">
                  Sample people message..
                </div>
                <div className="col-start-4 col-end-6 text-xs pt-2">
                  <p className="text-gray-600 pl-11">08.01 p.m.</p>
                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 animate-ping-gray rounded-full bg-gray-600 opacity-30 w-1 ">

                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 "></div>
              </div>
              <div className="grid grid-cols-5 grid-rows-1 grid-flow-col mt-6 border-solid border-b-2 pl-2 ml-3 rounded-lg people3">
                <div className="group">
                  <div className="h-8 grid place-items-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-start-2 col-end-4 text-md text-white ">
                  Steve W.
                </div>
                <div className="col-start-2 col-end-5 text-xs text-white ">
                  Sample people message..
                </div>
                <div className="col-start-4 col-end-6 text-xs pt-2">
                  <p className="text-gray-600 pl-11">07.00 p.m.</p>
                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 animate-ping-gray rounded-full bg-gray-600 opacity-30 w-1 ">

                </div>
                <div className="col-start-5 col-end-6 text-md text-white pl-7 "></div>
              </div>
            </div>
          </li>

          {/* RIGHT COLUMN */}
          <li className="col-span-6 bg-gray-700 rounded-lg shadow-xl rr1">
            <div className="h-24">
              <div className="grid grid-cols-7 mt-2 grid-rows-1 grid-flow-col place-items-center pt-2 rounded-lg">
                <div className="group">
                  <div className="h-8 grid place-items-center text-white mt-1 chatboxpic pl-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-start-2 col-end-4 text-lg text-white">
                  Steve Jobs
                </div>
                <div className="col-start-2 col-end-5 text-xs text-white ">
                  Offline - Last seen 09.02 p.m.
                </div>
                {/* 3 SVG  */}
                <div className="col-start-7 col-end-8 pr-6 text-xs flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 pr-2 chatboxphone"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10pr-2 chatboxcamera"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 pr-2 chatboxdots"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </li>
          {/* CHATBOX */}
          <li className="col-span-6 row-span-4 bg-gray-100 rounded-lg shadow-xl chatbox rr2">
            <div className="h-24 mt-6">
              <div class="grid grid-cols-1 gap-2">
                <div>
                  <div className="grid grid-cols-1 col-start-1 col-end-3 mt-4 ml-6 place-items-center rounded-lg border-solid border-2 w-72  float-left stranger">
                  Tincidunt ac auctor id, Curabitur massa eros. 
                  </div>
                  <div class="grid grid-cols-2 col-start-1 col-end-3 mt-1 place-items-center w-72 float-left text-xs pr-12 text-gray-400">09.02 p.m.</div>

                  <div className="grid grid-cols-1 col-start-1 col-end-3 mt-4 ml-6 place-items-center rounded-lg border-solid border-2 w-72  float-left stranger">
                    Curabitur massa eros, tincidunt ac auctor id.
                  </div>
                  <div class="grid grid-cols-2 col-start-1 col-end-3 mt-1 place-items-center w-72 float-left text-xs pr-12 text-gray-400">09.03 p.m.</div>
                </div>

                <div>
                  <div className="grid grid-cols-1 col-start-3 col-end-6 mt-4 ml-6 mr-2 place-items-center  rounded-lg border-solid border-2 w-72 float-right user">
                    Tincidunt ac auctor id, Curabitur massa eros. 
                  </div>
                  <div class="grid grid-cols-1 col-start-1 col-end-2 mt-1 place-items-center w-72 float-right text-xs pl-48 text-gray-400">09.12 p.m.</div>
                  <div className="grid grid-cols-1 col-start-3 col-end-6 mt-2 ml-6 mr-2 place-items-center  rounded-lg border-solid border-2 w-72 float-right user">
                    Curabitur massa eros, tincidunt ac auctor id.
                  </div>
                  <div class="grid grid-cols-1 col-start-1 col-end-2 mt-1 place-items-center w-72 float-right text-xs pl-48 text-gray-400">09.13 p.m.</div>
                </div>
              </div>
            </div>
          </li>

          <li className="row-span-1 col-span-6 bg-gray-700 rounded-lg shadow-xl mr1">
            <div className="h-24 ml-6 grid place-items-center">
              <form className="w-96">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div class="relative searchfield">
                  <div>
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block p-4 pl-10 w-full text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent placeholder-white"
                    placeholder="Type your message..."
                    required
                  />
                </div>
                  </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatBox;
