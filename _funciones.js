// --------------------------------------- Muestra el mensaje del estado de envío del correo ---------------
function MostrarMensaje(mensa){
  document.getElementById("mensajeatencion").innerHTML = mensa;
}

// ---------------------------------------- Verifica que la dirección de correo tenga @ ---------------
function sinarroba(texto){
  if (texto.includes("@"))
    return false;
  else
    return true;
}

// ---------------------------------------- Comportamiento del color de la barra ---------------

function resetcolor() {

  try {
    titulos = document.getElementsByClassName('estitubar');

    for(let tb of titulos){
      document.getElementById(tb.id).style.color = "#cecece";
    }
  } catch (error) {
    console.log("No pudieron resetear los colores")    ;
  }

}

function Click(objetivo,velocidad, lugar,desplazamiento,quientoco){
  try
  {
    ira(objetivo,velocidad, lugar,desplazamiento,quientoco);
    resetcolor();
    cambiaColor(quientoco);
    // suenaSonido();
  }catch(error){

  }
}

function cambiaColor(quientoco) {
  try {
      document.getElementById(quientoco).style.color = "#f6c417";
  } catch (error) {
    
  }
}

// --------------------------------------- Hace el scroll a una posición determinada --------------------
function ira(objetivo,velocidad, lugar,desplazamiento) {
  
  let alturabarra = document.getElementById(objetivo);
  var posicion = $("#" + lugar).offset().top - alturabarra.offsetHeight + desplazamiento;
  $("HTML, BODY").animate({ scrollTop: posicion }, velocidad);
}
// ---------------------------------- Hace el sonido del clic en los botones -------------------------------
function suenaSonido() {
  sonido = document.getElementById("parlante");
  sonido.pause();
  sonido.currentTime = 0;
  sonido.play();
}
// ------------------------------------------------ Avance del carrusel ----------------------------------
function cambia(avance){
  
  contar(avance);

  if(avance==-1 && contador > 0){

    $('.carousel').carousel('prev');
    pausarcarrusel();
    // suenaSonido();

  }
  else if(avance==1){

    
    $('.carousel').carousel('next');
    pausarcarrusel();

    // suenaSonido();
  }
  

}
//------------------------------------------ Variables que controlan el carrusel -----------------------
contador = 0;
itemsCarrusel = 0;
tamaniopantalla = 0;

function BuscarBotonesMobiles()
{
  mobiles = document.getElementsByClassName("mobiles");
  return mobiles;
}
//----------------------------------- Cuenta cuantos items tiene el carrusel ----------------------------
function contarItemsCarrusel()
{
  Items = document.getElementsByClassName("carousel-item");
  if(Items)
    itemsCarrusel = Items.length;
}

//---------------- Verifica en que slide del carrusel está y muestra u oculta los botones de flechas -----------
function contar(cantidad)
{

  if(contador==0 && cantidad==-1)
    contador = 0;
  else if(cantidad==1)
  {
    if(cantidad==1 && contador==0){
      document.getElementById("anizmobile").style.visibility = "visible";
      document.getElementById("aniz").style.visibility = "visible";
    }
    contador = contador + cantidad;
  } 
}


function pausarcarrusel(){
  $('.carousel').carousel('pause');
}

// -------------------- Resetea los valores del carrusel cuando se produce un cambio de tamaño ------------
function ResetTamanio()
{
  tamaniopantalla = screen.width;

  pausarcarrusel();
  contador = 0;
  mobiles = BuscarBotonesMobiles();

  if(tamaniopantalla > 991)
  {
    for(a=0;a<mobiles.length;a++)
    {
      mobiles[a].style.display = "none";
    }
    
    document.getElementById("aniz").style.display = "block";
    document.getElementById("ande").style.display = "block";

  }else{
    for(a=0;a<mobiles.length;a++)
    {
      mobiles[a].style.display = "block";
    }
    document.getElementById("aniz").style.display = "none";
    document.getElementById("ande").style.display = "none";
  }
  contar(0);
}

  const barranav = document.getElementById("barranav");
  const botonico  = document.getElementById("botonico");

  function AlturaBarra(){
    return altura = barranav.offsetHeight * -1;
  }

  if(screen.width > 991)
  {
    // barranav.classList.remove('bg-light');
    // barranav.classList.add('bg-dark');
    barranav.style.color = 'white';
    botonico.style.color = 'white';

  }else{
    // barranav.classList.remove('bg-dark');
    // barranav.classList.add('bg-light');
    barranav.style.color = 'black';
    botonico.style.color = 'black';
  }

  // --------------------------------- Resolucion de la pantalla actual --------------------------
const resolucion = document.getElementById('resolucion');

function Resolucion(){
  try {
    resolucion.innerHTML = "Resolución de pantalla : " + screen.width + "px x" + screen.height + "px";
  } catch (error) {
    console.log('No se encuentra la etiqueta para mostrar la resolución');
  }
}

Resolucion();