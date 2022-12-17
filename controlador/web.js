import { EntroAlEvento, SalioDelEvento } from './_controlador.js';
//Datos personalizados de la seccion
const web = document.getElementById("web");
const webb = document.getElementById("webb");
const imagenweb = document.getElementById('imagenweb');
const imweb = document.getElementById('imweb');
const seccionweb = document.getElementById('seccionweb');
let imagen = 'img/website.jpg?z=`${version}`';

web.addEventListener('mouseover',function() { resetcolor();  cambiaColor('webb');},false);

webb.addEventListener('mouseover',function() { resetcolor();  cambiaColor('webb');},false);
webb.addEventListener('mouseout',function() { resetcolor();  },false);

imagenweb.addEventListener('mouseover',()   =>{EntroAlEvento(seccionweb,'textosweb','textosocultosweb',imagen);});
imagenweb.addEventListener('mouseout',()    =>{SalioDelEvento(seccionweb,'textosweb','textosocultosweb');})

imweb.addEventListener('click',()=>{ EntroAlEvento(seccionweb,'textosweb','textosocultosweb',imagen);});
imweb.addEventListener('mouseout',()=>{SalioDelEvento(seccionweb,'textosweb','textosocultosweb');})