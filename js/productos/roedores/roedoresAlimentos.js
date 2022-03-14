function productosRoedoresAlimentos() {
	const roedoresAlimentos = [
		{
			img: "img/productos/roedores/alimentos/Imagen146.jpg",
			name: "Ibis Mezcla Para Cobayos - 750gr",
			brand: "Ibis",
			weight: "750gr",
		},
		{
			img: "img/productos/roedores/alimentos/Imagen146.jpg",
			name: "Ibis Conejina - 750gr",
			brand: "Ibis",
			weight: "750gr",
		},
		{
			img: "img/productos/roedores/alimentos/Imagen148.png",
			name: "Cubos de Alfalfa - 500gr",
			brand: "Varias Marcas",
			weight: "500gr",
		},
	];
	const alimentosImg1 = document.getElementById("alimentosImg1");
	const alimentosImg2 = document.getElementById("alimentosImg2");
	const alimentosImg3 = document.getElementById("alimentosImg3");

	const alimentosBrand1 = document.getElementById("alimentosBrand1");
	const alimentosBrand2 = document.getElementById("alimentosBrand2");
	const alimentosBrand3 = document.getElementById("alimentosBrand3");

	const alimentosName1 = document.getElementById("alimentosName1");
	const alimentosName2 = document.getElementById("alimentosName2");
	const alimentosName3 = document.getElementById("alimentosName3");

	const alimentosWeight1 = document.getElementById("alimentosWeight1");
	const alimentosWeight2 = document.getElementById("alimentosWeight2");
	const alimentosWeight3 = document.getElementById("alimentosWeight3");
	alimentosImg1.src = roedoresAlimentos[0].img;
	alimentosImg2.src = roedoresAlimentos[1].img;
	alimentosImg3.src = roedoresAlimentos[2].img;
	alimentosBrand1.innerHTML = roedoresAlimentos[0].brand;
	alimentosBrand2.innerHTML = roedoresAlimentos[1].brand;
	alimentosBrand3.innerHTML = roedoresAlimentos[2].brand;
	alimentosName1.innerHTML = roedoresAlimentos[0].name;
	alimentosName2.innerHTML = roedoresAlimentos[1].name;
	alimentosName3.innerHTML = roedoresAlimentos[2].name;
	alimentosWeight1.innerHTML = roedoresAlimentos[0].weight;
	alimentosWeight2.innerHTML = roedoresAlimentos[1].weight;
	alimentosWeight3.innerHTML = roedoresAlimentos[2].weight;
}
productosRoedoresAlimentos();
