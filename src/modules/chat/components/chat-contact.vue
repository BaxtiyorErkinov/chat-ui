<template>
  <li class="contact__list-item" @click="goToRoom">
    <div class="user__avatar">
      <app-avatar
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
        alt="user"
        variant="sm"
      />
    </div>
    <div class="message__info">
      <div class="sender__info">
        <h3 class="sender">{{ props.chat.user.fullName }}</h3>
        <span class="send__time">{{ getLastSeenTime() }}</span>
      </div>
      <p class="message">{{ getLastMess() }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { IChatState } from '@/models/IChat'
import { useChatState } from '../chat.state'

import appAvatar from '@/components/app-avatar.vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ chat: IChatState }>()
const chatState = useChatState()
const router = useRouter()

const getLastSeenTime = () => {
  const {
    chat: { chatHistory }
  } = props
  return chatHistory[chatHistory.length - 1].createdAt
}

const getLastMess = () => {
  const {
    chat: { chatHistory }
  } = props
  return chatHistory[chatHistory.length - 1].message
}

const goToRoom = () => {
  chatState.setSelectedRoom(props.chat.roomID)
  router.push(`/${props.chat.roomID}`)
}
</script>
