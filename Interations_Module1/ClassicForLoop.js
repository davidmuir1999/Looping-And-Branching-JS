for(let step = 0; step <= 4; step++){
    console.log('Step Count: ' + step);
}

for(let step = 5; step > 0; step--){
    console.log('Step Count: ' + step);
}

let array = [1,2,3,4,5,6,7,8,9, 10, 11];
for(let i = 1; i < (array.length/2); i = i+2){
    console.log('Every second element ' + i);
}