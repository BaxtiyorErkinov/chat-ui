<template>
  <div class="relative h-full overflow-auto w-full">
    <room-header :user="selectedRoom.user" />
    <room-history :room="selectedRoom" :currentUser="chatState.defaultUser" />
    <room-form @sendMess="sendMessage" />
  </div>
</template>

<script setup lang="ts">
import roomHeader from './components/room-header.vue'
import roomHistory from './components/room-history.vue'
import roomForm from './components/room-form.vue'
import { getCurrentTime } from '@/utils/getCurrentTime'
import { useChatState } from './chat.state'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
console.log('render')

const chatState = useChatState()
const route = useRoute()
const selectedRoom = ref(chatState.getSelectedRoomMess(+route.path[1] as number))

watch(
  () => route.path,
  () => {
    selectedRoom.value = chatState.getSelectedRoomMess(+route.path[1] as number)
  },
  { immediate: true }
)

const sendMessage = async (message: string) => {
  if (message.length) {
    const state = {
      message,
      senderId: 1,
      createdAt: getCurrentTime()
    }

    chatState.addMessage(state, +route.path[1] as number)
  }
}
</script>

<style scoped></style>
