alert("Bienvenido a Black Owl Streetwear");

let num, resp, color, talle, diseño, precioTotal, cantRemeras, formaDePago, pago;
let carrito = [];
let precio = 2500,
    iva = 1.21,
    consul = " "; 

alert("¿Que diseño desea agregar al carrito?");

resp = "s";

while ((resp != "N") && (resp != "n")) {

    num = parseInt(prompt("Ingrese el numero del diseño que desea: 1-TIGER  2-CLASSIC  3-BIB  4-BROKEN  5-KIDS  6-TYPE  7-4.20  8-FOREVER  9-CHILL"));

    switch (num) {
        case 1:

            producto();

            let tiger = {
                diseño: "Tiger",
                color,
                talle,
                precio
            }
            carrito.push(tiger);

            alert("Agrego el diseño Tiger");
            console.log(tiger);

            break;

        case 2:

            producto();

            let classic = {
                diseño: "Classic",
                color,
                talle,
                precio
            }
            carrito.push(classic);

            alert("Agrego el diseño Classic");
            console.log(classic);

            break;

        case 3:

            producto();

            let bib = {
                diseño: "BIB",
                color,
                talle,
                precio
            }
            carrito.push(bib);

            alert("Agrego el diseño BIB");
            console.log(bib);

            break;

        case 4:

            producto();

            let broken = {
                diseño: "Broken",
                color,
                talle,
                precio
            }
            carrito.push(broken);

            alert("Agrego el diseño Broken");
            console.log(broken);

            break;

        case 5:

            producto();

            let kids = {
                diseño: "Kids",
                color,
                talle,
                precio
            }
            carrito.push(kids);

            alert("Agrego el diseño Kids");
            console.log(kids);

            break;

        case 6:

            producto();

            let type = {
                diseño: "Type",
                color,
                talle,
                precio
            }
            carrito.push(type);

            alert("Agrego el diseño Type");
            console.log(type);

            break;

        case 7:

            producto();

            let cuatroVeinte = {
                diseño: "4.20",
                color,
                talle,
                precio
            }
            carrito.push(cuatroVeinte);

            alert("Agrego el diseño 4.20");
            console.log(cuatroVeinte);

            break;

        case 8:

            producto();

            let forever = {
                diseño: "Forever",
                color,
                talle,
                precio
            }
            carrito.push(forever);

            alert("Agrego el diseño Forever");
            console.log(forever);

            break;

        case 9:

            producto();

            let chill = {
                diseño: "Chill",
                color,
                talle,
                precio
            }
            carrito.push(chill);

            alert("Agrego el diseño Chill");
            console.log(chill);

            break;

        default:
            alert("Ingrese un diseño valido")
            break;
    }

    resp = prompt("¿Desea agregar otro producto? S/N");
}

let tarjetas = [{
        credito: "visa"
    },
    {
        credito: "master sard"
    },
    {
        credito: "amex"
    },
    {
        debito: "visa"
    },
    {
        debito: "master card"
    },
    {
        debito: "amex"
    },
];

pago = " ";

while (pago == " ") {

    formaDePago = parseInt(prompt("¿Como desea abonar? 1-Efectivo  2-Tarjeta  3-Tranferencia  4-Cryptos"));

    switch (formaDePago) {
        case 1:
            pago = "Efectivo"
            break;

        case 2:

            consul = prompt("¿Desea consultar las tarjetas disponibles? S/N");
            consul = consul.toUpperCase();

            if (consul == "S") {
                consultarTarjetas();
                break;

            } else {

                formaDePago = parseInt(prompt("¿Que tarjeta desea usar? 1-Tarjeta de Debito  2-Tarjeta de Credito"));

                if (formaDePago == 1) {
                    pago = "Tarjeta de Debito";
                } else {
                    pago = "Tarjeta de Credito";
                }
            }

            break;

        case 3:
            pago = "Transferencia"
            break;

        case 4:
            pago = "Cryptos"
            break;

        default:
            alert("Ingrese una opcion valida")
            break;
    }
}

cant();
calcularIva();

alert(`Usted añadio ${cantRemeras} productos, el total a pagar es $${precioTotal} y eligio como forma de pago ${pago}`)

alert(`Gracias por su compra`)

function calcularIva() {
    precioTotal = (precio * carrito.length) * iva;
    return;
}

function cant() {
    cantRemeras = carrito.length;
    return;
}

function producto() {

    do {
        color = prompt("Ingrese el numero del color: 1-Blanca 2-Negra 3-Gris");

        if (color == "1") {
            color = "Blanca";
            break;

        } else {

            if (color == "2") {
                color = "Negra";
                break;

            } else {

                if (color == "3") {
                    color = "Gris";
                    break;

                } else {
                    alert("Ingrese un color valido")
                }
            }
        }

        color.toLowerCase();

    } while (color == "blanca" || "negra" || "gris")

    talle = prompt("Ingrese el talle: S - M - L - XL- XXL- XXXL");
    talle = talle.toUpperCase();

    return;
}

function consultarTarjetas() {

    let pregunta = prompt("¿Que tarjeta usa? Ej: Visa , Master Card, Amex");
    pregunta = pregunta.toLowerCase();

    let buscarTarjeta = tarjetas.filter(tarjeta => tarjeta.credito == pregunta); 

    let buscarTarjeta2 = tarjetas.filter(tarjeta => tarjeta.debito == pregunta);

    alert(`Puede abonar con Tarjeta de credito ${buscarTarjeta} y Tarjeta de debito ${buscarTarjeta2}`);

    console.log(buscarTarjeta);
    console.log(buscarTarjeta2);

    //EZE ME HE ROTO LA CABEZA BUSCANDO LA MANERA DE IMPRIMIR POR PANTALLA EL RESULTADO DE LA BUSQUEDA Y NO LO LOGRO PERO SI LO HAGO POR CONSOLE.LOG SI SE IMPRIME LO QUE QUIERO, ESPERO QUE SIRVA PARA ESTA ENTREGA, PERO ME GUSTARIA SI ME PODES SACAR ESTA DUDA 

    formaDePago = prompt("¿Que tarjeta desea usar? 1-Tarjeta de Debito  2-Tarjeta de Credito");

    if (formaDePago == 1) {
        pago = "Tarjeta de Debito"
    } else {
        pago = "Tarjeta de Credito"
    }
    return;
}