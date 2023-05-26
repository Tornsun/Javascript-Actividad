function calcularIMC(pesoLibras, estaturaCm) {

    var pesoKg = pesoLibras * 0.453592;
  
    var estaturaM = estaturaCm / 100;
  
    var imc = pesoKg / (estaturaM * estaturaM);
  
    var categoria;
    if (imc < 16) {
      categoria = 'Criterio de ingreso';
    } else if (imc >= 16 && imc <= 16.9) {
      categoria = 'Infrapeso';
    } else if (imc >= 17 && imc <= 18.4) {
      categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
      categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      categoria = 'Obesidad premórbida';
    } else if (imc >= 40 && imc <= 45) {
      categoria = 'Obesidad mórbida';
    } else if (imc > 45) {
      categoria = 'Obesidad hipermórbida';
    }
  
    console.log('Peso en kilogramos: ' + pesoKg);
    console.log('IMC: ' + imc);
    console.log('Categoría: ' + categoria);
  }
  

  calcularIMC(160, 170); // Peso en libras: 160, Estatura en cm: 170