<template>
	<div id="plat-menu">

		<el-row type="flex">
			<el-col :span="7" v-for="(plat,i) in plats" :key="i">
				<el-card :body-style="cardBodyStyle" shadow="hover">
					<img :src="plat.image" class="image">
					<div class="cardName cardBody">{{plat.nom}}</div>
					<div class="cardDescription cardBody">{{plat.description}}</div>
					<el-row class="cardFoot" type="flex" justify="space-between">
						<span class="prix">${{plat.prix}}</span>
						<el-button type="text" class="button" icon="el-icon-circle-plus" @click="commander(plat)">Commander</el-button>
					</el-row>
				</el-card>
			</el-col>
		</el-row>

	</div>
</template>

<script>

export default {
	data() {
		return {
			cardBodyStyle:{
				margin: '0px',
				padding: '0px'
			}
		}
	},
	props: {
		plats: {
			default: []
		}
	},
	methods: {
		commander(plat){
			this.$emit('ajoutPlatCommande', plat);
		}
	}

}

</script>