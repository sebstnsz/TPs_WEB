<template>
	<div id="user">
		<h3>Info Utilisateur</h3>
		<p>Mon nom est {{adresse}}</p>
	</div>
</template>

<script>

export default {
	data() {
		return {
			adresse : 'titi' 
		}
	}
}
</script>

<style scoped>
	p {
		font-style: italic;
		color:green; 
	}
</style>