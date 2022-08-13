const check = new Check();
const cart = document.getElementById('cart-totals');

cargarEventos();

function cargarEventos(){
	//muestra vista previa al clickear un producto
	cart.addEventListener('click', (e)=>{check.mostrarCheck(e)});
}