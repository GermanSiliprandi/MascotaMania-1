function productosPerrosHumedos() {
	const perrosHumedos = [
		{
			img: "img/productos/perros/alimentosHumedos/Imagen56.jpg",
			name: "Lata Eukanuba Pollo y Arroz - 355gr",
			brand: "Eukanuba",
			weight: "335gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen57.jpg",
			name: "Pouch Optimum Perro Mediano y Grande - 100gr",
			brand: "Optimum",
			weight: "100gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen58.jpg",
			name: "Pouch Optimum Perro Raza Pequeña - 100gr",
			brand: "Optimum",
			weight: "100gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen59.jpg",
			name: "Pouch Optimum Perro Cachorro - 100gr",
			brand: "Optimum",
			weight: "100gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen60.jpg",
			name: "Pouch Royal Canin para Perro Mini Adulto - 85 Gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen61.jpg",
			name: "Pouch Royal Canin para Perro Adulto Mediano - 140 Gr",
			brand: "Royal Canin",
			weight: "140gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen62.jpg",
			name: "Pouch Royal Canin Gastrointestinal - 85gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen63.jpg",
			name: "Pouch Royal Canin para Perro Mini Ageing 12+ - 85 Gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen64.jpg",
			name: "Pouch Royal Canin Canine Care Nutrition Exigent - 85 Gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen65.jpg",
			name: "Pouch Royal Canin para Dachshund Adulto - 85 Gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen66.jpg",
			name: "Pouch Royal Canin Canine Care Nutrition Dermaconfort - 85 Gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/perros/alimentosHumedos/Imagen67.jpg",
			name: "Pouch Royal Canin Care Nutrition Weight Care - 85 Gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
	];
	function increaseProducts(index) {
		humedosImg1.src = perrosHumedos[index].img;
		humedosImg2.src = perrosHumedos[index + 1].img;
		humedosImg3.src = perrosHumedos[index + 2].img;
		humedosImg4.src = perrosHumedos[index + 3].img;
		humedosBrand1.innerHTML = perrosHumedos[index].brand;
		humedosBrand2.innerHTML = perrosHumedos[index + 1].brand;
		humedosBrand3.innerHTML = perrosHumedos[index + 2].brand;
		humedosBrand4.innerHTML = perrosHumedos[index + 3].brand;
		humedosName1.innerHTML = perrosHumedos[index].name;
		humedosName2.innerHTML = perrosHumedos[index + 1].name;
		humedosName3.innerHTML = perrosHumedos[index + 2].name;
		humedosName4.innerHTML = perrosHumedos[index + 3].name;
		humedosWeight1.innerHTML = perrosHumedos[index].weight;
		humedosWeight2.innerHTML = perrosHumedos[index + 1].weight;
		humedosWeight3.innerHTML = perrosHumedos[index + 2].weight;
		humedosWeight4.innerHTML = perrosHumedos[index + 3].weight;
	}
	function decreaseProducts(index) {
		humedosImg1.src = perrosHumedos[index - 4].img;
		humedosImg2.src = perrosHumedos[index - 3].img;
		humedosImg3.src = perrosHumedos[index - 2].img;
		humedosImg4.src = perrosHumedos[index - 1].img;
		humedosBrand1.innerHTML = perrosHumedos[index - 4].brand;
		humedosBrand2.innerHTML = perrosHumedos[index - 3].brand;
		humedosBrand3.innerHTML = perrosHumedos[index - 2].brand;
		humedosBrand4.innerHTML = perrosHumedos[index - 1].brand;
		humedosName1.innerHTML = perrosHumedos[index - 4].name;
		humedosName2.innerHTML = perrosHumedos[index - 3].name;
		humedosName3.innerHTML = perrosHumedos[index - 2].name;
		humedosName4.innerHTML = perrosHumedos[index - 1].name;
		humedosWeight1.innerHTML = perrosHumedos[index - 4].weight;
		humedosWeight2.innerHTML = perrosHumedos[index - 3].weight;
		humedosWeight3.innerHTML = perrosHumedos[index - 2].weight;
		humedosWeight4.innerHTML = perrosHumedos[index - 1].weight;
	}
	const humedosImg1 = document.getElementById("humedosImg1");
	const humedosImg2 = document.getElementById("humedosImg2");
	const humedosImg3 = document.getElementById("humedosImg3");
	const humedosImg4 = document.getElementById("humedosImg4");
	const humedosBrand1 = document.getElementById("humedosBrand1");
	const humedosBrand2 = document.getElementById("humedosBrand2");
	const humedosBrand3 = document.getElementById("humedosBrand3");
	const humedosBrand4 = document.getElementById("humedosBrand4");
	const humedosName1 = document.getElementById("humedosName1");
	const humedosName2 = document.getElementById("humedosName2");
	const humedosName3 = document.getElementById("humedosName3");
	const humedosName4 = document.getElementById("humedosName4");
	const humedosWeight1 = document.getElementById("humedosWeight1");
	const humedosWeight2 = document.getElementById("humedosWeight2");
	const humedosWeight3 = document.getElementById("humedosWeight3");
	const humedosWeight4 = document.getElementById("humedosWeight4");
	const humedosRightButton = document.getElementById("humedosRightButton");
	const humedosLeftButton = document.getElementById("humedosLeftButton");
	humedosImg1.src = perrosHumedos[0].img;
	humedosImg2.src = perrosHumedos[1].img;
	humedosImg3.src = perrosHumedos[2].img;
	humedosImg4.src = perrosHumedos[3].img;
	humedosBrand1.innerHTML = perrosHumedos[0].brand;
	humedosBrand2.innerHTML = perrosHumedos[1].brand;
	humedosBrand3.innerHTML = perrosHumedos[2].brand;
	humedosBrand4.innerHTML = perrosHumedos[3].brand;
	humedosName1.innerHTML = perrosHumedos[0].name;
	humedosName2.innerHTML = perrosHumedos[1].name;
	humedosName3.innerHTML = perrosHumedos[2].name;
	humedosName4.innerHTML = perrosHumedos[3].name;
	humedosWeight1.innerHTML = perrosHumedos[0].weight;
	humedosWeight2.innerHTML = perrosHumedos[1].weight;
	humedosWeight3.innerHTML = perrosHumedos[2].weight;
	humedosWeight4.innerHTML = perrosHumedos[3].weight;
	humedosRightButton.addEventListener("click", moveRight);
	humedosLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	console.log(perrosHumedos.length);
	function moveRight() {
		if (current >= 0 && current <= perrosHumedos.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > perrosHumedos.length - 8 &&
			current < perrosHumedos.length - 4
		) {
			humedosImg1.src = perrosHumedos[perrosHumedos.length - 4].img;
			humedosBrand1.innerHTML =
				perrosHumedos[perrosHumedos.length - 4].brand;
			humedosName1.innerHTML =
				perrosHumedos[perrosHumedos.length - 4].name;
			humedosWeight1.innerHTML =
				perrosHumedos[perrosHumedos.length - 4].weight;
			humedosImg2.src = perrosHumedos[perrosHumedos.length - 3].img;
			humedosBrand2.innerHTML =
				perrosHumedos[perrosHumedos.length - 3].brand;
			humedosName2.innerHTML =
				perrosHumedos[perrosHumedos.length - 3].name;
			humedosWeight2.innerHTML =
				perrosHumedos[perrosHumedos.length - 3].weight;
			humedosImg3.src = perrosHumedos[perrosHumedos.length - 2].img;
			humedosBrand3.innerHTML =
				perrosHumedos[perrosHumedos.length - 2].brand;
			humedosName3.innerHTML =
				perrosHumedos[perrosHumedos.length - 2].name;
			humedosWeight3.innerHTML =
				perrosHumedos[perrosHumedos.length - 2].weight;
			humedosImg4.src = perrosHumedos[perrosHumedos.length - 1].img;
			humedosBrand4.innerHTML =
				perrosHumedos[perrosHumedos.length - 1].brand;
			humedosName4.innerHTML =
				perrosHumedos[perrosHumedos.length - 1].name;
			humedosWeight4.innerHTML =
				perrosHumedos[perrosHumedos.length - 1].weight;
			current += 4;
		} else if (current >= 4 && perrosHumedos.length < 8) {
			humedosImg1.src = perrosHumedos[perrosHumedos.length - 4].img;
			humedosBrand1.innerHTML =
				perrosHumedos[perrosHumedos.length - 4].brand;
			humedosName1.innerHTML =
				perrosHumedos[perrosHumedos.length - 4].name;
			humedosWeight1.innerHTML =
				perrosHumedos[perrosHumedos.length - 4].weight;
			humedosImg2.src = perrosHumedos[perrosHumedos.length - 3].img;
			humedosBrand2.innerHTML =
				perrosHumedos[perrosHumedos.length - 3].brand;
			humedosName2.innerHTML =
				perrosHumedos[perrosHumedos.length - 3].name;
			humedosWeight2.innerHTML =
				perrosHumedos[perrosHumedos.length - 3].weight;
			humedosImg3.src = perrosHumedos[perrosHumedos.length - 2].img;
			humedosBrand3.innerHTML =
				perrosHumedos[perrosHumedos.length - 2].brand;
			humedosName3.innerHTML =
				perrosHumedos[perrosHumedos.length - 2].name;
			humedosWeight3.innerHTML =
				perrosHumedos[perrosHumedos.length - 2].weight;
			humedosImg4.src = perrosHumedos[perrosHumedos.length - 1].img;
			humedosBrand4.innerHTML =
				perrosHumedos[perrosHumedos.length - 1].brand;
			humedosName4.innerHTML =
				perrosHumedos[perrosHumedos.length - 1].name;
			humedosWeight4.innerHTML =
				perrosHumedos[perrosHumedos.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= perrosHumedos.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			humedosImg1.src = perrosHumedos[0].img;
			humedosBrand1.innerHTML = perrosHumedos[0].brand;
			humedosName1.innerHTML = perrosHumedos[0].name;
			humedosWeight1.innerHTML = perrosHumedos[0].weight;
			humedosImg2.src = perrosHumedos[1].img;
			humedosBrand2.innerHTML = perrosHumedos[1].brand;
			humedosName2.innerHTML = perrosHumedos[1].name;
			humedosWeight2.innerHTML = perrosHumedos[1].weight;
			humedosImg3.src = perrosHumedos[2].img;
			humedosBrand3.innerHTML = perrosHumedos[2].brand;
			humedosName3.innerHTML = perrosHumedos[2].name;
			humedosWeight3.innerHTML = perrosHumedos[2].weight;
			humedosImg4.src = perrosHumedos[3].img;
			humedosBrand4.innerHTML = perrosHumedos[3].brand;
			humedosName4.innerHTML = perrosHumedos[3].name;
			humedosWeight4.innerHTML = perrosHumedos[3].weight;
		}
	}
}
productosPerrosHumedos();
