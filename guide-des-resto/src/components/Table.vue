<template>
	<div id="table">
		<app-popup></app-popup>
		<app-recherche></app-recherche>

		<el-table
			:data="restaurants"
			border
			stripe>
			<el-table-column
				label="Nom"
				prop="name">
			</el-table-column>
			<el-table-column
				label="Cuisine"
				prop="cuisine">
			</el-table-column>
			<el-table-column
				label="Actions">
				<template slot-scope="scope">
					<el-tooltip content="Modifier" placement="top">
						<el-button 
							size="small"
							icon="el-icon-edit"
							circle
							@click="ouvrirPopUp(r)">
						</el-button>
					</el-tooltip>
					<el-tooltip content="Supprimer" placement="top">
						<el-button 
							size="small"
							icon="el-icon-close"
							circle
							@click="supprimerRestaurant(r)">
						</el-button>
					</el-tooltip>
				</template>
			</el-table-column>
		</el-table>

		<app-pagination></app-pagination>
	</div>
</template>

<script>

import Popup from './Popup.vue';
import Recherche from './Recherche.vue';
import Pagination from './Pagination.vue';

export default {

	data() {
		return {
			restaurants: [
				{
					name: "Baïla Pizza",
					cuisine: "Pizza/Italienne"
				}, {
					name: "Memphis Coffee",
					cuisine: "Burgers/Américaine"
				}, {
					name: "Sushi Shop",
					cuisine: "Japonaise"
				}, {
					name: "Big Fernand",
					cuisine: "Burgers"
				}
			]
		}
	},
	components: { 	// LOCAL COMPONENTS
		'app-popup': Popup,
		'app-recherche': Recherche,
		'app-pagination': Pagination
	}, 
	methods: {
		ouvrirPopUp(r) {
			console.log("Modifier le restaurant");
		},
		supprimerRestaurant(r) {
			console.log("Supprimer le restaurant");
		}
	}
}
</script>

<style>
</style>