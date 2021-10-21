let inputCadena = document.getElementById('inputCadena');
let btnEnviar = document.getElementById('btnEnviar');
let respuesta = document.getElementById('mostrarResultado');

let cadenas = [];
let totales = [];

btnEnviar.onclick = function enviarCadena(){
    cadenas.push(inputCadena.value)
  
    for (let cadena of cadenas) {
        totales.push(cadena.length);
    }
    let maximo = Math.max.apply(null, totales);
    
    for(let cadenaMaxima of cadenas){
        if (cadenaMaxima.length === maximo) {

            respuesta.innerText = 'La frase mas larga enviada es: ' + cadenaMaxima + ' y tiene ' + cadenaMaxima.length + ' caracteres.';
            
        }
    }
}







  

