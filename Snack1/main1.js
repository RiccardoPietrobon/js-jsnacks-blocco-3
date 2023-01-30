//Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

let min_number;
let max_number;

do {

    //numero min
    min_number = parseInt(prompt("Inserisci il numero minore di un range"));
    console.log(min_number);

    //numero max
    max_number = parseInt(prompt("Inserisci il numero maggiore di un range"));
    console.log(max_number);


} while (max_number <= min_number)


//numero random
const random_number = Math.random();

const differenza = max_number - min_number;

const my_random = min_number + (random_number * differenza);

console.log(my_random);







