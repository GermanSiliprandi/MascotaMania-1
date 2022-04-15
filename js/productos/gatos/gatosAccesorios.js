function productosGatosAccesorios() {
	const gatosAccesorios = [
		{
			img: "img/productos/gatos/accesorios/Imagen120.jpg",
			name: "Pelotas Para Gato",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/gatos/accesorios/Imagen121.png",
			name: "Rascadores Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/gatos/accesorios/Imagen122.jpg",
			name: "Varita con Pelota y Pluma",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/gatos/accesorios/Imagen123.jpg",
			name: "Litera Cerrada",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/gatos/accesorios/Imagen124.jpg",
			name: "Tunel Para Gatos 4 Salidas",
			brand: "Varias Marcas",
			weight: "",
		},
	];
	function increaseProducts(index) {
		accesoriosImg1.src = gatosAccesorios[index].img;
		accesoriosImg2.src = gatosAccesorios[index + 1].img;
		accesoriosImg3.src = gatosAccesorios[index + 2].img;
		accesoriosImg4.src = gatosAccesorios[index + 3].img;
		accesoriosBrand1.innerHTML = gatosAccesorios[index].brand;
		accesoriosBrand2.innerHTML = gatosAccesorios[index + 1].brand;
		accesoriosBrand3.innerHTML = gatosAccesorios[index + 2].brand;
		accesoriosBrand4.innerHTML = gatosAccesorios[index + 3].brand;
		accesoriosName1.innerHTML = gatosAccesorios[index].name;
		accesoriosName2.innerHTML = gatosAccesorios[index + 1].name;
		accesoriosName3.innerHTML = gatosAccesorios[index + 2].name;
		accesoriosName4.innerHTML = gatosAccesorios[index + 3].name;
		accesoriosWeight1.innerHTML = gatosAccesorios[index].weight;
		accesoriosWeight2.innerHTML = gatosAccesorios[index + 1].weight;
		accesoriosWeight3.innerHTML = gatosAccesorios[index + 2].weight;
		accesoriosWeight4.innerHTML = gatosAccesorios[index + 3].weight;
	}
	function decreaseProducts(index) {
		accesoriosImg1.src = gatosAccesorios[index - 4].img;
		accesoriosImg2.src = gatosAccesorios[index - 3].img;
		accesoriosImg3.src = gatosAccesorios[index - 2].img;
		accesoriosImg4.src = gatosAccesorios[index - 1].img;
		accesoriosBrand1.innerHTML = gatosAccesorios[index - 4].brand;
		accesoriosBrand2.innerHTML = gatosAccesorios[index - 3].brand;
		accesoriosBrand3.innerHTML = gatosAccesorios[index - 2].brand;
		accesoriosBrand4.innerHTML = gatosAccesorios[index - 1].brand;
		accesoriosName1.innerHTML = gatosAccesorios[index - 4].name;
		accesoriosName2.innerHTML = gatosAccesorios[index - 3].name;
		accesoriosName3.innerHTML = gatosAccesorios[index - 2].name;
		accesoriosName4.innerHTML = gatosAccesorios[index - 1].name;
		accesoriosWeight1.innerHTML = gatosAccesorios[index - 4].weight;
		accesoriosWeight2.innerHTML = gatosAccesorios[index - 3].weight;
		accesoriosWeight3.innerHTML = gatosAccesorios[index - 2].weight;
		accesoriosWeight4.innerHTML = gatosAccesorios[index - 1].weight;
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
	const accesoriosRightButton = document.getElementById(
		"accesoriosRightButton"
	);
	const accesoriosLeftButton = document.getElementById(
		"accesoriosLeftButton"
	);
	accesoriosImg1.src = gatosAccesorios[0].img;
	accesoriosImg2.src = gatosAccesorios[1].img;
	accesoriosImg3.src = gatosAccesorios[2].img;
	accesoriosImg4.src = gatosAccesorios[3].img;
	accesoriosBrand1.innerHTML = gatosAccesorios[0].brand;
	accesoriosBrand2.innerHTML = gatosAccesorios[1].brand;
	accesoriosBrand3.innerHTML = gatosAccesorios[2].brand;
	accesoriosBrand4.innerHTML = gatosAccesorios[3].brand;
	accesoriosName1.innerHTML = gatosAccesorios[0].name;
	accesoriosName2.innerHTML = gatosAccesorios[1].name;
	accesoriosName3.innerHTML = gatosAccesorios[2].name;
	accesoriosName4.innerHTML = gatosAccesorios[3].name;
	accesoriosWeight1.innerHTML = gatosAccesorios[0].weight;
	accesoriosWeight2.innerHTML = gatosAccesorios[1].weight;
	accesoriosWeight3.innerHTML = gatosAccesorios[2].weight;
	accesoriosWeight4.innerHTML = gatosAccesorios[3].weight;
	accesoriosRightButton.addEventListener("click", moveRight);
	accesoriosLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	console.log(gatosAccesorios.length);
	function moveRight() {
		if (current >= 0 && current <= gatosAccesorios.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > gatosAccesorios.length - 8 &&
			current < gatosAccesorios.length - 4
		) {
			accesoriosImg1.src =
				gatosAccesorios[gatosAccesorios.length - 4].img;
			accesoriosBrand1.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 4].brand;
			accesoriosName1.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 4].name;
			accesoriosWeight1.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 4].weight;
			accesoriosImg2.src =
				gatosAccesorios[gatosAccesorios.length - 3].img;
			accesoriosBrand2.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 3].brand;
			accesoriosName2.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 3].name;
			accesoriosWeight2.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 3].weight;
			accesoriosImg3.src =
				gatosAccesorios[gatosAccesorios.length - 2].img;
			accesoriosBrand3.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 2].brand;
			accesoriosName3.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 2].name;
			accesoriosWeight3.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 2].weight;
			accesoriosImg4.src =
				gatosAccesorios[gatosAccesorios.length - 1].img;
			accesoriosBrand4.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 1].brand;
			accesoriosName4.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 1].name;
			accesoriosWeight4.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 1].weight;
			current += 4;
		} else if (current >= 4 && gatosAccesorios.length < 8) {
			accesoriosImg1.src =
				gatosAccesorios[gatosAccesorios.length - 4].img;
			accesoriosBrand1.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 4].brand;
			accesoriosName1.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 4].name;
			accesoriosWeight1.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 4].weight;
			accesoriosImg2.src =
				gatosAccesorios[gatosAccesorios.length - 3].img;
			accesoriosBrand2.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 3].brand;
			accesoriosName2.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 3].name;
			accesoriosWeight2.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 3].weight;
			accesoriosImg3.src =
				gatosAccesorios[gatosAccesorios.length - 2].img;
			accesoriosBrand3.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 2].brand;
			accesoriosName3.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 2].name;
			accesoriosWeight3.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 2].weight;
			accesoriosImg4.src =
				gatosAccesorios[gatosAccesorios.length - 1].img;
			accesoriosBrand4.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 1].brand;
			accesoriosName4.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 1].name;
			accesoriosWeight4.innerHTML =
				gatosAccesorios[gatosAccesorios.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= gatosAccesorios.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			accesoriosImg1.src = gatosAccesorios[0].img;
			accesoriosBrand1.innerHTML = gatosAccesorios[0].brand;
			accesoriosName1.innerHTML = gatosAccesorios[0].name;
			accesoriosWeight1.innerHTML = gatosAccesorios[0].weight;
			accesoriosImg2.src = gatosAccesorios[1].img;
			accesoriosBrand2.innerHTML = gatosAccesorios[1].brand;
			accesoriosName2.innerHTML = gatosAccesorios[1].name;
			accesoriosWeight2.innerHTML = gatosAccesorios[1].weight;
			accesoriosImg3.src = gatosAccesorios[2].img;
			accesoriosBrand3.innerHTML = gatosAccesorios[2].brand;
			accesoriosName3.innerHTML = gatosAccesorios[2].name;
			accesoriosWeight3.innerHTML = gatosAccesorios[2].weight;
			accesoriosImg4.src = gatosAccesorios[3].img;
			accesoriosBrand4.innerHTML = gatosAccesorios[3].brand;
			accesoriosName4.innerHTML = gatosAccesorios[3].name;
			accesoriosWeight4.innerHTML = gatosAccesorios[3].weight;
		}
	}
}
productosGatosAccesorios();
