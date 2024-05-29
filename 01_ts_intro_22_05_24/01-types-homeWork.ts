
function oddEven(a:number):string{
    a = Math.floor(a);
    console.log(a);
    return a % 2 === 0 ? "Odd" : "Even"
} 
console.log(oddEven(Math.random()*10));

function square(b:number):number{
    b = Math.floor(b);
    console.log(b);
    return b**2;
} 
console.log(square(Math.random()*10));

let sum:number;

const sumOdds = (first:number, last:number):number => {
    first = Math.floor(first);
   last = Math.floor(last); 
    for(let i=first; i<=last; i++){
        if(i%2==0) {
         sum = sum + i;
        }
    } return sum;
} 
console.log(sumOdds(2, 8));