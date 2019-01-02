<template>
	<div id="entree-menu">

		<el-row type="flex">
			<el-col :span="7" v-for="(entree,i) in entrees" :key="i">
				<el-card :body-style="cardBodyStyle" shadow="hover">
					<img :src="entree.image" class="image">
					<div class="cardName cardBody">{{entree.nom}}</div>
					<div class="cardDescription cardBody">{{entree.description}}</div>
					<el-row class="cardFoot" type="flex" justify="space-between">
						<span class="prix">${{entree.prix}}</span>
						<el-button type="text" class="button" icon="el-icon-circle-plus" @click="commander(entree)">Commander</el-button>
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
		entrees: {
			default: []
		}
	},

	methods: {
		commander(entree){
			this.$emit('ajoutEntreeCommande', entree);
		}
	}

}

</script>