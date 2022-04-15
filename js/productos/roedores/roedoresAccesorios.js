function productosRoedoresAccesorios() {
	const roedoresAccesorios = [
		{
			img: "img/productos/roedores/accesorios/Imagen149.jpg",
			name: "Bebedero Sippy Plástico Para Jaulas De Roedores - Chico",
			brand: "Ferplast",
			weight: "",
		},
		{
			img: "img/productos/roedores/accesorios/Imagen150.jpg",
			name: "Rueda Para Hámster",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/accesorios/Imagen151.jpg",
			name: "Casita Para Hámster Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/accesorios/Imagen152.jpg",
			name: "Comedero de Plástico Para Cobayera Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/accesorios/Imagen153.jpg",
			name: "Rueda Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/accesorios/Imagen154.jpg",
			name: "Bebedero Pico de Metal",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/accesorios/Imagen155.jpg",
			name: "Viruta Compacta",
			brand: "Varias Marcas",
			weight: "",
		},
	];
	function increaseProducts(index) {
		accesoriosImg1.src = roedoresAccesorios[index].img;
		accesoriosImg2.src = roedoresAccesorios[index + 1].img;
		accesoriosImg3.src = roedoresAccesorios[index + 2].img;
		accesoriosImg4.src = roedoresAccesorios[index + 3].img;
		accesoriosBrand1.innerHTML = roedoresAccesorios[index].brand;
		accesoriosBrand2.innerHTML = roedoresAccesorios[index + 1].brand;
		accesoriosBrand3.innerHTML = roedoresAccesorios[index + 2].brand;
		accesoriosBrand4.innerHTML = roedoresAccesorios[index + 3].brand;
		accesoriosName1.innerHTML = roedoresAccesorios[index].name;
		accesoriosName2.innerHTML = roedoresAccesorios[index + 1].name;
		accesoriosName3.innerHTML = roedoresAccesorios[index + 2].name;
		accesoriosName4.innerHTML = roedoresAccesorios[index + 3].name;
		accesoriosWeight1.innerHTML = roedoresAccesorios[index].weight;
		accesoriosWeight2.innerHTML = roedoresAccesorios[index + 1].weight;
		accesoriosWeight3.innerHTML = roedoresAccesorios[index + 2].weight;
		accesoriosWeight4.innerHTML = roedoresAccesorios[index + 3].weight;
	}
	function decreaseProducts(index) {
		accesoriosImg1.src = roedoresAccesorios[index - 4].img;
		accesoriosImg2.src = roedoresAccesorios[index - 3].img;
		accesoriosImg3.src = roedoresAccesorios[index - 2].img;
		accesoriosImg4.src = roedoresAccesorios[index - 1].img;
		accesoriosBrand1.innerHTML = roedoresAccesorios[index - 4].brand;
		accesoriosBrand2.innerHTML = roedoresAccesorios[index - 3].brand;
		accesoriosBrand3.innerHTML = roedoresAccesorios[index - 2].brand;
		accesoriosBrand4.innerHTML = roedoresAccesorios[index - 1].brand;
		accesoriosName1.innerHTML = roedoresAccesorios[index - 4].name;
		accesoriosName2.innerHTML = roedoresAccesorios[index - 3].name;
		accesoriosName3.innerHTML = roedoresAccesorios[index - 2].name;
		accesoriosName4.innerHTML = roedoresAccesorios[index - 1].name;
		accesoriosWeight1.innerHTML = roedoresAccesorios[index - 4].weight;
		accesoriosWeight2.innerHTML = roedoresAccesorios[index - 3].weight;
		accesoriosWeight3.innerHTML = roedoresAccesorios[index - 2].weight;
		accesoriosWeight4.innerHTML = roedoresAccesorios[index - 1].weight;
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
	accesoriosImg1.src = roedoresAccesorios[0].img;
	accesoriosImg2.src = roedoresAccesorios[1].img;
	accesoriosImg3.src = roedoresAccesorios[2].img;
	accesoriosImg4.src = roedoresAccesorios[3].img;
	accesoriosBrand1.innerHTML = roedoresAccesorios[0].brand;
	accesoriosBrand2.innerHTML = roedoresAccesorios[1].brand;
	accesoriosBrand3.innerHTML = roedoresAccesorios[2].brand;
	accesoriosBrand4.innerHTML = roedoresAccesorios[3].brand;
	accesoriosName1.innerHTML = roedoresAccesorios[0].name;
	accesoriosName2.innerHTML = roedoresAccesorios[1].name;
	accesoriosName3.innerHTML = roedoresAccesorios[2].name;
	accesoriosName4.innerHTML = roedoresAccesorios[3].name;
	accesoriosWeight1.innerHTML = roedoresAccesorios[0].weight;
	accesoriosWeight2.innerHTML = roedoresAccesorios[1].weight;
	accesoriosWeight3.innerHTML = roedoresAccesorios[2].weight;
	accesoriosWeight4.innerHTML = roedoresAccesorios[3].weight;
	accesoriosRightButton.addEventListener("click", moveRight);
	accesoriosLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	console.log(roedoresAccesorios.length);
	function moveRight() {
		if (current >= 0 && current <= roedoresAccesorios.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > roedoresAccesorios.length - 8 &&
			current < roedoresAccesorios.length - 4
		) {
			accesoriosImg1.src =
				roedoresAccesorios[roedoresAccesorios.length - 4].img;
			accesoriosBrand1.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 4].brand;
			accesoriosName1.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 4].name;
			accesoriosWeight1.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 4].weight;
			accesoriosImg2.src =
				roedoresAccesorios[roedoresAccesorios.length - 3].img;
			accesoriosBrand2.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 3].brand;
			accesoriosName2.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 3].name;
			accesoriosWeight2.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 3].weight;
			accesoriosImg3.src =
				roedoresAccesorios[roedoresAccesorios.length - 2].img;
			accesoriosBrand3.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 2].brand;
			accesoriosName3.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 2].name;
			accesoriosWeight3.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 2].weight;
			accesoriosImg4.src =
				roedoresAccesorios[roedoresAccesorios.length - 1].img;
			accesoriosBrand4.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 1].brand;
			accesoriosName4.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 1].name;
			accesoriosWeight4.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 1].weight;
			current += 4;
		} else if (current >= 4 && roedoresAccesorios.length < 8) {
			accesoriosImg1.src =
				roedoresAccesorios[roedoresAccesorios.length - 4].img;
			accesoriosBrand1.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 4].brand;
			accesoriosName1.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 4].name;
			accesoriosWeight1.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 4].weight;
			accesoriosImg2.src =
				roedoresAccesorios[roedoresAccesorios.length - 3].img;
			accesoriosBrand2.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 3].brand;
			accesoriosName2.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 3].name;
			accesoriosWeight2.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 3].weight;
			accesoriosImg3.src =
				roedoresAccesorios[roedoresAccesorios.length - 2].img;
			accesoriosBrand3.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 2].brand;
			accesoriosName3.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 2].name;
			accesoriosWeight3.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 2].weight;
			accesoriosImg4.src =
				roedoresAccesorios[roedoresAccesorios.length - 1].img;
			accesoriosBrand4.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 1].brand;
			accesoriosName4.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 1].name;
			accesoriosWeight4.innerHTML =
				roedoresAccesorios[roedoresAccesorios.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= roedoresAccesorios.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			accesoriosImg1.src = roedoresAccesorios[0].img;
			accesoriosBrand1.innerHTML = roedoresAccesorios[0].brand;
			accesoriosName1.innerHTML = roedoresAccesorios[0].name;
			accesoriosWeight1.innerHTML = roedoresAccesorios[0].weight;
			accesoriosImg2.src = roedoresAccesorios[1].img;
			accesoriosBrand2.innerHTML = roedoresAccesorios[1].brand;
			accesoriosName2.innerHTML = roedoresAccesorios[1].name;
			accesoriosWeight2.innerHTML = roedoresAccesorios[1].weight;
			accesoriosImg3.src = roedoresAccesorios[2].img;
			accesoriosBrand3.innerHTML = roedoresAccesorios[2].brand;
			accesoriosName3.innerHTML = roedoresAccesorios[2].name;
			accesoriosWeight3.innerHTML = roedoresAccesorios[2].weight;
			accesoriosImg4.src = roedoresAccesorios[3].img;
			accesoriosBrand4.innerHTML = roedoresAccesorios[3].brand;
			accesoriosName4.innerHTML = roedoresAccesorios[3].name;
			accesoriosWeight4.innerHTML = roedoresAccesorios[3].weight;
		}
	}
}
productosRoedoresAccesorios();
