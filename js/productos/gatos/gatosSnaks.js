function productosGatosSnaks() {
	const gatosSnaks = [
		{
			img: "img/productos/gatos/snaks/Imagen104.jpg",
			name: "Chocolate Negro Innovar para Gato - 20gr",
			brand: "Innovar",
			weight: "20gr",
		},
		{
			img: "img/productos/gatos/snaks/Imagen105.jpg",
			name: "Dr Zoo Tiritas de Atún - 40gr",
			brand: "Dr Zoo",
			weight: "40gr",
		},
	];
	const snaksImg1 = document.getElementById("snaksImg1");
	const snaksImg2 = document.getElementById("snaksImg2");

	const snaksBrand1 = document.getElementById("snaksBrand1");
	const snaksBrand2 = document.getElementById("snaksBrand2");

	const snaksName1 = document.getElementById("snaksName1");
	const snaksName2 = document.getElementById("snaksName2");

	const snaksWeight1 = document.getElementById("snaksWeight1");
	const snaksWeight2 = document.getElementById("snaksWeight2");

	snaksImg1.src = gatosSnaks[0].img;
	snaksImg2.src = gatosSnaks[1].img;

	snaksBrand1.innerHTML = gatosSnaks[0].brand;
	snaksBrand2.innerHTML = gatosSnaks[1].brand;

	snaksName1.innerHTML = gatosSnaks[0].name;
	snaksName2.innerHTML = gatosSnaks[1].name;

	snaksWeight1.innerHTML = gatosSnaks[0].weight;
	snaksWeight2.innerHTML = gatosSnaks[1].weight;
}
productosGatosSnaks();
