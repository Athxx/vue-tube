<template>
  <div class="flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100">
    <Header />
    <div class="flex flex-1">
      <Aside />
      <Body />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './header.vue'
import Aside from './aside.vue'
import Body from './body.vue'
</script>

<style></style>
