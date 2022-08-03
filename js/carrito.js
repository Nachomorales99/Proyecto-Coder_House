//Agregar elementos al carrito 

let carritoDeCompras = []

let cart = (itemId) => {
    let contenedorCarrito = document.getElementById('contenedor-carrito');
    let mostrarEnCarrito = () => {
        let item = stockRemeras.find(item => item.id == itemId)

        carritoDeCompras.push(item);
        localStorage.setItem("stockRemeras", JSON.stringify(carritoDeCompras));

        let div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `<p>${item.nombre}</p> 
        <img src="${item.img}"></img>
        <p>Precio: ${item.precio}</p>
        <button class="btn btn-danger btn-sm" id="delete${item.id}">X</button>`

        contenedorCarrito.appendChild(div);

        let buttonDelete = document.getElementById(`delete${item.id}`);
        buttonDelete.addEventListener("click", (e) => {
            borrarProducto(e);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: `Quitaste ${item.nombre}`,
                showConfirmButton: false,
                timer: 1500
            })  
        })
        actualizarCarrito()
    }
    mostrarEnCarrito();
}

//Quitar elementos al carrito

function borrarProducto(e) {
    let btnClicked = e.target;
    btnClicked.parentElement.remove()
    carritoDeCompras.shift();
    actualizarCarrito()
}

//Acualizar Carrito

function actualizarCarrito() {
    let contadorCarrito = document.getElementById('contador-carrito');
    contadorCarrito.innerText = carritoDeCompras.length

    let total = document.getElementById('precioTotal')
    total.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}