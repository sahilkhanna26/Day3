let Array1 = []
let x = 0;
let y =1;

for(let i = 0; i<10; i++){
    z = x + y;
    Array1.push(z);
    x = y;
    y = z;
}

for (let j= 0; j<Array1.length; j++){
console.log(Array1[j]);
}