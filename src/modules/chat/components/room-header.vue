<!-- eslint-disable vue/no-parsing-error -->
<template>
	<div class="room__header">
		<h1 class="room__username">{{props.user.fullName}}</h1>
		<p class="room__userstatus">
			<div class="online__status"></div>
			{{randomStatus}}
		</p>
	</div>
</template>

<script setup lang="ts">
import type { IUser,IUserStatus } from '@/models/IUser';

const randomStatus:IUserStatus = 'online'
const props = defineProps<{user: IUser}>()

</script>

<style scoped>
	.room__header {
		@apply top-0 left-0 w-full h-[60px] p-4 bg-light-gray;
		position: sticky;
	}
	.room__username {
		@apply text-sm font-semibold text-dark-gray font-sans
	}
	.room__userstatus {
		@apply text-sm text-gray-300 font-sans flex items-center gap-x-1
	}
	.room__userstatus .online__status {
		@apply w-[10px] h-[10px] bg-green-400 rounded-full;
	}
</style>