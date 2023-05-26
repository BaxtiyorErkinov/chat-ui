<template>
  <div class="chat__wrapper">
    <div class="all__contacts" ref="resizeBox">
      <input type="text" class="contacts__filter" placeholder="Search" v-model="chatState.query" />
      <chat-list />
    </div>
    <div class="chat__room">
      <button class="resize__btn" ref="resizeBtn">
        <app-icon name="arrow-icon" />
      </button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import chatList from './components/chat-list.vue'
import { ref, onMounted } from 'vue'
import appIcon from '@/components/app-icon.vue'
import { useChatState } from './chat.state'

const chatState = useChatState()

const resizeBtn = ref<HTMLButtonElement | null>(null)
const resizeBox = ref<HTMLDivElement | null>(null)

var startX: number, startWidth: number

const initDrag = (e: MouseEvent): void => {
  if (resizeBox.value) {
    startX = e.clientX
    startWidth = resizeBox.value.getBoundingClientRect().width
    document.documentElement.addEventListener('mousemove', onDrag, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
  }
}

const onDrag = (e: MouseEvent) => {
  if (resizeBox.value?.style) {
    resizeBox.value.style.width = startWidth + e.clientX - startX + 'px'
  }
}

function stopDrag() {
  document.documentElement.removeEventListener('mousemove', onDrag, false)
  document.documentElement.removeEventListener('mouseup', stopDrag, false)
}

onMounted(() => {
  if (resizeBtn.value) {
    resizeBtn.value.addEventListener('mousedown', initDrag)
  }
})
</script>

<style scoped>
.chat__wrapper {
  @apply w-full flex relative;
}

.contacts__filter {
  width: 100%;
  @apply h-[45px] px-4 border-2 border-light-gray rounded-md outline-none text-sm font-semibold text-dark-gray;
}

.all__contacts {
  @apply w-4/12 h-full p-4 border-r-2 border-light-gray relative overflow-auto;
}

.all__contacts {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.all__contacts::-webkit-scrollbar {
  display: none;
}

.chat__room {
  @apply flex-1 w-full h-full p-2 relative;
}

.resize__btn {
  position: absolute;
  width: 20px;
  top: 50%;
  left: -10px;
  height: 40px;
  background: #fff;
  transform: translateY(-100%);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: block;
}
</style>
