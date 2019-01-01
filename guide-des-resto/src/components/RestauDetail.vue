<template>
	<div id="restau-detail">
		<el-dialog
			:title="restaurantSelected.name"
			:visible.sync="dialogVisible"
			width="60%"
			:before-close="fermerPopUp"
			v-on:open="onOpenPopup">

			<el-tabs v-model="activeName">
				<el-tab-pane name="info">
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
									:max="2"
									disabled
									show-score
									:score-template="scope.row.gradeABC">
								</el-rate>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>

				<el-tab-pane name="map">
					<span slot="label"><i class="el-icon-location-outline"></i> Map</span>
					<div ref="map" v-bind:style="{ width: '100%', height: '400px' }"></div>
				</el-tab-pane>

				<el-tab-pane name="menu">
					<span slot="label"><i class="el-icon-tickets"></i> Menu</span>

					<app-menu-restaurant :menuRestau="menu"></app-menu-restaurant>

				</el-tab-pane>

			</el-tabs>

		</el-dialog>
	</div>
</template>

<script>

import TableVue from './Table.vue';
import PaginationVue from './Pagination.vue';
import MenuRestaurant from './MenuRestaurant.vue';

var Menu = require('../data.js');

export default {
	data() {
		return {
			activeName: 'info',
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
			menu: {
				entrees: [],
				plats: [],
				desserts: []
			}
		};
	},
	components:{
		'app-menu-restaurant': MenuRestaurant
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

			if(this.$refs.map.childNodes.length > 0){
				for(let i = 0; i<this.$refs.map.childNodes.length;i++ ){
					this.$refs.map.removeChild(this.$refs.map.childNodes[i]);
				}
				
			}

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
			this.$emit('fermerPopUpChild', false);
			this.activeName = 'first';
		},
		onOpenPopup(){
			this.getRestauDetail();
			// générer map ?
			this.menu = Menu.genererMenu(3);
		},
		getRestauDetail(){
			let restauDetail = [];
			let gradeData = [];

			restauDetail.push({
				name: "Cuisine",
				value: (this.restaurantSelected.cuisine) ? this.restaurantSelected.cuisine : ""
			});
			restauDetail.push({
				name: "Quartier",
				value: (this.restaurantSelected.borough) ? this.restaurantSelected.borough : ""
			});
			let adresse = this.restaurantSelected.address;
			if(adresse){
				let adresseValue = "";
				if(adresse.building){
					adresseValue += adresse.building + " ";
				}
				if(adresse.street){
					adresseValue += adresse.street;
					if(adresse.zipcode){
						adresseValue += ", " + adresse.zipcode;
					}
				} else if(adresse.zipcode){
					adresseValue += adresse.zipcode;
				}
				restauDetail.push({
					name: "Adresse",
					value: adresseValue
				});
			}

			if(this.restaurantSelected.grades.length > 0){
				let graduation = this.restaurantSelected.grades;
				for(let g of graduation){
					let gradeInt = 0;
					try {
						switch(g.grade){
							case 'A':
								gradeInt = 2;
								break;
							case 'B':
								gradeInt = 1;
								break;
						};
					}
					catch(e) {}
					gradeData.push({
						date: (g.date) ? g.date.slice(0,10) : "No date",
						grade: gradeInt,
						gradeABC: (g.grade) ? g.grade : "No grade",
						score: (g.score) ? g.score : "No score"
					});
				}
			}

			this.infoData = restauDetail;
			this.gradeData = gradeData;
		}
	}
  };
</script>

<style>
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