function productosRoedoresHamsteras() {
	const roedoresHamsteras = [
		{
			img: "img/productos/roedores/hamsteras/Imagen156.jpg",
			name: "Hamstera 2 Niveles Varios Modelos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/hamsteras/Imagen157.jpg",
			name: "Hamstera C/Tubos 2 Pisos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/hamsteras/Imagen158.png",
			name: "Hamstera Con Tubos",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/hamsteras/Imagen159.jpg",
			name: "Hamstera",
			brand: "Varias Marcas",
			weight: "",
		},
		{
			img: "img/productos/roedores/hamsteras/Imagen160.jpg",
			name: "Hamstera Acrílica Con Tubos 3 Pisos",
			brand: "Varias Marcas",
			weight: "",
		},
	];
	function increaseProducts(index) {
		hamsterasImg1.src = roedoresHamsteras[index].img;
		hamsterasImg2.src = roedoresHamsteras[index + 1].img;
		hamsterasImg3.src = roedoresHamsteras[index + 2].img;
		hamsterasImg4.src = roedoresHamsteras[index + 3].img;
		hamsterasBrand1.innerHTML = roedoresHamsteras[index].brand;
		hamsterasBrand2.innerHTML = roedoresHamsteras[index + 1].brand;
		hamsterasBrand3.innerHTML = roedoresHamsteras[index + 2].brand;
		hamsterasBrand4.innerHTML = roedoresHamsteras[index + 3].brand;
		hamsterasName1.innerHTML = roedoresHamsteras[index].name;
		hamsterasName2.innerHTML = roedoresHamsteras[index + 1].name;
		hamsterasName3.innerHTML = roedoresHamsteras[index + 2].name;
		hamsterasName4.innerHTML = roedoresHamsteras[index + 3].name;
		hamsterasWeight1.innerHTML = roedoresHamsteras[index].weight;
		hamsterasWeight2.innerHTML = roedoresHamsteras[index + 1].weight;
		hamsterasWeight3.innerHTML = roedoresHamsteras[index + 2].weight;
		hamsterasWeight4.innerHTML = roedoresHamsteras[index + 3].weight;
	}
	function decreaseProducts(index) {
		hamsterasImg1.src = roedoresHamsteras[index - 4].img;
		hamsterasImg2.src = roedoresHamsteras[index - 3].img;
		hamsterasImg3.src = roedoresHamsteras[index - 2].img;
		hamsterasImg4.src = roedoresHamsteras[index - 1].img;
		hamsterasBrand1.innerHTML = roedoresHamsteras[index - 4].brand;
		hamsterasBrand2.innerHTML = roedoresHamsteras[index - 3].brand;
		hamsterasBrand3.innerHTML = roedoresHamsteras[index - 2].brand;
		hamsterasBrand4.innerHTML = roedoresHamsteras[index - 1].brand;
		hamsterasName1.innerHTML = roedoresHamsteras[index - 4].name;
		hamsterasName2.innerHTML = roedoresHamsteras[index - 3].name;
		hamsterasName3.innerHTML = roedoresHamsteras[index - 2].name;
		hamsterasName4.innerHTML = roedoresHamsteras[index - 1].name;
		hamsterasWeight1.innerHTML = roedoresHamsteras[index - 4].weight;
		hamsterasWeight2.innerHTML = roedoresHamsteras[index - 3].weight;
		hamsterasWeight3.innerHTML = roedoresHamsteras[index - 2].weight;
		hamsterasWeight4.innerHTML = roedoresHamsteras[index - 1].weight;
	}
	const hamsterasImg1 = document.getElementById("hamsterasImg1");
	const hamsterasImg2 = document.getElementById("hamsterasImg2");
	const hamsterasImg3 = document.getElementById("hamsterasImg3");
	const hamsterasImg4 = document.getElementById("hamsterasImg4");
	const hamsterasBrand1 = document.getElementById("hamsterasBrand1");
	const hamsterasBrand2 = document.getElementById("hamsterasBrand2");
	const hamsterasBrand3 = document.getElementById("hamsterasBrand3");
	const hamsterasBrand4 = document.getElementById("hamsterasBrand4");
	const hamsterasName1 = document.getElementById("hamsterasName1");
	const hamsterasName2 = document.getElementById("hamsterasName2");
	const hamsterasName3 = document.getElementById("hamsterasName3");
	const hamsterasName4 = document.getElementById("hamsterasName4");
	const hamsterasWeight1 = document.getElementById("hamsterasWeight1");
	const hamsterasWeight2 = document.getElementById("hamsterasWeight2");
	const hamsterasWeight3 = document.getElementById("hamsterasWeight3");
	const hamsterasWeight4 = document.getElementById("hamsterasWeight4");
	const hamsterasRightButton = document.getElementById(
		"hamsterasRightButton"
	);
	const hamsterasLeftButton = document.getElementById("hamsterasLeftButton");
	hamsterasImg1.src = roedoresHamsteras[0].img;
	hamsterasImg2.src = roedoresHamsteras[1].img;
	hamsterasImg3.src = roedoresHamsteras[2].img;
	hamsterasImg4.src = roedoresHamsteras[3].img;
	hamsterasBrand1.innerHTML = roedoresHamsteras[0].brand;
	hamsterasBrand2.innerHTML = roedoresHamsteras[1].brand;
	hamsterasBrand3.innerHTML = roedoresHamsteras[2].brand;
	hamsterasBrand4.innerHTML = roedoresHamsteras[3].brand;
	hamsterasName1.innerHTML = roedoresHamsteras[0].name;
	hamsterasName2.innerHTML = roedoresHamsteras[1].name;
	hamsterasName3.innerHTML = roedoresHamsteras[2].name;
	hamsterasName4.innerHTML = roedoresHamsteras[3].name;
	hamsterasWeight1.innerHTML = roedoresHamsteras[0].weight;
	hamsterasWeight2.innerHTML = roedoresHamsteras[1].weight;
	hamsterasWeight3.innerHTML = roedoresHamsteras[2].weight;
	hamsterasWeight4.innerHTML = roedoresHamsteras[3].weight;
	hamsterasRightButton.addEventListener("click", moveRight);
	hamsterasLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	console.log(roedoresHamsteras.length);
	function moveRight() {
		if (current >= 0 && current <= roedoresHamsteras.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > roedoresHamsteras.length - 8 &&
			current < roedoresHamsteras.length - 4
		) {
			hamsterasImg1.src =
				roedoresHamsteras[roedoresHamsteras.length - 4].img;
			hamsterasBrand1.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 4].brand;
			hamsterasName1.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 4].name;
			hamsterasWeight1.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 4].weight;
			hamsterasImg2.src =
				roedoresHamsteras[roedoresHamsteras.length - 3].img;
			hamsterasBrand2.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 3].brand;
			hamsterasName2.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 3].name;
			hamsterasWeight2.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 3].weight;
			hamsterasImg3.src =
				roedoresHamsteras[roedoresHamsteras.length - 2].img;
			hamsterasBrand3.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 2].brand;
			hamsterasName3.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 2].name;
			hamsterasWeight3.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 2].weight;
			hamsterasImg4.src =
				roedoresHamsteras[roedoresHamsteras.length - 1].img;
			hamsterasBrand4.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 1].brand;
			hamsterasName4.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 1].name;
			hamsterasWeight4.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 1].weight;
			current += 4;
		} else if (current >= 4 && roedoresHamsteras.length < 8) {
			hamsterasImg1.src =
				roedoresHamsteras[roedoresHamsteras.length - 4].img;
			hamsterasBrand1.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 4].brand;
			hamsterasName1.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 4].name;
			hamsterasWeight1.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 4].weight;
			hamsterasImg2.src =
				roedoresHamsteras[roedoresHamsteras.length - 3].img;
			hamsterasBrand2.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 3].brand;
			hamsterasName2.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 3].name;
			hamsterasWeight2.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 3].weight;
			hamsterasImg3.src =
				roedoresHamsteras[roedoresHamsteras.length - 2].img;
			hamsterasBrand3.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 2].brand;
			hamsterasName3.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 2].name;
			hamsterasWeight3.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 2].weight;
			hamsterasImg4.src =
				roedoresHamsteras[roedoresHamsteras.length - 1].img;
			hamsterasBrand4.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 1].brand;
			hamsterasName4.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 1].name;
			hamsterasWeight4.innerHTML =
				roedoresHamsteras[roedoresHamsteras.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= roedoresHamsteras.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			hamsterasImg1.src = roedoresHamsteras[0].img;
			hamsterasBrand1.innerHTML = roedoresHamsteras[0].brand;
			hamsterasName1.innerHTML = roedoresHamsteras[0].name;
			hamsterasWeight1.innerHTML = roedoresHamsteras[0].weight;
			hamsterasImg2.src = roedoresHamsteras[1].img;
			hamsterasBrand2.innerHTML = roedoresHamsteras[1].brand;
			hamsterasName2.innerHTML = roedoresHamsteras[1].name;
			hamsterasWeight2.innerHTML = roedoresHamsteras[1].weight;
			hamsterasImg3.src = roedoresHamsteras[2].img;
			hamsterasBrand3.innerHTML = roedoresHamsteras[2].brand;
			hamsterasName3.innerHTML = roedoresHamsteras[2].name;
			hamsterasWeight3.innerHTML = roedoresHamsteras[2].weight;
			hamsterasImg4.src = roedoresHamsteras[3].img;
			hamsterasBrand4.innerHTML = roedoresHamsteras[3].brand;
			hamsterasName4.innerHTML = roedoresHamsteras[3].name;
			hamsterasWeight4.innerHTML = roedoresHamsteras[3].weight;
		}
	}
}
productosRoedoresHamsteras();
