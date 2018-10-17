<template>
  <div id="app">
	<div id="count">Current Count: {{ count }}</div>
	<div id="button">
		<button v-on:click="inc" id="inc">INCREMENT</button>
		<button v-on:click="dec" id="dec">DECREMENT</button>
		<button v-on:click="reset" id="reset">RESET</button>
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
	justify-content: space-between;
}
</style>
