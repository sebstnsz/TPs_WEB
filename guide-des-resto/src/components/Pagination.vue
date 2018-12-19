<template>
	<div id="pagination">
		<el-row type="flex" justify="center">
			<el-col>
				<el-button-group>
					<el-button  
						icon="el-icon-d-arrow-left"
						size="small"
						v-on:click="premierePage"
						v-bind:disabled="page<=0"
						circle></el-button>
					<el-button 
						icon="el-icon-arrow-left"
						size="small"
						v-on:click="pagePrecedente"
						v-bind:disabled="page<=0"
						circle></el-button>
				</el-button-group>
			</el-col>
			<el-col>
				<el-input-number 
					size="small"
					:min="0"
					:max="nbPagesMax"
					v-model="page">
				</el-input-number>
			</el-col>
			<el-col>
				<el-button-group>
					<el-button 
						icon="el-icon-arrow-right"
						size="small"
						v-on:click="pageSuivante"
						v-bind:disabled="page>=nbPagesMax"
						circle></el-button>
					<el-button 
						icon="el-icon-d-arrow-right"
						size="small"
						v-on:click="dernierePage"
						v-bind:disabled="page>=nbPagesMax"
						circle></el-button>
				</el-button-group>
			</el-col>
		</el-row>
		<!--<el-pagination
			layout="prev, pager, next"
			:total="1000"
			:page-size="10"
			background
			small>
		</el-pagination>-->
	</div>
</template>

<script>

export default {

	data() {
		return {
			page: 0,
			nbPagesMax: 10
		}
	},
	components: { 	// LOCAL COMPONENTS
	},
	methods: {

	
		pagePrecedente(){
			if(this.page > 0){
				this.page--;
				this.$emit('changePage', this.page);
			}
		},

		pageSuivante(){
			if(this.page < this.nbPagesMax){
				this.page++;
				this.$emit('changePage', this.page);
			}
		},

		premierePage(){
			this.page = 0;
			//this.getRestaurantsFromServer();
		},

		dernierePage(){
			this.page = this.nbPagesMax;
			//this.getRestaurantsFromServer();
		}
	}
}
</script>

<style>
el-input {
	text-align: center;
}
</style>