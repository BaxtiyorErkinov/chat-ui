<script setup lang="ts">
import chatList from './components/chat-list.vue'
</script>

<template>
  <div class="chat__wrapper">
    <div class="all__contacts">
      <input type="text" class="contacts__filter" placeholder="Search" />
      <chat-list />
    </div>
    <div class="chat__room">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.chat__wrapper {
  @apply w-full flex;
}

.contacts__filter {
  width: 100%;
  @apply h-[45px] px-4 border-2 border-light-gray rounded-md outline-none text-sm font-semibold text-dark-gray;
}

.all__contacts {
  @apply w-6/12 p-2 border-r-2 border-light-gray;
}

.chat__room {
  @apply w-full p-2;
}
</style>
