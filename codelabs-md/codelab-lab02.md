author: Henry Alexander Cortez Amaya
id: ProgramacionWeb-codelab-011121
summary: Promesas en js
tags: workshop, iguide
categories: codelab,markdown
environments: Web
status: Published
analytics account: Google Analytics ID

# Manejo de usuarios con Promesas

## Bienvenida

Duration: 0:05:00

En este curso aprenderás acerca de las promesas, que son y como se usan en JavaScript, además de como resolver promesas de diferentes maneras.

### Resultado esperado

### ¿Qué aprenderás?

- Introducción a procesos asincronos
- Promesas
- Manejo de promesas con **then**, **catch** y **finally**
- Manejo de promesas con **try-catch**

## Configuración del entorno

Duration: 0:10:00

### IDE

El editor de texto a trabajar será Visual Studio Code, si no tienes instalado dicho editor lo puedes descargar desde el siguiente [enlace](https://code.visualstudio.com/).

### Clonar el repositorio base

Asumimos que tienes instalado [git](https://git-scm.com/), clona el repositorio [base](https://github.com/Programacion-Web-0221-UCA/L02-ASYNCWORK) de la siguiente manera en tu lugar de preferencia:

```console
git clone https://github.com/Programacion-Web-0221-UCA/L01-ASYNCWORK.git
```

Después de clonar el repositorio accedemos a él mediante el comando:

```console
cd L01-ASYNCWORK
```

### Archivos

En el repositorio encontrarás el archivo **index.html** junto a los estilos propuestos en el archivo **styles.css**.

<aside class="negative">
  NOTA: Asegurate tener instalado live server para poder servir la aplicacion localmente
</aside>

## Modelo de JavaScript

### Introducción

Es importante conocer como trabaja un lenguaje de programación para lograr entender su comportamiento o como realiza diferentes operaciones con la finalidad de prevenir errores a gran escala

### Objetivos

- Conocimiento de operaciones bloqueantes y no bloqueantes
- Conocimiento de operaciones sincronas y asincronas
- Conocer como funcionan las peticiones de red

Duration: 0:10:00

### Bloqueante y No Bloqueante

Los procesos bloqueantes hacen referencia a como se ejecuta un codigo en tiempo de compilacion y como afecta esa fase de espera a nuestro programa

![Blocking-Non](./labo-02/blocking-v2.PNG "Blocking and non-blocking")

- **Bloqueante** : Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha completado.
- **No bloqueante** : Una llamada no bloqueante devuelve inmediatamente con independencia del resultado. En caso de que se haya completado, devolverá los datos solicitados.

<aside class="negative">
  BLOQUEANTE: El control no es devuelto hasta que el proceso bloqueante termine
</aside>

<aside class="positive">
  NO BLOQUEANTE: La llamada es devuelta independiente del resultado, por ende es necesario controlar si nuestra peticion ha sido exitosa o no
</aside>

### Sincronismo y Asincronismo

Es muy comun emplear o encontrar relacion con procesos sincronos y asincronos con procesos bloqueantes y no bloqueantes, pero los procesos sincronos y asincronos se refieren a cuando tendra lugar una respuesta

![Syncronus-Asyncronus](./labo-02/syncronus-v2.PNG "Asyncronus")

- **Sincrono** : Proceso que se ejecuta de forma secuencial
- **Asincrono** : Proceso en el cual se obtiene la respuesta y se notifica mediante mecanismos especificos para que dicha información logre ser gestionada

<aside class="negative">
  SINCRONO: Retorna cuando la ejecucion termina 
</aside>

<aside class="positive">
  ASINCRONO: La finalizacion de la operación es notificada al programa principal
</aside>

### Peticiones a la red

JavaScript trabaja principalmente con navegadores, por lo cual un proceso bloqueante y sincrono no ayudaria a procesar peticiones sobre la red de una manera fluida para los usuarios, por lo cual **JavaScript utiliza un modelo asincrono y no bloqueante** para las interfaces entrada y salida ya que estas aseguran la ejecucion de diferentes procesos de manera simultanea

#### ¿Por que es necesario este modelo?

Al momento de solicitar datos desde diferentes redes de comunicaciones, es importante conocer que no es un proceso directo, es decir, intervienen servicios externos que retrasan dicha comunicacion

![no-direct](./labo-02/ideal-conection.PNG "no direct response")

#### Enviando una peticion

Al permitir un modelo asincrono y no bloqueante permite realizar peticiones a un servidor o lugar no remoto y estar seguros de obtener una respuesta en un periodo de tiempo

![send-request](./labo-02/request.PNG "Send request")

#### Recibiendo una respuesta

Al servidor obtener nuestra peticion, la procesara y nos enviara una respuesta

![get-response](./labo-02/response.PNG "Get response")

<aside class="positive">
  NOTA: Al ser un proceso asincrono, la respuesta que se obtiene no siempre sera la solicitada
</aside>

Ahora que sabemos como funcionan las comunicaciones con servidores y que nos devuelven la información que solicitemos pero **¿Como obtenemos dicha información?**

## Promesas

### Introducción

Al trabajar con un modelo **bloqueante y asincrono** es importante poseer una forma de asegurar que dichas respuestas sean recibidas por nuestro programa de una forma controlada y segura. JavaScript nos provee el manejo de procesos asincronos con la ayuda de **Promesas**

### Objetivos

- Conocimiento de una Promesa
- Uso de promesas
- Introducción a fetch API

### ¿Qué son?

Las promesas son valores que pueden estar disponibles ahora, en el futuro o nunca. Se puede describir a una promesa como una una especie de Karma

<aside class="positive">
  Si tu haces algo, en consecuencia obtendras algo, ahora o en un futuro
</aside>

### Estados de una promesa

Una promesa recuerda el contexto en donde se ejecuto, es decir, sabe con precision el punto donde se ha de resolver un valor o lanzar un error. Cuando una promesa entra en ejecucion pasa a tener ser resuelta con dos tipos de estados

- **fullfilled**: Estado que indica que la promesa se ha resuelto exitosamente
- **rejected**: Estado que indica que la promesa ha sido rechazada o que algo malo sucedio en su ejecucion

<aside class="negative">
  NOTA: Inicialmente las promesas tienen el estado <strong>pending</strong> que cambiara cuando se haya resuelto la promesa
</aside>

### Sintaxis

```javascript
const promise = new Promise(function (resolve, reject) {
  //logic...
});
```

<aside class="positive">
  <strong>resolve</strong> y <strong>reject</strong> son funciones que se ejecutaran dependendiendo del resultado de la promesa
</aside>

### Ejemplo de promesa

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successfully promise result");
  }, 250);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

Cuando la promesa es resuelta, la respuesta pasa al **.then**. Aca debemos colocar la accion que se realizara cuando la promesa se resuelva exitosamente. Si la respuesta no se completa, **.catch** tomara dicho error e igualmente podemos realizar una accion con dicha respuesta

<aside class="positive">
  <strong>setTimeout</strong> simula un proceso asincrono, ya que realiza la accion pasados 250 milisegundos
</aside>

### fetch API

#### ¿Qué es?

**Fetch API** es una interfaz simple para la buscada de recursos. Fetch nos facilita el trabajo para hacer solicitudes a servidores o lugares no remotos y manejar sus respuestas

### Ejemplo de fetch

```javascript
function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.error("A problem has occurred");
}

function validateResponse(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

fetch("example/example.json")
  .then(validateResponse)
  .then(readResponseAsJSON)
  .then(logResult)
  .catch(logError);
```

Resumiendo el bloque de codigo:

**Paso 1**: Se llama a fetch para obtener el recurso example.json. Fetch retorna una promesa que sera resuelta con un objeto. Si la respuesta pasa, entrara a **validateResponse**
**Paso 2**: **validateResponse** verifica que el **status code** se encuentre entre 200-299. Si no se encuentre, se lanzara un error que se recibira en el metodo **catch**. De lo contrario, pasara a **readResponseAsJSON**.
**Paso 3**: Se transforma la respuesta a objeto tipo JSON. Este metodo retorna una promesa que se resuelve como JSON. Una vez se resuelva, pasara al metodo **logResult** (¿Qué pasara si la respuesta no se transforma a un objeto JSON?)
**Paso 4**: Se muestra en consola la respuesta ya transformada

## Parte 1
