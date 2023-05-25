<script setup lang="ts">
import type { IChatState } from '@/models/IChat'
import appAvatar from '@/components/app-avatar.vue'
const props = defineProps<IChatState>()
</script>

<template>
  <li class="contact__list-item">
    <div class="user__avatar">
      <app-avatar
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
        alt="user"
        variant="sm"
      />
    </div>
    <div class="message__info">
      <div class="sender__info">
        <h3 class="sender">Erkinov Baxtiyor</h3>
        <span class="send__time">12:52</span>
      </div>
      <p class="message">Kredit olishim kerak edi, shartlari haqida t.qwdqdqwdqwdqwdqdqdqdqwdqw</p>
    </div>
  </li>
</template>
