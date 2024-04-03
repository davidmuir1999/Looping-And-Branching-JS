// ['Apple', 'Google', 'Microsoft'].forEach(x => console.log(x))

// ['Apple', 'Google', 'Microsoft'].forEach((x, i) => console.log(x, i))

// ['a', 'b', 'c'].forEach(repeat)
// function repeat(str){
//     console.log(str.repeat(3))
// }

let arrWithNoValues = [10, null, 20, undefined, 50];
for(const num of arrWithNoValues){
    console.log(num)
}

arrWithNoValues.forEach(num => console.log(num))

arrWithNoValues[10] = 100;
console.log(arrWithNoValues);

for(const num of arrWithNoValues){
    console.log(num)
}

arrWithNoValues.forEach(num => console.log(num))