let stock_1 = {
    'name' : 'google',
    'dividend' : 0,
};

let stock_2 = {
    'name' : 'amazon',
    'dividend' : undefined,
};

let stocks = [stock_1,stock_2];
let zeroDividendStocks = [];

for (let stock of stocks){
    if(!stock.dividend){
        console.log(`${stock.name} does not pay a dividend`);
        zeroDividendStocks.push(stock);
    }
}

//google is a truthy and amazon is falsy, so need to be careful on how to identify

function calculateDividendYield(divPerShare, currentPrice){
    if(!divPerShare || !currentPrice){
        throw new Error('Missing parameter')
    }
    return divPerShare/currentPrice * 100;
}

console.log(calculateDividendYield(1,100));
console.log(calculateDividendYield(1));
console.log(calculateDividendYield(0,100));//error, because 0 is falsy

function calculateDividendYield_v2(divPerShare_v2, currentPrice_v2){
    if(divPerShare_v2 === 0){
        return 0;
    }
    if(currentPrice_v2 <= 0){
        throw new Error('Expecting price to be greater than 0')
    }
    
    if(!divPerShare_v2 || !currentPrice_v2){
        throw new Error('Missing parameter')
    }
    return divPerShare_v2/currentPrice_v2 * 100;
}

console.log(calculateDividendYield_v2(1,100));
console.log(calculateDividendYield_v2(1));
console.log(calculateDividendYield_v2(0,100));