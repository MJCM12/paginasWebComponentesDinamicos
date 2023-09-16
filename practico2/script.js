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
let numeroDeJugadas = 0;
let victoria = 0;
let derrota = 0;
let resultado = '';
let numeroDeClicks = 0;
let pokebola = 1; 
let contadorFinalJuego = 0;

const inputElemento = document.getElementById('text-computer');
const textoBienvenida = " Bienvenido humano ¿Cuál es tu nombre?";
const cuantasPartidas = " ¡Excelente! ¿Cuantas partidas quieres jugar?";
const juguemos = '  Piedra Papel o Tijera! Elige un pokemon';
miResultado.innerText = victoria
compuResultado.innerText = derrota


function piedraPapelOTijeras (eleccion) {

    const max = 3;
    const min = 0;
    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    const ganaste = 'Ganaste!';
    const perdiste = 'Perdiste!';
    const empate = 'empate :/';
  

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
    

function escribirJugadas (miJugada,jugadaCompu,resultado){

    function escribirMiJugada (miJugada) {
    inputElemento.value = "";
    inputElemento.value = "Elegiste " + miJugada;
        };
    
    function escribirJugadaCompu(jugadaCompu) {
        inputElemento.value = "";
        inputElemento.value = "La computadora eligió " + jugadaCompu;
    };
          

    function escribirResultado (resultado) {
        inputElemento.value = "";
        inputElemento.value = resultado;
    };


    
        escribirMiJugada(miJugada);

                setTimeout(function () {
                 escribirJugadaCompu(jugadaCompu);
                    setTimeout(function () {
                    escribirResultado(resultado);
                    }, 5000);
             }, 3000);
      
             contadorFinalJuego++;

};


function asignarResultado (resultado) {
         
        inputNombre.value = '';

        if (resultado === ganaste) {

            escribirJugadas (miJugada,jugadaCompu,resultado);
            victoria++;
            miResultado.innerText = victoria

        } else if (resultado === perdiste) {
            escribirJugadas (miJugada,jugadaCompu,resultado);
            derrota++;
            compuResultado.innerText = derrota

        } else {
        escribirJugadas (miJugada,jugadaCompu,resultado);
        return resultado
        
    };
};
    resultado = asignarResultado(resultado);
   
    return resultado

};


function quienGana (victoria,derrota) {
    
            inputElemento.value = '';
            inputNombre.value = '';

        if (victoria > derrota) {
            inputElemento.value = 'Ganaste el juego!';
            inputNombre.value = 'Felicidades!';
}       else if (derrota > victoria) {
            inputElemento.value = 'Perdiste el juego!';
            inputNombre.value = 'La computadora te derrotó';
}       else if (victoria === derrota){
            inputElemento.value = 'Increíble pero Empataron ';
            inputNombre.value = 'El universo es muy confuso';
}

};

function partidaActual () {

        inputElemento.value = '';
        inputElemento.value = 'Selecciona otra Pokemon';
        inputNombre.value = "Acepta despues de haber elegido"
        eleccion = '';
        pokebola++;

}

function volverAJugar(){
    inputElemento.value = '';
    inputNombre.value = '';
    inputElemento.value = "Quieres volver a jugar?"
    inputNombre.value = 'escribe "si" o sal de mi vista!'

}

function nuevaPartida() {

  if(inputNombre.value === 'si') {

                     numeroDeClicks = 1;
                     inputElemento.value = ''
                     numeroDeJugadas = 0
                     inputElemento.value = cuantasPartidas; 

                 } else {
              inputElemento.value = '';
              inputElemento.value = 'Hasta pronto!';
              inputNombre.value = '';
             }
}



function inicio (numeroDeJugadas) {
    if (numeroDeJugadas > 0 || numeroDeJugadas <6 ) {
        juguemosMensaje();
    } else {
        inputNombre.value = ' Usa valores numericos';  
        inputElemento.value = ' Error! Solo se pueden elegir hasta 5 rondas '
    }  return  
};



function juguemosMensaje () {
    
     inputElemento.value = juguemos;
    inputNombre.value = "Acepta despues de haber elegido"
    pokemones.forEach((input) => {
        input.disabled = false;
      });
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

 function iniciarVuelta(pokebola) {
    inputNombre.value = '';
    let mensajeVuelta = '';
    inputElemento.value = '...';
    
    
    function vueltas(pokebola) {
        const duelos = {
            1 : 'Primer duelo!',
            2 : 'Segundo duelo!', 
            3 : 'Tercer duelo!', 
            4 : 'Cuarto duelo!', 
            5 : 'Quinto duelo!', 
        };
        const llaveDuelo = pokebola;
    
        mensajeVuelta = duelos[llaveDuelo];
        return mensajeVuelta;
    }
    vueltas(pokebola);
    inputNombre.value = mensajeVuelta;
 };

    

darBienvenida();


document.querySelector("button").addEventListener('click', () => {
    
    if (numeroDeJugadas === 0){
        

         if (numeroDeClicks === 0) {
                      if (inputNombre.value === "") {
                inputElemento.value = 'Escribe tu nombre'
                 } else {
                    numeroDeClicks++;
                    jugador = inputNombre.value;
                    nombreParticipante.innerText = jugador;
                    inputElemento.value = ''
                    preguntarPartidas();

                }

            } else if (numeroDeClicks === 1) {
                numeroDeJugadas = parseInt(inputNombre.value);
                inputElemento.value = '';
                inicio(numeroDeJugadas);
                numeroDeClicks++;

            } 

        } else if (numeroDeJugadas === 1) {


                if (numeroDeClicks === 2) {

                inputElemento.value = '';
                inputNombre.value = '';

                inputElemento.value = '';
                pokemones.forEach((input) => {
                input.disabled = true;
             });

            setTimeout(piedraPapelOTijeras(eleccion),3000);

            setTimeout(function(){
                if (contadorFinalJuego === 1) {
                volverAJugar()
            }},10000);

            numeroDeClicks++

            } else if (numeroDeClicks === 3) {
             
                 nuevaPartida();
      }


        } else if (numeroDeJugadas === 2) {
        
        if (numeroDeClicks === 2) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 3) {
            inputElemento.value = '';
            inputNombre.value = '';

           iniciarVuelta(pokebola);

          setTimeout(function() {piedraPapelOTijeras(eleccion);
          
                setTimeout(function() {
                    quienGana(victoria,derrota);
                     setTimeout(function() 
                        {volverAJugar()
                    },15000)
                },12000)
            },6000);

            numeroDeClicks++

        }  else if (numeroDeClicks === 4){
           
         nuevaPartida();

        }
          

        } else if (numeroDeJugadas === 3) {
        
        if (numeroDeClicks === 2) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 3) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } 
        else if (numeroDeClicks === 4) {
            inputElemento.value = '';
            inputNombre.value = '';

           iniciarVuelta(pokebola);

          setTimeout(function() {piedraPapelOTijeras(eleccion);
          
                setTimeout(function() {
                    quienGana(victoria,derrota);;
                     setTimeout(function() 
                        {volverAJugar()
                    },15000)
                },12000)
            },6000);

            numeroDeClicks++

        }  else if (numeroDeClicks === 5){
           
         nuevaPartida();

        }

    }     else if (numeroDeJugadas === 4) {
        
        if (numeroDeClicks === 2) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 3) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 4) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } 
        else if (numeroDeClicks === 5) {
            inputElemento.value = '';
            inputNombre.value = '';

           iniciarVuelta(pokebola);

          setTimeout(function() {piedraPapelOTijeras(eleccion);
          
                setTimeout(function() {
                    quienGana(victoria,derrota);
                     setTimeout(function() 
                        {volverAJugar()
                    },15000)
                },12000)
            },6000);

            numeroDeClicks++

        }  else if (numeroDeClicks === 6){
           
         nuevaPartida();

        }

    }    else   {
        
        if (numeroDeClicks === 2) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 3) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 4) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } else if (numeroDeClicks === 5) {
        
             inputElemento.value = '';
             inputNombre.value = '';
            
            iniciarVuelta(pokebola);

        setTimeout(function() {piedraPapelOTijeras(eleccion);
                setTimeout(function() {
                    partidaActual();
                   },12000)},6000);

            numeroDeClicks++

        } 
        else if (numeroDeClicks === 6) {
            inputElemento.value = '';
            inputNombre.value = '';

           iniciarVuelta(pokebola);

          setTimeout(function() {piedraPapelOTijeras(eleccion);
          
                setTimeout(function() {
                    quienGana(victoria,derrota);;
                     setTimeout(function() 
                        {volverAJugar()
                    },15000)
                },12000)
            },6000);

            numeroDeClicks++

        }  else if (numeroDeClicks === 7){
           
         nuevaPartida();

        }

    } 

}
    
);
      


pokemones.forEach ((input) => {

 input.addEventListener("click", (e) => {
  
    eleccion = e.target.value;

 });});

