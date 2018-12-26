<template>
	<div id="popup">
<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="fermerPopUp"
  >
  <span>{{restaurantSelected.name}}</span>

  <div ref="map" v-bind:style="{ width: '100%', height: '200px' }"></div>

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
            map: {},
            platform: {},
            ui:{}
 
      };
	},
	props:{
		restaurantSelected: {
			default: {cuisine: "", name: ""} 
		   },
		dialogVisible : {
			default : false
		}
  },
  created() {
    this.platform = new H.service.Platform({
        "app_id": 'dSC9eIavpxUDab6oC9Ci',
        "app_code": '3FXAIkvxH1y6tyhdbBLfAg'
    });
},mounted() {
    
},
updated(){
if(this.dialogVisible){
  if(this.restaurantSelected.address != null){
    let lat = this.restaurantSelected.address.coord[1];
    let lng = this.restaurantSelected.address.coord[0];
    let defaultLayers =  this.platform.createDefaultLayers();

    this.map = new H.Map(
          this.$refs.map,
          defaultLayers.normal.map,
          {
              zoom: 14,
              center: { lng: lng, lat: lat }
          }
      );
      let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
      this.map.addObject(new H.map.Marker({lat: lat , lng: lng }));

  }else{
      let errorMsg = document.createElement("p").appendChild(document.createTextNode("Map cannot be loaded because no address is informed"));
      this.$refs.map.appendChild(errorMsg);
      this.$refs.map.style.color = "red";
  }
}

},
    methods: {
      fermerPopUp(){
       // dialogVisible = false
       if(this.$refs.map.childNodes.length > 0){
        this.$refs.map.removeChild(this.$refs.map.childNodes[0]);
       }

        this.$emit('fermerPopUpChild', false);
      },
	}
  };
</script>

<style>
</style>