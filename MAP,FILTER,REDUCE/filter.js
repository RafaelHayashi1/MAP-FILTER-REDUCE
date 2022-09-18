/*
Quando usar o filter:
Quando você precisa obter um novo array, com uma quantidade de itens menor que a do array original.

ex: 
[1,2,3] , [1,2]
pegar os numeros menores que 3
*/

/*itens maiores que 37
const randomNumbers = [36,99,37,63]

const better37 =  randomNumbers.filter(item=> item>37) //item maior que 37 vai para nossa array por conta do filter

console.log(better37)
*/

//usarios premiuns

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

  const usersPremiuns = users.filter(user=> user.premium===true)

  console.log(usersPremiuns)