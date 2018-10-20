<template>
  <div id="app">
	<div id="count">Current Count: {{ count }}</div>
	<div id="button">
		<v-btn @click="inc" id="inc">INCREMENT</v-btn>
		<v-btn @click="dec" id="dec">DECREMENT</v-btn>
		<v-btn dark @click="reset" id="reset">RESET</v-btn>
	</div>
	<div id="github">
		<v-btn icon large href="https://github.com/Nirajn2311/vue-counter-app">
			<font-awesome-icon size="2x" :icon="['fab','github']" />
		</v-btn>
	</div>
  </div>
</template>

<script>
export default {
	name: 'app',
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
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 10px;
	align-items: center;
}

#button {
	display: grid;
	grid-template-columns: repeat(3, 12%);
	grid-column-gap: 10px;
	justify-content: center;
}
</style>
