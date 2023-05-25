<script setup lang="ts">
import chatContact from './chat-contact.vue'
import './chat.css'
</script>

<template>
  <ul className="contacts__list" ref="resizeBox">
    <chat-contact />
    <chat-contact />
    <chat-contact />
    <chat-contact />
    <chat-contact />
    <chat-contact />
    <chat-contact />
    <chat-contact />
  </ul>
</template>
