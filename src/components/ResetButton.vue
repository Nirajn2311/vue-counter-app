<template>
	<v-btn dark id="reset-button" @click="$emit('reset')">RESET</v-btn>
</template>

<script>
export default {
	name: 'ResetButton'
};
</script>
