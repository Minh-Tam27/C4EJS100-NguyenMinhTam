console.log('Ex 6:');
let a = prompt('Enter a squence of numbers, sperated by ","');
s = a.split(',');
let min = s[0];
for(let i=0; i<s.length; i++)
{
    if(Number(min)>Number(s[i]))
    {
        min = s[i];
    }
}
alert ('The smallest number is' `${min}`);