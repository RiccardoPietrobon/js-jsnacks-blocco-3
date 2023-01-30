//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array_vuoto = [];
console.log(array_vuoto);


let somma_limite = 0;

while (somma_limite < 50) {

    const user_number = parseInt(prompt("Inserisci il numero nel box"));
    console.log(user_number);


    somma_limite += user_number;
    console.log(somma_limite);


    array_vuoto.push(user_number);


};