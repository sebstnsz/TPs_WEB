<template>
	<div id="dessert-menu">

		<el-row type="flex">
			<el-col :span="5" v-for="(dessert,i) in desserts" :key="i">
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
		desserts: {
			default: []
		}
	}

}

</script>