import { EntroAlEvento, SalioDelEvento } from './_controlador.js';
//Datos personalizados de la seccion
const disenio = document.getElementById("disenio");
const disen = document.getElementById("disen");
const imagendisenio = document.getElementById('imagendisenio');
const imdisenio = document.getElementById('imdisenio');
const secciondisenio = document.getElementById('secciondisenio');

let imagen = 'img/disenio.jpg?z=`${version}`';

disenio.addEventListener('mouseover',function() { resetcolor();  cambiaColor('disen');},false);  
disen.addEventListener('mouseover',function() { resetcolor();  cambiaColor('disen');},false);
disen.addEventListener('mouseout',function() { resetcolor();},false);

imagendisenio.addEventListener('mouseover',()=>{EntroAlEvento(secciondisenio,'textosdisenio','textosocultosdisenio',imagen);});
imagendisenio.addEventListener('mouseout',()=>{SalioDelEvento(secciondisenio,'textosdisenio','textosocultosdisenio')})

imdisenio.addEventListener('click',()=>{EntroAlEvento(secciondisenio,'textosdisenio','textosocultosdisenio',imagen);});
imdisenio.addEventListener('mouseout',()=>{SalioDelEvento(secciondisenio,'textosdisenio','textosocultosdisenio')})