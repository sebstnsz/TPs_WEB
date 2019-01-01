<template>
	<div id="entree-menu">

		<el-row type="flex">
			<el-col :span="5" v-for="(entree,i) in entrees" :key="i">
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
	}

}

</script>