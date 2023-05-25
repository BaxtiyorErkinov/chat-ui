<script setup lang="ts">
import chatList from './components/chat-list.vue';
import { ref, onMounted } from 'vue'
import appIcon from '@/components/app-icon.vue'

const resizeBtn = ref<HTMLButtonElement | null>(null)
const resizeBox = ref<HTMLDivElement | null>(null)

var startX: number, startWidth: number

const initDrag = (e) => {
  startX = e.clientX
  // @ts-ignore
  startWidth =
    document.defaultView &&
    (parseInt(
      document.defaultView.getComputedStyle(resizeBox.value as HTMLDivElement).width,
      10
    ) as number)
  document.documentElement.addEventListener('mousemove', onDrag, false)
  document.documentElement.addEventListener('mouseup', stopDrag, false)
}

const onDrag = (e) => {
  console.log('drag', resizeBox.value)
  console.log("initialWidth",resizeBox.value.clientWidth)
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
  <div class="chat__wrapper">
    <div class="all__contacts" ref="resizeBox">
      <input type="text" class="contacts__filter" placeholder="Search" />
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

<style scoped>
.chat__wrapper {
  @apply w-full flex relative;
}

.contacts__filter {
  width: 100%;
  @apply h-[45px] px-4 border-2 border-light-gray rounded-md outline-none text-sm font-semibold text-dark-gray;
}

.all__contacts {
  @apply w-6/12 h-full p-4 border-r-2 border-light-gray relative;
}

.chat__room {
  @apply w-full p-2 relative;
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
