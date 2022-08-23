// MOSTRAR PRODUCTOS

const stock = document.getElementById("card-ind");

let ropita = [];

const mostrar = () => {
    fetch('./stock.json')
        .then(respuesta => respuesta.json())
        .then(resultado => {
        
            let muestraRemera = resultado.find(product => product.tipo == "remera");
            ropita.push(muestraRemera); 

            let muestraBuzo = resultado.find(product => product.tipo == "buzo");
            ropita.push(muestraBuzo);

            let muestraJogger = resultado.find(product => product.tipo == "jogger");
            ropita.push(muestraJogger);

            ropita.forEach(item => {
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