var lastName='David';
lastName='Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit='Kwi';
console.log(fruit);

// No puedo reasigfnar un valor con const

const fruits = () => {
    if(true){
        var fruit = 'Apple';      //function scope
        let fruit2 = 'Kiwi';      //block scope
        const fruit3 = 'Banana';  //block scope
    }
    console.log(fruit);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
