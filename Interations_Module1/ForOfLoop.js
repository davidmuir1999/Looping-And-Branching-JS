const arr = [1, 2, 3]

for (let value of arr){
console.log(value)
}

for(let [index, value] of arr.entries()){
    console.log(index, value);
    }