<template>
	<div id="table">

		<app-restau-detail 
			:dialogVisible="openDialog"
			:restaurantSelected="restaurantDetails" 
			v-on:fermerPopUpChild="fermerPopUp">
		</app-restau-detail>

		<app-recherche 
			v-on:rechercherRestaurant="onChangeRecherche">
		</app-recherche>

		<el-table
			:data="restaurants"
			border
			@current-change="handleCurrentChange"
			stripe
			 size="small" 
			>
			<el-table-column
				label="Nom"
				prop="name">
			</el-table-column>
			<el-table-column
				label="Cuisine"
				prop="cuisine">
			</el-table-column>
			<el-table-column>
				<template slot-scope="scope">
					<el-tooltip content="Détails" placement="top">
						<el-button 
							size="small"
							icon="el-icon-document"
							circle
							@click="ouvrirPopUp()">
						</el-button>
					</el-tooltip>
				</template>
			</el-table-column>
		</el-table>

		<app-pagination 
			:maxPage="nbPagesMax"
			v-on:changerPage="onChangePage">
		</app-pagination>

	</div>
</template>

<script>

import RestauDetail from './RestauDetail.vue';
import Recherche from './Recherche.vue';
import Pagination from './Pagination.vue';

export default {

	data() {
		return {
			page: 0,
			pagesize: 10,
			recherche: "",

			restaurants: [],
			nbRestaurantsMax: 0,
			nbPagesMax: 0,

			restaurantDetails: [],

			openDialog: false
		}
	},
	components: {   // LOCAL COMPONENTS
		'app-restau-detail': RestauDetail,
		'app-recherche': Recherche,
		'app-pagination': Pagination
	}, 
	created: function(){
	this.getRestaurantsFromServer();

	},
	mounted:function(){

	},
	methods: {
		ouvrirPopUp() {
			this.openDialog = true;
		},
		fermerPopUp(boolean){
			this.openDialog = boolean;
		},
		handleCurrentChange(val) {
			if(val !== null){
				this.restaurantDetails = val;
			}
		},		
		getRestaurantsFromServer(){
			let url = "http://localhost:8080/api/restaurants?page="+this.page+"&pagesize="+this.pagesize;
			if (this.recherche !== ""){
				url += "&name="+this.recherche;
			}
			
			fetch(url)
			.then((responseJSON) => responseJSON.json())
			.then((responseJS) => {
				this.restaurants = responseJS.data;
				this.nbRestaurantsMax = responseJS.count;
				this.nbPagesMax = Math.floor(this.nbRestaurantsMax/this.pagesize);
				if (this.nbRestaurantsMax%this.pagesize == 0)
					this.nbPagesMax--;
			});
		},

		onChangePage(newPage){
			this.page = newPage;
			this.getRestaurantsFromServer();
		},

		onChangeRecherche(newRecherche){
			this.page = 0;
			this.recherche = newRecherche;
			this.getRestaurantsFromServer();
		}

	}
 }
</script>

<style>
</style>
