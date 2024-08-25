const form = document.querySelector('#form');
const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const aside = document.querySelector('#aside');


function encriptar() {
    const texto = document.querySelector('#texto').value;
    // Reemplaza los caracteres del primer parametro de la funcion por el segundo incluyendo si son letras mayúsculas
    const textoEncriptado = texto.replace(/u/gi, 'ufat').replace(/e/gi, 'enter').replace(/o/gi, 'ober').replace(/i/gi, 'imes').replace(/a/gi, 'ai');

    return textoEncriptado;
}

//Función para cambiar el texto cuando ocurra una modificación
function mostrarCodigo(texto){
    const parrafo = document.querySelector('#texto-codificado');
    parrafo.textContent = texto
}

// Resetea el formulario
function reset() {
    form.reset();
}

function desencriptar() {
    const texto = document.querySelector('#texto').value;
    // Reemplaza los caracteres del primer parametro de la función por el segundo incluyendo si son letras mayúsculas
    // (En está función hago lo mismo que en la función encriptar solo que invierto la conversion de caracteres)
    const textoDesencriptado = texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    return textoDesencriptado;
}

//Añado los eventos onClick en los respectivos botones

btnEncriptar.addEventListener('click', function () {
    mostrarCodigo(encriptar())
    reset()
});

btnDesencriptar.addEventListener('click', function () {
    mostrarCodigo(desencriptar())
    reset()
});