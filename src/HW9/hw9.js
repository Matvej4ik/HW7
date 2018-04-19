//Task 1
function randomInteger(min, max) {
    let rand = Math.random() * (max - min) + min;
    return Math.round ( rand );
}

console.log ( 'Task 1: ' + randomInteger (1, 100) );


//Task 2
let user ={};
user.name = 'Вася';
user.surname = 'Петров'
user.name = 'Сергей';
delete user.name;

console.log ( 'Task 2:');
console.log (user);


//Task 3
function isEmpty(obj) {
    if (obj) console.log ( 'true' ); 
else console.log ( 'false' )
};

console.log ( 'Task3:');
isEmpty ('1');
isEmpty ();


//Task 4
let salary = 0;
let salaries = {
    John: 400,
    Jack: 20000,
    test: 'asdasdasd'
}
for ( let Name in salaries ) {
    let salary = salaries [Name]++
};
console.log (salary);