function productosAvesAlimentos() {
	const avesAlimentos = [
		{
			img: "img/productos/aves/alimentos/Imagen137.jpg",
			name: "Ibis Mijo - 750gr",
			brand: "Ibis",
			weight: "750gr",
		},
		{
			img: "img/productos/aves/alimentos/Imagen138.jpg",
			name: "Ibis Mezcla Para Canarios - 750gr",
			brand: "Ibis",
			weight: "750gr",
		},
	];
	const alimentosImg1 = document.getElementById("alimentosImg1");
	const alimentosImg2 = document.getElementById("alimentosImg2");

	const alimentosBrand1 = document.getElementById("alimentosBrand1");
	const alimentosBrand2 = document.getElementById("alimentosBrand2");

	const alimentosName1 = document.getElementById("alimentosName1");
	const alimentosName2 = document.getElementById("alimentosName2");

	const alimentosWeight1 = document.getElementById("alimentosWeight1");
	const alimentosWeight2 = document.getElementById("alimentosWeight2");

	alimentosImg1.src = avesAlimentos[0].img;
	alimentosImg2.src = avesAlimentos[1].img;

	alimentosBrand1.innerHTML = avesAlimentos[0].brand;
	alimentosBrand2.innerHTML = avesAlimentos[1].brand;

	alimentosName1.innerHTML = avesAlimentos[0].name;
	alimentosName2.innerHTML = avesAlimentos[1].name;

	alimentosWeight1.innerHTML = avesAlimentos[0].weight;
	alimentosWeight2.innerHTML = avesAlimentos[1].weight;
}
productosAvesAlimentos();
