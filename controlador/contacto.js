//Datos personalizados de la seccion
const contact = document.getElementById("contact");
const cont = document.getElementById("cont");

contact.addEventListener('mouseover',function() { resetcolor();  cambiaColor('cont');},false);

cont.addEventListener('mouseover',function() { resetcolor();  cambiaColor('cont');},false);
cont.addEventListener('mouseout',function() { resetcolor();  },false);