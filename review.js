console.log("Hello!")
let a = 100

console.log("A = ", a)

if ( a >= 100 ) {
    console.log("Higher than 100")
}
else {
    console.log("Less than 100")
}

for (let i = 0; i < 10; i++) {
    let iSquare = i*i
    // console.log(iSquare)
}

let price = [23, 45, 6, 12, 98]
console.log(price[4])
console.log('Length:', price.length)
console.log('Last element:', price[price.length - 1])

price[0] = -50
console.log(price)

let player = {
    name: 'Ada',
    maxHp: 100,
    curHp: 50,
    attack: (targetName) => {
        console.log(`${targetName} was attacked`)
    } 
}

console.log(player.maxHp)
player.attack("PY")
player.curHp = player.curHp - 10
console.log(`${player.name} current HP: ${player.curHp}`)