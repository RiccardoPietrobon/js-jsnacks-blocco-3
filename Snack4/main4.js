//Fai inserire un numero all'utente.
//Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente).
//Alla fine stampali tutti.

let count = 0;

let first_number = 0;


while (count < 3) {

    let next_number = parseInt(prompt("Inserisci un numero maggiore al precedente"));

    if (next_number > first_number) {

        document.getElementById("stamp").append(next_number + " ");

        first_number = next_number;

        count++;
    }
    else {
        alert("Il numero dev'essere maggiore di quello precedente");
    }
}
