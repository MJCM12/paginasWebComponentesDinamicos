
const resultado = document.getElementById("screen");
const botones = document.querySelectorAll("button");

let valores = "";
let eleccion;


function calculadora (eleccion) {
    if (eleccion === "AC") {
        valores = "";
    } else if (eleccion === "DEL") {
        valores = valores.slice(0,-1);
    } else if (eleccion === "="){
        valores = eval(valores);
    } else {
        valores += eleccion;
    } 
    resultado.value = valores;
};
    

botones.forEach((button) => {
    button.addEventListener("click", (e) => {
        eleccion = e.target.dataset.value;
        calculadora(eleccion)
     });
});


