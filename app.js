//Seleccionar los elementos del DOM
const boton = document.getElementById('boton-color')
const color = document.getElementById('color')
const mainElement = document.getElementById('main');

function generarColorAleatorio () {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#'

    for (let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16)
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex
}

boton.addEventListener('click',function (){
    let colorAleatorio = generarColorAleatorio ()
    // Actualzar el texto.
    color.textContent = colorAleatorio
    // Actualizar el color de fondo.
    mainElement.style.backgroundColor = colorAleatorio
})


// Colores RGB Segundo Proyecto
const footerElement = document.getElementById('footer');
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;


function actualizarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    footerElement.style.backgroundColor = colorRGB
}

// Para actualizar Red (ROJO)
inputRojo.addEventListener('change', (e) => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul)
})

// Para actualizar Green (Verde)
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul)
})

// Para actualizar Blue (Azul)
inputAzul.addEventListener('change', (e) => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul)
})