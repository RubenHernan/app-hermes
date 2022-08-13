
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function(){
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity','0');
    });

    $('.js-hide-modal-search').on('click', function(){
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity','1');
    });

    $('.container-search-header').on('click', function(e){
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }    
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }    
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });


    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================  
    [ Show modal1 ]
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
    });

 */

})(jQuery);

class Vista{

    mostrarVista(e){
        e.preventDefault();
            if(e.target.classList.contains('js-show-modal1')){
                const producto = e.target.parentElement.parentElement;
                this.leerDatosProducto(producto);

                //console.log(producto);
            }
    }

    leerDatosProducto(producto){
       const infoProduc ={
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h6').textContent,
            precio: producto.querySelector('span').textContent,
            id: producto.querySelector('a').getAttribute('data-id')
       }
       this.insertarDatos(infoProduc);
    }


    insertarDatos(producto){
        document.getElementById("img1").src=producto.imagen;
        document.getElementById("nombre").innerHTML = producto.titulo;
        document.getElementById("precio").innerHTML = producto.precio;
        document.getElementById("addCart").setAttribute("data-id", producto.id);
        $('.js-modal1').addClass('show-modal1');


        //ocultar vista previa
        $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
        });



    }


}


class Check{

    mostrarCheck(e){
        e.preventDefault();
            if(e.target.classList.contains('show-check')){
                const producto = e.target.parentElement.parentElement;
                this.leerDatosProducto(producto);
            }
    }

    leerDatosProducto(producto){
       const infoProduc ={
            precio: document.getElementById('total').textContent
       }
       if(infoProduc.precio == 0){
          swal("Carrito vacío" ,"Agrega productos", "error");
       }else{
        this.insertarDatos(infoProduc);

       }
    }


    insertarDatos(producto){

        document.getElementById("precio-check").innerHTML = producto.precio;

        $('.js-modal2').addClass('show-modal1');


        //ocultar vista previa
        $('.js-hide-modal2').on('click',function(){
        $('.js-modal2').removeClass('show-modal1');
        });



    }


}

class  Carrito{

        añadircarrito(e){
            //console.log(e.target.classList.contains('js-addcart-detail'));
             e.preventDefault();
            if(e.target.classList.contains('js-addcart-detail')){
                const producto = e.target.parentElement.parentElement;
                this.leerDatosProducto(producto);
                
            }
        }

        leerDatosProducto(producto){
                    
            const infoProduc ={
                    imagen: document.getElementById('img1').src,
                    titulo: document.getElementById('nombre').textContent,
                    precio: document.getElementById('precio').textContent,
                    cantidad: document.getElementById('num-product').value,
                    id: document.getElementById('addCart').getAttribute('data-id')

             }
             let productosLS, idC;
             productosLS = this.obtenerProductoLS();
             productosLS.forEach(function(productoLS){
                if(productoLS.id === infoProduc.id){
                    idC = productoLS.id
                }
             });

            if (idC === infoProduc.id) {
                swal("Alto ahi rufian" ,"Producto ya agregado", "warning");
            }

             else{
                this.agregarCarrito(infoProduc);
             }
            }



            agregarCarrito(producto){
                if(producto.cantidad != 0){
                const li = document.createElement('ul');
                li.innerHTML = `
                    
                        <li class="header-cart-item flex-w flex-t m-b-12">
                        <div class="header-cart-item-img"></a>
                            <a href="#" class="borrar-producto" data-id="${producto.id}"></a>
                            <img src="${producto.imagen}" alt="IMG">
                            
                        </div>

                        <div class="header-cart-item-txt p-t-8">
                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                ${producto.titulo}
                            </a>

                            <span class="header-cart-item-info" data-subtotal="${producto.cantidad * producto.precio}">
                                ${producto.cantidad} x ${producto.precio} 
                            </span>
                        </div>
                        </li>
                        
                `;
                listaProd.appendChild(li);
                this.guardarProductoLS(producto);
                actualizarNumero();
                calcularTotal();


         

       
                 swal(producto.titulo, "Se ha añadido a tu carrito!", "success");
            

                  


                }else{

                    swal("Alto ahi rufian" ,"Agregue cantidad", "warning");
                
                }
          }

        eliminarProducto(e){
            //console.log(e.target.classList.contains('borrar-producto'));
            e.preventDefault();
            let producto, productoID;
            if(e.target.classList.contains('borrar-producto')){
                e.target.parentElement.parentElement.parentElement.remove();
                producto = e.target.parentElement.parentElement.parentElement;
                productoID = producto.querySelector('a').getAttribute('data-id');
                this.eliminarProductoLS(productoID);
                actualizarNumero();
                calcularTotal();
            }
        }

        vaciarCarrito(e){
            e.preventDefault();
            while(listaProd.firstChild){
                listaProd.removeChild(listaProd.firstChild);
                actualizarNumero();
                calcularTotal();
            }
            this.vaciarLS();
            return false;
        }

        guardarProductoLS(producto){
            let productos;
            productos = this.obtenerProductoLS();
            productos.push(producto);
            localStorage.setItem('productos',JSON.stringify(productos));

        }

        obtenerProductoLS(){
            let productoLS;
            if(localStorage.getItem('productos')===null){
                productoLS = [];
            }
            else{
                productoLS = JSON.parse(localStorage.getItem('productos'));
            }
            return productoLS;
        }

        eliminarProductoLS(productoID){
            let productosLS;
            productosLS = this.obtenerProductoLS();
            productosLS.forEach(function(productoLS,index){
                if(productoLS.id === productoID){
                    productosLS.splice(index,1);
                }
            });
            localStorage.setItem('productos',JSON.stringify(productosLS))
        }

        //para leer productos a pesar de cargar la pag
        leerLS(){
            let productosLS;
            productosLS = this.obtenerProductoLS();
            productosLS.forEach(function(producto){
                const li = document.createElement('ul');
                li.innerHTML = `
                    
                        <li class="header-cart-item flex-w flex-t m-b-12">
                        <div class="header-cart-item-img"></a>
                            <a href="#" class="borrar-producto" data-id="${producto.id}"></a>
                            <img src="${producto.imagen}" alt="IMG">
                            
                        </div>

                        <div class="header-cart-item-txt p-t-8">
                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                ${producto.titulo}
                            </a>

                            <span class="header-cart-item-info" data-subtotal="${producto.cantidad * producto.precio}">
                                ${producto.cantidad} x ${producto.precio} 
                            </span>
                        </div>
                        </li>
                        
                `;
                listaProd.appendChild(li);    
                actualizarNumero();
                calcularTotal();

            });

        }

        vaciarLS(){
            localStorage.clear();
        }

        procesarCompra(e){
            e.preventDefault();
            if(this.obtenerProductoLS().length === 0){
                swal("Carrito vacío" ,"Agrega productos", "error");
            }
            else{
                location.href = "/shoping-cart";
            }
        }

        leerLSCompra(){
            let productosLS;
            productosLS = this.obtenerProductoLS();
            productosLS.forEach(function(producto){
                const row = document.createElement('tr');
                row.classList.add('table_row');
                row.innerHTML = `
                    <td class="column-1">
                        <div class="how-itemcart1">
                            <a href="#" class="borrar-producto-c" data-id="${producto.id}"></a>
                            <img src="${producto.imagen}" alt="IMG">
                        </div>
                    </td>
                    <td class="column-2">${producto.titulo}</td>
                    <td class="column-3">$${producto.precio}</td>
                    <td class="column-4">${producto.cantidad}</td>
                    <td class="column-5">$${(producto.precio * producto.cantidad).toFixed(2)}</td>

                `;
                listaCompra.appendChild(row);
            });
        }

        eliminarProductoCompra(e){
            e.preventDefault();
            let producto, productoID;
            if(e.target.classList.contains('borrar-producto-c')){
                e.target.parentElement.parentElement.parentElement.remove();
                producto = e.target.parentElement.parentElement.parentElement;
                productoID = producto.querySelector('a').getAttribute('data-id');
                this.eliminarProductoLS(productoID);
                this.calcularTotalCarro();
            }
        }

        calcularTotalCarro(){
            let productoLS;
            let total = 0, subtotal = 0, igv = 0;
            productoLS = this.obtenerProductoLS();
            for(let i =0;i< productoLS.length; i++ ){
                let element = Number(productoLS[i].precio * productoLS[i].cantidad);
                total = total + element;
            }
            igv = parseFloat(total * 0.18).toFixed(2);
            subtotal = parseFloat(total-igv).toFixed(2);

            document.getElementById('subtotal').innerHTML = '$'+subtotal;
            document.getElementById('igv').innerHTML = '$'+igv;
            document.getElementById('total').innerHTML =  total.toFixed(2);
        }

}




   //icono carrito

   function actualizarNumero(){

    el=document.querySelector('#lista');
    els=el.getElementsByTagName('li');
    var b = document.getElementById('iconCarrito');
    //window.alert(els.length);
    b.setAttribute("data-notify", els.length);



   }

//calcula el monto total del carrito
function calcularTotal(){
    
    var subT = 0;

    el=document.querySelector('#lista');
    els=el.getElementsByTagName('li');
    if(els.length != 0){
    for(let i=0; i<els.length; i++){
        subT += Number(els[i].querySelector('span').getAttribute('data-subtotal'));
        //console.log(els[i].querySelector('span').getAttribute('data-subtotal'))
        document.getElementById("totalCarrito").innerHTML ="Total: $" + subT.toFixed(2);
    }
    }else{
        document.getElementById("totalCarrito").innerHTML ="Total: $00.00";
    }
    
   }


//pago validaciones


function showContent() {
        var element = document.getElementById("smart-button-container");
        var nombre = document.getElementById('nombre').value;
        if(nombre.trim().length == 0) {
            element.style.display='none';
            return;
        }
        var correo = document.getElementById('correo').value;
        if(correo.trim().length == 0) {
            element.style.display='none';    
            return;
        }
        var direccion = document.getElementById('direccion').value;
        if(direccion.trim().length == 0) {
            element.style.display='none';
            return;
        }
 
        element.style.display='block';

}



