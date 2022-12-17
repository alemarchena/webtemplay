$("#contienefondo").fadeTo("2000",1);

const logohori = document.getElementById("logohori"); 
const imahost=document.getElementById("imahost");
const imaprogra=document.getElementById("imaprogra");
const imadise=document.getElementById("imadise");
const imaweb=document.getElementById("imaweb");
const imacapa=document.getElementById("imacapa");
const imavideoj=document.getElementById("imavideoj");

function ResetImagenes(){
    logohori.src = "./img/icotemplay.png";
    imahost.src = "./img/Hosting.png";
    imaprogra.src = "./img/Programacion.png";
    imadise.src = "./img/Design.png";
    imaweb.src = "./img/Web.png";
    imacapa.src = "./img/Capacitacion.png";
    imavideoj.src = "./img/Videojuego.png";
}



logohori.addEventListener('mouseover',function() {ResetImagenes();logohori.src = "img/icotemplay_iluminado.png";},false);
logohori.addEventListener('mouseout',function() {ResetImagenes();},false);

imahost.addEventListener('mouseover',function() {ResetImagenes();imahost.src = "img/_Hosting.png";},false);
imahost.addEventListener('mouseout',function() {ResetImagenes();},false);

imaprogra.addEventListener('mouseover',function() {ResetImagenes();imaprogra.src = "img/_Programacion.png";},false);
imaprogra.addEventListener('mouseout',function() {ResetImagenes();},false);

imadise.addEventListener('mouseover',function() {ResetImagenes();imadise.src = "img/_Design.png";},false);
imadise.addEventListener('mouseout',function() {ResetImagenes();},false);

imaweb.addEventListener('mouseover',function() {ResetImagenes();imaweb.src = "img/_Web.png";},false);
imaweb.addEventListener('mouseout',function() {ResetImagenes();},false);

imacapa.addEventListener('mouseover',function() {ResetImagenes();imacapa.src = "img/_Capacitacion.png";},false);
imacapa.addEventListener('mouseout',function() {ResetImagenes();},false);

imavideoj.addEventListener('mouseover',function() {ResetImagenes();imavideoj.src = "img/_Videojuego.png";},false);
imavideoj.addEventListener('mouseout',function() {ResetImagenes();},false);
