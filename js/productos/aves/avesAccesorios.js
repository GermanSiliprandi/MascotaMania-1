function productosAvesAccesorios() {
	const avesAccesorios = [
		{
			img: "img/productos/aves/accesorios/Imagen139.jpg",
			name: "Bebedero Para Colibrí",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/aves/accesorios/Imagen140.jpg",
			name: "Comedero/Bebedero Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/aves/accesorios/Imagen141.jpg",
			name: "Bebedero Externo Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/aves/accesorios/Imagen142.jpg",
			name: "Bañadero Plástica",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/aves/accesorios/Imagen143.jpg",
			name: "Comedero Plástico",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/aves/accesorios/Imagen144.jpg",
			name: "Bebedero Colibrí",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/aves/accesorios/Imagen145.jpg",
			name: "Bebedero Pájaro",
			brand: "Varias Marcas",
			weight: "",
		},
	];
	function increaseProducts(index) {
		accesoriosImg1.src = avesAccesorios[index].img;
		accesoriosImg2.src = avesAccesorios[index + 1].img;
		accesoriosImg3.src = avesAccesorios[index + 2].img;
		accesoriosImg4.src = avesAccesorios[index + 3].img;
		accesoriosBrand1.innerHTML = avesAccesorios[index].brand;
		accesoriosBrand2.innerHTML = avesAccesorios[index + 1].brand;
		accesoriosBrand3.innerHTML = avesAccesorios[index + 2].brand;
		accesoriosBrand4.innerHTML = avesAccesorios[index + 3].brand;
		accesoriosName1.innerHTML = avesAccesorios[index].name;
		accesoriosName2.innerHTML = avesAccesorios[index + 1].name;
		accesoriosName3.innerHTML = avesAccesorios[index + 2].name;
		accesoriosName4.innerHTML = avesAccesorios[index + 3].name;
		accesoriosWeight1.innerHTML = avesAccesorios[index].weight;
		accesoriosWeight2.innerHTML = avesAccesorios[index + 1].weight;
		accesoriosWeight3.innerHTML = avesAccesorios[index + 2].weight;
		accesoriosWeight4.innerHTML = avesAccesorios[index + 3].weight;
	}
	function decreaseProducts(index) {
		accesoriosImg1.src = avesAccesorios[index - 4].img;
		accesoriosImg2.src = avesAccesorios[index - 3].img;
		accesoriosImg3.src = avesAccesorios[index - 2].img;
		accesoriosImg4.src = avesAccesorios[index - 1].img;
		accesoriosBrand1.innerHTML = avesAccesorios[index - 4].brand;
		accesoriosBrand2.innerHTML = avesAccesorios[index - 3].brand;
		accesoriosBrand3.innerHTML = avesAccesorios[index - 2].brand;
		accesoriosBrand4.innerHTML = avesAccesorios[index - 1].brand;
		accesoriosName1.innerHTML = avesAccesorios[index - 4].name;
		accesoriosName2.innerHTML = avesAccesorios[index - 3].name;
		accesoriosName3.innerHTML = avesAccesorios[index - 2].name;
		accesoriosName4.innerHTML = avesAccesorios[index - 1].name;
		accesoriosWeight1.innerHTML = avesAccesorios[index - 4].weight;
		accesoriosWeight2.innerHTML = avesAccesorios[index - 3].weight;
		accesoriosWeight3.innerHTML = avesAccesorios[index - 2].weight;
		accesoriosWeight4.innerHTML = avesAccesorios[index - 1].weight;
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
	accesoriosImg1.src = avesAccesorios[0].img;
	accesoriosImg2.src = avesAccesorios[1].img;
	accesoriosImg3.src = avesAccesorios[2].img;
	accesoriosImg4.src = avesAccesorios[3].img;
	accesoriosBrand1.innerHTML = avesAccesorios[0].brand;
	accesoriosBrand2.innerHTML = avesAccesorios[1].brand;
	accesoriosBrand3.innerHTML = avesAccesorios[2].brand;
	accesoriosBrand4.innerHTML = avesAccesorios[3].brand;
	accesoriosName1.innerHTML = avesAccesorios[0].name;
	accesoriosName2.innerHTML = avesAccesorios[1].name;
	accesoriosName3.innerHTML = avesAccesorios[2].name;
	accesoriosName4.innerHTML = avesAccesorios[3].name;
	accesoriosWeight1.innerHTML = avesAccesorios[0].weight;
	accesoriosWeight2.innerHTML = avesAccesorios[1].weight;
	accesoriosWeight3.innerHTML = avesAccesorios[2].weight;
	accesoriosWeight4.innerHTML = avesAccesorios[3].weight;
	accesoriosRightButton.addEventListener("click", moveRight);
	accesoriosLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	function moveRight() {
		if (current >= 0 && current <= avesAccesorios.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > avesAccesorios.length - 8 &&
			current < avesAccesorios.length - 4
		) {
			accesoriosImg1.src = avesAccesorios[avesAccesorios.length - 4].img;
			accesoriosBrand1.innerHTML =
				avesAccesorios[avesAccesorios.length - 4].brand;
			accesoriosName1.innerHTML =
				avesAccesorios[avesAccesorios.length - 4].name;
			accesoriosWeight1.innerHTML =
				avesAccesorios[avesAccesorios.length - 4].weight;
			accesoriosImg2.src = avesAccesorios[avesAccesorios.length - 3].img;
			accesoriosBrand2.innerHTML =
				avesAccesorios[avesAccesorios.length - 3].brand;
			accesoriosName2.innerHTML =
				avesAccesorios[avesAccesorios.length - 3].name;
			accesoriosWeight2.innerHTML =
				avesAccesorios[avesAccesorios.length - 3].weight;
			accesoriosImg3.src = avesAccesorios[avesAccesorios.length - 2].img;
			accesoriosBrand3.innerHTML =
				avesAccesorios[avesAccesorios.length - 2].brand;
			accesoriosName3.innerHTML =
				avesAccesorios[avesAccesorios.length - 2].name;
			accesoriosWeight3.innerHTML =
				avesAccesorios[avesAccesorios.length - 2].weight;
			accesoriosImg4.src = avesAccesorios[avesAccesorios.length - 1].img;
			accesoriosBrand4.innerHTML =
				avesAccesorios[avesAccesorios.length - 1].brand;
			accesoriosName4.innerHTML =
				avesAccesorios[avesAccesorios.length - 1].name;
			accesoriosWeight4.innerHTML =
				avesAccesorios[avesAccesorios.length - 1].weight;
			current += 4;
		} else if (current >= 4 && avesAccesorios.length < 8) {
			accesoriosImg1.src = avesAccesorios[avesAccesorios.length - 4].img;
			accesoriosBrand1.innerHTML =
				avesAccesorios[avesAccesorios.length - 4].brand;
			accesoriosName1.innerHTML =
				avesAccesorios[avesAccesorios.length - 4].name;
			accesoriosWeight1.innerHTML =
				avesAccesorios[avesAccesorios.length - 4].weight;
			accesoriosImg2.src = avesAccesorios[avesAccesorios.length - 3].img;
			accesoriosBrand2.innerHTML =
				avesAccesorios[avesAccesorios.length - 3].brand;
			accesoriosName2.innerHTML =
				avesAccesorios[avesAccesorios.length - 3].name;
			accesoriosWeight2.innerHTML =
				avesAccesorios[avesAccesorios.length - 3].weight;
			accesoriosImg3.src = avesAccesorios[avesAccesorios.length - 2].img;
			accesoriosBrand3.innerHTML =
				avesAccesorios[avesAccesorios.length - 2].brand;
			accesoriosName3.innerHTML =
				avesAccesorios[avesAccesorios.length - 2].name;
			accesoriosWeight3.innerHTML =
				avesAccesorios[avesAccesorios.length - 2].weight;
			accesoriosImg4.src = avesAccesorios[avesAccesorios.length - 1].img;
			accesoriosBrand4.innerHTML =
				avesAccesorios[avesAccesorios.length - 1].brand;
			accesoriosName4.innerHTML =
				avesAccesorios[avesAccesorios.length - 1].name;
			accesoriosWeight4.innerHTML =
				avesAccesorios[avesAccesorios.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= avesAccesorios.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			accesoriosImg1.src = avesAccesorios[0].img;
			accesoriosBrand1.innerHTML = avesAccesorios[0].brand;
			accesoriosName1.innerHTML = avesAccesorios[0].name;
			accesoriosWeight1.innerHTML = avesAccesorios[0].weight;
			accesoriosImg2.src = avesAccesorios[1].img;
			accesoriosBrand2.innerHTML = avesAccesorios[1].brand;
			accesoriosName2.innerHTML = avesAccesorios[1].name;
			accesoriosWeight2.innerHTML = avesAccesorios[1].weight;
			accesoriosImg3.src = avesAccesorios[2].img;
			accesoriosBrand3.innerHTML = avesAccesorios[2].brand;
			accesoriosName3.innerHTML = avesAccesorios[2].name;
			accesoriosWeight3.innerHTML = avesAccesorios[2].weight;
			accesoriosImg4.src = avesAccesorios[3].img;
			accesoriosBrand4.innerHTML = avesAccesorios[3].brand;
			accesoriosName4.innerHTML = avesAccesorios[3].name;
			accesoriosWeight4.innerHTML = avesAccesorios[3].weight;
		}
	}
}
productosAvesAccesorios();
