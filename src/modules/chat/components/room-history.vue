<script setup lang="ts">
import appIcon from '@/components/app-icon.vue'
import type { IChatState } from '@/models/IChat'
import type { IUser } from '@/models/IUser'

interface IHistory {
  room: IChatState
  currentUser: IUser
}

const props = defineProps<IHistory>()
</script>

<template>
  <div class="messages__history">
    <div
      v-for="mess of props.room.chatHistory"
      :key="mess.message"
      class="message__box contact"
      :class="{
        contact: mess.senderId !== props.currentUser.userId,
        me: mess.senderId === props.currentUser.userId
      }"
    >
      <p class="message__box-mess">
        {{ mess.message }}
      </p>
      <div class="message__box-info">
        <span class="date">{{ mess.createdAt }}</span>
        <app-icon name="read-status" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.messages__history {
  @apply p-2 mb-10 flex flex-col h-full overflow-auto;
  height: calc(100vh - 250px);
  overflow-y: scroll;
}

.messages__history {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.messages__history::-webkit-scrollbar {
  display: none;
}

.message__box {
  @apply w-6/12 mt-2 rounded-md p-2 text-sm text-dark-gray font-semibold;
}

.message__box.contact {
  @apply bg-light-gray;
}

.message__box.me {
  @apply bg-light-green ml-auto;
}

.message__box-mess {
}

.message__box-info {
  @apply flex items-center justify-end gap-x-1;
}

.date {
}

.read-status {
  @apply fill-main-green;
}
</style>
