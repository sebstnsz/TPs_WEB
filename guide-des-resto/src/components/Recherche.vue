<template>
	<div id="recherche">
		<el-input
			prefix-icon="el-icon-search"
			placeholder="Rechercher un restaurant..." 
			v-on:input="chercherRestaurants" 
			v-model="nomRecherche"
			clearable>
		</el-input>
	</div>
</template>

<script>

export default {

	data() {
		return {
			nomRecherche: ""
		}
	},
	components: { 	// LOCAL COMPONENTS
	},
	methods: {
		chercherRestaurants() {
			this.$emit('rechercherRestaurant', this.nomRecherche);
		}
	}
}
</script>

<style>
</style>