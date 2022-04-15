function productosGatosSecos() {
	const gatosSecos = [
		{
			img: "img/productos/gatos/alimentosSecos/Imagen85.jpg",
			name: "Iams Gato Chicken - 3kg",
			brand: "Iams",
			weight: "3kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen86.jpg",
			name: "Iams Gato  Kitten - 3kg",
			brand: "Iams",
			weight: "3kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen87.jpg",
			name: "Iams Gato Light - 3kg",
			brand: "Iams",
			weight: "3kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen88.png",
			name: "Alimento Old Prince Novel Gato Adulto - 7,5kg",
			brand: "Old Prince",
			weight: "7,5kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen89.jpg",
			name: "Alimento Old Prince Novel Gato Adulto Sterilized - 3kg",
			brand: "Old Prince",
			weight: "3kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen90.jpg",
			name: "Alimento Nutrique Healthy Maintenance Gato Adulto Joven - 7,5 kg",
			brand: "Nutrique",
			weight: "7,5kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen91.jpg",
			name: "Alimento Nutrique Gato Adulto Joven Sterilised Healthy Weight - 2kg",
			brand: "Nutrique",
			weight: "2kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen92.png",
			name: "Alimento Nutrique Urinary Care para Gato - 2kg",
			brand: "Nutrique",
			weight: "2kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen93.jpg",
			name: "Alimento VitalCat Balanced Control Ph Gato - 7,5kg",
			brand: "VitalCat",
			weight: "7,5kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen94.jpg",
			name: "Alimento Optimum Gato Adulto - 1kg",
			brand: "Optimum",
			weight: "1kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen95.jpg",
			name: "Alimento Royal Canin Performance para Gato Adulto - 7.5kg",
			brand: "Royal Canin",
			weight: "7.5kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen96.jpg",
			name: "Alimento Royal Canin CatVet Kitten 36 - 1.5kg",
			brand: "Royal Canin",
			weight: "1.5kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen97.jpg",
			name: "Royal Canin Fit 32 para Gato - 7.5kg",
			brand: "Royal Canin",
			weight: "7.5kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen98.jpg",
			name: "Alimento Royal Canin Cat Ageing +12 para Gato - 2kg",
			brand: "Royal Canin",
			weight: "2kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen99.jpg",
			name: "Alimento Royal Canin CatVet Control de Peso para Gato - 3kg",
			brand: "Royal Canin",
			weight: "3kg",
		},
		{
			img: "img/productos/gatos/alimentosSecos/Imagen100.jpg",
			name: "Royal Canin CatVet Gastrointestinal - 2kg",
			brand: "Royal Canin",
			weight: "2kg",
		},
	];
	function increaseProducts(index) {
		secosImg1.src = gatosSecos[index].img;
		secosImg2.src = gatosSecos[index + 1].img;
		secosImg3.src = gatosSecos[index + 2].img;
		secosImg4.src = gatosSecos[index + 3].img;
		secosBrand1.innerHTML = gatosSecos[index].brand;
		secosBrand2.innerHTML = gatosSecos[index + 1].brand;
		secosBrand3.innerHTML = gatosSecos[index + 2].brand;
		secosBrand4.innerHTML = gatosSecos[index + 3].brand;
		secosName1.innerHTML = gatosSecos[index].name;
		secosName2.innerHTML = gatosSecos[index + 1].name;
		secosName3.innerHTML = gatosSecos[index + 2].name;
		secosName4.innerHTML = gatosSecos[index + 3].name;
		secosWeight1.innerHTML = gatosSecos[index].weight;
		secosWeight2.innerHTML = gatosSecos[index + 1].weight;
		secosWeight3.innerHTML = gatosSecos[index + 2].weight;
		secosWeight4.innerHTML = gatosSecos[index + 3].weight;
	}
	function decreaseProducts(index) {
		secosImg1.src = gatosSecos[index - 4].img;
		secosImg2.src = gatosSecos[index - 3].img;
		secosImg3.src = gatosSecos[index - 2].img;
		secosImg4.src = gatosSecos[index - 1].img;
		secosBrand1.innerHTML = gatosSecos[index - 4].brand;
		secosBrand2.innerHTML = gatosSecos[index - 3].brand;
		secosBrand3.innerHTML = gatosSecos[index - 2].brand;
		secosBrand4.innerHTML = gatosSecos[index - 1].brand;
		secosName1.innerHTML = gatosSecos[index - 4].name;
		secosName2.innerHTML = gatosSecos[index - 3].name;
		secosName3.innerHTML = gatosSecos[index - 2].name;
		secosName4.innerHTML = gatosSecos[index - 1].name;
		secosWeight1.innerHTML = gatosSecos[index - 4].weight;
		secosWeight2.innerHTML = gatosSecos[index - 3].weight;
		secosWeight3.innerHTML = gatosSecos[index - 2].weight;
		secosWeight4.innerHTML = gatosSecos[index - 1].weight;
	}
	const secosImg1 = document.getElementById("secosImg1");
	const secosImg2 = document.getElementById("secosImg2");
	const secosImg3 = document.getElementById("secosImg3");
	const secosImg4 = document.getElementById("secosImg4");
	const secosBrand1 = document.getElementById("secosBrand1");
	const secosBrand2 = document.getElementById("secosBrand2");
	const secosBrand3 = document.getElementById("secosBrand3");
	const secosBrand4 = document.getElementById("secosBrand4");
	const secosName1 = document.getElementById("secosName1");
	const secosName2 = document.getElementById("secosName2");
	const secosName3 = document.getElementById("secosName3");
	const secosName4 = document.getElementById("secosName4");
	const secosWeight1 = document.getElementById("secosWeight1");
	const secosWeight2 = document.getElementById("secosWeight2");
	const secosWeight3 = document.getElementById("secosWeight3");
	const secosWeight4 = document.getElementById("secosWeight4");
	const secosRightButton = document.getElementById("secosRightButton");
	const secosLeftButton = document.getElementById("secosLeftButton");
	secosImg1.src = gatosSecos[0].img;
	secosImg2.src = gatosSecos[1].img;
	secosImg3.src = gatosSecos[2].img;
	secosImg4.src = gatosSecos[3].img;
	secosBrand1.innerHTML = gatosSecos[0].brand;
	secosBrand2.innerHTML = gatosSecos[1].brand;
	secosBrand3.innerHTML = gatosSecos[2].brand;
	secosBrand4.innerHTML = gatosSecos[3].brand;
	secosName1.innerHTML = gatosSecos[0].name;
	secosName2.innerHTML = gatosSecos[1].name;
	secosName3.innerHTML = gatosSecos[2].name;
	secosName4.innerHTML = gatosSecos[3].name;
	secosWeight1.innerHTML = gatosSecos[0].weight;
	secosWeight2.innerHTML = gatosSecos[1].weight;
	secosWeight3.innerHTML = gatosSecos[2].weight;
	secosWeight4.innerHTML = gatosSecos[3].weight;
	secosRightButton.addEventListener("click", moveRight);
	secosLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	console.log(gatosSecos.length);
	function moveRight() {
		if (current >= 0 && current <= gatosSecos.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > gatosSecos.length - 8 &&
			current < gatosSecos.length - 4
		) {
			secosImg1.src = gatosSecos[gatosSecos.length - 4].img;
			secosBrand1.innerHTML = gatosSecos[gatosSecos.length - 4].brand;
			secosName1.innerHTML = gatosSecos[gatosSecos.length - 4].name;
			secosWeight1.innerHTML = gatosSecos[gatosSecos.length - 4].weight;
			secosImg2.src = gatosSecos[gatosSecos.length - 3].img;
			secosBrand2.innerHTML = gatosSecos[gatosSecos.length - 3].brand;
			secosName2.innerHTML = gatosSecos[gatosSecos.length - 3].name;
			secosWeight2.innerHTML = gatosSecos[gatosSecos.length - 3].weight;
			secosImg3.src = gatosSecos[gatosSecos.length - 2].img;
			secosBrand3.innerHTML = gatosSecos[gatosSecos.length - 2].brand;
			secosName3.innerHTML = gatosSecos[gatosSecos.length - 2].name;
			secosWeight3.innerHTML = gatosSecos[gatosSecos.length - 2].weight;
			secosImg4.src = gatosSecos[gatosSecos.length - 1].img;
			secosBrand4.innerHTML = gatosSecos[gatosSecos.length - 1].brand;
			secosName4.innerHTML = gatosSecos[gatosSecos.length - 1].name;
			secosWeight4.innerHTML = gatosSecos[gatosSecos.length - 1].weight;
			current += 4;
		} else if (current >= 4 && gatosSecos.length < 8) {
			secosImg1.src = gatosSecos[gatosSecos.length - 4].img;
			secosBrand1.innerHTML = gatosSecos[gatosSecos.length - 4].brand;
			secosName1.innerHTML = gatosSecos[gatosSecos.length - 4].name;
			secosWeight1.innerHTML = gatosSecos[gatosSecos.length - 4].weight;
			secosImg2.src = gatosSecos[gatosSecos.length - 3].img;
			secosBrand2.innerHTML = gatosSecos[gatosSecos.length - 3].brand;
			secosName2.innerHTML = gatosSecos[gatosSecos.length - 3].name;
			secosWeight2.innerHTML = gatosSecos[gatosSecos.length - 3].weight;
			secosImg3.src = gatosSecos[gatosSecos.length - 2].img;
			secosBrand3.innerHTML = gatosSecos[gatosSecos.length - 2].brand;
			secosName3.innerHTML = gatosSecos[gatosSecos.length - 2].name;
			secosWeight3.innerHTML = gatosSecos[gatosSecos.length - 2].weight;
			secosImg4.src = gatosSecos[gatosSecos.length - 1].img;
			secosBrand4.innerHTML = gatosSecos[gatosSecos.length - 1].brand;
			secosName4.innerHTML = gatosSecos[gatosSecos.length - 1].name;
			secosWeight4.innerHTML = gatosSecos[gatosSecos.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= gatosSecos.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			secosImg1.src = gatosSecos[0].img;
			secosBrand1.innerHTML = gatosSecos[0].brand;
			secosName1.innerHTML = gatosSecos[0].name;
			secosWeight1.innerHTML = gatosSecos[0].weight;
			secosImg2.src = gatosSecos[1].img;
			secosBrand2.innerHTML = gatosSecos[1].brand;
			secosName2.innerHTML = gatosSecos[1].name;
			secosWeight2.innerHTML = gatosSecos[1].weight;
			secosImg3.src = gatosSecos[2].img;
			secosBrand3.innerHTML = gatosSecos[2].brand;
			secosName3.innerHTML = gatosSecos[2].name;
			secosWeight3.innerHTML = gatosSecos[2].weight;
			secosImg4.src = gatosSecos[3].img;
			secosBrand4.innerHTML = gatosSecos[3].brand;
			secosName4.innerHTML = gatosSecos[3].name;
			secosWeight4.innerHTML = gatosSecos[3].weight;
		}
	}
}
productosGatosSecos();
