<template>
	<div id="user">
		<h3>Blog</h3>
		<p>Lien : {{blog}}</p>
	</div>
</template>

<script>

export default {
	data() {
		return {
			blog : 'test' 
		}
	}
}
</script>

<style scoped>
	p {
		font-style: italic;
		color:red; 
	}
</style>