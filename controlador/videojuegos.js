import {EntroAlEvento,SalioDelEvento} from './_controlador.js'
//Datos personalizados de la seccion
const videojuegos = document.getElementById("videojuegos");
const videoj = document.getElementById("videoj");
const imagenvj = document.getElementById('imagenvj');
const imvj = document.getElementById('imvj');
const seccionvj = document.getElementById('seccionvj');
let imagen = 'img/videojuegos.jpg?z=`${version}`';

videojuegos.addEventListener('mouseover',function() { resetcolor();  cambiaColor('videoj');},false);
  
videoj.addEventListener('mouseover',function() { resetcolor();  cambiaColor('videoj');},false);
videoj.addEventListener('mouseout',function() { resetcolor();},false);

imagenvj.addEventListener('mouseover',()=>{EntroAlEvento(seccionvj,'textosvideojuegos','textosocultosvideojuegos',imagen);});
imagenvj.addEventListener('mouseout',()=>{SalioDelEvento(seccionvj,'textosvideojuegos','textosocultosvideojuegos');})

imvj.addEventListener('click',()=>{EntroAlEvento(seccionvj,'textosvideojuegos','textosocultosvideojuegos',imagen)});
imvj.addEventListener('mouseout',()=>{SalioDelEvento(seccionvj,'textosvideojuegos','textosocultosvideojuegos')})




