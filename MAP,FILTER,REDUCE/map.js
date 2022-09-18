/*
Quando usar o map:
Quando você precisa obeter um novo array, com a mesma quantidade de itens do array original.
ex:(Triplicar todos os numeros dentro do array)
[1,2,3], [3,6,9]
*/

/*
item = vai armazenar o 1(1 vez),2(2vez),3(3vez)
index = vai armazenar a posição dentro de array de: 1(0),2(1),3(2)
array = vai armazenar a array
*/

/*
const numeros = [1,2,3]
const doublenum = numeros.map(item => item*2)

console.log(numeros === doublenum)
console.log(numeros,doublenum)
*/

/*produtos pela metade do preço
const prices = [20,10,30,25,15,40,80,5]
const desc = prices.map(item => item*0.50)

console.log(desc)
*/

// produtos acima de 30 reais custam metade do preço com objeto

const products = [
    {name: 'Mouse sem fio', price:30},
    {name: 'Pen Drive', price:25},
    {name: 'Cartucho De Tinta', price:50},
    {name: 'Suporte Ergonômico para Notebook', price:23},
    {name: 'Repetidor de Sinal Wi-fi', price:44},
]

const saleProducts = products.map(item=>{
    if(item.price>=30){
        return {
            name: item.name, // como é um objeto precisamos declarar oque ele vai receber , no caso ao lado a gente coloca o name: para puxar os products.name
            price: item.price*0.50, //aqui a mesma coisa porem com o price.
        }
    }else{
        return{
            name: item.name, 
            price: item.price,
        }
    }
})

console.log(products,saleProducts) //exemplo de imutabilidade, trabalhamos o valor inicial em outro const para evitar bugs

