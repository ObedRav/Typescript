/*
La encriptación o cifrado de mensajes consiste en transformar un mensaje, por ejemplo, un arreglo de números, en otro arreglo a través del uso de una función de encriptación y de una clave secreta. Para descifrar un mensaje, se usa una función de desencriptado, la cual transforma el mensaje encriptado al mensaje original, utilizando para ello la clave secreta.
Implemente una función en TypeScript para encriptar y desencriptar mensajes. Llamaremos a esta función secret.
La función secret toma como entrada un mensaje, representado como un arreglo de números, la función de encriptación (encrypt) o desencriptación (decrypt) y la clave secreta (la cual es un número).
Para encriptar un mensaje, podemos usar la función secret de la siguiente forma:
       secret ([1, 2, 3, 1], encrypt, 1);
Lo cual entrega como resultado:
       [2, 3, 4, 2]
Y para desencriptar:
       secret ([2, 3, 4, 2], decrypt, 1);
Lo cual entrega como resultado:
       [1, 2, 3, 1]
*/
function encrypt(arr: number[], secret_key: number): number[] {
    return arr.map((value) => value + secret_key)
}

function decrypt(arr: number[], secret_key: number): number[] {
    return arr.map((value) => value - secret_key)
}

function secret(arr: number[], functionName: Function, secret_key: number): number[] {
    return functionName(arr, secret_key)
}

const value = secret ([1, 2, 3, 1], encrypt, 1)
const value1 = secret (value, decrypt, 1)

console.log(value)
console.log(value1)

export {}
