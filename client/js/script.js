window.onload = init;

function init(){

	new Vue({
		el:"#app",
		data: {
			// Données pour recherche et affichage :
			page: 0,
			pagesize: 10,
			nomRecherche: "",
			// Données récupérées :
			restaurants: [],
			nbRestaurantsMax: 0,
			nbPagesMax: null,
			// Formulaire d'ajout :
			name: '',
			cuisine: '',

			visible: false
		},
		mounted(){
			console.log("Avant affichage");
			this.getRestaurantsFromServer();
		},
		methods: {
			getRestaurantsFromServer(){
				if (this.page<0)
					this.page = 0;
				else if (this.page>this.nbPagesMax)
					this.page = this.nbPagesMax;

				let url = "http://localhost:8080/api/restaurants?page="+this.page+"&pagesize="+this.pagesize;
				if (this.nomRecherche !== "")
					url += "&name="+this.nomRecherche;
				console.log("Get restaurants from "+url);

				fetch(url)
				.then((responseJSON) => responseJSON.json())
				.then((responseJS) => {
					this.restaurants = responseJS.data;
					this.nbRestaurantsMax = responseJS.count;
					this.nbPagesMax = Math.floor(this.nbRestaurantsMax/this.pagesize);
					if (this.nbRestaurantsMax%this.pagesize == 0)
						this.nbPagesMax--;
				});
			},

			ajouterRestaurant(event) {
				event.preventDefault();
				let form = event.target;
				let data = new FormData(form);
				let url = "http://localhost:8080/api/restaurants";
				fetch(url, {
					method: "POST",
					body: data
				})
				.then((responseJSON) => {
					responseJSON.json()
					.then((res) => {
						console.log("Ajout du restaurant");
						this.getRestaurantsFromServer();
					});
				})
				.catch(function (err) {
					console.log(err);
				});

				this.name = '';
				this.cuisine= '';  
			},

			supprimerRestaurant(r) {
				let url = "http://localhost:8080/api/restaurants/"+r._id;
				fetch(url, {
					method: "DELETE",
				})
				.then((responseJSON) => {
					responseJSON.json()
					.then((res) => {
						console.log("Suppression: "+r._id);
						this.getRestaurantsFromServer();
					});
				})
				.catch(function (err) {
					console.log(err);
				});
			},

			modifierRestaurant(r) {
				this.visible = true;
				console.log("Modification: "+r._id);
			},

			chercherRestaurants() {
				this.page = 0;
				this.getRestaurantsFromServer();
			},

			getColor(index) {
				return (index % 2) ? '#D4D4D4' : '#E8E8E8';
			},

			pagePrecedente(){
				if(this.page > 0){
					this.page--;
					this.getRestaurantsFromServer();
				}
			},

			pageSuivante(){
				if(this.page < this.nbPagesMax){
					this.page++;
					this.getRestaurantsFromServer();
				}
			},

			premierePage(){
				this.page = 0;
				this.getRestaurantsFromServer();
			},

			dernierePage(){
				this.page = this.nbPagesMax;
				this.getRestaurantsFromServer();
			}
		}
	});
}