function oneThroughTwenty() {
  let deUmAVinte = []
  for (let i = 1; i <= 20; i++) {
    deUmAVinte.push(i)
  }
  return deUmAVinte
}
console.log(oneThroughTwenty())

// ////////////////////////////////

function evensToTwenty() {
  let parVinte = []
  for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
      parVinte.push(i)
      console.log(i)
    }
  }
  return parVinte
}

console.log(evensToTwenty())

///////////////////////////

function oddsToTwenty() {
  let imparVinte = []
  for(let i = 1; i <= 20; i++) {
    if(i % 2 === 1) {
      imparVinte.push(i)
      console.log(i)
    }
  }
  return imparVinte
}

console.log(oddsToTwenty())

////////////////////////////

function multiplesOfFive() {
  let mult = []
  let soma = 0
    for(let i = 1; i <= 100; i++){
      if(i % 5 == 0) {
        soma += 1
      mult.push(i)
      console.log(i)
    } 
  }
    return mult
}

console.log(multiplesOfFive())

////////////////////////////

function squareNumbers() {
  let quadrado = []
    for(let i = 1; i <= 10; i++) {
      if(Number.isInteger(i**2)) {
        quadrado.push(i ** 2)
        console.log(i**2)
      } 
    } 
    return quadrado 
}

console.log(squareNumbers())

///////////////////////////

function countingBackwards() {
    let deVinteaUm = []
    for(let i = 20; i>= 1; i--){
      deVinteaUm.push(i)
    }
    return deVinteaUm
}

console.log(countingBackwards())

////////////////////////////

function evenNumbersBackwards() {
  let parContrario = []
  for(let i = 20; i >= 1; i--) {
    if(i % 2 === 0) {
      parContrario.push(i)
      console.log(i)
    }
  }
  return parContrario
}

console.log(evenNumbersBackwards())

////////////////////////////

function oddNumbersBackwards() {
  let contrarioImpar = []
  for(let i = 20; i >= 1; i--) {
    if(i % 2 === 1) {
      contrarioImpar.push(i)
      console.log(i)
    }
  }
  return contrarioImpar
}

console.log(oddNumbersBackwards())

////////////////////////////////////

function multiplesOfFiveBackwards() {
  let contrarioMult = []
  let soma1= 0
  for(let i = 100; i >= 5; i--){
    if(i % 5 == 0) {
      soma1 += 1
      contrarioMult.push(i)
      console.log(i)
    }
  }
  return contrarioMult
}

console.log(multiplesOfFiveBackwards())

//////////////////////////////////

function squareNumbersBackwards() {
  let quadrado1 = []
    for(let i = 10; i >= 1; i--) {
      if(Number.isInteger(i**2)) {
      quadrado1.push(i**2)
      console.log(i**2)
    } 
  } 
  return quadrado1
}

console.log(squareNumbersBackwards())
