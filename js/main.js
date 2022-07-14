alert("Bienvenido a Black Owl Streetwear");

let num, resp, color, talle, diseño, precioTotal, cantRemeras;
let carrito = [];
let precio = 2500,
    iva = 1.21;

alert("¿Que diseño desea agregar al carrito?");

resp = "s";

while ((resp != "N") && (resp != "n")) {

    num = parseInt(prompt("Ingrese el numero del diseño que desea: 1-TIGER    2-CLASSIC    3-BIB         4-BROKEN    5-KIDS    6-TYPE    7-4.20    8-FOREVER    9-CHILL"));

    switch (num) {
        case 1:

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

cant(); 
calcularIva();

alert(`Usted añadio ${cantRemeras} productos. El total a pagar es $ ${precioTotal}`)

alert(`Gracias por su compra`)

function calcularIva() {
    precioTotal = (precio * carrito.length) * iva;
    return;
} 

function cant(){
    cantRemeras = carrito.length;
    return;
}