const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

for (let x in product) {
    console.log(x);
}
console.log('- x receives property from product');
for (let x in product)
{
    console.log(x + ': ' + product[x]);
}