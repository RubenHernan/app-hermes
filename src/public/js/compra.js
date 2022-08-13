const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra');
const carro = document.getElementById('carro');

cargarEventos();

function cargarEventos(){

	document.addEventListener('DOMContentLoaded',compra.leerLSCompra());
	carro.addEventListener('click',(e)=> compra.eliminarProductoCompra(e))
	compra.calcularTotalCarro();
}