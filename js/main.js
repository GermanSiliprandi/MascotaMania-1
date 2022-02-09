const jsBody = document.querySelector('#js');
const addDiv = document.querySelector('#add');

const divRosa = () => {
  divR = document.createElement('div');
  divR.classList.add('rosa');
  return divR
}

const divBlanco = () => {
  divB = document.createElement('div');
  divB.classList.add('blanco');
  return divB
}

/*-----------------------------------------------------------------------------
------------------------------FUNCIONES----------------------------------------
-----------------------------------------------------------------------------*/

//Funcion ocultar contenido index
function hide () {
  jsBody.remove();
}

//Funcion para Mascotas
function perros () {
  hide();
  addDiv.classList.remove('hidden');

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Carga de página
document.addEventListener('DOMContentLoaded', () => {
  console.log("cargado")
});