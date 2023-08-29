const gameContainer = document.querySelector(".container"),
miResultado = document.getElementById("puntuaje-usuario"),
compuResultado = document.getElementById("puntuaje-computadora")

botones = document.getElementsByClassName("poke-poke"),
pokemones = Array.from(botones);

const inputNombre = document.getElementById("escribir-nombre");
const nombreParticipante = document.getElementById("nombre-participante");


let eleccion;
let jugador = '';
let indexDeBienvenida = 0;
let indexDePartidas = 0;
let indexDeJuguemos = 0;
let indexDeResultado = 0;
let numeroDeJugadas;
let victoria = 0;
let derrota = 0;
let resultado = '';
let numeroDeClicks = 0;

const inputElemento = document.getElementById('text-computer');
const textoBienvenida = " Bienvenido humano ¿Cuál es tu nombre?";
const cuantasPartidas = " ¡Excelente! Escribe 1 para comenzar a jugar";
const juguemos = '  Piedra Papel o Tijera!';
const ganaste = 'Ganaste!';
const perdiste = 'Perdiste!';
const empate = 'empate :/';
miResultado.innerText = victoria
compuResultado.innerText = derrota


/*
function escribirResultado (resultado) {

    if (indexDeResultado < resultado.length) {
        const despedida = resultado.charAt(indexDeResultado)
        inputElemento.value += despedida;
        indexDeResultado++;
        setTimeout(escribirResultado, 80);
    } 
};
*/
function piedraPapelOTijeras () {

    const max = 3;
    const min = 0;
    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";

    function obtenerJugadaComputadora (min,max) {
        

        let valor = Math.floor(Math.random() * (max - min) ) + min;
        switch (valor) {
            case 0:
                jugadaCompu = piedra;
                break;
            case 1:
                jugadaCompu = papel;
                break;
            case 2:
                jugadaCompu = tijeras;
                break;
        }
        return jugadaCompu
    };
    
    jugadaCompu = obtenerJugadaComputadora(min,max)
    
    miJugada = eleccion;
    
    function determinarGanador(jugadaCompu,miJugada) {
    
        if (jugadaCompu === miJugada) {
            resultado = empate;
        } else if (miJugada === piedra  && jugadaCompu === tijeras) {
            resultado = ganaste
          }  else if (miJugada === tijeras && jugadaCompu === papel){
            resultado = ganaste
          } else if (miJugada === papel && jugadaCompu === piedra ) {
            resultado = ganaste
          } else {
            resultado = perdiste;
          };
          return resultado 


    };
        
    
    resultado = determinarGanador(jugadaCompu,miJugada);

    function asignarResultado (resultado) {
         
        inputNombre.value = '';
        inputElemento.value = '';

        if (resultado === ganaste) {
            inputElemento.value = resultado;
            victoria++;
            miResultado.innerText = victoria

        } else if (resultado === perdiste) {
            inputElemento.value = resultado;
            derrota++;
            compuResultado.innerText = derrota

        } else {
            inputElemento.value = resultado;
        }
        return resultado
        
    };

    resultado = asignarResultado(resultado);
    inputNombre.value = "Elige un Pokemon para otra ronda"
    return resultado
    
};

function inicio (numeroDeJugadas) {
    if (numeroDeJugadas == 1) {
        juguemosMensaje();
    } else {
        inputNombre.value = 'Error! te dije 1, humano';
    }  return  
};


function juguemosMensaje () {
    if (indexDeJuguemos < juguemos.length) {
        const terceraBienvenida = juguemos.charAt(indexDeJuguemos)
        inputElemento.value += terceraBienvenida;
        indexDeJuguemos++;
        setTimeout(juguemosMensaje, 80);
    }
    inputNombre.value = "Haz click sobre un Pokemon"
};

function preguntarPartidas () {
    if (indexDePartidas < cuantasPartidas.length) {
    const segundaBienvenida = cuantasPartidas.charAt(indexDePartidas)
    inputElemento.value += segundaBienvenida;
    indexDePartidas++;
    setTimeout(preguntarPartidas, 80);
 }
};


function darBienvenida() {
  if (indexDeBienvenida < textoBienvenida.length) {
    const primeraBienvenida = textoBienvenida.charAt(indexDeBienvenida);
    inputElemento.value += primeraBienvenida;
    indexDeBienvenida++;
    setTimeout(darBienvenida, 80);
  } 

 };



darBienvenida();


document.querySelector("button").addEventListener('click', () => {
    
    if (numeroDeClicks === 0) {
        numeroDeClicks++;
        jugador = inputNombre.value;
        nombreParticipante.innerText = jugador;
        inputElemento.value = ''
        preguntarPartidas();
        
    } else if (numeroDeClicks === 1) {
        numeroDeJugadas = parseInt(inputNombre.value);
        inputElemento.value = '';
        inicio(numeroDeJugadas);
   } 
 });

pokemones.forEach ((input) => {
    console.log("Adding event listener to:", input);
 input.addEventListener("click", (e) => {
    eleccion = e.target.value;
    inputElemento.value = '';
    piedraPapelOTijeras ();
    });
});





/*submitInfo.forEach((button) => {
    button.addEventListener("click", (e) => {
        jugador = inputNombre.value;
        nombreParticipante.textContent = jugador;
      });
 }); 

 submitInfo.addEventListener('click', () => {
    // Assigning the input value to the jugador variable
    jugador = inputNombre.value;
    
    // Updating the content of #nombre-participante
    nombreParticipante.textContent = jugador;
  });



const readlineSync = require('readline-sync');


let jugadaCompu;
let resultado;
let miJugada;
let resultadoFinal;
let jugadasGanadasComputadora = 0
let jugadasGanadasUsuario = 0
let numeroDeJugadas;




function obtenerResultadoFinal (jugadasGanadasComputadora, jugadasGanadasUsuario) {
    if (jugadasGanadasComputadora > jugadasGanadasUsuario) {
        resultadoFinal = 'Gana la computadora'
    } else if (jugadasGanadasComputadora < jugadasGanadasUsuario) {
        resultadoFinal = 'Gana el usuario'
    } else {
        resultadoFinal = 'empate';
    }
    return resultadoFinal
};

function partidaDeTresRounds (numeroDeJugadas) {
    for (let i = 0; i < numeroDeJugadas; i++) {
        
        resultado = piedraPapelOTijeras();
        console.log(resultado)

        if (i === 0) {
                if (resultado == 'Gana la computadora') {
                    jugadasGanadasComputadora ++;
                } else if (resultado == 'Gana el usuario'){
                    jugadasGanadasUsuario ++;
                } else {
                    resultadoFinal = resultado;
                }
        
        } 
        
        if (i === 1) {
            if (resultado == 'Gana la computadora') {
                jugadasGanadasComputadora ++;
            } else if (resultado == 'Gana el usuario') {
                jugadasGanadasUsuario ++;
            } else {
                resultadoFinal = resultado;
            }
        }

        if (i === 2) {
            if (resultado == 'Gana la computadora') {
                jugadasGanadasComputadora ++;
            } else if (resultado == 'Gana el usuario'){
                jugadasGanadasUsuario ++;
            } else {
                resultadoFinal = resultado;
            }
        }   

    };
    console.log(jugadasGanadasComputadora);
    console.log(jugadasGanadasUsuario);

    obtenerResultadoFinal (jugadasGanadasComputadora, jugadasGanadasUsuario)

    return resultadoFinal
    
    };


function partidaDeDosRounds (numeroDeJugadas) {
    for (let i = 0; i < numeroDeJugadas; i++) {
        
        resultado = piedraPapelOTijeras();
        console.log(resultado)

        if (i === 0) {
                if (resultado == 'Gana la computadora') {
                    jugadasGanadasComputadora ++;
                } else if (resultado == 'Gana el usuario'){
                    jugadasGanadasUsuario ++;
                } else {
                    resultadoFinal = resultado;
                }
        
        } 
        
        if (i === 1) {
            if (resultado == 'Gana la computadora') {
                jugadasGanadasComputadora ++;
            } else if (resultado == 'Gana el usuario'){
                jugadasGanadasUsuario ++;
            } else {
                resultadoFinal = resultado;
            }
        }   

    };

    console.log(jugadasGanadasComputadora);
    console.log(jugadasGanadasUsuario);

    obtenerResultadoFinal (jugadasGanadasComputadora, jugadasGanadasUsuario)

    return resultadoFinal
    
    };

*/

    
/*
function inicio (numeroDeJugadas) {
if (numeroDeJugadas == 1 || numeroDeJugadas == 2 || numeroDeJugadas == 3) {
    resultadoFinal = numeroDeVueltas(numeroDeJugadas)
} else {
    console.log('Error, solo puedes elegir 1, 2 o 3');
while (numeroDeJugadas !== 1 || numeroDeJugadas !== 2 || numeroDeJugadas !== 3) {
    numeroDeJugadas = readlineSync.question('Intentalo otra vez. ')
    if (numeroDeJugadas == 1 || numeroDeJugadas == 2 || numeroDeJugadas == 3){
    break;
        } 
    }
      resultadoFinal = numeroDeVueltas(numeroDeJugadas)
    };
    return resultadoFinal;
}

numeroDeJugadas = readlineSync.question("Bienvenido. Cuantas partidas quieres jugar? ")

function numeroDeVueltas (numeroDeJugadas) {
    if (numeroDeJugadas == 1) {
        resultado = piedraPapelOTijeras()
    } else if (numeroDeJugadas == 2) {
        resultado = partidaDeDosRounds(numeroDeJugadas);
    } else {
        resultado = partidaDeTresRounds(numeroDeJugadas);
    }
    return resultado
}

resultadoFinal = inicio(numeroDeJugadas);
console.log('El resultado fue: ' + resultadoFinal + '.')

*/