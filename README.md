# BlackOwl 

<!--  AL PROFESOR FEDE GILLES  -->

Profe desde ya muchas gracias por todo lo que nos enseño en estos meses de cursado. Sinceramente fue todo muy util y la forma en que explico la teoria y la practica, fue muy entretenida y mantuvo la atencion en todo momento. Siga asi porque desde mi lado, le estoy muy agradecido por todo. Espero que este proyecto logre demostrar todo lo aprdendido y cumpla con las expectativas. Se que hay mucho para mejorar, con el tiempo lo hare. Muchas gracias por todo.

<!--  HTML  -->

En total realice 13 páginas HTML, donde encontramos 7 principales y 6 subpáginas:

-HOME (Index)
-INDUMENTARIA (Página 2, 3, 4)
-MAYORISTA 
-NOSOTROS 
-SALE (Página 2, 3, 4)
-TALLES
-EQUIPO 

Todas son navegables y estan conectadas entre si, tanto por la Nav, como con el Footer, donde encontramos con Site Map para navegar.
Respete la Sintaxis de HTML enseñada y use comentarios para separar las distintaws secciones y partes de la página.

<!--  CSS  -->

Toda la página esta diseñada con estilos de CSS propios. Utilice FLEX y GRID para lograr mejores estilos y disposicion. Todo los estilos estan compilados con SASS para un mejor orden de trabajo.
Cree una animacion con @keyframes para el ingreso del logo en la Nav cada vez que se entra a una página nueva.

<!--  SASS  -->

Utilice SASS para lograr un mejor orden a la hora de compilar los estilos CSS. 
Cree variables en una hoja distinta para mejor uso de los colores, tamaños y animacion. 
Utilice diferentes hojas para cada seccion y página de del sitio: 

_EQUIPO 
_FOOTER 
_MAYORISTA 
_NAV 
_ROPA
_TALLES 
_US 

Todas la pagina se encuentran importadas a la hoja principal de SASS STYLE.SCSS, que es quien termina compilnado todo y creando los estilos en CSS.

<!--  SASS II  --> 

-Cree un MIXIN, para los textos de NOSOTROS y EQUIPO; 

-Nosotros y Equipo// Con @Include traje los atributos del MIXIN y agregue algunos particulares para diferenciarlos en cada page; 

-Footer// Cree un MAP donde se pinta cada red social con su código especifico de color, creandose una clase para cada una de ella (Lo que mas me gusto usar, ya que me ayudo a limpiar un poco el código); 

-Style// Cambie un ID por una CLASS, logrando modificar las portadas de cada page con un @Extend, en el cual cargue atributos especificos y cambie sus colores para diferenciarlos en cada page;

Utilice operadores creando una variable $titulos, la cual la utilice en el tamaño de todas las portadas y que se fueran ajustanto en las diferentes @media query.

<!--  BOOTSTRAP  --> 

Utilice componentes de Bootsrap como Card, Carrusel y la grilla para ordenar y dimensionar gran parte del sitio.
Todos los componentes fueron retocados con estilos propios, ya sea su tamaño, disposicion, color, etc. 

<!--  LIBRERIAS EXTERNAS  -->

Utilice librerias externas para lograr muchas cosas, entre ellas: 

-BOOTSTRAP 
-FONT AWESOME (Iconos)
-GOOGLE FONTS (Fuentes)
-JAVASCRIPT
-POPPER
-ANIMATE ON SCROLL (Animaciones para las fotos de las Cards)

<!--  EXTRAS  -->

Utilice la libreria AOS porque ese tipo de animacion que queria lograr al hacer Scroll, requeria usar JAVASCRIPT y es el siguiente curso que voy a empezar, asique decidi no meterlo en este primer proyeco hasta cursar y aprender bien a usarlo. Pero no queria dejar de usar las anaciones aprendidas en este curso, asique decidi usar muchas.

Me hubieta encantado haber podido crear un carrito de compras, ya que mi pagina es un E-commerce, pero me encontre en el mismo dilema, prefiero aprenderlo a hacerlo bien, anates que ver un video extra y copiar. Cuando aprenda JAVASCRIPT sera algo que agregare a mi sitio.

<!--  SEO  --> 

-Optimece todas las imagenes con "Squoosh";

-Subi todas las imagenes a "Cloudinary" y la linkee a la Nav, Footer, Indumentaria y demas lugares que necesitaban imagenes; 

-Agregue un icono con Favicon a todas las pages;

-Todas las pages poseen titulos, para saber donde esta el usuario en cada momento;

-Index// Agregue "Keywords" ("black, owl, remera, buzo, malla, pantalon, jogger, bermuda, negro, t-shirt, streetwear, skate, surf, street") y "Description" ("Black Owl es una marca de ropa, nacida en Mendoza-Argentina, que busca imponer la moda y la onda del Streetwear. Nuestra indumentaria es Unisex y tenemos talles para todos") generales de la página. Donde los mismos se repiten en todas, pero cada page tiene sus "Keywords" y "Description" particulares;  

-Equipo, Indumentaria, Mayorista, Nosotros, Sale, Talles// En todos agregue "Keywords" y "Descriptions" particulares, ademas de las generales detalladas anteriormente; 

-Pages_ind y Pages_sale// En ellas agregue el numero en el titulo para que el usuario supiera donde esta en todo momento (<title>Sale 2 - Black Owl</title>); 