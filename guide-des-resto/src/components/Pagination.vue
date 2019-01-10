<template>
	<div id="pagination">
		<el-row type="flex" justify="center">
			<el-col>
				<el-button-group>
					<el-button  
						icon="el-icon-d-arrow-left"
						size="small"
						v-on:click="premierePage"
						v-bind:disabled="nPage<=0"
						circle></el-button>
					<el-button 
						icon="el-icon-arrow-left"
						size="small"
						v-on:click="pagePrecedente"
						v-bind:disabled="nPage<=0"
						circle></el-button>
				</el-button-group>
			</el-col>
			<el-col>
				<el-input-number 
					size="small"
					:min="0"
					:max="maxPage"
					v-model="nPage"
					@change="changerPage">
				</el-input-number>
			</el-col>
			<el-col>
				<el-button-group>
					<el-button 
						icon="el-icon-arrow-right"
						size="small"
						v-on:click="pageSuivante"
						v-bind:disabled="nPage>=maxPage"
						circle></el-button>
					<el-button 
						icon="el-icon-d-arrow-right"
						size="small"
						v-on:click="dernierePage"
						v-bind:disabled="nPage>=maxPage"
						circle></el-button>
				</el-button-group>
			</el-col>
		</el-row>
	</div>
</template>

<script>

export default {

	data() {
		return {
		}
	},
	props: {
		maxPage: {
			default: 0
		},
		nPage:{
			default:0
		}
	},
	methods: {
		premierePage(){
			this.nPage = 0;
			this.changerPage();
		},
		pagePrecedente(){
			if(this.nPage > 0){
				this.nPage--;
				this.changerPage();
			}
			else 
				this.premierePage();
		},
		pageSuivante(){
			if(this.nPage < this.maxPage){
				this.nPage++;
				this.changerPage();
			}
			else 
				this.dernierePage();
		},
		dernierePage(){
			this.nPage = this.maxPage;
			this.changerPage();
		},
		changerPage(){
			if(this.nPage === "")
				this.nPage = 0;
			this.$emit('changerPage', this.nPage);
		}
	}
}
</script>

<style>
el-input {
	text-align: center;
}
</style>