const chickenSandwich = {
    name: 'sandwich with grilled chicken',
    bread: 'italian herbs and cheese',
    cheese: 'provolone',
    topping: 'grilled chicken',
    sauce: 'sweet onion',
}
const roastedBeefSandwich = {
    name: 'sandwich with roasted beef',
    bread: 'whole grain',
    cheese: 'pepperjack',
    topping: 'roasted beef',
    sauce: 'ranch',
}
const salamiSandwich = {
    name: 'sandwich with salami',
    bread: 'white',
    cheese: 'swiss',
    topping: 'salami',
    sauce: 'chipotle',
}
const sandwichNames = {
    "grilled chicken": 'sandwich with grilled chicken',
    "roasted beef": 'sandwich with roasted beef',
    salami: 'sandwich with salami',
}
function showSandwichIngredients(topping) {
    console.log(`Ingredients for your ${sandwichNames[topping]}:\n`)
    if (topping == 'grilled chicken') {
        for (let el in chickenSandwich) {
            if (el == "name") continue
            console.log(el + " : " + chickenSandwich[el])
        }
    }
    else if (topping == 'roasted beef') {
        for (let el in roastedBeefSandwich) {
            if (el == "name") continue
            console.log(el + " : " + roastedBeefSandwich[el])
        }
    }
    else if (topping == 'salami') {
        for (let el in salamiSandwich) {
            if (el == "name") continue
            console.log(el + " : " + salamiSandwich[el])
        }
    }
}

let price = 6.99

function calculationPrice(topping) {
    if (topping == 'grilled chicken') { console.log('Order price is: $' + (price * 1.15).toFixed(2)) }
    else if (topping == 'roasted beef') { console.log('Order price is: $' + (price * 1.25).toFixed(2)) }
    else { console.log('Order price is: $' + price) }
}
showSandwichIngredients("roasted beef")
calculationPrice("roasted beef")