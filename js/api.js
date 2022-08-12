//DOM 

const boton = document.getElementById("botoncito");
const disenios = document.getElementById("fetch");

//EVENTO

let cont = 0;

boton.onclick = () => {
    cont = cont + 1;
    generarDisenio();
}

//FETCH 
let nuevos = [];

const generarDisenio = () => {
    fetch('./disenios.json')
        .then(respuesta => respuesta.json())
        .then(resultado => {
            let productos = resultado;

            let mostrar = productos.find(product => product.id == cont);
            nuevos.push(mostrar);

            nuevos.forEach(product => {
                disenios.innerHTML += `<div "id" = ${product.id} class = 'col-lg-4 mb-3'>
                <div class="card">
                <div class="card-body">
                        <h3 class="card-tittle">${product.tipo} ${product.nombre}</h3>
                        <p>${product.lugar}</p>
                    </div>
                    <div class="img-container">
                        <img src= ${product.img} class="image card-img-top">
                    </div>
                </div>
                </div>`
            })
            nuevos.pop();
        })
}