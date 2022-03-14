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
		accesoriosImg1.src = roedoresAccesorios[index - 3].img;
		accesoriosImg2.src = roedoresAccesorios[index - 2].img;
		accesoriosImg3.src = roedoresAccesorios[index - 1].img;
		accesoriosImg4.src = roedoresAccesorios[index].img;
		accesoriosBrand1.innerHTML = roedoresAccesorios[index - 3].brand;
		accesoriosBrand2.innerHTML = roedoresAccesorios[index - 2].brand;
		accesoriosBrand3.innerHTML = roedoresAccesorios[index - 1].brand;
		accesoriosBrand4.innerHTML = roedoresAccesorios[index].brand;
		accesoriosName1.innerHTML = roedoresAccesorios[index - 3].name;
		accesoriosName2.innerHTML = roedoresAccesorios[index - 2].name;
		accesoriosName3.innerHTML = roedoresAccesorios[index - 1].name;
		accesoriosName4.innerHTML = roedoresAccesorios[index].name;
		accesoriosWeight1.innerHTML = roedoresAccesorios[index - 3].weight;
		accesoriosWeight2.innerHTML = roedoresAccesorios[index - 2].weight;
		accesoriosWeight3.innerHTML = roedoresAccesorios[index - 1].weight;
		accesoriosWeight4.innerHTML = roedoresAccesorios[index].weight;
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

	function moveRight() {
		if (current + 3 < roedoresAccesorios.length) {
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
			current = roedoresAccesorios.length;
			decreaseProducts(current);
		}
	}
}
productosRoedoresAccesorios();
