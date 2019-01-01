<template>
	<div id="plat-menu">

		<el-row type="flex">
			<el-col :span="5" v-for="(plat,i) in plats" :key="i">
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
	}

}

</script>