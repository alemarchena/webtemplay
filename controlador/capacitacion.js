import { EntroAlEvento, SalioDelEvento } from './_controlador.js';

//Datos personalizados de la seccion
const capacitaciones = document.getElementById("capacitaciones");
const capac = document.getElementById("capac");
const imagencapacitacion = document.getElementById('imagencapacitacion');
const imcapacitacion = document.getElementById('imcapacitacion');
const seccioncapacitacion = document.getElementById('seccioncapacitacion');

let imagen = 'img/capacitaciones.jpg?z=`${version}`';

capacitaciones.addEventListener('mouseover',function() { resetcolor();  cambiaColor('capac');},false);

capac.addEventListener('mouseover',function() {resetcolor();  cambiaColor('capac');},false);
capac.addEventListener('mouseout',function() { resetcolor();  },false);

imagencapacitacion.addEventListener('mouseover',()=>{EntroAlEvento(seccioncapacitacion,'textoscapacitaciones','textosocultoscapacitaciones',imagen);});
imagencapacitacion.addEventListener('mouseout',()=>{SalioDelEvento(seccioncapacitacion,'textoscapacitaciones','textosocultoscapacitaciones');})

imcapacitacion.addEventListener('click',()=>{EntroAlEvento(seccioncapacitacion,'textoscapacitaciones','textosocultoscapacitaciones',imagen);});
imcapacitacion.addEventListener('mouseout',()=>{SalioDelEvento(seccioncapacitacion,'textoscapacitaciones','textosocultoscapacitaciones');})