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
            restaurantMaj:[],
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

			ouvrirPopUp(r) {
                this.visible = true;
                this.restaurantMaj = r;
			  },

			  annulerModification(){
			  	this.visible = false;
			  	this.getRestaurantsFromServer();
			  },
			  
            modifierRestaurant(){
                let url = "http://localhost:8080/api/restaurants/"+this.restaurantMaj._id;
                console.log(this.restaurantMaj.name);
                let formData = new FormData();
                formData.append('_id', this.restaurantMaj._id);
                formData.append('nom', this.restaurantMaj.name);
                formData.append('cuisine', this.restaurantMaj.cuisine);
        
                fetch(url, {
                    method: "PUT",
                   body:formData
                })
                .then((responseJSON) =>{
                    responseJSON.json()
                    .then((res) => { // arrow function preserve le this
                        // Maintenant res est un vrai objet JavaScript
                        console.log(res)
                      //  this.getRestaurantsFromServer(null,null)
                    });
                })
                .catch(function (err) {
                    console.log(err);
                });
                this.visible = false;
			  },
			  
            ajouterRestaurant() {
                let formData = new FormData();
                formData.append('nom', this.name);
                formData.append('cuisine', this.cuisine);
        
                let url = "http://localhost:8080/api/restaurants";
        
                fetch(url, {
                    method: "POST",
                    body: formData
                })
                    .then((responseJSON) =>{
                        responseJSON.json()
                            .then((res) => { // arrow function preserve le this
                                // Maintenant res est un vrai objet JavaScript
                                console.log("ajouter")
                                this.getRestaurantsFromServer(null,null)
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

			chercherRestaurants() {
				this.page = 0;
				this.getRestaurantsFromServer();
			},

			changeNbRestauParPage() {
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