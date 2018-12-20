<template>
    <div id="table">
        <app-popup 
        :dialogVisible="openDialog"
        :restaurantSelected="restaurantDetails" v-on:fermerPopUpChild="fermerPopUp"></app-popup>
        <app-recherche></app-recherche>

        <el-table
            :data="restaurants"
            border
            @current-change="handleCurrentChange"
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
                            @click="ouvrirPopUp()">
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

       <app-pagination v-on:changePage="onChildClick"></app-pagination>

    </div>
</template>

<script>

import Popup from './Popup.vue';
import Recherche from './Recherche.vue';
import Pagination from './Pagination.vue';

export default {

    data() {
        return {
            restaurants: [],
            restaurantDetails: [],
            openDialog :false,
            nbRestaurantsMax : 0,
            nbPagesMax:0,
        }
    },
    components: {   // LOCAL COMPONENTS
        'app-popup': Popup,
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
                console.log("methode : ouvrirPopUp");
        },
        fermerPopUp(boolean){
            this.openDialog = boolean;
            console.log("methode : fermerPopUp");
        },
        supprimerRestaurant(r) {
            console.log("Supprimer le restaurant");
        },
        handleCurrentChange(val) {
            this.restaurantDetails = val;
        },
        onChildClick (value) {
            console.log("nb :" + value);
        },			
        getRestaurantsFromServer(){
                let page = 0;
                let pagesize = 10;

				let url = "http://localhost:8080/api/restaurants?page="+page+"&pagesize="+pagesize;
                //if (this.nomRecherche !== "") url += "&name="+this.nomRecherche;
                
				console.log("Get restaurants from "+url);

				fetch(url)
				.then((responseJSON) => responseJSON.json())
				.then((responseJS) => {
					this.restaurants = responseJS.data;
					this.nbRestaurantsMax = responseJS.count;
					this.nbPagesMax = Math.floor(this.nbRestaurantsMax/pagesize);
					if (this.nbRestaurantsMax%pagesize == 0)
						this.nbPagesMax--;
				});
			},
}
 
    }
</script>

<style>
</style>
