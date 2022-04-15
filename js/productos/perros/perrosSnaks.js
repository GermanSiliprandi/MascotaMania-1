function productosPerrosSnaks() {
	const perrosSnaks = [
		{
			img: "img/productos/perros/snaks/Imagen68.jpg",
			name: "Snack Eukanuba Healthy Extras Todas las Razas - 341gr",
			brand: "Eukanuba",
			weight: "341gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen69.jpg",
			name: "Sticks Dr. Zoo Con Gusto A Carne Asada - 200gr",
			brand: "Dr.Zoo",
			weight: "200gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen70.jpg",
			name: "Sticks Dr. Zoo Con Gusto A Cheddar Y Panceta - 200gr",
			brand: "Dr.Zoo",
			weight: "200gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen71.jpg",
			name: "Dr. Zoo Bocaditos Semihumedos De Carne Y Pollo - 200gr",
			brand: "Dr.Zoo",
			weight: "200gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen72.jpg",
			name: "Golocan Bocaditos Finos Carne/Pollo/Chocolate - 100gr",
			brand: "GoloCan",
			weight: "100gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen73.png",
			name: "Palitos De Pollo Golocan Para Perro - 80gr",
			brand: "GoloCan",
			weight: "80gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen74.png",
			name: "Bocaditos Golocan Frutales - 500gr",
			brand: "GoloCan",
			weight: "500gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen75.jpg",
			name: "Huesitos Golocan Con Chips De Carne - 120gr",
			brand: "GoloCan",
			weight: "120gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen76.jpg",
			name: "Biscuits De Pollo Horneado Golocan Para Perro - 120gr",
			brand: "GoloCan",
			weight: "120gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen77.jpg",
			name: "Galletitas Innovar Pepas Carne - 200gr",
			brand: "Innovar",
			weight: "200gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen78.jpg",
			name: "Galletitas Innovar Estrellitas Pollo - 200gr",
			brand: "Innovar",
			weight: "200gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen79.jpg",
			name: "Chocolate Negro Innovar para Perro - 20gr",
			brand: "Innovar",
			weight: "20gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen80.png",
			name: "Snack Mon Ami Dental Clean Sabor Pollo - 400 gr",
			brand: "Mon Ami",
			weight: "400gr",
		},
		{
			img: "img/productos/perros/snaks/Imagen81.png",
			name: "Caja Mon Ami Dental Milk Stick  - 400 gr",
			brand: "Mon Ami",
			weight: "400gr",
		},
	];
	function increaseProducts(index) {
		snaksImg1.src = perrosSnaks[index].img;
		snaksImg2.src = perrosSnaks[index + 1].img;
		snaksImg3.src = perrosSnaks[index + 2].img;
		snaksImg4.src = perrosSnaks[index + 3].img;
		snaksBrand1.innerHTML = perrosSnaks[index].brand;
		snaksBrand2.innerHTML = perrosSnaks[index + 1].brand;
		snaksBrand3.innerHTML = perrosSnaks[index + 2].brand;
		snaksBrand4.innerHTML = perrosSnaks[index + 3].brand;
		snaksName1.innerHTML = perrosSnaks[index].name;
		snaksName2.innerHTML = perrosSnaks[index + 1].name;
		snaksName3.innerHTML = perrosSnaks[index + 2].name;
		snaksName4.innerHTML = perrosSnaks[index + 3].name;
		snaksWeight1.innerHTML = perrosSnaks[index].weight;
		snaksWeight2.innerHTML = perrosSnaks[index + 1].weight;
		snaksWeight3.innerHTML = perrosSnaks[index + 2].weight;
		snaksWeight4.innerHTML = perrosSnaks[index + 3].weight;
	}
	function decreaseProducts(index) {
		snaksImg1.src = perrosSnaks[index - 4].img;
		snaksImg2.src = perrosSnaks[index - 3].img;
		snaksImg3.src = perrosSnaks[index - 2].img;
		snaksImg4.src = perrosSnaks[index - 1].img;
		snaksBrand1.innerHTML = perrosSnaks[index - 4].brand;
		snaksBrand2.innerHTML = perrosSnaks[index - 3].brand;
		snaksBrand3.innerHTML = perrosSnaks[index - 2].brand;
		snaksBrand4.innerHTML = perrosSnaks[index - 1].brand;
		snaksName1.innerHTML = perrosSnaks[index - 4].name;
		snaksName2.innerHTML = perrosSnaks[index - 3].name;
		snaksName3.innerHTML = perrosSnaks[index - 2].name;
		snaksName4.innerHTML = perrosSnaks[index - 1].name;
		snaksWeight1.innerHTML = perrosSnaks[index - 4].weight;
		snaksWeight2.innerHTML = perrosSnaks[index - 3].weight;
		snaksWeight3.innerHTML = perrosSnaks[index - 2].weight;
		snaksWeight4.innerHTML = perrosSnaks[index - 1].weight;
	}
	const snaksImg1 = document.getElementById("snaksImg1");
	const snaksImg2 = document.getElementById("snaksImg2");
	const snaksImg3 = document.getElementById("snaksImg3");
	const snaksImg4 = document.getElementById("snaksImg4");
	const snaksBrand1 = document.getElementById("snaksBrand1");
	const snaksBrand2 = document.getElementById("snaksBrand2");
	const snaksBrand3 = document.getElementById("snaksBrand3");
	const snaksBrand4 = document.getElementById("snaksBrand4");
	const snaksName1 = document.getElementById("snaksName1");
	const snaksName2 = document.getElementById("snaksName2");
	const snaksName3 = document.getElementById("snaksName3");
	const snaksName4 = document.getElementById("snaksName4");
	const snaksWeight1 = document.getElementById("snaksWeight1");
	const snaksWeight2 = document.getElementById("snaksWeight2");
	const snaksWeight3 = document.getElementById("snaksWeight3");
	const snaksWeight4 = document.getElementById("snaksWeight4");
	const snaksRightButton = document.getElementById("snaksRightButton");
	const snaksLeftButton = document.getElementById("snaksLeftButton");
	snaksImg1.src = perrosSnaks[0].img;
	snaksImg2.src = perrosSnaks[1].img;
	snaksImg3.src = perrosSnaks[2].img;
	snaksImg4.src = perrosSnaks[3].img;
	snaksBrand1.innerHTML = perrosSnaks[0].brand;
	snaksBrand2.innerHTML = perrosSnaks[1].brand;
	snaksBrand3.innerHTML = perrosSnaks[2].brand;
	snaksBrand4.innerHTML = perrosSnaks[3].brand;
	snaksName1.innerHTML = perrosSnaks[0].name;
	snaksName2.innerHTML = perrosSnaks[1].name;
	snaksName3.innerHTML = perrosSnaks[2].name;
	snaksName4.innerHTML = perrosSnaks[3].name;
	snaksWeight1.innerHTML = perrosSnaks[0].weight;
	snaksWeight2.innerHTML = perrosSnaks[1].weight;
	snaksWeight3.innerHTML = perrosSnaks[2].weight;
	snaksWeight4.innerHTML = perrosSnaks[3].weight;
	snaksRightButton.addEventListener("click", moveRight);
	snaksLeftButton.addEventListener("click", moveLeft);
	let current = 0;
	console.log(perrosSnaks.length);
	function moveRight() {
		if (current >= 0 && current <= perrosSnaks.length - 8) {
			current += 4;
			increaseProducts(current);
		} else if (
			current > perrosSnaks.length - 8 &&
			current < perrosSnaks.length - 4
		) {
			snaksImg1.src = perrosSnaks[perrosSnaks.length - 4].img;
			snaksBrand1.innerHTML = perrosSnaks[perrosSnaks.length - 4].brand;
			snaksName1.innerHTML = perrosSnaks[perrosSnaks.length - 4].name;
			snaksWeight1.innerHTML = perrosSnaks[perrosSnaks.length - 4].weight;
			snaksImg2.src = perrosSnaks[perrosSnaks.length - 3].img;
			snaksBrand2.innerHTML = perrosSnaks[perrosSnaks.length - 3].brand;
			snaksName2.innerHTML = perrosSnaks[perrosSnaks.length - 3].name;
			snaksWeight2.innerHTML = perrosSnaks[perrosSnaks.length - 3].weight;
			snaksImg3.src = perrosSnaks[perrosSnaks.length - 2].img;
			snaksBrand3.innerHTML = perrosSnaks[perrosSnaks.length - 2].brand;
			snaksName3.innerHTML = perrosSnaks[perrosSnaks.length - 2].name;
			snaksWeight3.innerHTML = perrosSnaks[perrosSnaks.length - 2].weight;
			snaksImg4.src = perrosSnaks[perrosSnaks.length - 1].img;
			snaksBrand4.innerHTML = perrosSnaks[perrosSnaks.length - 1].brand;
			snaksName4.innerHTML = perrosSnaks[perrosSnaks.length - 1].name;
			snaksWeight4.innerHTML = perrosSnaks[perrosSnaks.length - 1].weight;
			current += 4;
		} else if (current >= 4 && perrosSnaks.length < 8) {
			snaksImg1.src = perrosSnaks[perrosSnaks.length - 4].img;
			snaksBrand1.innerHTML = perrosSnaks[perrosSnaks.length - 4].brand;
			snaksName1.innerHTML = perrosSnaks[perrosSnaks.length - 4].name;
			snaksWeight1.innerHTML = perrosSnaks[perrosSnaks.length - 4].weight;
			snaksImg2.src = perrosSnaks[perrosSnaks.length - 3].img;
			snaksBrand2.innerHTML = perrosSnaks[perrosSnaks.length - 3].brand;
			snaksName2.innerHTML = perrosSnaks[perrosSnaks.length - 3].name;
			snaksWeight2.innerHTML = perrosSnaks[perrosSnaks.length - 3].weight;
			snaksImg3.src = perrosSnaks[perrosSnaks.length - 2].img;
			snaksBrand3.innerHTML = perrosSnaks[perrosSnaks.length - 2].brand;
			snaksName3.innerHTML = perrosSnaks[perrosSnaks.length - 2].name;
			snaksWeight3.innerHTML = perrosSnaks[perrosSnaks.length - 2].weight;
			snaksImg4.src = perrosSnaks[perrosSnaks.length - 1].img;
			snaksBrand4.innerHTML = perrosSnaks[perrosSnaks.length - 1].brand;
			snaksName4.innerHTML = perrosSnaks[perrosSnaks.length - 1].name;
			snaksWeight4.innerHTML = perrosSnaks[perrosSnaks.length - 1].weight;
		}
	}
	function moveLeft() {
		if (current >= 4 && current <= perrosSnaks.length - 1) {
			decreaseProducts(current);
			current -= 4;
		} else {
			snaksImg1.src = perrosSnaks[0].img;
			snaksBrand1.innerHTML = perrosSnaks[0].brand;
			snaksName1.innerHTML = perrosSnaks[0].name;
			snaksWeight1.innerHTML = perrosSnaks[0].weight;
			snaksImg2.src = perrosSnaks[1].img;
			snaksBrand2.innerHTML = perrosSnaks[1].brand;
			snaksName2.innerHTML = perrosSnaks[1].name;
			snaksWeight2.innerHTML = perrosSnaks[1].weight;
			snaksImg3.src = perrosSnaks[2].img;
			snaksBrand3.innerHTML = perrosSnaks[2].brand;
			snaksName3.innerHTML = perrosSnaks[2].name;
			snaksWeight3.innerHTML = perrosSnaks[2].weight;
			snaksImg4.src = perrosSnaks[3].img;
			snaksBrand4.innerHTML = perrosSnaks[3].brand;
			snaksName4.innerHTML = perrosSnaks[3].name;
			snaksWeight4.innerHTML = perrosSnaks[3].weight;
		}
	}
}
productosPerrosSnaks();
