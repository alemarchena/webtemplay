import { EntroAlEvento, SalioDelEvento } from './_controlador.js';
//Datos personalizados de la seccion
const hosti = document.getElementById("hosti");
const hosting = document.getElementById("hosting");
const imagenhosting = document.getElementById('imagenhosting');
const imhosting = document.getElementById('imhosting');
const seccionhosting = document.getElementById('seccionhosting');

let imagen = 'img/servidor.jpg?z=`${version}`';

hosting.addEventListener('mouseover',function() { resetcolor(); cambiaColor('hosti');},false);

hosti.addEventListener('mouseout',function() { resetcolor();    },false);
hosti.addEventListener('mouseover',function() { resetcolor();  cambiaColor('hosti'); },false);

imagenhosting.addEventListener('mouseover',()=>{EntroAlEvento(seccionhosting,'textoshosting','textosocultoshosting',imagen);});
imagenhosting.addEventListener('mouseout',()=>{SalioDelEvento(seccionhosting,'textoshosting','textosocultoshosting');})

imhosting.addEventListener('click',()=>{EntroAlEvento(seccionhosting,'textoshosting','textosocultoshosting',imagen);});
imhosting.addEventListener('mouseout',()=>{SalioDelEvento(seccionhosting,'textoshosting','textosocultoshosting');})