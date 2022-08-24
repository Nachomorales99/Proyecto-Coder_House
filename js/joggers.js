//MOSTRAR PRODUCTOS

const stock = document.getElementById("card-ind");

let buscarJogger = [];

const mostrar = () => {
    fetch('../stock.json')
        .then(respuesta => respuesta.json())
        .then(resultado => {

            buscarJogger = resultado.filter(product => product.tipo == "jogger");

            buscarJogger.forEach(item => {
                let div = document.createElement('div')
                div.className = 'col-lg-4 mb-3'
                div.innerHTML += `<div class="card">
            <div class="img-container">
                <img src=${item.img} alt="Basic" class="image card-img-top">
                <div class="overlay">
                    <button class="btn btn-outline-secondary btn-sm" id="button${item.id}"><i
                            class="fas fa-shopping-cart mr-2">Agregar al carrito</i></button>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-tittle">${item.nombre}</h5>
                <h6 class="card-subtitle mb-2">$${item.precio}</h6>
                <p class="card-text">${item.desc}</p>
            </div>
        </div>`

                stock.appendChild(div)

                const botton = document.getElementById(`button${item.id}`)

                botton.addEventListener("click", () => {

                    cart(item.id);

                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `Agregaste ${item.nombre}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            })
        })
}

mostrar();

//Agregar elementos al carrito 

let carritoDeCompras = []

let cart = (itemId) => {
    let contenedorCarrito = document.getElementById('contenedor-carrito');

    let mostrarEnCarrito = () => {
        let item = buscarJogger.find(item => item.id == itemId)

        carritoDeCompras.push(item); 
        localStorage.setItem("stockInd", JSON.stringify(carritoDeCompras));

        let div = document.createElement("div");
        div.classList.add("productoEnCarrito");
        div.innerHTML = `<p>${item.nombre}</p> 
        <img src="${item.img}" class = "card"></img>
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