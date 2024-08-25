const form = document.querySelector('#form');
const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const aside = document.querySelector('#aside');


function encriptar() {
    const texto = document.querySelector('#texto').value;

    const textoEncriptado = texto.replace(/u/gi, 'ufat').replace(/e/gi, 'enter').replace(/o/gi, 'ober').replace(/i/gi, 'imes').replace(/a/gi, 'ai');

    return textoEncriptado;
}

function mostrarCodigo(texto){
    const parrafo = document.querySelector('#texto-codificado');
    parrafo.textContent = texto
}

function reset() {
    form.reset();
}

function desencriptar() {
    const texto = document.querySelector('#texto').value;
    const textoDesencriptado = texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    return textoDesencriptado;
}

btnEncriptar.addEventListener('click', function () {
    mostrarCodigo(encriptar())
    reset()
});

btnDesencriptar.addEventListener('click', function () {
    mostrarCodigo(desencriptar())
    reset()
});