function productosGatosHumedos() {
	const gatosHumedos = [
		{
			img: "img/productos/gatos/alimentosHumedos/Imagen101.jpg",
			name: "Pouch Royal Canin Kitten para Gato - 85gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/gatos/alimentosHumedos/Imagen102.jpg",
			name: "Royal Canin Catpouch Ageing 12+ - 85gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
		{
			img: "img/productos/gatos/alimentosHumedos/Imagen103.jpg",
			name: "Pouch Royal Canin Digest Sensitive - 85gr",
			brand: "Royal Canin",
			weight: "85gr",
		},
	];
	const humedosImg1 = document.getElementById("humedosImg1");
	const humedosImg2 = document.getElementById("humedosImg2");
	const humedosImg3 = document.getElementById("humedosImg3");

	const humedosBrand1 = document.getElementById("humedosBrand1");
	const humedosBrand2 = document.getElementById("humedosBrand2");
	const humedosBrand3 = document.getElementById("humedosBrand3");

	const humedosName1 = document.getElementById("humedosName1");
	const humedosName2 = document.getElementById("humedosName2");
	const humedosName3 = document.getElementById("humedosName3");

	const humedosWeight1 = document.getElementById("humedosWeight1");
	const humedosWeight2 = document.getElementById("humedosWeight2");
	const humedosWeight3 = document.getElementById("humedosWeight3");
	humedosImg1.src = gatosHumedos[0].img;
	humedosImg2.src = gatosHumedos[1].img;
	humedosImg3.src = gatosHumedos[2].img;
	humedosBrand1.innerHTML = gatosHumedos[0].brand;
	humedosBrand2.innerHTML = gatosHumedos[1].brand;
	humedosBrand3.innerHTML = gatosHumedos[2].brand;
	humedosName1.innerHTML = gatosHumedos[0].name;
	humedosName2.innerHTML = gatosHumedos[1].name;
	humedosName3.innerHTML = gatosHumedos[2].name;
	humedosWeight1.innerHTML = gatosHumedos[0].weight;
	humedosWeight2.innerHTML = gatosHumedos[1].weight;
	humedosWeight3.innerHTML = gatosHumedos[2].weight;
}
productosGatosHumedos();
