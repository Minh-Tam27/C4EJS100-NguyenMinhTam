console.log('Ex 4:');
let shop = ['Jean', 'T-Shirt', 'Socks'];
function call()
{
    let choose = String(prompt('Hi there, welcome to shop, what do you want (C,R,U,D)'));
    if (choose.toLowerCase()=='r')
    {
        console.log ('The current items are:')
        for (let i=0; i<shop.length; i++)
        {
        console.log(`${i+1}`+ '. ' + `${shop[i]}`);
        }
    }
    else if (choose.toLowerCase()=='c')
    {
        let newItem = prompt('Enter name of new item:');
        shop.push(newItem);
        alert('Done');
    }
    else if (choose.toLowerCase()=='u')
    {
        let u = Number(prompt('Enter the position of item you wanna update:'));
        let itemUpdate = prompt('Enter new name:');
        shop[u-1]=itemUpdate;
        alert('Done');
    }
    else if (choose.toLowerCase()=='d')
    {
        let itemDelete = Number(prompt('Enter the position of item you wanna update:'));
        shop.splice(itemDelete-1,1);
        alert('Done');
    }
    else
    {
        alert('This command is not supported');
    }
}
