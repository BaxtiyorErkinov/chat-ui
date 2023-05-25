<script setup lang="ts">
	import appIcon from '@/components/app-icon.vue'
</script>

<template>
	<form class="message__form">
		<input type="text" class="message__input" placeholder="Message"/>
		<button type="submit"><app-icon name="send-icon"/></button>
	</form>
</template>

<style scoped>
	.message__form {
		@apply w-full h-[45px] flex border-2 rounded-lg border-gray-200 p-2 items-center justify-center
	}

	.message__input {
		@apply w-full outline-none px-2 text-dark-gray text-sm font-semibold;
	}

	.message__form button {
		@apply w-[36px] h-[36px] bg-main-green flex justify-center items-center rounded-md;
	}
</style>