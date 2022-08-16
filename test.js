// Esta función comprueba que la función makeFigure esté correcta

//Importa la función solicitada
import { makeFigure } from "./funcion.js";


Array.prototype.equals = function (array) {
    if (!array) return false;
    if (this.length != array.length) return false;
    
    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
          if (!this[i].equals(array[i])) return false;
      } else if (this[i] != array[i]) {
          return false;
      }
    }

    return true;
  }
    
  const ensure_that_the_figure_was_correct = function() {
      let expected_with_size_five = [
          [1,1,1,1,1],
          [0,0,0,0,1],
          [1,1,1,0,1],
          [1,0,0,0,1],
          [1,1,1,1,1]
      ];
      
      let expected_with_size_eight = [
          [1,1,1,1,1,1,1,1],
          [0,0,0,0,0,0,0,1],
          [1,1,1,1,1,1,0,1],
          [1,0,0,0,0,1,0,1],
          [1,0,1,0,0,1,0,1],
          [1,0,1,1,1,1,0,1],
          [1,0,0,0,0,0,0,1],
          [1,1,1,1,1,1,1,1]
      ];
      
      if (! makeFigure.makeFigure(5).equals(expected_with_size_five)) {
          alert('Error en el primer chequeo makeFigure(5)');
      } else if (! makeFigure.makeFigure(8).equals(expected_with_size_eight)) {
          alert('Error en el segundo chequeo makeFigure(8)');
      } else {
          alert('El ejercicio se ejecuto correctamente para los tests iniciales');
      }
  }
  
  ensure_that_the_figure_was_correct();