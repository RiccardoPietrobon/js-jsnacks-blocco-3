//Genera un numero a caso compreso tra 1-100.
//Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.
//Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato.
//Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente. (edited)

const random_number = Math.floor(Math.random() * 100) + 1;
console.log(random_number);

let user_number = 0;

let count = 0;

while (random_number != user_number) {

    user_number = parseInt(prompt("Indovina il numero, è compreso tra 0 e 100"));

    if (user_number < random_number) {
        alert("Il numero segreto è più grande di " + user_number);
    } else if (user_number > random_number) {
        alert("il numero segreto è più piccolo di " + user_number);
    } else {
        alert("Sei proprio talentuoso , il numero era proprio " + user_number);
    }

    count++;
}

document.getElementById("stamp").append("Hai indovinato in " + count + " tentativi. Il numero era " + random_number + "!");
