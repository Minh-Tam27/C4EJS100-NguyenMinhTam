console.log('Ex 4:');
let shop = ['Jean', 'T-Shirt', 'Socks'];
let choose = String(prompt('Hi there, welcome to shop, what do you want (C,R,U,D)'));
    if (choose == "r" || "R")
    {
        console.log ('The current items are:')
        for (let i=0; i<shop.length; i++)
        {
        console.log(`${i+1}`+ '. ' + `${shop[i]}`);
        }
    }
    else if (choose == "c" || "C")
        {
        let newItem = prompt('Enter name of new item:');
        shop.push(newItem);
        alert('Done');
        console.log(shop);
        }
    else if (choose == "u" || "U")
        {
        let itemUpdate = Number(prompt('Enter the position of item you wanna update:'));
            shop[itemUpdate] = prompt('Enter new name:');
            alert('Done');
            console.log(shop);
        }
    else if (choose == "d" || "D")
        {
        let itemDelete = Number(prompt('Enter the position of item you wanna update:'));
        shop.splice(itemDelete,1);
        }
        else 
        {
            alert('This command is not supported');
        }
