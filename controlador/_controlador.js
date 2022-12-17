document.oncontextmenu = function () { return false }

document.addEventListener("keydown", function(event){
    var key = event.key ;
    if (key == 'F12') {
        window.location.reload();
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        window.close();
    }
}, false);

//----------------- Efecto sobre las imagenes clickeadas -------------------------
  
let textos;
let textosOcultos;
const imagenBlanco = "url(img/fondoblanco.jpg)";

//Al entrar el mouse en el texto visible, se reeplaza el fondo en la seccion
export const  EntroAlEvento = (seccion,textovisible,textonovisible,imagen)=>{
    ReconoceTextos(textovisible,textonovisible);
    seccion.style.backgroundImage = "url(" + imagen + ")";
    Cambiarfondo(0);
    TextosOcultos('block');
    TextosVisibles('none');
}

//Al entrar el mouse en el texto NO visible, se reestablece el fondo de la sección
export const SalioDelEvento = (seccion,textovisible,textonovisible)=>{
    ReconoceTextos(textovisible,textonovisible);
    seccion.style.backgroundImage = imagenBlanco;
    Cambiarfondo(1);
    TextosOcultos('none');
    TextosVisibles('block');
}

//Reconoce los textos con la clase para textos visibles por defecto
export const ReconoceTextos = (quien,quienoculto)=>{
    textos = document.getElementsByClassName(quien);
    textosOcultos = document.getElementsByClassName(quienoculto);
}

export const Cambiarfondo = (estado)=>{
    for(let t of textos){t.style.opacity = estado;};
}

export const TextosOcultos = (estado)=>{
    for(let teo of textosOcultos){teo.style.display = estado;};
}

export const TextosVisibles = (estado)=>{
    for(let t of textos){t.style.display = estado;};
}

//----------------- Fin Efecto imagenes clickeadas -------------------------
