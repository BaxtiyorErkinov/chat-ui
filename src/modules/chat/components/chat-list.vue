<script setup lang="ts">
import { ref, onMounted } from 'vue'
import chatContact from './chat-contact.vue'
import appIcon from '@/components/app-icon.vue'
import './chat.css'

const resizeBtn = ref<HTMLButtonElement | null>(null)
const resizeBox = ref<HTMLUListElement | null>(null)

var startX: number, startWidth: number

const initDrag = (e) => {
  console.log('initClient', e.clientX)
  startX = e.clientX
  // @ts-ignore
  startWidth =
    document.defaultView &&
    (parseInt(
      document.defaultView.getComputedStyle(resizeBox.value as HTMLUListElement).width,
      10
    ) as number)
  document.documentElement.addEventListener('mousemove', onDrag, false)
  document.documentElement.addEventListener('mouseup', stopDrag, false)
}

const onDrag = (e) => {
  console.log('drag', resizeBox.value)
  if (resizeBox.value?.style) {
    resizeBox.value.style.width = startWidth + e.clientX - startX + 'px'
  }
}

function stopDrag(e) {
  document.documentElement.removeEventListener('mousemove', onDrag, false)
  document.documentElement.removeEventListener('mouseup', stopDrag, false)
}

onMounted(() => {
  console.log(resizeBtn.value)
  if (resizeBtn.value) {
    resizeBtn.value.addEventListener('mousedown', initDrag)
  }
})
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
    <button class="resize__btn" ref="resizeBtn">
      <app-icon name="arrow-icon" />
    </button>
  </ul>
</template>
