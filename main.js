const recetas = [

    {

        nombre: 'Bizcocho de chocolate',
        imagen: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoria: "bizcocho",
        ingredientes: [
            "4 huevos",
            "200 gramos de azúcar",
            "200 gramos de harina",
            "100 gramos de mantequilla",
            "50 gramos de cacao en polvo",
            "1 sobre de levadura"
        ],
        descripcion: "Fácil de preparar y perfecto para disfrutar como postre o en cualquier momento del día.",

        preparacion: ["1. Precalentar el horno a 180°C.",
            "2. Batir los huevos con el azúcar hasta que la mezcla esté espumosa.",
            "3. Agregar la harina tamizada junto con el cacao y la levadura. Mezclar bien.",
            "4. Derretir la mantequilla y añadir al batido.",
            "5. Verter la mezcla en un molde previamente engrasado y hornear durante 30-35 minutos o hasta que el bizcocho esté dorado y al pincharlo con un palillo, este salga limpio.,",
            "6. Dejar enfriar antes de servir."]
    },

    {
        nombre: 'Bizcocho de limón',
        imagen: 'https://images.pexels.com/photos/8538303/pexels-photo-8538303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoria: 'Bizcocho',
        ingredientes: [
            '4 huevos',
            '200 gramos de azúcar',
            '200 gramos de harina',
            '100 ml de aceite de girasol',
            '1 sobre de levadura química',
            'Ralladura de 2 limones',
            'Zumo de 1 limón'
        ],
        descripcion: 'Un bizcocho esponjoso y delicioso con sabor a limón',
        preparacion: [
            '1. Precalentar el horno a 180°C y preparar un molde de bizcocho engrasándolo y enharinándolo.',
            '2. En un bol, batir los huevos con el azúcar hasta obtener una mezcla espumosa y blanquecina.',
            '3. Agregar el aceite de girasol, la ralladura de limón y el zumo de limón a la mezcla de huevos y azúcar. Batir bien.',
            '4. Tamizar la harina y la levadura en otro bol y mezclar.',
            '5. Añadir poco a poco la mezcla de harina y levadura a la mezcla de huevos y azúcar, removiendo suavemente hasta obtener una mezcla homogénea.',
            '6. Verter la mezcla en el molde y hornear durante 30-35 minutos, o hasta que el bizcocho esté dorado y al insertar un palillo, éste salga limpio.',
            '7. Sacar el bizcocho del horno y dejar enfriar antes de desmoldarlo y servir.'
        ]
    },

    {
        nombre: 'Bizcocho de vainilla',
        imagen: 'https://images.pexels.com/photos/3086863/pexels-photo-3086863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        categoria: 'bizcocho',
        ingredientes: [
            '4 huevos',
            '200 gramos de azúcar',
            '200 gramos de harina',
            '100 gramos de mantequilla',
            '1 cucharadita de esencia de vainilla',
            '1 sobre de levadura'
        ],
        descripcion: 'Delicioso bizcocho de sabor a vainilla',
        preparacion: [
            '1. Precalentar el horno a 180°C.',
            '2. En un recipiente, batir los huevos junto con el azúcar hasta que la mezcla esté espumosa.',
            '3. Agregar la harina tamizada junto con la levadura y mezclar bien.',
            '4. Derretir la mantequilla y añadir al batido junto con la esencia de vainilla.',
            '5. Verter la mezcla en un molde previamente engrasado y hornear durante 30-35 minutos o hasta que el bizcocho esté dorado y al pincharlo con un palillo, este salga limpio.',
            '6. Dejar enfriar antes de servir.'
        ]
    },

    {
        nombre: 'Bizcocho de zanahoria',
        imagen: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2016-09-16-00-43-35/bizcocho-de-zanahoria.jpeg',
        categoria: 'Bizcocho',
        ingredientes: [
            '3 zanahorias grandes, peladas y ralladas',
            '1 taza de aceite vegetal',
            '1 taza de azúcar',
            '3 huevos',
            '2 tazas de harina de trigo',
            '1 cucharadita de bicarbonato de sodio',
            '1/2 cucharadita de polvo de hornear',
            '1 cucharadita de canela en polvo',
            '1/2 cucharadita de jengibre en polvo',
            '1/2 cucharadita de nuez moscada molida',
            '1/2 cucharadita de sal',
            '1 taza de nueces picadas (opcional)',
            '1/2 taza de pasas (opcional)'
        ],
        descripcion: 'Opción saludable y fácil de preparar para disfrutar en cualquier momento del día.',
        preparacion: [
            '1. Precalentar el horno a 180°C y engrasar un molde para bizcocho.',
            '2. En un tazón grande, mezclar el aceite con el azúcar hasta que estén bien incorporados. Añadir los huevos y batir hasta obtener una mezcla suave.',
            '3. En otro tazón, mezclar la harina, el bicarbonato de sodio, el polvo de hornear, la canela, el jengibre, la nuez moscada y la sal.',
            '4. Agregar la mezcla de harina a la mezcla de huevo y aceite, y mezclar bien. Agregar las zanahorias ralladas, las nueces y las pasas (si se desea) y mezclar de nuevo.',
            '5. Verter la mezcla en el molde preparado y hornear durante unos 45-50 minutos o hasta que al insertar un palillo en el centro del bizcocho, éste salga limpio.',
            '6. Dejar enfriar el bizcocho antes de desmoldar y servir.'
        ]
    },

    {
        nombre: 'Bizcocho de plátano',
        imagen: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-05-18-18-15-35/bizcocho-de-platano.jpeg',
        categoria: 'bizcocho',
        ingredientes: [
            '3 plátanos maduros',
            '3 huevos',
            '1 taza de azúcar',
            '1/2 taza de aceite vegetal',
            '2 tazas de harina de trigo',
            '1 cucharadita de polvo para hornear',
            '1/2 cucharadita de bicarbonato de sodio',
            '1 cucharadita de canela molida',
            '1/2 cucharadita de sal'
        ],
        descripcion: 'Delicioso bizcocho esponjoso de plátano perfecto para el desayuno o la merienda.',
        preparacion: [
            '1. Precalentar el horno a 180°C. Engrasar y enharinar un molde para bizcocho.',
            '2. En un bol, triturar los plátanos con un tenedor hasta obtener un puré.',
            '3. En otro bol, batir los huevos con el azúcar hasta que estén bien mezclados. Agregar el aceite y el puré de plátano y mezclar bien.',
            '4. En un tercer bol, mezclar la harina, el polvo para hornear, el bicarbonato de sodio, la canela y la sal. Agregar los ingredientes secos a la mezcla de plátano y mezclar hasta obtener una masa homogénea.',
            '5. Verter la mezcla en el molde preparado y hornear durante 40-45 minutos o hasta que al insertar un palillo en el centro del bizcocho, este salga limpio.',
            '6. Dejar enfriar antes de desmoldar y servir.'
        ]
    },

    {
        nombre: 'Bizcocho de manzana',
        imagen: 'https://1.bp.blogspot.com/-fFMGfTYlOmU/X-oFqtwdQiI/AAAAAAAAXvU/KuLX-E9Whhk3lV_r-NY2nGIwq3LqGLNXACNcBGAsYHQ/s16000/bizcocho%2Bde%2Bmanzana2.jpg',
        categoria: 'Bizcocho',
        ingredientes: [
            '2 tazas de harina todo uso',
            '1 cucharada de polvo de hornear',
            '1/2 cucharadita de bicarbonato de sodio',
            '1/2 cucharadita de canela molida',
            '1/2 taza de mantequilla sin sal, a temperatura ambiente',
            '1 taza de azúcar granulada',
            '2 huevos grandes',
            '1 cucharadita de vainilla',
            '1/2 taza de leche',
            '2 tazas de manzanas peladas y ralladas'
        ],
        descripcion: 'Perfecto para una merienda o un desayuno. Es suave, esponjoso y lleno de sabor a manzana fresca.',
        preparacion: [
            '1. Precalentar el horno a 180°C. Engrasar y enharinar un molde para bizcochos.',
            '2. En un tazón grande, tamizar la harina, el polvo de hornear, el bicarbonato de sodio y la canela. Reservar.',
            '3. En otro tazón grande, batir la mantequilla y el azúcar hasta que la mezcla esté suave y esponjosa. Agregar los huevos, uno a la vez, batiendo bien después de cada adición. Agregar la vainilla y mezclar bien.',
            '4. Agregar los ingredientes secos en tres partes, alternando con la leche, comenzando y terminando con los ingredientes secos. Mezclar bien después de cada adición. Doblar suavemente las manzanas ralladas en la mezcla de bizcocho.',
            '5. Verter la mezcla en el molde preparado y alisar la superficie con una espátula. Hornear durante 45-50 minutos o hasta que el bizcocho esté dorado y al insertar un palillo en el centro, éste salga limpio.',
            '6. Dejar enfriar el bizcocho durante unos 10 minutos antes de desmoldarlo. Dejar enfriar completamente sobre una rejilla antes de cortar y servir.'
        ]
    },
]

let contenedorDeRecetas = document.getElementById('contenedor-recetas');
let plantillaRecetas = recetas.map(receta =>
    `<div class="card" style="width: 18rem;">
        <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}">
        <div class="card-body">
            <h5 class="card-title">${receta.nombre}</h5>
            <p class="card-text">${receta.descripcion}</p>
            <button class="ver-receta btn btn-dark">Ver Receta</button>
        </div>
    </div>`
).join('');

contenedorDeRecetas.innerHTML = plantillaRecetas;

let verRecetaBotones = document.querySelectorAll('.ver-receta');

verRecetaBotones.forEach(boton =>
    boton.addEventListener('click', () => {
        let card = boton.closest('.card');
        let imagen = card.querySelector('.card-img-top').getAttribute('src');
        let nombre = card.querySelector('.card-title').textContent;
        let descripcion = card.querySelector('.card-text').textContent;

        Swal.fire({
            title: nombre,
            imageUrl: imagen,
            html: descripcion,
        });
    })
);

