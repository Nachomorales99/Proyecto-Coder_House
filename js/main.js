//Mostrar Productos

let mostrarRemeras = (stockRemeras) => {

    let contenedorProductos = document.getElementById('card-ind');

    stockRemeras.forEach(item => {
        let div = document.createElement('div')
        div.className = 'col-lg-4 mb-3'
        div.innerHTML += `<div class="card">
            <div class="img-container">
                <img src=${item.img} alt="Basic" class="image card-img-top" data-aos="fade-up">
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

        contenedorProductos.appendChild(div)

        let botton = document.getElementById(`button${item.id}`)
        botton.addEventListener("click",()=>{
            cart(item.id);
            alert(`Agregaste ${item.nombre}`)
        })
    })
}

mostrarRemeras(stockRemeras);