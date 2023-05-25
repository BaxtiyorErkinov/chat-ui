<template>
  <div
    class="rounded-full outline-none"
    :class="{ md: props.variant === 'md', lg: props.variant === 'lg', sm: props.variant === 'sm' }"
  >
    <img
      :src="props.src"
      :alt="props.alt"
      :width="variants[variant]"
      :height="variants[props.variant]"
      class="w-full h-full rounded-full bg-contain"
    />
  </div>
</template>

<script setup lang="ts">
interface IAvatar {
  src: string
  alt: string
  variant: 'sm' | 'md' | 'lg'
}

const variants = {
  lg: '100',
  md: '80',
  sm: '50'
}

const props = defineProps<IAvatar>()
</script>

<style scoped>
.lg {
  width: 100px;
  height: 100px;
}

.md {
  width: 80px;
  height: 80px;
}

.sm {
  width: 60px;
  height: 60px;
}
</style>
