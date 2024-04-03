let prices = [1,2,3,4,5,6,7,8,9];

console.log('For:')
for(let i = 0; i < prices.length; i++){
    console.log(prices.at(i));
}

console.log('While:');
let i = 0;
while(i < prices.length){
    console.log(prices.at(i))
    i++;
}

console.log('Do While:');
let i2 = 0;
do{
    console.log(prices.at(i2))
    i2++;
} while (i2 < prices.length)
