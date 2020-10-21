console.log('Ex 7:');
const a = [2,3,9,11,98];
const i = prompt('Enter a number');
    for (let n=0; n<a.length; n++)
    {
        if (i == a[n])
        {
        alert(`${i}` + ' is FOUND is my array at index ' + `${n}`);
        }
        else 
        {
        alert(`${i}` + ' is not FOUND is my array');
        }
    }