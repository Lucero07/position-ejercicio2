var contenedor = document.getElementById('contenedor');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
var div7 = document.createElement('div');
var div8 = document.createElement('div');

contenedor.appendChild(div1);
contenedor.appendChild(div2);
contenedor.appendChild(div3);
contenedor.appendChild(div4);
contenedor.appendChild(div5);
contenedor.appendChild(div6);
contenedor.appendChild(div7);
contenedor.appendChild(div8);

var divs = document.getElementsByTagName('div');
contenedor.appendChild(div5);
contenedor.appendChild(div6);
for (var i = 0; i < divs.length; i++) {
    var nombres = ['Laboratoriana Amalia',
        'Laboratoriana Edith',
        'Laboratoriana Karina',
        'Laboratoriana Mariana',
        'Laboratoriana Nohemi',
        'Laboratoriana Pitt',
        'Laboratoriana Silvana',
        'Laboratoriana Lucero',
    ];
    var imagen1 = document.createElement('img');
    var ruta = "assets/" + ("imagen" + (i + 1)) + ".jpg";
    var texto = document.createElement('span');
    divs[i].className = "contenedorImagen";
    imagen1.src = ruta;
    imagen1.className = "imagenes";
    imagen1.id = "img" + i;
    divs[i].appendChild(imagen1);
    texto.className = "textoArriba";
    texto.id = "texto" + i;
    texto.innerText = nombres[i];
    divs[i].appendChild(texto);
};
