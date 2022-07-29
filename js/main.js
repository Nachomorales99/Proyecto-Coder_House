//Mostrar Productos

let contenedorProductos = document.getElementById('card-ind')

mostrarRemeras();

function mostrarRemeras() {
    stockRemeras.forEach(item => {
        let div = document.createElement('div')
        div.className = 'col-lg-4 mb-3'
        div.innerHTML = `<div class="card">
            <div class="img-container">
                <img src=${item.img} alt="Basic" class="image card-img-top" data-aos="fade-up">
                <div class="overlay">
                    <button id="boton ${item.id}" class="btn btn-outline-secondary btn-sm"><i
                            class="fas fa-shopping-cart mr-2">Agregar al carrito</i></button>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-tittle">${item.nombre}</h5>
                <h6 class="card-subtitle mb-2">$${item.precio}</h6>
                <p class="card-text">${item.desc}</p>
            </div>
        </div>`

        contenedorProductos.appendChild(div)

        // let boton = document.getElementById(`boton${item.id}`)
        // boton.addEventListener("click",()=>{
        //     cart(item.id);
        //     alert(`Agregaste ${item.nombre}`)
        // })
    })
}

//Agregar elementos al carrito

let carritoDeCompras = [] 

let cart = (itemId) =>{
    let contenedorCarrito = document.getElementById('contenedor-carrito');
    let mostrarEnCarrito = () => {
        let producto = stockRemeras.find(producto => producto.id == itemId)

        carritoDeCompras.push(producto);
        localStorage.setItem("stockRemeras",JSON.stringify(carritoDeCompras));

        let div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `<p>${item.nombre}</p> 
        <p>Precio: ${item.precio}</p>
        <p id="quantity${item.id}">Quantity</p>
        <button class="btn btn-danger btn-sm" id="delete${item.id}">X</button>`
    
        contenedorCarrito.appendChild(div);
        let buttonDelete = document.getElementById(`delete${item.id}`);
        buttonDelete.addEventListener("click",(e)=>{
            borrarProducto(e);
        })
    }
    mostrarEnCarrito();
}

let contadorCarrito = document.getElementById('contador-carrito')
let total = document.getElementById('precioTotal')

//Quitar elementos al carrito

function borrarProducto(e){
    let btnClicked = e.target;
    btnClicked.parentElement.remove()
}

//Actualizar elementos al carrito

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    total.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}  