entrees = [
	{
		nom : "Nachos au fromage et bacon",
		description : "Chips tortillas, Cheddar, Bacon, Jalapeños, Tomates cerise",
		prix : 7.50,
        image : "https://thebusybaker.ca/wp-content/uploads/2017/12/rainbow-vegetable-skillet-nachos-fbig1-500x500.jpg"
    },{
		nom : "Salade de chèvre chaud",
		description : "Jeunes pousses, Fromage de chèvre",
		prix : 3.50,
		image : "http://static.pratico-pratiques.com/uploads/images/recipe/orig/23b0d39d751defa5c310671377f141db/salade-de-chevre-chaud.jpeg"
	},{
		nom : "Mozza sticks x6",
		description : "Bâtonnets de mozzarella panée",
		prix : 2.00,
		image : "https://www.blogchef.net/wp-content/uploads/2017/01/doritos_mozzarella_sticks_2.jpg"
	},{
		nom : "Assiette de charcuterie",
		description : "Jambon, Bacon, Mortadelle, Saucisson",
		prix : 8.00,
		image : "https://www.restofolio.fr/media/W1siZiIsIjIwMTUvMDcvMjYvNjljbW04OXNqcV9jaGFyY3V0ZXJpZS5qcGciXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA0MCJdLFsicCIsInRodW1iIiwiMTI0MHgiXV0/charcuterie.jpg?sha=e0130bfd8aa8441d"
	}
];


plats = [
	{
		nom : "Pizza Reine",
		description : "Sauce tomate, Champignons, Jambon, Emmental",
		prix : 12.50,
		image : "https://static.cuisineaz.com/400x320/i96018-pizza-reine.jpg"
	},
	{
		nom : "Côte de boeuf",
		description : "Accompagnée de ses frites maison",
		prix : 19.50,
		image : "https://static.cuisineaz.com/400x320/i29148-cote-de-boeuf-au-four.jpg"
	},
	{
		nom : "Magret de canard",
		description : "Accompagné de tapenade d'olives noires et de ses frites maison",
		prix : 15.50,
		image : "https://static.cuisineaz.com/610x610/i113027-magret-de-canard-sauce-foie-gras.jpg"
	},
	{
		nom : "Fish and Chips",
		description : "Cabillaud frit et frites maison",
		prix : 9.50,
		image : "https://www.enviedebienmanger.fr/sites/default/files/styles/bandeau_recette/public/fishchips.jpg?itok=EIXWUGVD"
    },
    {
		nom : "Burger montagnard",
		description : "Steak, Galette de pomme de terre, Bacon, Fromage à raclette",
		prix : 13.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
];

desserts = [
	{
		nom : "Fondant au chocolat",
		description : "Fondant au chocolat fait maison par notre pâtissier",
		prix : 4.50,
		image : "https://static.cuisineaz.com/610x610/i130285-fondant-au-chocolat-nestle.jpeg"
	},
	{
		nom : "Glace 2 boules",
		description : "Chocolat, Vanille, Fraise, Framboise, Citron, Poire, Noix de coco, Raisin",
		prix : 3.00,
		image : "https://www.pizzapai.fr/wp-content/uploads/2017/11/Calque-51-min.jpg"
	},
	{
		nom : "Tarte au citron",
		description : "Tarte au citron meringuée",
		prix : 4.50,
		image : "https://media.traiteur.carrefour.fr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/a/tarte_citron_meringuee_carrefour_traiteur_2.jpg"
	},
	{
		nom : "Salade de fruit",
		description : "Pêche, Kiwi, Ananas, Raisin, Pomme",
		prix : 3.50,
		image : "https://www.fourchette-et-bikini.fr/sites/default/files/styles/full_320x256/public/salade_fruits_1.jpg?itok=tLLcDbOs"
	},
]

exports.getEntrees = () => { return entrees; }
exports.getPlats = () => { return plats; }
exports.getDesserts = () => { return desserts; }

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

exports.genererMenu = (max) => {
	let listeEntrees = entrees.slice();
	let listePlats = plats.slice();
	let listeDesserts = desserts.slice();
	let menu = {
		entrees: [],
		plats: [],
		desserts: []
	}
	let iRand = 0;
	let randomPlat = null;
	for(let i=0; i<max; i++){
		iRand = getRandomInt(listeEntrees.length);
		randomPlat = listeEntrees.splice(iRand, 1)[0];
		menu.entrees.push(randomPlat);

		iRand = getRandomInt(listePlats.length);
		randomPlat = listePlats.splice(iRand, 1)[0];
		menu.plats.push(randomPlat);

		iRand = getRandomInt(listeDesserts.length);
		randomPlat = listeDesserts.splice(iRand, 1)[0];
		menu.desserts.push(randomPlat);
	}
	return menu;
}