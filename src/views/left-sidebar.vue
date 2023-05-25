<script setup lang="ts">
import appAvatar from '@/components/app-avatar.vue'
import appIcon from '@/components/app-icon.vue'

const links = [
  {
    title: 'Home',
    icon: 'home-icon',
    url: '/'
  },
  {
    title: 'Chat',
    icon: 'chat-icon',
    url: '/'
  },
  {
    title: 'settings',
    icon: 'settings-icon',
    url: '/'
  }
]
</script>

<template>
  <div
    class="w-2/12 h-[calc(100vh-80px)] flex flex-col items-center justify-between py-6 border-r-2 border-light-gray"
  >
    <div class="flex flex-col justify-center items-center gap-y-1">
      <app-avatar
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
        alt="user"
        variant="lg"
      />
      <h3 class="font-sans font-semibold text-dark-gray text-sm">Erkinov Baxtiyor</h3>
    </div>
    <ul class="m-0 p-0 w-full mt-5 px-4">
      <li
        v-for="link in links"
        :key="link.title"
        class="w-full flex items-center h-[40px] cursor-pointer text-dark-gray hover:bg-slate-100 rounded-md mt-2"
      >
        <div class="flex items-center px-8 capitalize">
          <app-icon :name="link.icon" class="mr-5" />
          <span class="text-sm font-semibold">{{ link.title }}</span>
        </div>
      </li>
    </ul>
    <button
      class="h-10 mt-auto pl-6 w-full flex items-center rounded-md font-semibold text-dark-gray"
    >
      Logout
    </button>
  </div>
</template>
