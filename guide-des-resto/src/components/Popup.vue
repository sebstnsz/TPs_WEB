<template>
	<div id="popup">
<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="fermerPopUp">
  <span>{{restaurantSelected.name}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="fermerPopUp">Cancel</el-button>
    <el-button type="primary" @click="fermerPopUp">Confirm</el-button>
  </span>
</el-dialog>
	</div>
	
</template>

<script>
import TableVue from './Table.vue';
//import API from '../restaurantsHelper.js';
import PaginationVue from './Pagination.vue';

export default {
    data() {
      return {
      };
	},
	props:{
		restaurantSelected: {
			default: null
		   },
		dialogVisible : {
			default : false
		}
	},
    methods: {
      fermerPopUp(){
       // dialogVisible = false
        this.$emit('fermerPopUpChild', false);
      }
	}
  };
</script>

<style>
</style>