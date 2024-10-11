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
            weight: 6,
        },
        {
            Name: 'Bike9',
            weight: 3,
        }, {
            Name: 'Bike10',
            weight: 1,
        },
    ]

    let minWeight = [100]
    let count = Bycycles.length
    console.log(count);
    
    for (let i = 0; i < Bycycles.length; i++) {
        const bike = Bycycles[i].weight;
        if (Bycycles[i].weight < minWeight[0]) {
            minWeight.pop()
            minWeight.push(Bycycles[i].weight)
            
        }else if (Bycycles[i].weight > minWeight[0]) {
            minWeight.pop()
            minWeight.push(Bycycles[i+1].weight)
        
    }
}
   console.log(minWeight[0]);
   h_1El.innerText = minWeight[0]