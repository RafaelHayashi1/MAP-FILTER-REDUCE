const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
const low501 = crazyNumbers.reduce((accumulator,crazyNumbers)=>{ //como usaremos uma func temos que colocar as vari em() depois => e a {}
    return crazyNumbers<501? accumulator+1:accumulator //se crazynumbers <501 true:acu+1 false:acu que é = 0
},0)
console.log(low501)


/*
let res = 0
let res2 = [0]
for(i=0;i<crazyNumbers.length;i++){
    if(crazyNumbers[i]<501){
        res++
    }
}
console.log(res)
*/
