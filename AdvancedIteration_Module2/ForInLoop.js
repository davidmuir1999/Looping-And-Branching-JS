let stocks = ['Apple', 'Google', 'Microsoft', 'Amazon'];

// //lets say we add a property to the array, see the difference in behavior
Array.prototype.thing= 'a';

for(let stock of stocks){ //prints the values
    console.log (stock)
}

for(let stock in stocks){ //prints the indexes of the values
    console.log(stock)
}

// //using this method properly
for(let index in stocks){
    console.log(stocks[index])
} //this produces the same result as for of

//in the cases above the for in loop is not good
//but if you have an object like below

let singleStock = {
    "name" : "Samsung",
    "Industry": "Tech",
    "price": 220,
    "dividend": 2,
    getDivYield(){
        return this.dividend/this.price *100;
    }
};

//if you want to loop over the property values then use for in
for(let property of singleStock){
    console.log(property) //error
}

for(let propertyValue in singleStock){
    if(singleStock.hasOwnProperty(propertyValue)){
        if(typeof singleStock[propertyValue] === 'function'){
            continue
        }
    }
    console.log(propertyValue + " -> " + singleStock[propertyValue])
}


//How can I use the for of loop for objects like the for in loop??
for(let propertyValue of Object.keys(singleStock)){
    console.log(propertyValue)
}

for(let [key, value] of Object.entries(singleStock)){
    console.log(key,value);
}