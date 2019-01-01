<template>
	<div id="menu-restaurant">

		<h3 class="menuCategory">Entrées</h3>
		<app-entree-menu :entrees="menuRestau.entrees"></app-entree-menu>

		<h3 class="menuCategory">Plats</h3>
		<app-plat-menu :plats="menuRestau.plats"></app-plat-menu>

		<h3 class="menuCategory">Desserts</h3>
		<app-dessert-menu :desserts="menuRestau.desserts"></app-dessert-menu>

	</div>
</template>

<script>

import MenuEntree from './MenuEntree.vue';
import MenuPlat from './MenuPlat.vue';
import MenuDessert from './MenuDessert.vue';

export default {
	data() {
		return {}
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