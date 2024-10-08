const form = document.querySelector('#form');
const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const aside = document.querySelector('#aside');
const mensaje = document.querySelector('.mensaje');
const btnCopiar = document.querySelector('.btn-copiar');


function encriptar() {
    const texto = document.querySelector('#texto').value;
    if (texto.trim() != '') {
        const textoSinAcentos = normalizarTexto(texto);
        // Reemplaza los caracteres del primer parametro de la funcion por el segundo incluyendo si son letras mayúsculas
        const textoEncriptado = textoSinAcentos.replace(/u/gi, 'ufat').replace(/e/gi, 'enter').replace(/o/gi, 'ober').replace(/i/gi, 'imes').replace(/a/gi, 'ai');
        sacarImagenAside()
        mostrarTexto()
        return mensaje.textContent = textoEncriptado
    }
}

function desencriptar() {
    const texto = document.querySelector('#texto').value;
    if (texto.trim() != '') {
        // Reemplaza los caracteres del primer parametro de la función por el segundo incluyendo si son letras mayúsculas
        // (En está función hago lo mismo que en la función encriptar solo que invierto la conversion de caracteres)
        const textoDesencriptado = texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        sacarImagenAside()
        mostrarTexto()
        return mensaje.textContent = textoDesencriptado
    }
}

function mostrarTexto() {
    mensaje.setAttribute('style', 'display:flex')
    btnCopiar.setAttribute('style', 'display:flex')
}

function copiar(newClip) {
    navigator.clipboard.writeText(newClip).then(
        () => {

        },
        () => {

        },
    );
}

//Funcion para sacar los acentos de las letras
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function sacarImagenAside() {
    const img = document.querySelector('.img');
    const msjEncriptado = document.querySelector('.msj-encriptado');

    img.setAttribute('style', 'display:none');
    msjEncriptado.setAttribute('style', 'display:none');
}


// Resetea el formulario
function reset() {
    form.reset();
}



//Añado los eventos onClick en los respectivos botones

btnEncriptar.addEventListener('click', function () {
    encriptar()
    reset()
});

btnDesencriptar.addEventListener('click', function () {
    desencriptar()
    reset()
});

btnCopiar.addEventListener('click', function () {
    const textoCopiado = document.querySelector('.mensaje').value;
    copiar(textoCopiado);
})