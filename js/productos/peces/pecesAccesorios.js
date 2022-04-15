const pecesAccesorios = [
	{
		img: "img/productos/peces/accesorios/Imagen129.jpg",
		name: "Acuarios",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen130.jpg",
		name: "Planta de Plastico Varios Modelos",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen131.jpg",
		name: "Aireador",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen132.png",
		name: "Bomba Para Fuente Varios Modelos",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen133.jpg",
		name: "Bomba Para Fuente Varios Modelos",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen134.jpg",
		name: "Pecera Varios Modelos",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen135.jpg",
		name: "Conectores Para Peceras Varios Modelos",
		brand: "Varias Marcas",
		weight: "",
	},
	{
		img: "img/productos/peces/accesorios/Imagen136.jpg",
		name: "Piedras Para Peceras",
		brand: "Varias Marcas",
		weight: "",
	},
];
function increaseProducts(index) {
	accesoriosImg1.src = pecesAccesorios[index].img;
	accesoriosImg2.src = pecesAccesorios[index + 1].img;
	accesoriosImg3.src = pecesAccesorios[index + 2].img;
	accesoriosImg4.src = pecesAccesorios[index + 3].img;
	accesoriosBrand1.innerHTML = pecesAccesorios[index].brand;
	accesoriosBrand2.innerHTML = pecesAccesorios[index + 1].brand;
	accesoriosBrand3.innerHTML = pecesAccesorios[index + 2].brand;
	accesoriosBrand4.innerHTML = pecesAccesorios[index + 3].brand;
	accesoriosName1.innerHTML = pecesAccesorios[index].name;
	accesoriosName2.innerHTML = pecesAccesorios[index + 1].name;
	accesoriosName3.innerHTML = pecesAccesorios[index + 2].name;
	accesoriosName4.innerHTML = pecesAccesorios[index + 3].name;
	accesoriosWeight1.innerHTML = pecesAccesorios[index].weight;
	accesoriosWeight2.innerHTML = pecesAccesorios[index + 1].weight;
	accesoriosWeight3.innerHTML = pecesAccesorios[index + 2].weight;
	accesoriosWeight4.innerHTML = pecesAccesorios[index + 3].weight;
}
function decreaseProducts(index) {
	accesoriosImg1.src = pecesAccesorios[index - 4].img;
	accesoriosImg2.src = pecesAccesorios[index - 3].img;
	accesoriosImg3.src = pecesAccesorios[index - 2].img;
	accesoriosImg4.src = pecesAccesorios[index - 1].img;
	accesoriosBrand1.innerHTML = pecesAccesorios[index - 4].brand;
	accesoriosBrand2.innerHTML = pecesAccesorios[index - 3].brand;
	accesoriosBrand3.innerHTML = pecesAccesorios[index - 2].brand;
	accesoriosBrand4.innerHTML = pecesAccesorios[index - 1].brand;
	accesoriosName1.innerHTML = pecesAccesorios[index - 4].name;
	accesoriosName2.innerHTML = pecesAccesorios[index - 3].name;
	accesoriosName3.innerHTML = pecesAccesorios[index - 2].name;
	accesoriosName4.innerHTML = pecesAccesorios[index - 1].name;
	accesoriosWeight1.innerHTML = pecesAccesorios[index - 4].weight;
	accesoriosWeight2.innerHTML = pecesAccesorios[index - 3].weight;
	accesoriosWeight3.innerHTML = pecesAccesorios[index - 2].weight;
	accesoriosWeight4.innerHTML = pecesAccesorios[index - 1].weight;
}
const accesoriosImg1 = document.getElementById("accesoriosImg1");
const accesoriosImg2 = document.getElementById("accesoriosImg2");
const accesoriosImg3 = document.getElementById("accesoriosImg3");
const accesoriosImg4 = document.getElementById("accesoriosImg4");
const accesoriosBrand1 = document.getElementById("accesoriosBrand1");
const accesoriosBrand2 = document.getElementById("accesoriosBrand2");
const accesoriosBrand3 = document.getElementById("accesoriosBrand3");
const accesoriosBrand4 = document.getElementById("accesoriosBrand4");
const accesoriosName1 = document.getElementById("accesoriosName1");
const accesoriosName2 = document.getElementById("accesoriosName2");
const accesoriosName3 = document.getElementById("accesoriosName3");
const accesoriosName4 = document.getElementById("accesoriosName4");
const accesoriosWeight1 = document.getElementById("accesoriosWeight1");
const accesoriosWeight2 = document.getElementById("accesoriosWeight2");
const accesoriosWeight3 = document.getElementById("accesoriosWeight3");
const accesoriosWeight4 = document.getElementById("accesoriosWeight4");
const accesoriosRightButton = document.getElementById("accesoriosRightButton");
const accesoriosLeftButton = document.getElementById("accesoriosLeftButton");
accesoriosImg1.src = pecesAccesorios[0].img;
accesoriosImg2.src = pecesAccesorios[1].img;
accesoriosImg3.src = pecesAccesorios[2].img;
accesoriosImg4.src = pecesAccesorios[3].img;
accesoriosBrand1.innerHTML = pecesAccesorios[0].brand;
accesoriosBrand2.innerHTML = pecesAccesorios[1].brand;
accesoriosBrand3.innerHTML = pecesAccesorios[2].brand;
accesoriosBrand4.innerHTML = pecesAccesorios[3].brand;
accesoriosName1.innerHTML = pecesAccesorios[0].name;
accesoriosName2.innerHTML = pecesAccesorios[1].name;
accesoriosName3.innerHTML = pecesAccesorios[2].name;
accesoriosName4.innerHTML = pecesAccesorios[3].name;
accesoriosWeight1.innerHTML = pecesAccesorios[0].weight;
accesoriosWeight2.innerHTML = pecesAccesorios[1].weight;
accesoriosWeight3.innerHTML = pecesAccesorios[2].weight;
accesoriosWeight4.innerHTML = pecesAccesorios[3].weight;
accesoriosRightButton.addEventListener("click", moveRight);
accesoriosLeftButton.addEventListener("click", moveLeft);
let current = 0;
function moveRight() {
	if (current >= 0 && current <= pecesAccesorios.length - 8) {
		current += 4;
		increaseProducts(current);
	} else if (
		current > pecesAccesorios.length - 8 &&
		current < pecesAccesorios.length - 4
	) {
		accesoriosImg1.src = pecesAccesorios[pecesAccesorios.length - 4].img;
		accesoriosBrand1.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 4].brand;
		accesoriosName1.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 4].name;
		accesoriosWeight1.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 4].weight;
		accesoriosImg2.src = pecesAccesorios[pecesAccesorios.length - 3].img;
		accesoriosBrand2.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 3].brand;
		accesoriosName2.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 3].name;
		accesoriosWeight2.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 3].weight;
		accesoriosImg3.src = pecesAccesorios[pecesAccesorios.length - 2].img;
		accesoriosBrand3.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 2].brand;
		accesoriosName3.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 2].name;
		accesoriosWeight3.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 2].weight;
		accesoriosImg4.src = pecesAccesorios[pecesAccesorios.length - 1].img;
		accesoriosBrand4.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 1].brand;
		accesoriosName4.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 1].name;
		accesoriosWeight4.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 1].weight;
		current += 4;
	} else if (current >= 4 && pecesAccesorios.length < 8) {
		accesoriosImg1.src = pecesAccesorios[pecesAccesorios.length - 4].img;
		accesoriosBrand1.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 4].brand;
		accesoriosName1.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 4].name;
		accesoriosWeight1.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 4].weight;
		accesoriosImg2.src = pecesAccesorios[pecesAccesorios.length - 3].img;
		accesoriosBrand2.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 3].brand;
		accesoriosName2.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 3].name;
		accesoriosWeight2.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 3].weight;
		accesoriosImg3.src = pecesAccesorios[pecesAccesorios.length - 2].img;
		accesoriosBrand3.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 2].brand;
		accesoriosName3.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 2].name;
		accesoriosWeight3.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 2].weight;
		accesoriosImg4.src = pecesAccesorios[pecesAccesorios.length - 1].img;
		accesoriosBrand4.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 1].brand;
		accesoriosName4.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 1].name;
		accesoriosWeight4.innerHTML =
			pecesAccesorios[pecesAccesorios.length - 1].weight;
	}
}
function moveLeft() {
	if (current >= 4 && current <= pecesAccesorios.length - 1) {
		decreaseProducts(current);
		current -= 4;
	} else {
		accesoriosImg1.src = pecesAccesorios[0].img;
		accesoriosBrand1.innerHTML = pecesAccesorios[0].brand;
		accesoriosName1.innerHTML = pecesAccesorios[0].name;
		accesoriosWeight1.innerHTML = pecesAccesorios[0].weight;
		accesoriosImg2.src = pecesAccesorios[1].img;
		accesoriosBrand2.innerHTML = pecesAccesorios[1].brand;
		accesoriosName2.innerHTML = pecesAccesorios[1].name;
		accesoriosWeight2.innerHTML = pecesAccesorios[1].weight;
		accesoriosImg3.src = pecesAccesorios[2].img;
		accesoriosBrand3.innerHTML = pecesAccesorios[2].brand;
		accesoriosName3.innerHTML = pecesAccesorios[2].name;
		accesoriosWeight3.innerHTML = pecesAccesorios[2].weight;
		accesoriosImg4.src = pecesAccesorios[3].img;
		accesoriosBrand4.innerHTML = pecesAccesorios[3].brand;
		accesoriosName4.innerHTML = pecesAccesorios[3].name;
		accesoriosWeight4.innerHTML = pecesAccesorios[3].weight;
	}
}
