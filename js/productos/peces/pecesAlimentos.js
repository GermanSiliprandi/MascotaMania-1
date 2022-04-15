const pecesAlimentos = [
	{
		img: "img/productos/peces/alimentos/Imagen125.png",
		name: "Alimento Peces Shulet Agua Fria Escamado",
		brand: "Shulet",
		weight: "",
	},
	{
		img: "img/productos/peces/alimentos/Imagen126.jpg",
		name: "Alimento Peces Tropicales",
		brand: "Shulet",
		weight: "",
	},
	{
		img: "img/productos/peces/alimentos/Imagen127.jpg",
		name: "Alimento Tetra",
		brand: "Tetra",
		weight: "",
	},
	{
		img: "img/productos/peces/alimentos/Imagen128.png",
		name: "TetraColor Tropical Granules",
		brand: "Tetra",
		weight: "",
	},
];
const alimentosImg1 = document.getElementById("alimentosImg1");
const alimentosImg2 = document.getElementById("alimentosImg2");
const alimentosImg3 = document.getElementById("alimentosImg3");
const alimentosImg4 = document.getElementById("alimentosImg4");

const alimentosBrand1 = document.getElementById("alimentosBrand1");
const alimentosBrand2 = document.getElementById("alimentosBrand2");
const alimentosBrand3 = document.getElementById("alimentosBrand3");
const alimentosBrand4 = document.getElementById("alimentosBrand4");

const alimentosName1 = document.getElementById("alimentosName1");
const alimentosName2 = document.getElementById("alimentosName2");
const alimentosName3 = document.getElementById("alimentosName3");
const alimentosName4 = document.getElementById("alimentosName4");

const alimentosWeight1 = document.getElementById("alimentosWeight1");
const alimentosWeight2 = document.getElementById("alimentosWeight2");
const alimentosWeight3 = document.getElementById("alimentosWeight3");
const alimentosWeight4 = document.getElementById("alimentosWeight4");

alimentosImg1.src = pecesAlimentos[0].img;
alimentosImg2.src = pecesAlimentos[1].img;
alimentosImg3.src = pecesAlimentos[2].img;
alimentosImg4.src = pecesAlimentos[3].img;

alimentosBrand1.innerHTML = pecesAlimentos[0].brand;
alimentosBrand2.innerHTML = pecesAlimentos[1].brand;
alimentosBrand3.innerHTML = pecesAlimentos[2].brand;
alimentosBrand4.innerHTML = pecesAlimentos[3].brand;

alimentosName1.innerHTML = pecesAlimentos[0].name;
alimentosName2.innerHTML = pecesAlimentos[1].name;
alimentosName3.innerHTML = pecesAlimentos[2].name;
alimentosName4.innerHTML = pecesAlimentos[3].name;

alimentosWeight1.innerHTML = pecesAlimentos[0].weight;
alimentosWeight2.innerHTML = pecesAlimentos[1].weight;
alimentosWeight3.innerHTML = pecesAlimentos[2].weight;
alimentosWeight4.innerHTML = pecesAlimentos[3].weight;
