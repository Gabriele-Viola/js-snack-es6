/* Creare un array di oggetti:
 Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 Stampare a schermo la bici con peso minore.*/
const h_1El = document.getElementById('printWeight')

const Bycycles =
    [

        {
            Name: 'Bike1',
            weight: 5,
        },
        {
            Name: 'Bike2',
            weight: 8,
        },
        {
            Name: 'Bike3',
            weight: 9,
        },
        {
            Name: 'Bike4',
            weight: 10,
        },
        {
            Name: 'Bike5',
            weight: 2,
        },
        {
            Name: 'Bike6',
            weight: 3,
        },
        {
            Name: 'Bike7',
            weight: 4,
        },
        {
            Name: 'Bike8',
            weight: 1,
        },
        {
            Name: 'Bike9',
            weight: 3,
        }, {
            Name: 'Bike10',
            weight: 15,
        },
    ]

    let minWeight = Bycycles[i]

    
    for (let i = 0; i < Bycycles.length; i++) {
        if (Bycycles[i].weight < minWeight) {
            minWeight = Bycycles[i]
        }
}
   console.log(minWeight);
   h_1El.innerText = minWeight