//Khai báo object và thuộc tính:
let person = {
    name: 'Tâm', // name is property; Tâm is value
    age: 22,
    favs: ['Code', 'Chat', 'Netflix']  //array in object
};
console.log(person);

//read value of property 
console.log(person['name']);
//or
console.log(person.age); // => const a = person.age; console.log(a);
//or
console.log(prerson.favs[0]);

//create property
person.location = 'Bacninh';
//or
person['status'] = 'single';
console.log(person);

//read an index of array in object
console.log(personArr[0].name)
//or
let n = personArr[0].name;
console.log(n);

for (let i=0; i<personArr.length; i++)
{
    console.log(personArr[i]);
}

