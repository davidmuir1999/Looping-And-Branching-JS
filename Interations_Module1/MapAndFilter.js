let prices = [1,2,3,4,5,6,7,8,9];

let filteredPrices = prices.filter(price => price > 6)

console.log(filteredPrices)

let transformPrices = prices.map(price => (price/3).toFixed(2))

console.log(transformPrices)