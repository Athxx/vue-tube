<template>
  <div
    class="app-category-filter-bar sticky top-16 z-20 flex min-h-[64px] w-full overflow-hidden border-b border-light-400 bg-light-100 px-4 py-4 dark:border-dark-300 dark:bg-dark-100 sm:top-[70px] sm:min-h-[70px] sm:px-5 sm:py-5 md:px-6 lg:px-7 3xl:px-8"
  >
    <button
      title="Prev"
      class="absolute top-1/2 left-2 z-[1] -mt-3 flex h-6 w-6 items-center justify-start rounded-full text-dark-800 before:pointer-events-none before:absolute before:-top-2 before:left-1 before:-z-[1] before:block before:h-9 before:w-9 before:bg-gradient-to-r before:from-light-100 before:via-light-100 before:content-[''] hover:text-dark focus:text-dark dark:before:from-dark-100 dark:before:via-dark-100 dark:hover:text-light dark:focus:text-light sm:left-3 md:left-4 lg:left-6 opacity-0 invisible"
    >
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] w-[18px]">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
    <div class="-mb-4 flex items-start overflow-hidden">
      <div class="-mb-7 flex w-full gap-3 overflow-x-auto scroll-smooth pb-7">
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-dark-100 bg-dark-100 text-light-100 transition-opacity duration-200 hover:opacity-90 focus:opacity-90 dark:border-light dark:bg-light dark:text-dark-100"
        >
          All
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Free
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Joomla
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Bootstrap
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          3D Assets
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Mobile App
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Icon Sets
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Illustrations
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Wireframe Kits
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          CMS
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          WordPress Theme
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          WordPress Plugin
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          React
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          HTML
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          PHP Script
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          UI templates
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Angular
        </button>
        <button
          class="h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light"
        >
          Shoppify
        </button>
      </div>
    </div>
    <button
      title="Next"
      class="absolute top-1/2 right-2 z-[1] -mt-3 flex h-6 w-6 items-center justify-end rounded-full text-dark-800 after:pointer-events-none after:absolute after:-top-2 after:right-1 after:-z-[1] after:block after:h-9 after:w-9 after:bg-gradient-to-l after:from-light-100 after:via-light-100 after:content-[''] hover:text-dark focus:text-dark dark:after:from-dark-100 dark:after:via-dark-100 dark:hover:text-light dark:focus:text-light sm:right-3 md:right-4 lg:right-6"
    >
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] w-[18px]">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
