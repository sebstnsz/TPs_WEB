entrees = [
	{
		nom : "Nachos",
		description : "Chips, Cheddar, Bacon, Piments",
		prix : 7.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},{
		nom : "Salade de chevre chaud",
		description : "Jeunes pousses, Fromage de chèvre",
		prix : 3.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},{
		nom : "Mozza sticks x6",
		description : "Mozzarella panée",
		prix : 2.00,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},{
		nom : "Assiette de charcuterie",
		description : "Jambon, Bacon, Mortadelle, Saucisson",
		prix : 8.00,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	}
];


plats = [
	{
		nom : "Pizza Reine",
		description : "Sauce tomate, Champignons, Jambon, Emmental",
		prix : 12.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Côte de boeuf",
		description : "Accompagnée de ses frites maison",
		prix : 19.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Magret de canard",
		description : "Accompagné de tapenade d'olives noires et de ses frites maison",
		prix : 15.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Fish N Chips",
		description : "Cabillaud et frites",
		prix : 9.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Burger montagnard",
		description : "Steak, Galette de pomme de terre, Bacon, Frommage a raclette",
		prix : 13.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
];

desserts = [
	{
		nom : "Fondant au chocolat",
		description : "Fondant au chocolat fait maison par notre patissier",
		prix : 4.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Glace 2 boules",
		description : "Poire, Chocolat, Citron, Vanille, Noix de coco, Raisin",
		prix : 3.00,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Tarte au citron",
		description : "Tarte au citron meringuée",
		prix : 4.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
	},
	{
		nom : "Salade de fruit",
		description : "Pêche, Kiwi, Ananas, Raisin, Pomme",
		prix : 3.50,
		image : "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg"
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