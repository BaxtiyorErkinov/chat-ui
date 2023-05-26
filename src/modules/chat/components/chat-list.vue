<template>
  <ul className="contacts__list" ref="resizeBox">
    <chat-contact v-for="contact of chatState.getAllChat" :chat="contact" :key="contact.roomID" />
  </ul>
</template>

<script setup lang="ts">
import { useChatState } from '../chat.state'

import chatContact from './chat-contact.vue'

import './chat.css'

const chatState = useChatState()
</script>
