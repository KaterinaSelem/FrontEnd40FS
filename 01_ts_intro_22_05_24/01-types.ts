let isLoading: boolean;
isLoading = true;
isLoading = false;

// isLoading = 42;

let primes1 = [2, 3, 5, 7];
const primes2 = [11, 13, 17, 19];

primes2.push(123);

primes2.forEach((e, i) => console.log(e));

// console.log(primes2);

interface IObj {
    name: string;
    age: number;
    adress:IAddress;

}

interface IAddress {
    city: string;
    street: String;
    house: number;

}

const obj: IObj = {
    name: "John",
    age: 42,
    adress:{
        city: "Muc",
        street: "Rumann",
        house: 64
    }
}



const sun = (a: number, b : number):number => a + b;
console.log(sun(3, 6))