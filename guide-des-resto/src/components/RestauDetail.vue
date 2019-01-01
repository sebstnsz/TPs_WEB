<template>
	<div id="restau-detail">
		<el-dialog
			:title="restaurantSelected.name"
			:visible.sync="dialogVisible"
			width="60%"
			:before-close="fermerPopUp"
			v-on:open="onOpenPopup">

			<el-tabs v-model="activeName">
				<el-tab-pane name="first">
					<span slot="label"><i class="el-icon-info"></i> Info</span>

					<el-table :data="infoData" style="width: 100%">
						<el-table-column prop="name">
						</el-table-column>
						<el-table-column prop="value">
						</el-table-column>
					</el-table>

					<el-table 
						label="Notation"
						:data="gradeData" 
						style="width: 100%">
						<el-table-column 
							label="Date"
							prop="date">
						</el-table-column>
						<el-table-column 
							label="Note">
							<template slot-scope="scope">
								<el-rate
									v-model="scope.row.grade"
									:max="3"
									disabled
									show-score
									:score-template="scope.row.gradeABC">
								</el-rate>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>

				<el-tab-pane name="second">
					<span slot="label"><i class="el-icon-location-outline"></i> Map</span>
					<!--<div id="map" ref="map"></div>-->
					<div ref="map" v-bind:style="{ width: '100%', height: '400px' }"></div>
				</el-tab-pane>

				<el-tab-pane name="third">
					<span slot="label"><i class="el-icon-tickets"></i> Menu</span>

					<h3 class="menuCategory">Entrées</h3>
					<el-row type="flex">
						<el-col :span="5" v-for="entree, index in menu.entrees">
							<el-card :body-style="cardBodyStyle" shadow="hover">
								<img :src="entree.image" class="image">
								<div class="cardBody">
									<span class="cardName">{{entree.nom}}</span>
									<div class="cardDescription bottom clearfix">{{entree.description}}</div>
								</div>
								<el-row class="cardFoot" type="flex" justify="space-between">
									<span class="prix">${{entree.prix}}</span>
									<el-button type="text" class="button" icon="el-icon-circle-plus">Commander</el-button>
								</el-row>
							</el-card>
						</el-col>
					</el-row>

					<h3 class="menuCategory">Plats</h3>
					<el-row type="flex">
						<el-col :span="5" v-for="plat, index in menu.plats">
							<el-card :body-style="cardBodyStyle" shadow="hover">
								<img :src="plat.image" class="image">
								<div class="cardBody">
									<span class="cardName">{{plat.nom}}</span>
									<div class="cardDescription bottom clearfix">{{plat.description}}</div>
								</div>
								<el-row class="cardFoot" type="flex" justify="space-between">
									<span class="prix">${{plat.prix}}</span>
									<el-button type="text" class="button" icon="el-icon-circle-plus">Commander</el-button>
								</el-row>
							</el-card>
						</el-col>
					</el-row>

					<h3 class="menuCategory">Desserts</h3>
					<el-row type="flex">
						<el-col :span="5" v-for="dessert, index in menu.desserts">
							<el-card :body-style="cardBodyStyle" shadow="hover">
								<img :src="dessert.image" class="image">
								<div class="cardBody">
									<span class="cardName">{{dessert.nom}}</span>
									<div class="cardDescription bottom clearfix">{{dessert.description}}</div>
								</div>
								<el-row class="cardFoot" type="flex" justify="space-between">
									<span class="prix">${{dessert.prix}}</span>
									<el-button type="text" class="button" icon="el-icon-circle-plus">Commander</el-button>
								</el-row>
							</el-card>
						</el-col>
					</el-row>

				</el-tab-pane>

			</el-tabs>

		</el-dialog>
	</div>
</template>

<script>

import TableVue from './Table.vue';
import PaginationVue from './Pagination.vue';

var Menu = require('../data.js');

export default {
	data() {
		return {
			activeName: 'first',
			infoData: [{
				name:"",
				data:""
			}],
			gradeData: [{
				date:"",
				grade:0,
				gradeABC: "",
				score:0
			}],
			map: {},
			platform: {},
			ui:{},
			cardBodyStyle: { 
				padding: '0px', 
				margin: '0px' 
			},
			menu: {
				entrees: [],
				plats: [],
				desserts: []
			}
		};
	},
	props:{
		restaurantSelected: {
			default: {cuisine: "", name: ""} 
		},
		dialogVisible : {
			default : false
		}
	},
	created() {
		this.platform = new H.service.Platform({
			"app_id": 'dSC9eIavpxUDab6oC9Ci',
			"app_code": '3FXAIkvxH1y6tyhdbBLfAg'
		});
	},
	updated(){
		if(this.dialogVisible){

			if(this.restaurantSelected.address != null){
				let lat = this.restaurantSelected.address.coord[1];
				let lng = this.restaurantSelected.address.coord[0];
				let defaultLayers =  this.platform.createDefaultLayers();

				this.map = new H.Map(
					this.$refs.map,
					defaultLayers.normal.map,
					{
						zoom: 14,
						center: { lng: lng, lat: lat }
					}
				);
				let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
				this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
				this.map.addObject(new H.map.Marker({lat: lat , lng: lng }));
			}
			else{
				let errorMsg = document.createElement("p").appendChild(document.createTextNode("Map cannot be loaded because no address is informed"));
				this.$refs.map.appendChild(errorMsg);
				this.$refs.map.style.color = "red";
			}
		}
	},
	methods: {
		fermerPopUp(){
			// dialogVisible = false
			if(this.$refs.map.childNodes.length > 0){
				this.$refs.map.removeChild(this.$refs.map.childNodes[0]);
			}
			this.$emit('fermerPopUpChild', false);
			this.activeName = 'first';
		},
		onOpenPopup(){
			let adresse = this.restaurantSelected.address;
			let graduation = this.restaurantSelected.grades;
			this.infoData = [
				{
					name: "Cuisine",
					value: this.restaurantSelected.cuisine
				},{
					name: "Quartier",
					value: this.restaurantSelected.borough
				},{
					name: "Adresse",
					value: adresse.building + " " + adresse.street + ", " + adresse.zipcode
				}
			];
			this.gradeData = [];
			for(let g of graduation){
				let gradeInt = 0;
				switch(g.grade){
					case 'A':
						gradeInt = 3;
						break;
					case 'B':
						gradeInt = 1.5;
						break;
					default:
						gradeInt = 0;
				};
				this.gradeData.push({
					date: g.date.slice(0,10),
					grade: gradeInt,
					gradeABC: g.grade,
					score: g.score
				});
			}

			this.menu = Menu.genererMenu(3);
		}
	}
  };
</script>

<style>
#map { 
	width: '100%';
	height: '500px';
}

.menuCategory {
	text-align: left;
}

.image {
	width: 100%;
	display: block;
}

.cardBody {
	padding: 5px;
	height: 100px;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}

.cardDescription {
	font-size: 13px;
	color: #999;
	text-align: left;
	margin-bottom: 15px;
}

.cardFoot {
	padding: 5px;
	float: bottom;
}

.prix {
	color: green;
}

.button {
	padding: 0;
}
</style>