/* Creare un array di oggetti di squadre di calcio.
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/
const teams = [
    {
        Name: 'Milan',
        pt: random(1 , 100 ),  //funzione,
        fouls: random(1 , 50),  //funzione
    },
    {
        Name: 'Inter',
        pt: random(1 , 100 ),  //funzione,
        fouls: random(1 , 50),  //funzione
    },
    {
        Name: 'Roma',
        pt: random(1 , 100 ),  //funzione,
        fouls: random(1 , 50),  //funzione
    },
    {
        Name: 'Atalanta',
        pt: random(1 , 100 ),  //funzione,
        fouls: random(1 , 50),  //funzione
    },
    {
        Name: 'Juventus',
        pt: random(1 , 100 ),  //funzione,
        fouls: random(1 , 50),  //funzione
    },
    {
        Name: 'Udinese',
        pt: random(1 , 100 ),  //funzione,
        fouls: random(1 , 50),  //funzione
    },
]
function random(min ,max ) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function filterRange(array , a , b) {
    
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[a] && array[i] < array[b]) {
            result.push(array[i])
        }
        
    }
}
 console.log(filterRange (teams, 2,4));
 