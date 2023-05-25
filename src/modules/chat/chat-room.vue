<script setup lang="ts">
  import roomHeader from './components/room-header.vue'
  import roomHistory from './components/room-history.vue'
  import roomForm from './components/room-form.vue'
</script>

<template>
  <div class="relative">
    <room-header />
    <room-history />
    <room-form />
  </div>
</template>

<style scoped>
</style>
