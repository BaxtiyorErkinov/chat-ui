<script setup lang="ts">
// @ts-ignore
import { RouterView } from 'vue-router'
import MainHeader from '@/components/main-header.vue'
import LeftSidebar from './views/left-sidebar.vue'
</script>

<template>
  <div class="flex flex-col">
    <MainHeader />
    <main class="flex">
      <LeftSidebar />
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
