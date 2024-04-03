const string = 'Hello';
for (let letter of string) {
    console.log(letter);
}

const set = new Set(['a', 'b', 'c']);
for (const elem of set) {
    console.log(elem);
}

const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

for (const entry of map) {
    console.log(entry)
}

for(const entry of map){
    console.log(`At key ${entry[0]} we have values ${entry.at(1)}`)
}