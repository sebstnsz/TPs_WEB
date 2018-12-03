<template>
	<div id="table">
		<app-popup></app-popup>
		<app-recherche></app-recherche>
		<p>Tableau recherche resto</p>
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
		}
	},
	components: { 	// LOCAL COMPONENTS
		'app-popup': Popup,
		'app-recherche': Recherche,
		'app-pagination': Pagination
	}
}
</script>

<style>
</style>