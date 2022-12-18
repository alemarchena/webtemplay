$("#contienefondo").fadeTo("2000",1);

const logohori = document.getElementById("logohori"); 
const imahost=document.getElementById("imahost");
const imaprogra=document.getElementById("imaprogra");
const imadise=document.getElementById("imadise");
const imaweb=document.getElementById("imaweb");
const imacapa=document.getElementById("imacapa");
const imavideoj=document.getElementById("imavideoj");

function ResetImagenes(){
    logohori.src = "./img/icotemplay.png?z="+version;
    imahost.src = "./img/Hosting.png?z="+version;
    imaprogra.src = "./img/Programacion.png?z="+version;
    imadise.src = "./img/Design.png?z="+version;
    imaweb.src = "./img/Web.png?z="+version;
    imacapa.src = "./img/Capacitacion.png?z="+version;
    imavideoj.src = "./img/Videojuego.png?z="+version;
}



logohori.addEventListener('mouseover',function() {ResetImagenes();logohori.src = "img/icotemplay_iluminado.png?z="+version;},false);
logohori.addEventListener('mouseout',function() {ResetImagenes();},false);

imahost.addEventListener('mouseover',function() {ResetImagenes();imahost.src = "img/_Hosting.png?z="+version;},false);
imahost.addEventListener('mouseout',function() {ResetImagenes();},false);

imaprogra.addEventListener('mouseover',function() {ResetImagenes();imaprogra.src = "img/_Programacion.png?z="+version;},false);
imaprogra.addEventListener('mouseout',function() {ResetImagenes();},false);

imadise.addEventListener('mouseover',function() {ResetImagenes();imadise.src = "img/_Design.png?z="+version;},false);
imadise.addEventListener('mouseout',function() {ResetImagenes();},false);

imaweb.addEventListener('mouseover',function() {ResetImagenes();imaweb.src = "img/_Web.png?z="+version;},false);
imaweb.addEventListener('mouseout',function() {ResetImagenes();},false);

imacapa.addEventListener('mouseover',function() {ResetImagenes();imacapa.src = "img/_Capacitacion.png?z="+version;},false);
imacapa.addEventListener('mouseout',function() {ResetImagenes();},false);

imavideoj.addEventListener('mouseover',function() {ResetImagenes();imavideoj.src = "img/_Videojuego.png?z="+version;},false);
imavideoj.addEventListener('mouseout',function() {ResetImagenes();},false);
