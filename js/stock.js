let stockRemeras = [
    {id: 1, nombre: "Remera Basic", tipo: "remera", desc: "Primer diseño de Black Owl. Basico, simple y con mucha onda", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926497/multimedia/Basic_ilaokz.jpg"}, 
    {id: 2, nombre: "Remera Tiger", tipo: "remera", desc: "Saca tu tigre interior. Black Owl... or Tiger Whatever", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926511/multimedia/Tiger_m0krqg.jpg"},
    {id: 3, nombre: "Remera BIB", tipo: "remera", desc: "El negro no pasa de moda, por eso es que decimos BLACK IS BETTER", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926493/multimedia/BIB_iew2o6.jpg"},
    {id: 4, nombre: "Remera Classic", tipo: "remera", desc: "Lo clásico perdura en el tiempo. Chanchero, clasico y a la moda", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926504/multimedia/Classic_prwdid.jpg"},
    {id: 5, nombre: "Remera Forever", tipo: "remera", desc: "Llevamos el negro como una parte de nosotros por siempre", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926505/multimedia/Forever_rkc4ud.jpg"},
    {id: 6, nombre: "Remera Chill", tipo: "remera", desc: "Hay momentos que es mejor relajarse y estar chill", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926498/multimedia/Chill_lrmqgu.jpg"},
    {id: 7, nombre: "Remera Basic", tipo: "remera", desc: "Primer diseño de Black Owl. Basico, simple y con mucha onda", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926511/multimedia/Basic_negra_sr74qy.jpg"},
    {id: 8, nombre: "Remera Tiger", tipo: "remera", desc: "Saca tu tigre interior. Black Owl... or Tiger Whatever", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926520/multimedia/Tiger_gris_rdwvaq.jpg"},
    {id: 9, nombre: "Remera BIB", tipo: "remera", desc: "El negro no pasa de moda, por eso es que decimos BLACK IS BETTER", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926493/multimedia/BIB_beige_uftn90.jpg"},
    {id: 10, nombre: "Remera Classic", tipo: "remera", desc: "Lo clásico perdura en el tiempo. Chanchero, clasico y a la moda", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926506/multimedia/Classic_negra_njljo7.jpg"},
    {id: 11, nombre: "Remera Forever", tipo: "remera", desc: "Llevamos el negro como una parte de nosotros por siempre", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926511/multimedia/Forever_bordo_j6ag52.jpg"},
    {id: 12, nombre: "Remera Chill", tipo: "remera", desc: "Hay momentos que es mejor relajarse y estar chill", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926499/multimedia/Chill_gris_lfu2ov.jpg"},
    {id: 13, nombre: "Remera Basic", tipo: "remera", desc: "Primer diseño de Black Owl. Basico, simple y con mucha onda", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926503/multimedia/Basic_gris_ckwsim.jpg"}, 
    {id: 14, nombre: "Remera Forever", tipo: "remera", desc: "Llevamos el negro como una parte de nosotros por siempre", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926507/multimedia/Forever_verde_khr1fh.jpg"},
    {id: 15, nombre: "Remera Chill", tipo: "remera", desc: "Hay momentos que es mejor relajarse y estar chill", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926499/multimedia/Chill_negra_we4dno.jpg"},
    {id: 16, nombre: "Remera Type", tipo: "remera", desc: "Corto, conciso y directo. Decir mucho con pocas palabras", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926512/multimedia/Type_n9n61s.jpg"},
    {id: 17, nombre: "Remera Forever", tipo: "remera", desc: "Llevamos el negro como una parte de nosotros por siempre", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926507/multimedia/Forever_gris_w81t3t.jpg"},
    {id: 18, nombre: "Remera BOX", tipo: "remera", desc: "Prohibida su venta a menores de 18 años...", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926501/multimedia/Box_k0qs6j.jpg"},
    {id: 19, nombre: "Remera Forever", tipo: "remera", desc: "Llevamos el negro como una parte de nosotros por siempre", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926503/multimedia/Forever_blanca_bay3ga.jpg"},
    {id: 20, nombre: "Remera Tiger", tipo: "remera", desc: "Saca tu tigre interior. Black Owl... or Tiger Whatever", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926513/multimedia/Tiger_bordo_xr4lst.jpg"},
    {id: 21, nombre: "Remera Forever", tipo: "remera", desc: "Primer diseño de Black Owl. Basico, simple y con mucha onda", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926507/multimedia/Forever_negra_pwva9s.jpg"},
    {id: 22, nombre: "Remera Broken", tipo: "remera", desc: "Black Owl hasta en los huesos", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926496/multimedia/Broken_blanca_szb2uu.jpg"},
    {id: 23, nombre: "Remera Kids", tipo: "remera", desc: "Para nuestro niño interior", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926508/multimedia/Kids_qvuriq.jpg"},
    {id: 24, nombre: "Remera 4:20", tipo: "remera", desc: "a sea AM o PM, todos sabemos que pasa a las 4:20", precio: 2500, talle: "L", img: "https://res.cloudinary.com/nacho-morales/image/upload/v1652926493/multimedia/4_20_kbcxrc.jpg"}
];