function calcularVelocidad(distancia, tiempo) {
  
    var velocidad = distancia / tiempo;
    return "La velocidad del objeto es: " + velocidad + " unidades por segundo.";
  }
  
  var distanciaRecorrida = 100; 
  var tiempoTranscurrido = 10; 
  
  var velocidadObjeto = calcularVelocidad(distanciaRecorrida, tiempoTranscurrido);
  console.log(velocidadObjeto);

  