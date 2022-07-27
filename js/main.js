let carritoDeCompras = []

let contenedorRemeras = document.getElementById('card-ind')
let contenedorCarrito = document.getElementById('contenedor-carrito')
let contadorCarrito = document.getElementById('contador-carrito')
let total = document.getElementById('precioTotal')

mostrarRemeras(stockRemeras)

function mostrarRemeras() {
    stockRemeras.forEach(item => {
        let div = document.createElement('div')
        div.className = 'ind'
        div.innerHTML = `<div class="card" id=${item.id}>
                <img class="imagen" src="${item.img}"
                    class="image card-img-top" data-aos="fade-up">
                <h5 class="card-tittle">${item.nombre}</h5>
                <h6 class="precio card-subtitle mb-2">$${item.precio}</h6>
                <p class="card-text">${item.desc}</p>
                <button class="agregar btn btn-outline-secondary btn-sm"><i class="fas fa-shopping-cart mr-2">Agregar al carrito</i></button>
            </div>`

        contenedorRemeras.appendChild(div)
    })
}

//agregar elementos al carrito
let agregarAlCarro = document.getElementsByClassName("agregar");
for (let boton of agregarAlCarro) {
    boton.addEventListener("click", datos)
}

function datos(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id");
    let prodNombre = producto.querySelector("h5").innerText;
    let prodPrecio = producto.querySelector("h6").innerText;
    let prodImagen = producto.querySelector(".imagen").src;

    agregarProd(prodID, prodNombre, prodPrecio, prodImagen)
}

function agregarProd(prodID, prodNombre, prodPrecio, prodImagen) {
    let contCarrito = document.createElement("div");
    let contenedorProductos = document.querySelector(".offcanvas-body");

    let elemProducto = `<div class="cart" id="${prodID}"> 
    <p bg-white>${prodNombre}</p>
    <p bg-white>Precio: $${prodPrecio}</p>
    <img src="${prodImagen}">
    <button class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button> 
    </div>
    <button class="purchase-btn">COMPRAR</button>`
    contCarrito.innerHTML = elemProducto;
    contenedorProductos.append(contCarrito);

    let botonesBorrar = contCarrito.querySelectorAll(".boton-eliminar");
    for (let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
    actualizarCarrito();
}

function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito()
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    total.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
} 