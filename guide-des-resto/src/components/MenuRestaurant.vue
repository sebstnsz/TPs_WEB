<template>
	<div id="menu-restaurant">

		<el-collapse v-model="activeName" accordion>
			<el-collapse-item title="Entrées" name="entrees">
				<app-entree-menu :entrees="menuRestau.entrees"></app-entree-menu>
			</el-collapse-item>
			<el-collapse-item title="Plats" name="plats">
				<app-plat-menu :plats="menuRestau.plats"></app-plat-menu>
			</el-collapse-item>
			<el-collapse-item title="Desserts" name="desserts">
				<app-dessert-menu :desserts="menuRestau.desserts"></app-dessert-menu>
			</el-collapse-item>
		</el-collapse>

	</div>
</template>

<script>

import MenuEntree from './MenuEntree.vue';
import MenuPlat from './MenuPlat.vue';
import MenuDessert from './MenuDessert.vue';

export default {
	data() {
		return {
			activeName: ""
		}
	},
	props: {
		menuRestau: {
			default: {
				entrees: [], 
				plats: [], 
				desserts: []
			} 
		}
	},
	components: {
		'app-entree-menu': MenuEntree,
		'app-plat-menu': MenuPlat,
		'app-dessert-menu': MenuDessert
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