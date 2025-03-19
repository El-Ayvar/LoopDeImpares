function loopDeImpares(numero, palabra) {
    let numeros = Array.from({ length: 101 }, (_, i) => i);
    for (let index in numeros) {
      if ((numeros[index] + numero) % 2 !== 0) {
        console.log(palabra);
      } else {
        console.log(numeros[index]);
      }
    }
}