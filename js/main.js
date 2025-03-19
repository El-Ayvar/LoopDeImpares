function loopDeImpares(numero, palabra) {
    for (let i = 0; i <= 100; i++) {
      if ((i + numero) % 2 !== 0) {
        console.log(palabra);
      } else {
        console.log(i);
      }
    }
  }