console.log ('Ex 1 - Init:');
var movies = ['One punch man', 'The shape of water', 'Harry Potter', 'Spilit', 'Spiderman', 'Need for speed', 'Seventeen again'];
console.log(movies);

console.log('Ex 2 - Create:');
var newItem = prompt('Enter a new movie:');
movies.push(newItem);
console.log(movies);

console.log('Ex 3 - Read');
var j = prompt('Enter a number to read movie name:');
console.log(movies[j]);

console.log('Ex 4.1 - Update');
movies[0] = prompt('Enter new name:');
console.log(movies);

console.log('Ex 4.2 - Update');
var m = prompt('Enter the position of movie you wanna change:');
movies[m] = prompt('Enter new name:');
console.log(movies);

console.log('Ex 5.1 - Delete');
var k = prompt('Enter the position of movie you wanna delete:');
movies.splice(k,1);
console.log(movies);

console.log('Ex 5.2 - Delete');
var n = prompt('How many movies you wanna delete?');
var i = prompt('Enter the position of the first movie you wanna delete:');
movies.splice(i,n);
console.log(movies);

console.log('Ex 6.1 - Read All');
for (var x=0; x<movies.length; x++)
{
    console.log(movies[x]);
}

console.log('Ex 6.2 - Read All');
for(var y=0; y<movies.length/2; y++)
{
    console.log(movies[y]);
}

console.log('Ex 6.3 - Read All');
for(var z=0; z<movies.length/2; z++)
{
    console.log(z + ' - ' + movies[z]);
}

console.log('Ex 7 - Update All');
for (var p=0; p<movies.length; p++)
{
    movies[p] = movies[p].toLowerCase();
}
    console.log(movies);

console.log('Ex 8.1 - Purpose of While');
while (true)
{
    let ten = String(prompt ('Enter your name:'));
    let t = ten.length;
    if (t>15) 
    {
        alert('Your user name is too long');
    }
    else
    {
        alert('Good user name');
        break;
    }
}

console.log('Ex 8.2 - Purpose of While');
alert('Where is Vietnam?' + '\n' + '1. Africa' + '\n' + '2. Asia' + '\n' + '3. Europe' + '\n' + '4. Americas');
while (true)
{
    let ans = Number(prompt ('Enter your answer:'));
    if (ans = 2)
    {
        alert('Bravo, you are correct');
    }
    else
    {
        alert('Good luck next time');
        break;
    }
}

console.log('Ex 9 - BT thêm');
