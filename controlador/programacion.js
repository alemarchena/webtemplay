import { EntroAlEvento, SalioDelEvento } from './_controlador.js';
//Datos personalizados de la seccion
const progra = document.getElementById("progra");
const programacion = document.getElementById("programacion");
const imagenprogramacion = document.getElementById('imagenprogramacion');
const improgramacion = document.getElementById('improgramacion');
const seccionprogramacion = document.getElementById('seccionprogramacion');

let imagen = 'img/programacion.jpg?z=`${version}`';

programacion.addEventListener('mouseover',function() { resetcolor(); cambiaColor('progra');},false);

progra.addEventListener('mouseover',function()  { resetcolor();  cambiaColor('progra' );},false);
progra.addEventListener('mouseout',function()   { resetcolor(); },false);

imagenprogramacion.addEventListener('mouseover',()=>{EntroAlEvento(seccionprogramacion,'textosprogramacion','textosocultosprogramacion',imagen);});
imagenprogramacion.addEventListener('mouseout',()=>{SalioDelEvento(seccionprogramacion,'textosprogramacion','textosocultosprogramacion');})

improgramacion.addEventListener('click',()=>{EntroAlEvento(seccionprogramacion,'textosprogramacion','textosocultosprogramacion',imagen);});
improgramacion.addEventListener('mouseout',()=>{SalioDelEvento(seccionprogramacion,'textosprogramacion','textosocultosprogramacion');})