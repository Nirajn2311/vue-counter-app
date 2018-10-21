<template>
  <div id="app">
	<div id="count">Current Count: {{ count }}</div>
	<div id="button">
		<inc-button @inc="inc" />
		<dec-button @dec="dec" />
		<reset-button @reset="reset" />
	</div>
	<div id="github">
		<v-btn icon large href="https://github.com/Nirajn2311/vue-counter-app">
			<font-awesome-icon size="2x" :icon="['fab','github']" />
		</v-btn>
	</div>
  </div>
</template>

<script>
import IncButton from './components/IncButton.vue';
import DecButton from './components/DecButton.vue';
import ResetButton from './components/ResetButton.vue';

export default {
	name: 'app',
	components: {
		IncButton,
		DecButton,
		ResetButton
	},
	data: function() {
		return {
			count: 0
		};
	},
	methods: {
		inc: function() {
			this.count++;
		},
		dec: function() {
			this.count--;
		},
		reset: function() {
			this.count = 0;
		}
	}
};
</script>

<style>
#app {
	font-family: Fira Code;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: grid;
	margin-top: 60px;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 10px;
	align-items: center;
	font-size: 30px;
}

#button {
	display: grid;
	grid-template-columns: repeat(3, 12%);
	grid-column-gap: 10px;
	justify-content: center;
}
</style>
