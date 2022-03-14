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
		accesoriosImg1.src = gatosAccesorios[index - 3].img;
		accesoriosImg2.src = gatosAccesorios[index - 2].img;
		accesoriosImg3.src = gatosAccesorios[index - 1].img;
		accesoriosImg4.src = gatosAccesorios[index].img;
		accesoriosBrand1.innerHTML = gatosAccesorios[index - 3].brand;
		accesoriosBrand2.innerHTML = gatosAccesorios[index - 2].brand;
		accesoriosBrand3.innerHTML = gatosAccesorios[index - 1].brand;
		accesoriosBrand4.innerHTML = gatosAccesorios[index].brand;
		accesoriosName1.innerHTML = gatosAccesorios[index - 3].name;
		accesoriosName2.innerHTML = gatosAccesorios[index - 2].name;
		accesoriosName3.innerHTML = gatosAccesorios[index - 1].name;
		accesoriosName4.innerHTML = gatosAccesorios[index].name;
		accesoriosWeight1.innerHTML = gatosAccesorios[index - 3].weight;
		accesoriosWeight2.innerHTML = gatosAccesorios[index - 2].weight;
		accesoriosWeight3.innerHTML = gatosAccesorios[index - 1].weight;
		accesoriosWeight4.innerHTML = gatosAccesorios[index].weight;
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

	function moveRight() {
		if (current + 3 < gatosAccesorios.length) {
			current += 1;
			increaseProducts(current);
		} else {
			current = 0;
			increaseProducts(current);
		}
	}
	function moveLeft() {
		if (current - 3 > 0) {
			current -= 1;
			decreaseProducts(current);
		} else {
			current = gatosAccesorios.length;
			decreaseProducts(current);
		}
	}
}
productosGatosAccesorios();
