<template>
	<v-btn id="inc-button" @click="$emit('inc')">INCREMENT</v-btn>
</template>

<script>
export default {
	name: 'IncButton'
};
</script>
