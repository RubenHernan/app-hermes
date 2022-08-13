const vista = new Vista();
const productos = document.getElementById('listaProductos');

cargarEventos();

function cargarEventos(){
	//muestra vista previa al clickear un producto
	productos.addEventListener('click', (e)=>{vista.mostrarVista(e)});
}