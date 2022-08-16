//Función generadora

const makeFigure = function (size) {
    //Crea una matríz NxN y la rellena con el valor "0"
    let figure = new Array(size);
     for (let i = 0; i < size; i++) {
        figure[i] = new Array(size).fill(0)
    } 

    //Variables iniciadoras
    let ri = 0
    let rf = figure.length
    let ci = 0
    let cf = figure[0].length
    let cont = 1 

    while (ci < cf && ri < rf){

        //Generador superior       
        for (let i = ci; i < cf; i++){
                figure[ri][i] = 1
            }
        ri ++ 
        //Condición que se cumple en la 2° vuelta. Evita que la serpiente se toque
        if (figure[ci][rf] == 0){
            ci++
        }

        //Generador derecho        
        for (let i = ri;i < rf;i++){
            figure[i][cf-1] = 1
        }
        cf-- 

        //Generador inferior
        if (ri < rf && (rf-ri) > 1 ){ //Evita que la serpiente se toque en su final
            for (let i = cf-1; i >= ci;i--){
                figure[rf-1][i] = 1
            }
            rf-- 
        }

        //Generador izquierdo
        if (ci < cf  && (cf-ci) > 1 ){ //Evita que la serpiente se toque en su final
            for (let i = rf-1; i > ri;i--){
                figure[i][ci] = 1
            }
            ci++ 
        } 
        //Saltear una línea
        ri++ 
        cf-- 
        rf-- 
    }
    return figure; 
 }

 //Exporta función
 module.export = {
    "makeFigure": makeFigure
 }