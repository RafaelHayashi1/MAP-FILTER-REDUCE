/*
Quando usar o reduce:
Quando baseado no array original, você precisa "reduzir" o array á um valor.

[1,2,3], 6
*/

/*
const numbers = [1,2,3]
const soma = numbers.reduce((accumulator, item)=>accumulator+item, 0) // accumulator recebe = 0 e item = 1, na 2 vez o accumulator recebe = 1 e item 2, na 3 acu = 3 item = 3 depois soma eles, o 0 serve para ser o valor do acumulator na 1
console.log(soma)
*/

/*
const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

  const score = phaseScores.reduce((accumulator,phaseScores) => {
    if(phaseScores.name==='Roger Melo'){
       return accumulator + phaseScores.score
    }
    return accumulator
  },0) 

  console.log(score)
  */