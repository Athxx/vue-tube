<template>
  <div class="h-screen flex">
    <div
      class="flex w-1/2 bg-gradient-to-tr from-blue-600 to-purple-700 i justify-around items-center"
    >
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">行空设计</h1>
        <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
      </div>
    </div>
    <div class="flex w-1/2 justify-center items-center bg-white">
      <form class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">欢迎回来!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back !</p>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <input id="" class="pl-2 outline-none border-none text-center" type="text" name="" />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            />
          </svg>
          <input id="" class="pl-2 outline-none border-none text-center" type="text" name="" />
        </div>
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          登入
        </button>
      </form>
    </div>
  </div>
</template>
