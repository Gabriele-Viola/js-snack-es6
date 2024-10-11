/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


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


let nameFouls = []
for (let i = 0; i < teams.length; i++) {;
    nameFouls.push(teams[i].Name, teams[i].fouls)
}
console.log(nameFouls);
