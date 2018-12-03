<template>
	<div id="user">
		<h3>Compte</h3>
		<p>Solde de votre compte :  {{soldeCompte}}</p>
	</div>
</template>

<script>

export default {
	data() {
		return {
			soldeCompte : '$15' 
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