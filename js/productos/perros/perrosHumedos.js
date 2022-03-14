window.onload = function productosPerrosHumedos() {
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
		img1.src = perrosHumedos[index].img;
		img2.src = perrosHumedos[index + 1].img;
		img3.src = perrosHumedos[index + 2].img;
		img4.src = perrosHumedos[index + 3].img;
		brand1.innerHTML = perrosHumedos[index].brand;
		brand2.innerHTML = perrosHumedos[index + 1].brand;
		brand3.innerHTML = perrosHumedos[index + 2].brand;
		brand4.innerHTML = perrosHumedos[index + 3].brand;
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
		img1.src = perrosHumedos[index - 3].img;
		img2.src = perrosHumedos[index - 2].img;
		img3.src = perrosHumedos[index - 1].img;
		img4.src = perrosHumedos[index].img;
		brand1.innerHTML = perrosHumedos[index - 3].brand;
		brand2.innerHTML = perrosHumedos[index - 2].brand;
		brand3.innerHTML = perrosHumedos[index - 1].brand;
		brand4.innerHTML = perrosHumedos[index].brand;
		humedosName1.innerHTML = perrosHumedos[index - 3].name;
		humedosName2.innerHTML = perrosHumedos[index - 2].name;
		humedosName3.innerHTML = perrosHumedos[index - 1].name;
		humedosName4.innerHTML = perrosHumedos[index].name;
		humedosWeight1.innerHTML = perrosHumedos[index - 3].weight;
		humedosWeight2.innerHTML = perrosHumedos[index - 2].weight;
		humedosWeight3.innerHTML = perrosHumedos[index - 1].weight;
		humedosWeight4.innerHTML = perrosHumedos[index].weight;
	}
	const img1 = document.getElementById("humedosImg1");
	const img2 = document.getElementById("humedosImg2");
	const img3 = document.getElementById("humedosImg3");
	const img4 = document.getElementById("humedosImg4");
	const brand1 = document.getElementById("humedosBrand1");
	const brand2 = document.getElementById("humedosBrand2");
	const brand3 = document.getElementById("humedosBrand3");
	const brand4 = document.getElementById("humedosBrand4");
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
	img1.src = perrosHumedos[0].img;
	img2.src = perrosHumedos[1].img;
	img3.src = perrosHumedos[2].img;
	img4.src = perrosHumedos[3].img;
	brand1.innerHTML = perrosHumedos[0].brand;
	brand2.innerHTML = perrosHumedos[1].brand;
	brand3.innerHTML = perrosHumedos[2].brand;
	brand4.innerHTML = perrosHumedos[3].brand;
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

	function moveRight() {
		if (current + 3 < perrosHumedos.length) {
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
			current = perrosHumedos.length;
			decreaseProducts(current);
		}
	}
};
productosPerrosHumedos();
