const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];
let laptopByBrand = {
    Dell:[],
    Asus:[],
    HP: []
};
for(let i=0; i<inventory.length; i++)
{
    const inve = inventory[i];
    const bra = inve.brand;
    laptopByBrand[bra].push(inve);
}
console.log(laptopByBrand);
let a = prompt('Which brand?');
let count;
let str = '';
for(let lap of laptopByBrand[a])
{
    count += lap.price*lap.quantity;
    str += '\n' + lap.name; 
}
