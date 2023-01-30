//Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
const N = parseInt(prompt("numero di array desiderato"));
console.log(N);

let count = 0;

while (count < N) {

    //array con 10 numeri casuali
    const ten_array = [];
    console.log(ten_array);

    for (let i = 0; i < 10; i++) {
        const random_number = Math.floor(Math.random() * 100) + 1;
        //console.log(random_number);

        ten_array.push(random_number);
    }

    //console.log(count);
    document.getElementById("box").append('  Array:  ' + ten_array);

    count++;
}

