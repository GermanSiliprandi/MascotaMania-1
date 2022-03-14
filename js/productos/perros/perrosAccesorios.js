function productosPerrosAccesorios() {
	const perrosAccesorios = [
		{
			img: "img/productos/perros/accesorios/Imagen106.jpg",
			name: "Comedero Rectangular",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen107.jpg",
			name: "Comedero Bebedero Animal Pet Curvo",
			brand: "Animal Pet",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen108.jpg",
			name: "Transportadoras",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen109.jpg",
			name: "Cucha Ferplast",
			brand: "Ferplast",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen110.jpg",
			name: "Arnes Ferplast",
			brand: "Ferplast",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen111.jpg",
			name: "Puerta Ferplast",
			brand: "Ferplast",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen112.jpg",
			name: "Moises Ferplast",
			brand: "Ferplast",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen113.jpg",
			name: "Transportadora",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen114.jpg",
			name: "Campera",
			brand: "",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen115.jpg",
			name: "Arnes Varias Marcas",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen116.jpg",
			name: "Bolso Tunel",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen117.jpg",
			name: "Cepillo Doble",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen118.jpg",
			name: "Pelota",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen119.jpg",
			name: "Hueso Algodon 2 Nudos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/perros/accesorios/Imagen119.jpg",
			name: "Hueso Algodon 2 Nudos",
			brand: "Varias Marcas",
			weight: "",
		},
	];
	function increaseProducts(index) {
		accesoriosImg1.src = perrosAccesorios[index].img;
		accesoriosImg2.src = perrosAccesorios[index + 1].img;
		accesoriosImg3.src = perrosAccesorios[index + 2].img;
		accesoriosImg4.src = perrosAccesorios[index + 3].img;
		accesoriosBrand1.innerHTML = perrosAccesorios[index].brand;
		accesoriosBrand2.innerHTML = perrosAccesorios[index + 1].brand;
		accesoriosBrand3.innerHTML = perrosAccesorios[index + 2].brand;
		accesoriosBrand4.innerHTML = perrosAccesorios[index + 3].brand;
		accesoriosName1.innerHTML = perrosAccesorios[index].name;
		accesoriosName2.innerHTML = perrosAccesorios[index + 1].name;
		accesoriosName3.innerHTML = perrosAccesorios[index + 2].name;
		accesoriosName4.innerHTML = perrosAccesorios[index + 3].name;
		accesoriosWeight1.innerHTML = perrosAccesorios[index].weight;
		accesoriosWeight2.innerHTML = perrosAccesorios[index + 1].weight;
		accesoriosWeight3.innerHTML = perrosAccesorios[index + 2].weight;
		accesoriosWeight4.innerHTML = perrosAccesorios[index + 3].weight;
	}
	function decreaseProducts(index) {
		accesoriosImg1.src = perrosAccesorios[index - 3].img;
		accesoriosImg2.src = perrosAccesorios[index - 2].img;
		accesoriosImg3.src = perrosAccesorios[index - 1].img;
		accesoriosImg4.src = perrosAccesorios[index].img;
		accesoriosBrand1.innerHTML = perrosAccesorios[index - 3].brand;
		accesoriosBrand2.innerHTML = perrosAccesorios[index - 2].brand;
		accesoriosBrand3.innerHTML = perrosAccesorios[index - 1].brand;
		accesoriosBrand4.innerHTML = perrosAccesorios[index].brand;
		accesoriosName1.innerHTML = perrosAccesorios[index - 3].name;
		accesoriosName2.innerHTML = perrosAccesorios[index - 2].name;
		accesoriosName3.innerHTML = perrosAccesorios[index - 1].name;
		accesoriosName4.innerHTML = perrosAccesorios[index].name;
		accesoriosWeight1.innerHTML = perrosAccesorios[index - 3].weight;
		accesoriosWeight2.innerHTML = perrosAccesorios[index - 2].weight;
		accesoriosWeight3.innerHTML = perrosAccesorios[index - 1].weight;
		accesoriosWeight4.innerHTML = perrosAccesorios[index].weight;
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
	accesoriosImg1.src = perrosAccesorios[0].img;
	accesoriosImg2.src = perrosAccesorios[1].img;
	accesoriosImg3.src = perrosAccesorios[2].img;
	accesoriosImg4.src = perrosAccesorios[3].img;
	accesoriosBrand1.innerHTML = perrosAccesorios[0].brand;
	accesoriosBrand2.innerHTML = perrosAccesorios[1].brand;
	accesoriosBrand3.innerHTML = perrosAccesorios[2].brand;
	accesoriosBrand4.innerHTML = perrosAccesorios[3].brand;
	accesoriosName1.innerHTML = perrosAccesorios[0].name;
	accesoriosName2.innerHTML = perrosAccesorios[1].name;
	accesoriosName3.innerHTML = perrosAccesorios[2].name;
	accesoriosName4.innerHTML = perrosAccesorios[3].name;
	accesoriosWeight1.innerHTML = perrosAccesorios[0].weight;
	accesoriosWeight2.innerHTML = perrosAccesorios[1].weight;
	accesoriosWeight3.innerHTML = perrosAccesorios[2].weight;
	accesoriosWeight4.innerHTML = perrosAccesorios[3].weight;
	accesoriosRightButton.addEventListener("click", moveRight);
	accesoriosLeftButton.addEventListener("click", moveLeft);
	let current = 0;

	function moveRight() {
		if (current + 3 < perrosAccesorios.length) {
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
			current = perrosAccesorios.length;
			decreaseProducts(current);
		}
	}
}
productosPerrosAccesorios();
