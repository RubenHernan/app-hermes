const carrito  = new Carrito();
//la lista que contiene los productos en el carrito
const listaProd = document.querySelector('#lista');  
//el producto de la vista previa 
const productoCarrito = document.getElementById('Prod');
//botones
const btnVaciar = document.getElementById('vaciar-carrito');
const btnProcesarCompra = document.getElementById('procesar-compra')

cargarEventos();

function cargarEventos(){
		//cuando clickeamos "agregar al carrito" en la vista previa
        productoCarrito.addEventListener('click', (e)=>{carrito.añadircarrito(e)});
        //Cuando eliminamos un producto
        listaProd.addEventListener('click', (e)=>{carrito.eliminarProducto(e)});
        //boton vaciar
        btnVaciar.addEventListener('click',(e)=>{carrito.vaciarCarrito(e)} );
        //leer datos almacenados en LS 
        document.addEventListener('DOMContentLoaded',carrito.leerLS());
        //ir a compra
        btnProcesarCompra.addEventListener('click',(e)=> {carrito.procesarCompra(e)})
        
}