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
			//console.log("Recherche de restaurants... " + this.nomRecherche);
			 this.$emit('rechercherRestaurant', this.nomRecherche);
			/*this.page = 0;
			this.getRestaurantsFromServer();*/
		}
	}
}
</script>

<style>
</style>