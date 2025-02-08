# Encriptador de Texto

## Descripción
Este es un encriptador de texto desarrollado con HTML, CSS y JavaScript. Permite transformar un texto ingresado en una versión encriptada siguiendo reglas predefinidas y también permite desencriptarlo.

## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript

## Características
- **Encriptación de texto**: Convierte las vocales del texto ingresado en combinaciones de caracteres.
- **Desencriptación de texto**: Permite revertir el proceso y recuperar el texto original.
- **Copiado de texto**: Permite copiar el texto encriptado o desencriptado al portapapeles.
- **Interfaz responsiva**: Adaptable a distintos tamaños de pantalla.

## Reglas de Encriptación
Las vocales son reemplazadas según las siguientes reglas:
- `a` -> `ai`
- `e` -> `enter`
- `i` -> `imes`
- `o` -> `ober`
- `u` -> `ufat`

Ejemplo:
```
Texto original: hola mundo
Texto encriptado: hoberlai munderfat
```

## Instalación y Uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/encriptador-texto.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa el texto en el área correspondiente.
4. Presiona el botón **Encriptar** para obtener el texto encriptado.
5. Presiona **Desencriptar** para revertir la encriptación.
6. Usa el botón **Copiar** para copiar el resultado al portapapeles.

## Estructura del Proyecto
```
/encriptador-texto
│── /assets
│   ├── /css
│   │   ├── style.css
│   ├── /js
│   │   ├── script.js
│── index.html
```

## Autor
Desarrollado por SoyElGary1.
