//DOM 

const boton = document.getElementById("botoncito");
const disenios = document.getElementById("fetch"); 

//EVENTO

boton.onclick = () => {
    generarDisenio();
}

//FETCH 

const generarDisenio = () => {
    fetch('./disenios.json')
        .then(respuesta => respuesta.json())
        .then(resultado => {
            let productos = resultado;
            productos.forEach(product => {
                disenios.innerHTML += `<div "id" = ${product.id}>
            <h3>${product.tipo} ${product.nombre}</h3> 
            <p>${product.lugar}</p>
            <img class = "card" src= ${product.img} ></img>
            </div>`
            })
        })
        .catch(error => console.log(error))
}
