  // ------------------------------------------- FORM LOAD -------------------------------------------------
  $("#fondo").load("fondo.html?z="+ version);
  $("#hosting").load("hosting.html?z="+ version);
  $("#contact").load("contacto.html?z="+ version);
  $("#programacion").load("programacion.html?v="+ version);
  $("#disenio").load("disenio.html?z="+ version);
  $("#web").load("web.html?z="+ version);
  $("#capacitaciones").load("capacitaciones.html?z="+ version);
  $("#videojuegos").load("videojuegos.html?z="+ version);

  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  
  try {
    $("#puente").load("puente.html?z="+ version);
  } catch (error) {
    location.reload();      
  }
  setTimeout(() => {
  }, 1000);

  
