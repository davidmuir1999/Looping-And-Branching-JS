class Portfolio{
    constructor(stockPct, bondsPct){
        this.stockPct = stockPct;
        this.bondsPct = bondsPct;
    }
}

function generatePortfolio(riskTolerance){
    switch(riskTolerance){
        case 'low':
            return new Portfolio(20,80);
        case 'mid':
            return new Portfolio(50,50);
        case 'high':
            return new Portfolio(90,10);
        default:
            return new Portfolio(50,50);
    }
}

console.log(generatePortfolio('low').stockPct);
console.log(generatePortfolio('average').stockPct);

//v2

function generatePortfolio_v2(riskTolerance){
    let portfolio;
    switch(riskTolerance){
        case 'low':
            portfolio = new Portfolio(20,80);
            break;
        case 'mid':
            portfolio = new Portfolio(50,50);
            break;
        case 'high':
            portfolio = new Portfolio(90,10);
            break;
        default:
            portfolio = new Portfolio(50,50);
    }
    //extra action on portfolio 
    return portfolio;
}

console.log('V2');
console.log(generatePortfolio_v2('low').stockPct);

//In general use the return keyword over the break keyword, its shorter and less error prone.

