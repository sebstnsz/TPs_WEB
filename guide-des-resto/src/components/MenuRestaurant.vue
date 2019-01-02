<template>
	<div id="menu-restaurant">

<el-row>
  <el-col :span="15">
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item title="Entrées" name="entrees">
		<app-entree-menu :entrees="menuRestau.entrees" v-on:ajoutEntreeCommande="ajoutDansLaCommande"></app-entree-menu>
			</el-collapse-item>
			<el-collapse-item title="Plats" name="plats">
				<app-plat-menu :plats="menuRestau.plats" v-on:ajoutPlatCommande="ajoutDansLaCommande"></app-plat-menu>
			</el-collapse-item>
			<el-collapse-item title="Desserts" name="desserts">
				<app-dessert-menu :desserts="menuRestau.desserts" v-on:ajoutDessertCommande="ajoutDansLaCommande"></app-dessert-menu>
			</el-collapse-item>
		</el-collapse>
  </el-col>
  <el-col :span="8">
	  
      <el-table
      :data="commande" v-if="commande.length > 0" size="small" fit>
      <el-table-column
        label="Produits" 
		width="160">
		<template slot-scope="scope">
				{{scope.row.obj.nom}}
			</template>

      </el-table-column>
	      <el-table-column
	 width="50"
	  >
	  	<template slot-scope="scope">
				x{{scope.row.quant}}
			</template>

      </el-table-column>
	   <el-table-column
        label="Prix"
		width="70">
			<template slot-scope="scope">
				${{scope.row.obj.prix * scope.row.quant}}
			</template>
      </el-table-column>

	   <el-table-column
        width="25">
			      <template slot-scope="scope">
					  <el-tooltip content="Supprimer" placement="top">
        <el-button
          @click="removeOne(scope.$index)"
          type="text"
          size="small"
		  icon="el-icon-remove"
		  ></el-button>
		  </el-tooltip>
      </template>
 
      </el-table-column>
    </el-table>
	<br>
	<el-button
	@click="payerLaCommande"
          type="primary"
          size="medium">PAYER ${{this.getPrixTotalCommande()}}</el-button>
  </el-col>
</el-row>





	</div>
</template>

<script>

import MenuEntree from './MenuEntree.vue';
import MenuPlat from './MenuPlat.vue';
import MenuDessert from './MenuDessert.vue';

export default {
	data() {
		return {
			activeName: "",
			commande : [],
			nomRestaurantCommande : "",
		}
	},
	props: {
		menuRestau: {
			default: {
				entrees: [], 
				plats: [], 
				desserts: []
			} 
		},
		nomRestaurant :"",
	},
	components: {
		'app-entree-menu': MenuEntree,
		'app-plat-menu': MenuPlat,
		'app-dessert-menu': MenuDessert
	},
	updated(){
		if(this.nomRestaurant !== this.nomRestaurantCommande){
			this.commande = [];
			this.nomRestaurantCommande = this.nomRestaurant;
		}
	},
	methods : {
		ajoutDansLaCommande(objet){
			this.nomRestaurantCommande = this.nomRestaurant;
			if(this.getPlatCommande().includes(objet)){
				this.commande[this.getPlatCommande().indexOf(objet)].quant++;
			}else{
				this.commande.push({obj:objet,quant:1});
			}
		},
		getPlatCommande(){
			let res = [];
			this.commande.forEach(function(element){
				res.push(element.obj);
			})
			return res;
		},
		removeOne(indexOfObject){
			if(this.commande[indexOfObject].quant === 1){
				this.commande.splice(indexOfObject,1);
			}else{
				this.commande[indexOfObject].quant--;
			}
		},
		getPrixTotalCommande(){
			let res = 0;
			this.commande.forEach(function (element){
				res += (element.obj.prix * element.quant);
			});
			return res;
		},
		payerLaCommande(){
			this.commande = [];
			this.$emit('closeDialogPayerSucces', false);
		}
	}
}

</script>

<style>

.image {
	width: 100%;
	height: 150px;
	display: block;
}

.cardName {
	height: 2em;
}

.cardBody {
	padding: 5px;
}

.cardDescription {
	font-size: 12px;
	color: #999;
	text-align: left;
	height: 4em;
}

.cardFoot {
	padding: 5px;
	float: bottom;
}

.prix {
	color: green;
}

.commandeButton {
	padding: 0;
}
</style>